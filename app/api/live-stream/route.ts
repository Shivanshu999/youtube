// app/api/live-stream/route.ts
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";

function generateStreamKey() {
  return randomBytes(24).toString("hex");
}

export async function POST(req: NextRequest) {
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

    const body = await req.json();

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
          status: 400,
        }
      );
    }

    const channel = user.channels[0];

    const streamKey = generateStreamKey();

    const liveStream =
      await prisma.liveStream.create({
        data: {
          title:
            body.title ??
            "Untitled Live Stream",

          description:
            body.description ?? "",

          thumbnailUrl:
            body.thumbnailUrl ?? null,

          streamKey,

          status: "SCHEDULED",

          channelId: channel.id,

          ingestUrl:
            process.env.RTMP_INGEST_URL ??
            "rtmp://localhost:1935/live",

          playbackUrl: null,
        },
      });

    return NextResponse.json(
      {
        success: true,

        streamId: liveStream.id,

        streamKey: liveStream.streamKey,

        ingestUrl: liveStream.ingestUrl,

        playbackUrl:
          liveStream.playbackUrl,

        status: liveStream.status,
      },
      {
        status: 201,
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