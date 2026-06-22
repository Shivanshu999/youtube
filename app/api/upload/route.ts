import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { videoQueue } from "@/app/lib/video-queue";

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

    if (!user?.channels?.[0]) {
      return NextResponse.json(
        {
          error: "No channel found",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !body.title ||
      !body.videoUrl ||
      !body.thumbnailUrl
    ) {
      return NextResponse.json(
        {
          error: "Missing fields",
        },
        {
          status: 400,
        }
      );
    }

    const createdUpload =
      await prisma.upload.create({
        data: {
          title: body.title,
          description: body.description ?? "",

          originalVideoUrl:
            body.videoUrl,

          thumbnailUrl:
            body.thumbnailUrl,

          type: "PUBLIC",

          status: "PROCESSING",

          channelId:
            user.channels[0].id,
        },
      });

    await prisma.videoProcessingJob.create({
      data: {
        uploadId: createdUpload.id,
        status: "QUEUED",
        progress: 0,
      },
    });

await videoQueue.add(
  "transcode-video",
  {
    uploadId: createdUpload.id,
  },
  {
    jobId: createdUpload.id,
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
    removeOnComplete: 100,
    removeOnFail: 100,
  }
);

    return NextResponse.json(
      {
        success: true,
        uploadId: createdUpload.id,
        status: "QUEUED",
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