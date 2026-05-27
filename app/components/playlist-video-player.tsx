"use client";

import { useRouter } from "next/navigation";
import HlsVideoPlayer from "@/app/components/hls-video-player";

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
    <HlsVideoPlayer
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
