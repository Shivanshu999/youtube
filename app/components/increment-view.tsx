"use client";

import { useEffect } from "react";

interface IncrementViewProps {
  videoId: string;
}

export default function IncrementView({
  videoId,
}: IncrementViewProps) {
  useEffect(() => {
    fetch("/api/view-video", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        videoId,
      }),
    });
  }, [videoId]);

  return null;
}