"use client";

import { useRouter } from "next/navigation";

interface PlaylistVideoPlayerProps {
  videoUrl: string;
  nextVideoUrl?: string;
}

export default function PlaylistVideoPlayer({
  videoUrl,
  nextVideoUrl,
}: PlaylistVideoPlayerProps) {
  const router = useRouter();

  return (
    <video
      key={videoUrl}
      src={videoUrl}
      controls
      autoPlay
      className="aspect-video w-full"
      onEnded={() => {
        if (nextVideoUrl) {
          router.push(nextVideoUrl);
        }
      }}
    />
  );
}