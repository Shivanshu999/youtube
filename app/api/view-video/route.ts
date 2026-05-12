import { prisma } from "@/app/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const videoId = body.videoId;

    if (!videoId) {
      return NextResponse.json({ error: "Video ID required" }, { status: 400 });
    }

    const cookieStore = await cookies();

    const viewed = cookieStore.get(`viewed-${videoId}`);

    // already viewed
    if (viewed) {
      return NextResponse.json({
        success: true,
        viewed: true,
      });
    }

    // increment views
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
    cookieStore.set(`viewed-${videoId}`, "true", {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      sameSite: "lax",
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
