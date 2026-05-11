"use server";

import { auth } from "@/auth";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function createChannel(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const channelName = formData.get("channelName") as string;
  const description = formData.get("description") as string;
  const profilePictureUrl = formData.get("profilePicture") as File;
  const bannerUrl = formData.get("banner") as File;

  if (!channelName || !description || !profilePictureUrl || !bannerUrl) {
    throw new Error("All fields are required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      channels: true,
    },
  });

  if (!user) {
    return new Error("User not found");
  }

  if (user.channels.length > 0) {
    redirect("/feed");
  }

  await prisma.channel.create({
    data: {
      channelName,
      description,
      profilePictureUrl: URL.createObjectURL(profilePictureUrl),
      bannerUrl: URL.createObjectURL(bannerUrl),
      userId: user.id,
    },
  });

  redirect("/feed");
}
