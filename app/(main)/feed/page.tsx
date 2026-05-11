import { getCurrentUser } from "@/app/lib/current-user";
import { prisma } from "@/app/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Eye, Flame, Sparkles, Users, Video } from "lucide-react";

function formatViews(count: number): string {
  if (count >= 1_000_000_000) return `${(count / 1_000_000_000).toFixed(1)}B`;
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return count.toString();
}

function timeAgo(date: Date | string): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
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
    if (n >= 1) return `${n} ${label}${n > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

export default async function FeedPage() {
  const user = await getCurrentUser();

  if (!user) redirect("/login");
  if (!user.channels || user.channels.length === 0) redirect("/create-channel");

  const videos = await prisma.upload.findMany({
    where: { status: "READY", type: "PUBLIC", deletedAt: null },
    include: { channel: true },
    orderBy: { createdAt: "desc" },
  });

  const uniqueCreators = new Set(videos.map((video) => video.channelId)).size;
  const totalViews = videos.reduce((sum, video) => sum + video.viewCount, 0);
  const latestUpload = videos[0] ? timeAgo(videos[0].createdAt) : "No uploads yet";

  return (
    <div className="relative min-h-[calc(100vh-73px)] w-full min-w-0 overflow-hidden bg-[#070707] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-6 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-[10%] top-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-600/15 via-red-500/8 to-orange-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1700px] px-4 pb-10 pt-7 sm:px-6 sm:pt-8 lg:px-10">
        <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_18px_56px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                <Sparkles size={13} />
                Today in Feed
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Fresh uploads from creators
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
                Discover newly published videos, trending channels, and the most
                active creators on your platform.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Latest uploads",
                  "Most watched",
                  "Rising channels",
                  "Editor picks",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[520px]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
                  <Video size={14} />
                  Videos
                </p>

                <p className="mt-2 text-2xl font-extrabold text-white">{videos.length}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
                  <Users size={14} />
                  Creators
                </p>

                <p className="mt-2 text-2xl font-extrabold text-white">{uniqueCreators}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/20 via-orange-400/10 to-transparent p-4">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-300">
                  <Flame size={14} />
                  Latest Upload
                </p>

                <p className="mt-2 text-sm font-bold text-white">{latestUpload}</p>
                <p className="mt-1 text-xs text-zinc-300">{formatViews(totalViews)} total views</p>
              </div>
            </div>
          </div>
        </header>

        {videos.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
            <h2 className="text-2xl font-bold text-white">No videos yet</h2>
            <p className="mt-2 text-zinc-400">Upload your first video and it will appear here.</p>
            <Link
              href="/upload"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Go to Upload
            </Link>
          </div>
        ) : (
          <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {videos.map((video) => (
              <Link
                key={video.id}
                href={`/watch/${video.id}`}
                className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white">
                    {timeAgo(video.createdAt)}
                  </div>
                </div>

                <div className="flex gap-3 px-2 pb-3 pt-3">
                  <div className="shrink-0">
                    {video.channel.profilePictureUrl ? (
                      <Image
                        src={video.channel.profilePictureUrl}
                        alt={video.channel.channelName}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full border border-white/10 object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-sm font-bold text-white">
                        {video.channel.channelName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-2 text-[15px] font-semibold leading-5 text-white">
                      {video.title}
                    </h2>

                    <p className="mt-1 truncate text-sm text-zinc-400 transition group-hover:text-zinc-300">
                      {video.channel.channelName}
                    </p>

                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                      <Eye size={13} />
                      {formatViews(video.viewCount)} views
                    </p>
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
