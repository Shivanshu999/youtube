This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Video transcoding (HLS)

Uploads are transcoded on the server with **FFmpeg** into multi-bitrate HLS (`.m3u8` + `.ts` segments) and served from `public/streams/`.

### Requirements

Install FFmpeg and FFprobe on your machine:

```bash
# macOS (Homebrew)
brew install ffmpeg

# Ubuntu / Debian
sudo apt install ffmpeg
```

Verify:

```bash
ffmpeg -version
ffprobe -version
```

### Flow

1. User uploads the raw MP4 to UploadThing from the upload page.
2. `POST /api/upload` saves the row as `PROCESSING`, downloads the source, runs `transcodeToMultibitrateHls`, then sets `videoUrl` to `/streams/{id}/master.m3u8` and `status` to `READY`.
3. The watch page plays HLS via `HlsVideoPlayer` (native Safari / `hls.js` elsewhere).
4. The feed only lists videos with `status: READY`.

Transcoded files live under `public/streams/` (gitignored). For production, consider a background job queue so transcoding does not block the HTTP request.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
