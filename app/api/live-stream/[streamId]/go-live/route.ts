// app/api/live-stream/[streamId]/go-live/route.ts
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    streamId: string;
  }>;
}

export async function POST(
  req: NextRequest,
  { params }: RouteParams
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { streamId } = await params;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        channels: true,
      },
    });

    if (!user?.channels?.[0]) {
      return NextResponse.json(
        {
          error: "Channel not found",
        },
        {
          status: 404,
        }
      );
    }

    const stream =
      await prisma.liveStream.findUnique({
        where: {
          id: streamId,
        },
        include: {
          channel: true,
        },
      });

    if (!stream) {
      return NextResponse.json(
        {
          error: "Stream not found",
        },
        {
          status: 404,
        }
      );
    }

    if (
      stream.channel.userId !== user.id
    ) {
      return NextResponse.json(
        {
          error: "Forbidden",
        },
        {
          status: 403,
        }
      );
    }

    if (stream.status === "LIVE") {
      return NextResponse.json(
        {
          error: "Stream already live",
        },
        {
          status: 400,
        }
      );
    }

    const playbackUrl =
      `/live/${stream.streamKey}/index.m3u8`;

    const updatedStream =
      await prisma.liveStream.update({
        where: {
          id: stream.id,
        },
        data: {
          status: "LIVE",
          startedAt: new Date(),
          playbackUrl,
        },
      });

    return NextResponse.json(
      {
        success: true,

        streamId: updatedStream.id,

        title: updatedStream.title,

        streamKey:
          updatedStream.streamKey,

        ingestUrl:
          updatedStream.ingestUrl,

        playbackUrl:
          updatedStream.playbackUrl,

        status:
          updatedStream.status,

        startedAt:
          updatedStream.startedAt,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}