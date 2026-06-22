import { Worker } from "bullmq";

import { redis } from "@/app/lib/redis";
import { prisma } from "@/app/lib/prisma";

import { transcodeToMultibitrateHls } from "./hls-transcoder";

const worker = new Worker(
  "video-processing",

  async (job) => {
    const { uploadId } = job.data;

    await job.updateProgress(5);

    const upload = await prisma.upload.findUnique({
      where: {
        id: uploadId,
      },
    });

    if (!upload) {
      throw new Error("Upload not found");
    }

    await prisma.upload.update({
      where: {
        id: uploadId,
      },
      data: {
        status: "PROCESSING",
      },
    });

    await prisma.videoProcessingJob.updateMany({
      where: {
        uploadId,
      },
      data: {
        status: "PROCESSING",
        progress: 10,
        startedAt: new Date(),
      },
    });

    await job.updateProgress(20);

    const result = await transcodeToMultibitrateHls({
      videoId: upload.id,
      sourceUrl: upload.originalVideoUrl!,
    });

    await job.updateProgress(80);

    await prisma.videoVariant.deleteMany({
      where: {
        uploadId,
      },
    });

    if (result.variants.length > 0) {
      await prisma.videoVariant.createMany({
        data: result.variants.map((variant) => ({
          uploadId,
          resolution: variant.resolution,
          bitrate: variant.bitrate,
          playlistUrl: variant.playlistUrl,
        })),
      });
    }

    await prisma.upload.update({
      where: {
        id: uploadId,
      },
      data: {
        playbackUrl: result.masterPlaylistPath,
        status: "READY",
      },
    });

    await prisma.videoProcessingJob.updateMany({
      where: {
        uploadId,
      },
      data: {
        status: "COMPLETED",
        progress: 100,
        completedAt: new Date(),
      },
    });

    await job.updateProgress(100);

    return {
      uploadId,
      playbackUrl: result.masterPlaylistPath,
    };
  },

  {
    connection: redis,
    concurrency: 2,
  }
);

worker.on("completed", async (job) => {
  console.log(
    `✅ Video processing completed: ${job.id}`
  );
});

worker.on("progress", (job, progress) => {
  console.log(
    `📈 Job ${job.id} progress: ${progress}%`
  );
});

worker.on("failed", async (job, error) => {
  console.error(
    `❌ Video processing failed: ${job?.id}`,
    error
  );

  const uploadId = job?.data?.uploadId;

  if (!uploadId) {
    return;
  }

  try {
    await prisma.upload.update({
      where: {
        id: uploadId,
      },
      data: {
        status: "FAILED",
      },
    });

    await prisma.videoProcessingJob.updateMany({
      where: {
        uploadId,
      },
      data: {
        status: "FAILED",
        errorMessage: error.message,
      },
    });
  } catch (dbError) {
    console.error(
      "Failed to update failed status",
      dbError
    );
  }
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});

console.log("🚀 Video processing worker started");