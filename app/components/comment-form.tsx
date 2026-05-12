"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface CommentFormProps {
  videoId: string;
}

export default function CommentForm({
  videoId,
}: CommentFormProps) {
  const [text, setText] = useState("");
  const [loading, setLoading] =
    useState(false);

  const router = useRouter();

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `/api/videos/${videoId}/comment`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            text,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to comment"
        );
      }

      setText("");

      // refresh server component data
      router.refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6"
    >
      <textarea
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Add a comment..."
        className="min-h-[120px] w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-zinc-600"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-3 rounded-xl bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-500 disabled:opacity-50"
      >
        {loading
          ? "Commenting..."
          : "Comment"}
      </button>
    </form>
  );
}