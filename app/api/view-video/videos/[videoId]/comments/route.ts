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
    const body = await req.json();

    if (!body.text) {
      return NextResponse.json(
        { error: "Comment is required" },
        { status: 400 },
      );
    }

    const { videoId } = await params;
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    const comment = await prisma.comment.create({
      data: {
        commentText: body.text,
        userId: user.id,
        videoId,
      },

      include: {
        user: true,
      },
    });
    return NextResponse.json(comment);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
