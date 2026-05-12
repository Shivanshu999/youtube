import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const videoId = body.videoId;

    if (!videoId) {
      return NextResponse.json(
        { error: "Video ID required" },
        { status: 400 }
      );
    }

    const session = await auth();

    const cookieStore = await cookies();

    const alreadyViewed =
      cookieStore.get(`viewed-${videoId}`);

    // increment view only once in 24h
    if (!alreadyViewed) {
      await prisma.upload.update({
        where: {
          id: videoId,
        },

        data: {
          viewCount: {
            increment: 1,
          },
        },
      });

      // set cookie
      cookieStore.set(
        `viewed-${videoId}`,
        "true",
        {
          maxAge: 60 * 60 * 24,
          httpOnly: true,
          sameSite: "lax",
        }
      );
    }

    // always update history for logged in users
    if (session?.user?.email) {
      const user =
        await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });

      if (user) {
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
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      viewed: !!alreadyViewed,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}