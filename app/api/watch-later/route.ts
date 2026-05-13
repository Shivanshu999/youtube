import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const { uploadId } = body;

    if (!uploadId) {
      return NextResponse.json(
        { error: "uploadId is required" },
        { status: 400 },
      );
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const existingVideo = await prisma.watchLater.findFirst({
      where: {
        userId: currentUser.id,
        uploadId,
      },
    });

    if (existingVideo) {
      return NextResponse.json(
        { message: "Video already in watch later" },
        { status: 200 },
      );
    }

    await prisma.watchLater.create({
      data: {
        userId: currentUser.id,
        uploadId,
      },
    });

    return NextResponse.json(
      { message: "Video added to watch later" },
      { status: 201 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
