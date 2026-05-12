import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      channels: true,
    },
  });

  if (!user?.channels[0]) {
    return NextResponse.json({ error: "no channel found" }, { status: 400 });
  }
  if (!body.title || !body.videoUrl || !body.thumbnailUrl) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const video = await prisma.upload.create({
    data: {
      title: body.title,
      description: body.description,
      videoUrl: body.videoUrl,
      thumbnailUrl: body.thumbnailUrl,
      type: "PUBLIC",
      status: "READY",
      channelId: user.channels[0].id,
    },
  });
  

  return NextResponse.json(video);
}
