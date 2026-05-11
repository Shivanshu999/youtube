"use server";

import { auth } from "@/auth";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";
export async function createChannel(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const channelName = formData.get("channelName") as string;
  const description = formData.get("description") as string;
  const profileBlob = await put(
    profilePictureUrl.name,

    profilePictureUrl,

    {
      access: "public",
    },
  );

const bannerBlob = await put(

  bannerUrl.name,

  bannerUrl,

  {

    access: "public",

  }

);


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
      userId: user.id,
      profilePictureUrl: profileBlob.url,
      bannerUrl: bannerBlob.url,
    },
  });

  redirect("/feed");
}
