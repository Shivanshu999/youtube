import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{
    playListId: string;
    videoId: string;
  }>;
}

export async function DELETE(
  _req: NextRequest,
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

    const {
      playListId: playlistId,
      videoId: playlistVideoId,
    } = await params;

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

    const deleted = await prisma.playlistVideo.deleteMany(
      {
        where: {
          id: playlistVideoId,
          playlistId,
        },
      }
    );

    if (deleted.count === 0) {
      return NextResponse.json(
        { error: "Playlist video not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Video removed from playlist",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        error: "Failed to remove video from playlist",
      },
      { status: 500 }
    );
  }
}
