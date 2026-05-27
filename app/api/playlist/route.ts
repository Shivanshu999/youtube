import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

async function getCurrentUserId(email: string) {
  const currentUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return currentUser?.id ?? null;
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const currentUserId = await getCurrentUserId(
      session.user.email
    );

    if (!currentUserId) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const uploadId =
      req.nextUrl.searchParams.get("uploadId");

    if (uploadId) {
      const playlists =
        await prisma.playlist.findMany({
          where: {
            userId: currentUserId,
          },
          include: {
            _count: {
              select: {
                playlistVideos: true,
              },
            },
            playlistVideos: {
              where: {
                uploadId,
              },
              select: {
                id: true,
              },
              take: 1,
            },
          },
          orderBy: {
            updatedAt: "desc",
          },
        });

      return NextResponse.json(
        playlists.map((playlist) => ({
          id: playlist.id,
          title: playlist.title,
          description: playlist.description,
          videosCount:
            playlist._count.playlistVideos,
          containsVideo:
            playlist.playlistVideos.length > 0,
        }))
      );
    }

    const playlists = await prisma.playlist.findMany({
      where: {
        userId: currentUserId,
      },
      include: {
        _count: {
          select: {
            playlistVideos: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(
      playlists.map((playlist) => ({
        id: playlist.id,
        title: playlist.title,
        description: playlist.description,
        videosCount: playlist._count.playlistVideos,
        containsVideo: false,
      }))
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const title =
      typeof body.title === "string"
        ? body.title.trim()
        : "";
    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";

    if (!title) {
      return NextResponse.json(
        {
          error: "Playlist title is required",
        },
        { status: 400 }
      );
    }

    const currentUserId = await getCurrentUserId(
      session.user.email
    );

    if (!currentUserId) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const playlist = await prisma.playlist.create({
      data: {
        title,
        description: description || null,
        userId: currentUserId,
      },
    });

    return NextResponse.json(playlist, {
      status: 201,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
