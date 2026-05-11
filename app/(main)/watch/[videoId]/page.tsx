import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

interface WatchPageProps {
  params: Promise<{
    videoId: string;
  }>;
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
    },
  });

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        {/* VIDEO */}
        <div className="overflow-hidden rounded-2xl bg-zinc-900">
          <video
            controls
            src={video.videoUrl}
            className="aspect-video w-full"
          />
        </div>

        {/* DETAILS */}
        <div className="mt-6">
          <h1 className="text-3xl font-black">
            {video.title}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center font-bold">
              {video.channel.channelName.charAt(0)}
            </div>

            <div>
              <p className="font-semibold">
                {video.channel.channelName}
              </p>

              <p className="text-sm text-zinc-400">
                {video.viewCount} views
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-zinc-900 p-5">
            <p className="whitespace-pre-wrap text-zinc-300">
              {video.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}