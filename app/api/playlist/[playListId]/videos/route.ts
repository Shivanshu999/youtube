import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{
    playListId: string;
  }>;
}

export async function POST(
  req: NextRequest,
  { params }: Params
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const body = await req.json();
    const uploadId =
      typeof body.uploadId === "string"
        ? body.uploadId
        : "";

    if (!uploadId) {
      return NextResponse.json(
        { error: "uploadId is required" },
        { status: 400 }
      );
    }

    const { playListId: playlistId } =
      await params;

    const playlist = await prisma.playlist.findFirst({
      where: {
        id: playlistId,
        userId: currentUser.id,
      },
      select: {
        id: true,
      },
    });

    if (!playlist) {
      return NextResponse.json(
        {
          error:
            "Playlist not found or not owned by user",
        },
        { status: 404 }
      );
    }

    const video = await prisma.upload.findUnique({
      where: {
        id: uploadId,
      },
      select: {
        id: true,
      },
    });

    if (!video) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    const existingPlaylistVideo =
      await prisma.playlistVideo.findUnique({
        where: {
          playlistId_uploadId: {
            playlistId,
            uploadId,
          },
        },
      });

    if (existingPlaylistVideo) {
      return NextResponse.json({
        added: false,
        alreadyExists: true,
        playlistVideo: existingPlaylistVideo,
      });
    }

    const count = await prisma.playlistVideo.count({
      where: {
        playlistId,
      },
    });

    const playlistVideo = await prisma.playlistVideo.create({
      data: {
        playlistId,
        uploadId,
        order: count + 1,
      },
    });

    return NextResponse.json(
      {
        added: true,
        alreadyExists: false,
        playlistVideo,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
