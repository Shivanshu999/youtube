"use client";

import {
  EllipsisVertical,
  Loader2,
  Trash2,
  PlayCircle,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

interface WatchLaterVideoMenuProps {
  watchLaterId: string;
}

export default function WatchLaterVideoMenu({
  watchLaterId,
}: WatchLaterVideoMenuProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] =
    useState(false);

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

  async function removeFromWatchLater(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `/api/watch-later/${watchLaterId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to remove video"
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
      className="relative shrink-0"
      ref={dropdownRef}
    >
      <button
        onClick={(e) => {
          e.preventDefault();

          setOpen((prev) => !prev);
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-300 transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
      >
        <EllipsisVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-[999] w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-100">
          
          <div className="mb-1 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Watch Later
            </p>
          </div>

          <button
            disabled={loading}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
          >
            <PlayCircle size={16} />

            Play Next
          </button>

          <div className="my-1 h-px bg-white/10" />

          <button
            onClick={
              removeFromWatchLater
            }
            disabled={loading}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2
                size={16}
                className="animate-spin"
              />
            ) : (
              <Trash2 size={16} />
            )}

            Remove from Watch Later
          </button>
        </div>
      )}
    </div>
  );
}