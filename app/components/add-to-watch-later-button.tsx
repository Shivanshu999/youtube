"use client";

import { useState } from "react";
import { Check, Clock3, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AddToWatchLaterButtonProps {
  videoId: string;
  compact?: boolean;
}

export default function AddToWatchLaterButton({
  videoId,
  compact = false,
}: AddToWatchLaterButtonProps) {
  const [loading, setLoading] =
    useState(false);
  const [saved, setSaved] =
    useState(false);

  async function handleAddToWatchLater() {
    if (loading) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/watch-later",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uploadId: videoId,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        toast.error("Sign in to save videos");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data?.error ??
            "Failed to save video"
        );
      }

      setSaved(true);

      if (response.status === 201) {
        toast.success("Added to Watch Later");
      } else {
        toast.message("Already in Watch Later");
      }
    } catch (error) {
      console.error(error);
      toast.error("Could not save video");
    } finally {
      setLoading(false);
    }
  }

  const icon = loading ? (
    <Loader2
      size={compact ? 14 : 18}
      className="animate-spin"
    />
  ) : saved ? (
    <Check size={compact ? 14 : 18} />
  ) : (
    <Clock3 size={compact ? 14 : 18} />
  );

  return (
    <button
      type="button"
      onClick={handleAddToWatchLater}
      disabled={loading}
      className={
        compact
          ? "inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 px-3 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          : "flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
      }
    >
      {icon}

      <span>
        {saved
          ? compact
            ? "Saved"
            : "In Watch Later"
          : compact
            ? "Watch Later"
            : "Save to Watch Later"}
      </span>
    </button>
  );
}
