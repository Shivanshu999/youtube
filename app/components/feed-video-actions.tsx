"use client";

import AddToPlaylistMenu from "@/app/components/add-to-playlist-menu";
import AddToWatchLaterButton from "@/app/components/add-to-watch-later-button";

interface FeedVideoActionsProps {
  videoId: string;
}

export default function FeedVideoActions({
  videoId,
}: FeedVideoActionsProps) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <AddToWatchLaterButton
        videoId={videoId}
        compact
      />

      <AddToPlaylistMenu
        videoId={videoId}
        compact
      />
    </div>
  );
}
