import { prisma } from "@/app/lib/prisma";
import { transcodeToMultibitrateHls } from "@/app/lib/hls-transcoder";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 300;

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

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        channels: true,
      },
    });

    if (!user?.channels[0]) {
      return NextResponse.json(
        { error: "No channel found" },
        { status: 400 }
      );
    }

    if (!body.title || !body.videoUrl || !body.thumbnailUrl) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const createdUpload = await prisma.upload.create({
      data: {
        title: body.title,
        description: body.description,
        videoUrl: body.videoUrl,
        thumbnailUrl: body.thumbnailUrl,
        type: "PUBLIC",
        status: "PROCESSING",
        channelId: user.channels[0].id,
      },
    });

    try {
      const hls =
        await transcodeToMultibitrateHls({
          videoId: createdUpload.id,
          sourceUrl: body.videoUrl,
        });

      const readyUpload = await prisma.upload.update({
        where: {
          id: createdUpload.id,
        },
        data: {
          videoUrl: hls.masterPlaylistPath,
          status: "READY",
        },
      });

      return NextResponse.json(readyUpload, {
        status: 201,
      });
    } catch (error) {
      console.error(
        "Failed to transcode upload",
        error
      );

      await prisma.upload.update({
        where: {
          id: createdUpload.id,
        },
        data: {
          status: "FAILED",
        },
      });

      return NextResponse.json(
        {
          error:
            "Upload saved but video processing failed",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
