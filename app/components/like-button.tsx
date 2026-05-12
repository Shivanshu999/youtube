"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface LikeButtonProps {
  videoId: string;
  initialLikes: number;
}

export default function LikeButton({
  videoId,
  initialLikes,
}: LikeButtonProps) {
  const [likes, setLikes] =
    useState(initialLikes);

  const [loading, setLoading] =
    useState(false);

async function handleLike() {
  if (loading) return;

  try {
    setLoading(true);

    const res = await fetch(
      `/api/view-video/videos/${videoId}/like`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to like video");
    }

    const data = await res.json();

    if (data.liked) {
      setLikes((prev) => prev + 1);

      toast.success("Video liked");
    } else {
      setLikes((prev) => Math.max(prev - 1, 0));

      toast.success("Like removed");
    }
  } catch (error) {
    console.log(error);

    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
}

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 transition hover:bg-zinc-800"
    >
      <Heart size={18} />

      <span>{likes}</span>
    </button>
  );
}