import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";

import Link from "next/link";
import Image from "next/image";

import {
  ListVideo,
  Sparkles,
  PlayCircle,
} from "lucide-react";

import CreatePlaylistForm from "@/app/components/create-playlist-form";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function PlaylistIndexPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] px-4 py-8 text-white sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-12 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
          <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/70 p-8 text-center backdrop-blur-xl">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
            <ListVideo size={14} />
            Playlist
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight">
            Sign in to use playlists
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Save videos into playlists so you can watch them in order anytime.
          </p>

          <Link
            href="/login"
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      firstName: true,
      name: true,
    },
  });

  if (!currentUser) {
    return (
      <div className="min-h-[calc(100vh-73px)] bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/80 p-8 text-center">
          <h1 className="text-2xl font-bold">We could not find your profile</h1>

          <p className="mt-2 text-zinc-400">
            Please sign out and sign in again.
          </p>
        </div>
      </div>
    );
  }

  const playlists = await prisma.playlist.findMany({
    where: {
      userId: currentUser.id,
    },
    include: {
      _count: {
        select: {
          playlistVideos: true,
        },
      },
      playlistVideos: {
        include: {
          upload: {
            select: {
              thumbnailUrl: true,
              title: true,
            },
          },
        },
        orderBy: {
          order: "asc",
        },
        take: 1,
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const userName =
    currentUser.firstName ||
    currentUser.name?.split(" ")[0] ||
    "Creator";

  return (
    <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-8 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute right-[12%] top-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600/15 via-orange-500/10 to-amber-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-4 pb-10 pt-7 sm:px-6 lg:px-10">
        <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_18px_56px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                <Sparkles size={13} />
                Playlist Library
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {userName}&apos;s Playlists
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
                Build collections for tutorials, music, and series you want to
                watch in sequence.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
                <PlayCircle size={14} />
                Total Playlists
              </p>

              <p className="mt-2 text-3xl font-extrabold text-white">
                {playlists.length}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[380px,1fr]">
          <CreatePlaylistForm />

          <div>
            {playlists.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
                <h2 className="text-2xl font-bold text-white">
                  No playlists yet
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-zinc-400">
                  Create your first playlist using the form.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {playlists.map((playlist) => {
                  const firstVideo =
                    playlist.playlistVideos[0]?.upload;

                  return (
                    <Link
                      key={playlist.id}
                      href={`/playlist/${playlist.id}`}
                      className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
                        {firstVideo ? (
                          <Image
                            src={firstVideo.thumbnailUrl}
                            alt={firstVideo.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-500">
                            <ListVideo size={36} />
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      </div>

                      <div className="mt-3">
                        <h2 className="line-clamp-1 text-lg font-bold text-white">
                          {playlist.title}
                        </h2>

                        {playlist.description ? (
                          <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                            {playlist.description}
                          </p>
                        ) : (
                          <p className="mt-1 text-sm text-zinc-500">
                            No description
                          </p>
                        )}

                        <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                          <span>
                            {playlist._count.playlistVideos} videos
                          </span>

                          <span>
                            Updated {formatDate(playlist.updatedAt)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
