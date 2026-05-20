/*
  Warnings:

  - You are about to drop the column `name` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `_PlaylistToUpload` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PlaylistToUpload" DROP CONSTRAINT "_PlaylistToUpload_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToUpload" DROP CONSTRAINT "_PlaylistToUpload_B_fkey";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "uploadId" TEXT;

-- DropTable
DROP TABLE "_PlaylistToUpload";

-- CreateTable
CREATE TABLE "PlaylistVideo" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaylistVideo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlaylistVideo_playlistId_idx" ON "PlaylistVideo"("playlistId");

-- CreateIndex
CREATE INDEX "PlaylistVideo_uploadId_idx" ON "PlaylistVideo"("uploadId");

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistVideo_playlistId_uploadId_key" ON "PlaylistVideo"("playlistId", "uploadId");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistVideo" ADD CONSTRAINT "PlaylistVideo_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistVideo" ADD CONSTRAINT "PlaylistVideo_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
