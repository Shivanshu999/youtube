import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: Promise<{
    videoId: string;
  }>;
}

export async function POST(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { videoId } = await params;
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_videoId: {
          userId: user.id,
          videoId,
        },
      },
    });
    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      return NextResponse.json({
        liked: false,
      });
    }

    await prisma.like.create({
      data: {
        userId: user.id,
        videoId,
      },
    });

    return NextResponse.json({
      liked: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
