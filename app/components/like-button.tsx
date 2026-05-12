"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

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

    setLoading(true);

    const res = await fetch(
      `/api/videos/${videoId}/like`,
      {
        method: "POST",
      }
    );

    const data = await res.json();

    if (data.liked) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => prev - 1);
    }

    setLoading(false);
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