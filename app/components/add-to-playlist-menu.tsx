"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookmarkPlus,
  Check,
  Loader2,
  Plus,
} from "lucide-react";
import { toast } from "sonner";

interface PlaylistItem {
  id: string;
  title: string;
  description: string | null;
  videosCount: number;
  containsVideo: boolean;
}

interface AddToPlaylistMenuProps {
  videoId: string;
  compact?: boolean;
}

export default function AddToPlaylistMenu({
  videoId,
  compact = false,
}: AddToPlaylistMenuProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loadingPlaylists, setLoadingPlaylists] =
    useState(false);
  const [creating, setCreating] =
    useState(false);
  const [activePlaylistId, setActivePlaylistId] =
    useState<string | null>(null);
  const [unauthorized, setUnauthorized] =
    useState(false);

  const [newPlaylistTitle, setNewPlaylistTitle] =
    useState("");
  const [newPlaylistDescription, setNewPlaylistDescription] =
    useState("");

  const [playlists, setPlaylists] = useState<
    PlaylistItem[]
  >([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
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

  async function loadPlaylists() {
    try {
      setLoadingPlaylists(true);
      setUnauthorized(false);

      const response = await fetch(
        `/api/playlist?uploadId=${videoId}`,
        {
          cache: "no-store",
        }
      );

      if (response.status === 401) {
        setUnauthorized(true);
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Failed to load playlists"
        );
      }

      setPlaylists(data);
      setLoaded(true);
    } catch (error) {
      console.error(error);
      toast.error("Could not load playlists");
    } finally {
      setLoadingPlaylists(false);
    }
  }

  async function handleAddToPlaylist(
    playlistId: string
  ) {
    try {
      setActivePlaylistId(playlistId);

      const response = await fetch(
        `/api/playlist/${playlistId}/videos`,
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

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Failed to add video"
        );
      }

      if (data.alreadyExists) {
        toast.message("Video already in playlist");
      } else {
        toast.success("Video added to playlist");
      }

      setPlaylists((current) =>
        current.map((playlist) => {
          if (playlist.id !== playlistId) {
            return playlist;
          }

          return {
            ...playlist,
            containsVideo: true,
            videosCount: data.alreadyExists
              ? playlist.videosCount
              : playlist.videosCount + 1,
          };
        })
      );
    } catch (error) {
      console.error(error);
      toast.error("Could not add video");
    } finally {
      setActivePlaylistId(null);
    }
  }

  async function handleCreateAndAdd() {
    if (!newPlaylistTitle.trim()) {
      toast.error("Playlist title is required");
      return;
    }

    try {
      setCreating(true);

      const createResponse = await fetch(
        "/api/playlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newPlaylistTitle,
            description:
              newPlaylistDescription,
          }),
        }
      );

      const createData = await createResponse.json();

      if (!createResponse.ok) {
        throw new Error(
          createData?.error ??
            "Could not create playlist"
        );
      }

      const addResponse = await fetch(
        `/api/playlist/${createData.id}/videos`,
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

      const addData = await addResponse.json();

      if (!addResponse.ok) {
        throw new Error(
          addData?.error ?? "Could not add video"
        );
      }

      const createdPlaylist: PlaylistItem = {
        id: createData.id,
        title: createData.title,
        description: createData.description,
        videosCount: 1,
        containsVideo: true,
      };

      setPlaylists((current) => [
        createdPlaylist,
        ...current,
      ]);

      setLoaded(true);
      setNewPlaylistTitle("");
      setNewPlaylistDescription("");
      toast.success("Playlist created and video added");
    } catch (error) {
      console.error(error);
      toast.error("Could not create playlist");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <button
        type="button"
        onClick={async () => {
          const nextOpen = !open;
          setOpen(nextOpen);

          if (
            nextOpen &&
            !loaded &&
            !loadingPlaylists
          ) {
            await loadPlaylists();
          }
        }}
        className={
          compact
            ? "inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 px-3 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:text-white"
            : "flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 transition hover:bg-zinc-800"
        }
      >
        <BookmarkPlus
          size={compact ? 14 : 18}
        />
        <span>
          {compact
            ? "Playlist"
            : "Save to Playlist"}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-[999] w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <p className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Add this video
          </p>

          <div className="mt-2 max-h-56 space-y-2 overflow-y-auto pr-1">
            {unauthorized ? (
              <p className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-300">
                Sign in to save videos to playlists.
              </p>
            ) : loadingPlaylists ? (
              <div className="flex items-center gap-2 px-3 py-3 text-sm text-zinc-300">
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Loading playlists...
              </div>
            ) : playlists.length === 0 ? (
              <p className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-300">
                No playlists yet.
              </p>
            ) : (
              playlists.map((playlist) => (
                <button
                  key={playlist.id}
                  onClick={() =>
                    handleAddToPlaylist(
                      playlist.id
                    )
                  }
                  disabled={
                    activePlaylistId ===
                    playlist.id
                  }
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-left transition hover:border-white/20 hover:bg-white/5 disabled:cursor-not-allowed"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white">
                      {playlist.title}
                    </span>

                    <span className="text-xs text-zinc-400">
                      {playlist.videosCount} videos
                    </span>
                  </span>

                  {activePlaylistId ===
                  playlist.id ? (
                    <Loader2
                      size={16}
                      className="animate-spin text-zinc-300"
                    />
                  ) : playlist.containsVideo ? (
                    <Check
                      size={16}
                      className="text-emerald-400"
                    />
                  ) : (
                    <Plus
                      size={16}
                      className="text-zinc-300"
                    />
                  )}
                </button>
              ))
            )}
          </div>

          {!unauthorized && (
            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                New playlist
              </p>

              <div className="mt-2 space-y-2">
                <input
                  value={newPlaylistTitle}
                  onChange={(event) =>
                    setNewPlaylistTitle(
                      event.target.value
                    )
                  }
                  placeholder="Playlist title"
                  className="h-10 w-full rounded-lg border border-white/10 bg-black/40 px-3 text-sm text-white outline-none transition focus:border-white/30"
                  maxLength={80}
                />

                <textarea
                  value={newPlaylistDescription}
                  onChange={(event) =>
                    setNewPlaylistDescription(
                      event.target.value
                    )
                  }
                  placeholder="Description (optional)"
                  className="min-h-20 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
                  maxLength={250}
                />

                <button
                  onClick={handleCreateAndAdd}
                  disabled={creating}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {creating ? (
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                  ) : (
                    <Plus size={16} />
                  )}

                  Create and add
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
