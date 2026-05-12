import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function HistoryPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return <div>Please login</div>;
  }

  const history =
    await prisma.watchHistory.findMany({
      where: {
        user: {
          email: session.user.email,
        },
      },

      include: {
        video: {
          include: {
            channel: true,
          },
        },
      },

      orderBy: {
        watchedAt: "desc",
      },
    });

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Watch History
      </h1>

      <div className="space-y-4">
        {history.map((item) => (
          <Link
            key={item.id}
            href={`/watch/${item.video.id}`}
            className="flex gap-4 rounded-xl bg-zinc-900 p-4 transition hover:bg-zinc-800"
          >
            <Image
              src={item.video.thumbnailUrl}
              alt={item.video.title}
              width={220}
              height={120}
              className="rounded-lg object-cover"
            />

            <div>
              <h2 className="text-lg font-semibold">
                {item.video.title}
              </h2>

              <p className="text-sm text-zinc-400">
                {
                  item.video.channel
                    .channelName
                }
              </p>

              <p className="mt-2 text-xs text-zinc-500">
                Watched{" "}
                {new Date(
                  item.watchedAt
                ).toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}