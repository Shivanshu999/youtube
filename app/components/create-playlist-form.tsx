"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CreatePlaylistForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim()) {
      toast.error("Playlist title is required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Failed to create playlist"
        );
      }

      toast.success("Playlist created");
      setTitle("");
      setDescription("");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Could not create playlist");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4"
    >
      <h2 className="text-lg font-bold text-white">
        Create playlist
      </h2>

      <div className="mt-3 grid gap-3">
        <input
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="Playlist title"
          className="h-11 rounded-xl border border-white/10 bg-black/40 px-3 text-sm text-white outline-none transition focus:border-white/30"
          maxLength={80}
        />

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          placeholder="Description (optional)"
          className="min-h-24 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
          maxLength={250}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <Loader2
            size={16}
            className="animate-spin"
          />
        ) : (
          <Plus size={16} />
        )}

        Create
      </button>
    </form>
  );
}
