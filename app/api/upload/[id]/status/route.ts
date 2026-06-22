import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await params;

    const upload = await prisma.upload.findUnique({
      where: {
        id,
      },

      include: {
        variants: {
          orderBy: {
            bitrate: "desc",
          },
        },

        processingJobs: {
          orderBy: {
            createdAt: "desc",
          },

          take: 1,
        },
      },
    });

    if (!upload) {
      return NextResponse.json(
        {
          error: "Upload not found",
        },
        {
          status: 404,
        }
      );
    }

    const latestJob =
      upload.processingJobs[0] ?? null;

    return NextResponse.json({
      uploadId: upload.id,

      title: upload.title,

      status: upload.status,

      playbackUrl: upload.playbackUrl,

      thumbnailUrl: upload.thumbnailUrl,

      progress: latestJob?.progress ?? 0,

      processingJob: latestJob
        ? {
            id: latestJob.id,
            status: latestJob.status,
            progress: latestJob.progress,
            errorMessage:
              latestJob.errorMessage,
            startedAt:
              latestJob.startedAt,
            completedAt:
              latestJob.completedAt,
          }
        : null,

      variants: upload.variants.map(
        (variant) => ({
          id: variant.id,

          resolution:
            variant.resolution,

          bitrate: variant.bitrate,

          playlistUrl:
            variant.playlistUrl,
        })
      ),
    });
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