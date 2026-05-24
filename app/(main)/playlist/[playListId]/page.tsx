import { prisma } from "@/app/lib/prisma";

import Image from "next/image";
import Link from "next/link";

import {
  PlayCircle,
  ListVideo,
} from "lucide-react";

import PlaylistVideoPlayer from "../../../components/playlist-video-player";

interface PageProps {
  params: {
    playlistId: string;
  };


  searchParams: {
    video?: string;
  };
}

export default async function PlaylistPage({
  params,
  searchParams,
}: PageProps) {
  const { playlistId } = params;

  const { video } = searchParams;

  const playlist =
    await prisma.playlist.findUnique({
      where: {
        id: playlistId,
      },

      include: {
        playlistVideos: {
          include: {
            upload: {
              include: {
                channel: true,
              },
            },
          },

          orderBy: {
            order: "asc",
          },
        },
      },
    });

  if (!playlist) {
    return (
      <div className="p-10 text-white">
        Playlist not found
      </div>
    );
  }

  if (
    playlist.playlistVideos.length === 0
  ) {
    return (
      <div className="p-10 text-white">
        Playlist is empty
      </div>
    );
  }

  const currentVideo =
    playlist.playlistVideos.find(
      (item) => item.upload.id === video
    ) || playlist.playlistVideos[0];

  const currentIndex =
    playlist.playlistVideos.findIndex(
      (item) =>
        item.upload.id ===
        currentVideo.upload.id
    );

  const nextVideo =
    playlist.playlistVideos[
      currentIndex + 1
    ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-6 px-4 py-6 lg:flex-row">
        <div className="flex-1">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <PlaylistVideoPlayer
              videoUrl={
                currentVideo.upload
                  .videoUrl
              }
              nextVideoUrl={
                nextVideo
                  ? `/playlist/${playlist.id}?video=${nextVideo.upload.id}`
                  : undefined
              }
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
            <h1 className="text-3xl font-black">
              {
                currentVideo.upload
                  .title
              }
            </h1>

            <p className="mt-3 text-zinc-400">
              {
                currentVideo.upload
                  .description
              }
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 lg:w-[430px]">
          <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-2">
              <ListVideo size={18} />

              <h2 className="text-lg font-bold">
                {playlist.title}
              </h2>
            </div>

            <p className="mt-2 text-sm text-zinc-400">
              {
                playlist.playlistVideos
                  .length
              }{" "}
              videos
            </p>
          </div>

          <div className="max-h-[75vh] overflow-y-auto">
            {playlist.playlistVideos.map(
              (item, index) => {
                const isActive =
                  item.upload.id ===
                  currentVideo.upload.id;

                return (
                  <Link
                    key={item.id}
                    href={`/playlist/${playlist.id}?video=${item.upload.id}`}
                    className={`flex gap-3 border-b border-white/5 p-3 transition ${
                      isActive
                        ? "bg-red-500/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex w-6 items-center justify-center text-sm text-zinc-400">
                      {isActive ? (
                        <PlayCircle
                          size={18}
                          className="text-red-500"
                        />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="relative aspect-video w-[150px] overflow-hidden rounded-lg">
                      <Image
                        src={
                          item.upload
                            .thumbnailUrl
                        }
                        alt={
                          item.upload.title
                        }
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-sm font-semibold text-white">
                        {item.upload.title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-400">
                        {
                          item.upload
                            .channel
                            .channelName
                        }
                      </p>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}