import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";

import Link from "next/link";
import Image from "next/image";

import {
  Clock3,
  Bookmark,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import WatchLaterVideoMenu from "@/app/components/WatchLaterVideoMenu";

export const dynamic = "force-dynamic";

function timeAgo(date: Date | string): string {
  const now = new Date().getTime();

  const seconds = Math.floor(
    (now - new Date(date).getTime()) / 1000
  );

  const intervals: [number, string][] = [
    [31_536_000, "year"],
    [2_592_000, "month"],
    [604_800, "week"],
    [86_400, "day"],
    [3_600, "hour"],
    [60, "minute"],
  ];

  for (const [secs, label] of intervals) {
    const n = Math.floor(seconds / secs);

    if (n >= 1) {
      return `${n} ${label}${n > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export default async function WatchLaterPage() {
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
            <Bookmark size={14} />
            Watch Later
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight">
            Sign in to access Watch Later
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Save videos you want to watch later and access them anytime.
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
          <h1 className="text-2xl font-bold">
            We could not find your profile
          </h1>

          <p className="mt-2 text-zinc-400">
            Please sign out and sign in again.
          </p>
        </div>
      </div>
    );
  }

  const watchLaterVideos =
    await prisma.watchLater.findMany({
      where: {
        userId: currentUser.id,
      },

      include: {
        upload: {
          include: {
            channel: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  const savedToday = watchLaterVideos.filter(
    (item) => {
      const savedDate = new Date(item.createdAt);

      const today = new Date();

      return (
        savedDate.getDate() === today.getDate() &&
        savedDate.getMonth() ===
          today.getMonth() &&
        savedDate.getFullYear() ===
          today.getFullYear()
      );
    }
  ).length;

  const uniqueChannels = new Set(
    watchLaterVideos.map(
      (item) => item.upload.channelId
    )
  ).size;

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
                Saved Videos
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {userName}&apos;s Watch Later
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
                Your saved videos ready to watch anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[500px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
                  <Bookmark size={14} />
                  Saved Videos
                </p>

                <p className="mt-2 text-2xl font-extrabold">
                  {watchLaterVideos.length}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
                  <PlayCircle size={14} />
                  Channels
                </p>

                <p className="mt-2 text-2xl font-extrabold">
                  {uniqueChannels}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/20 via-orange-400/10 to-transparent p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-300">
                  <Clock3 size={14} />
                  Saved Today
                </p>

                <p className="mt-2 text-2xl font-extrabold">
                  {savedToday}
                </p>
              </div>
            </div>
          </div>
        </header>

        {watchLaterVideos.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              No videos saved yet
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-zinc-400">
              Save videos to watch later and they will appear here.
            </p>

            <Link
              href="/feed"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Explore Feed
            </Link>
          </div>
        ) : (
          <section className="mt-8 space-y-4">
            {watchLaterVideos.map((item) => (
              <Link
                key={item.id}
                href={`/watch/${item.upload.id}`}
                className="group block rounded-2xl border border-white/10 bg-zinc-950/70 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:w-[280px] sm:shrink-0">
                    <Image
                      src={item.upload.thumbnailUrl}
                      alt={item.upload.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                    <div>
                      <h2 className="line-clamp-2 text-lg font-bold text-white sm:text-xl">
                        {item.upload.title}
                      </h2>

                      <p className="mt-2 text-sm text-zinc-300">
                        {
                          item.upload.channel
                            .channelName
                        }
                      </p>

                      <p className="mt-3 line-clamp-2 text-sm text-zinc-400">
                        {item.upload.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                          <Clock3 size={13} />
                          {timeAgo(
                            item.createdAt
                          )}
                        </span>

                        <span>
                          Saved on{" "}
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </span>
                      </div>

                      <WatchLaterVideoMenu
                        watchLaterId={item.id}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}