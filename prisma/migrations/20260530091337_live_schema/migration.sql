/*
  Warnings:

  - You are about to drop the column `streamUrl` on the `LiveStream` table. All the data in the column will be lost.
  - You are about to drop the column `uploadId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `Upload` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProcessingJobStatus" AS ENUM ('QUEUED', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "VideoResolution" AS ENUM ('P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160');

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_uploadId_fkey";

-- AlterTable
ALTER TABLE "LiveStream" DROP COLUMN "streamUrl",
ADD COLUMN     "ingestUrl" TEXT,
ADD COLUMN     "playbackUrl" TEXT;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "uploadId";

-- AlterTable
ALTER TABLE "Upload" DROP COLUMN "videoUrl",
ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "originalVideoUrl" TEXT,
ADD COLUMN     "playbackUrl" TEXT,
ALTER COLUMN "thumbnailUrl" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VideoProcessingJob" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "status" "ProcessingJobStatus" NOT NULL DEFAULT 'QUEUED',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoProcessingJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StreamChatMessage" (
    "id" TEXT NOT NULL,
    "streamId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StreamChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoVariant" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "bitrate" INTEGER NOT NULL,
    "playlistUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VideoProcessingJob_uploadId_idx" ON "VideoProcessingJob"("uploadId");

-- CreateIndex
CREATE INDEX "VideoProcessingJob_status_idx" ON "VideoProcessingJob"("status");

-- CreateIndex
CREATE INDEX "StreamChatMessage_streamId_idx" ON "StreamChatMessage"("streamId");

-- CreateIndex
CREATE INDEX "StreamChatMessage_createdAt_idx" ON "StreamChatMessage"("createdAt");

-- CreateIndex
CREATE INDEX "VideoVariant_uploadId_idx" ON "VideoVariant"("uploadId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoVariant_uploadId_resolution_key" ON "VideoVariant"("uploadId", "resolution");

-- CreateIndex
CREATE INDEX "Upload_status_idx" ON "Upload"("status");

-- AddForeignKey
ALTER TABLE "VideoProcessingJob" ADD CONSTRAINT "VideoProcessingJob_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamChatMessage" ADD CONSTRAINT "StreamChatMessage_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamChatMessage" ADD CONSTRAINT "StreamChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoVariant" ADD CONSTRAINT "VideoVariant_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
