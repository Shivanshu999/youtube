import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import IncrementView from "../../../components/increment-view";
import LikeButton from "../../../components/like-button";
import CommentForm from "@/app/components/comment-form";
import AddToPlaylistMenu from "@/app/components/add-to-playlist-menu";
import AddToWatchLaterButton from "@/app/components/add-to-watch-later-button";
import HlsVideoPlayer from "@/app/components/hls-video-player";

interface WatchPageProps {
  params: Promise<{
    videoId: string;
  }>;
}

async function trackWatchHistory(videoId: string) {
  const session = await auth();

  if (!session?.user?.email) {
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },

    select: {
      id: true,
    },
  });

  if (!user) {
    return;
  }

  await prisma.watchHistory.upsert({
    where: {
      userId_videoId: {
        userId: user.id,
        videoId,
      },
    },

    update: {
      watchedAt: new Date(),
    },

    create: {
      userId: user.id,
      videoId,
      watchedAt: new Date(),
    },
  });
}

function formatViews(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }

  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K`;
  }

  return count.toString();
}

export default async function WatchPage({
  params,
}: WatchPageProps) {
  const { videoId } = await params;

  const video = await prisma.upload.findUnique({
    where: {
      id: videoId,
    },

    include: {
      channel: true,

      like: true,

      comment: {
        include: {
          user: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!video) {
    notFound();
  }

  try {
    await trackWatchHistory(video.id);
  } catch (error) {
    console.error("Failed to track watch history", error);
  }

  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white">
      {/* increment views */}
      <IncrementView videoId={video.id} />

      <div className="mx-auto max-w-6xl">
        {/* VIDEO */}
        <div className="overflow-hidden rounded-2xl bg-zinc-900">
          {video.status === "READY" ? (
            <HlsVideoPlayer
              src={video.videoUrl}
              controls
              className="aspect-video w-full"
            />
          ) : video.status === "PROCESSING" ? (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-950 p-8 text-center">
              <p className="text-lg font-semibold">
                Video is still processing
              </p>
              <p className="max-w-md text-sm text-zinc-400">
                We are transcoding this upload into adaptive HLS streams.
                Refresh in a minute or check the feed later.
              </p>
            </div>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-950 p-8 text-center">
              <p className="text-lg font-semibold text-red-400">
                Processing failed
              </p>
              <p className="max-w-md text-sm text-zinc-400">
                This video could not be transcoded. Try uploading again from
                the upload page.
              </p>
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="mt-6">
          <h1 className="text-3xl font-black">
            {video.title}
          </h1>

          {/* CHANNEL + ACTIONS */}
          <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-zinc-900 p-4 sm:flex-row sm:items-center sm:justify-between">
            {/* CHANNEL */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                {video.channel.channelName
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <p className="font-semibold">
                  {video.channel.channelName}
                </p>

                <p className="text-sm text-zinc-400">
                  {formatViews(
                    video.viewCount
                  )}{" "}
                  views
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* LIKE BUTTON */}
              <LikeButton
                videoId={video.id}
                initialLikes={
                  video.like.length
                }
              />

              <AddToWatchLaterButton
                videoId={video.id}
              />

              <AddToPlaylistMenu
                videoId={video.id}
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6 rounded-2xl bg-zinc-900 p-5">
            <h2 className="mb-3 text-lg font-bold">
              Description
            </h2>

            <p className="whitespace-pre-wrap text-zinc-300">
              {video.description}
            </p>
          </div>

          {/* COMMENTS */}
          <div className="mt-8">
            <h2 className="mb-5 text-2xl font-bold">
              Comments (
              {video.comment.length})
            </h2>

            {/* COMMENT FORM */}
{/* COMMENT FORM */}
<CommentForm videoId={video.id} />

            {/* COMMENTS LIST */}
            <div className="space-y-4">
              {video.comment.length ===
              0 ? (
                <div className="rounded-2xl bg-zinc-900 p-6 text-center text-zinc-400">
                  No comments yet
                </div>
              ) : (
                video.comment.map(
                  (comment) => (
                    <div
                      key={comment.id}
                      className="rounded-2xl bg-zinc-900 p-5"
                    >
                      <div className="flex items-start gap-3">
                        {/* USER AVATAR */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 font-bold">
                          {comment.user.name
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        {/* COMMENT */}
                        <div>
                          <p className="font-semibold">
                            {
                              comment.user
                                .name
                            }
                          </p>

                          <p className="mt-2 whitespace-pre-wrap text-zinc-300">
                            {comment.commentText}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
