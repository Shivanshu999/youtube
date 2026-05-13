"use client";

import {
  EllipsisVertical,
  Loader2,
  Trash2,
  Clock3,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface HistoryVideoMenuProps {
  historyId: string;
  uploadId: string;
}

export default function HistoryVideoMenu({
  historyId,
  uploadId,
}: HistoryVideoMenuProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  async function removeFromHistory(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `/api/history/${historyId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to remove history"
        );
      }

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  async function addToWatchLater(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/watch-later",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            uploadId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to save video"
        );
      }

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        onClick={(e) => {
          e.preventDefault();

          setOpen((prev) => !prev);
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
      >
        <EllipsisVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl">
          <button
            onClick={addToWatchLater}
            disabled={loading}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/5 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2
                size={16}
                className="animate-spin"
              />
            ) : (
              <Clock3 size={16} />
            )}

            Add to Watch Later
          </button>

          <div className="h-px bg-white/10" />

          <button
            onClick={removeFromHistory}
            disabled={loading}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2
                size={16}
                className="animate-spin"
              />
            ) : (
              <Trash2 size={16} />
            )}

            Remove from History
          </button>
        </div>
      )}
    </div>
  );
}