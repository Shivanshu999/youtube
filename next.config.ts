import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";

    const playlistCache =
      "no-cache, no-store, must-revalidate";
    const segmentCache = isDev
      ? playlistCache
      : "public, max-age=31536000, immutable";

    return [
      {
        source: "/streams/:videoId/master.m3u8",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.apple.mpegurl",
          },
          {
            key: "Cache-Control",
            value: playlistCache,
          },
        ],
      },
      {
        source: "/streams/:videoId/:rendition/index.m3u8",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.apple.mpegurl",
          },
          {
            key: "Cache-Control",
            value: playlistCache,
          },
        ],
      },
      {
        source: "/streams/:videoId/:rendition/:segment.ts",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp2t",
          },
          {
            key: "Cache-Control",
            value: segmentCache,
          },
        ],
      },
    ];
  },
};

export default nextConfig;