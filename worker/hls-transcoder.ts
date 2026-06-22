//hls-transcoder.ts
import { spawn } from "node:child_process";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import { createWriteStream } from "node:fs";
import {
  access,
  mkdir,
  rm,
  unlink,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { randomUUID } from "node:crypto";

interface Rendition {
  name: string;
  width: number;
  height: number;
  videoBitrate: string;
  maxRate: string;
  bufSize: string;
  audioBitrate: string;
}

interface ProbeResult {
  width: number | null;
  height: number | null;
  hasAudio: boolean;
}

export interface HlsTranscodeResult {
  masterPlaylistPath: string;
  outputDirectory: string;

  variants: {
    resolution: string;
    bitrate: number;
    playlistUrl: string;
  }[];
}

const LADDER: Rendition[] = [
  {
    name: "1080p",
    width: 1920,
    height: 1080,
    videoBitrate: "5000k",
    maxRate: "5350k",
    bufSize: "7500k",
    audioBitrate: "128k",
  },
  {
    name: "720p",
    width: 1280,
    height: 720,
    videoBitrate: "2800k",
    maxRate: "2996k",
    bufSize: "4200k",
    audioBitrate: "128k",
  },
  {
    name: "480p",
    width: 854,
    height: 480,
    videoBitrate: "1400k",
    maxRate: "1498k",
    bufSize: "2100k",
    audioBitrate: "96k",
  },
  {
    name: "360p",
    width: 640,
    height: 360,
    videoBitrate: "800k",
    maxRate: "856k",
    bufSize: "1200k",
    audioBitrate: "96k",
  },
];

function ensureEven(value: number): number {
  if (value <= 0) {
    return 2;
  }

  return value % 2 === 0 ? value : value - 1;
}

async function runCommand(
  command: string,
  args: string[]
): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args);

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve(stdout.trim());
        return;
      }

      const errorLines = stderr
        .split("\n")
        .filter((line) =>
          /error|failed|invalid|cannot/i.test(line)
        )
        .slice(-8)
        .join("\n");

      const tail = stderr.slice(-3000);

      reject(
        new Error(
          `${command} exited with code ${code}.${
            errorLines
              ? `\n${errorLines}`
              : `\n${tail}`
          }`
        )
      );
    });
  });
}

async function downloadSourceFile(
  sourceUrl: string,
  destinationPath: string
) {
  const response = await fetch(sourceUrl);

  if (!response.ok || !response.body) {
    throw new Error(
      `Failed to download source video: ${response.status} ${response.statusText}`
    );
  }

await pipeline(
  Readable.fromWeb(
    response.body as NodeReadableStream
  ),
  createWriteStream(destinationPath)
);
}

async function probeMedia(
  inputPath: string
): Promise<ProbeResult> {
  const raw = await runCommand("ffprobe", [
    "-v",
    "error",
    "-show_streams",
    "-of",
    "json",
    inputPath,
  ]);

  const parsed = JSON.parse(raw) as {
    streams?: Array<{
      codec_type?: string;
      width?: number;
      height?: number;
    }>;
  };

  const streams = parsed.streams ?? [];

  const videoStream = streams.find(
    (stream) => stream.codec_type === "video"
  );

  const hasAudio = streams.some(
    (stream) => stream.codec_type === "audio"
  );

  return {
    width:
      typeof videoStream?.width === "number"
        ? videoStream.width
        : null,
    height:
      typeof videoStream?.height === "number"
        ? videoStream.height
        : null,
    hasAudio,
  };
}

function pickRenditions(
  width: number | null,
  height: number | null
): Rendition[] {
  if (!height) {
    return LADDER;
  }

  const allowed = LADDER.filter(
    (rendition) => rendition.height <= height
  );

  if (allowed.length > 0) {
    return allowed;
  }

  const safeWidth = ensureEven(width ?? 640);
  const safeHeight = ensureEven(height ?? 360);

  return [
    {
      name: `${safeHeight}p`,
      width: safeWidth,
      height: safeHeight,
      videoBitrate: "900k",
      maxRate: "963k",
      bufSize: "1400k",
      audioBitrate: "96k",
    },
  ];
}

function buildFfmpegArgs(
  inputPath: string,
  outputDirectory: string,
  renditions: Rendition[],
  hasAudio: boolean
): string[] {
  const args: string[] = ["-y", "-i", inputPath];

  const mapAndScale: string[] = [];

  renditions.forEach((rendition, index) => {
    mapAndScale.push("-map", "0:v:0");

    if (hasAudio) {
      mapAndScale.push("-map", "0:a:0");
    }

    mapAndScale.push(
      `-filter:v:${index}`,
      `scale=w=${rendition.width}:h=${rendition.height}:force_original_aspect_ratio=decrease:force_divisible_by=2`
    );
  });

  args.push(...mapAndScale);

  args.push(
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-profile:v",
    "main",
    "-pix_fmt",
    "yuv420p",
    "-sc_threshold",
    "0",
    "-g",
    "48",
    "-keyint_min",
    "48"
  );

  renditions.forEach((rendition, index) => {
    args.push(
      `-b:v:${index}`,
      rendition.videoBitrate,
      `-maxrate:v:${index}`,
      rendition.maxRate,
      `-bufsize:v:${index}`,
      rendition.bufSize
    );
  });

  if (hasAudio) {
    args.push("-c:a", "aac", "-ar", "48000", "-ac", "2");

    renditions.forEach((rendition, index) => {
      args.push(`-b:a:${index}`, rendition.audioBitrate);
    });
  }

  const varStreamMap = renditions
    .map((rendition, index) => {
      if (hasAudio) {
        return `v:${index},a:${index},name:${rendition.name}`;
      }

      return `v:${index},name:${rendition.name}`;
    })
    .join(" ");

  args.push(
    "-f",
    "hls",
    "-hls_time",
    "6",
    "-hls_playlist_type",
    "vod",
    "-hls_flags",
    "independent_segments",
    "-hls_list_size",
    "0",
    "-master_pl_name",
    "master.m3u8",
    "-var_stream_map",
    varStreamMap,
    "-hls_segment_filename",
    path.join(outputDirectory, "v%v", "segment_%03d.ts"),
    path.join(outputDirectory, "v%v", "index.m3u8")
  );

  return args;
}

function streamDirectory(videoId: string) {
  return path.join(
    process.cwd(),
    "public",
    "streams",
    videoId
  );
}

export async function transcodeToMultibitrateHls({
  videoId,
  sourceUrl,
}: {
  videoId: string;
  sourceUrl: string;
}): Promise<HlsTranscodeResult> {
  const outputDirectory = streamDirectory(videoId);

  await rm(outputDirectory, {
    recursive: true,
    force: true,
  });

  await mkdir(outputDirectory, {
    recursive: true,
  });

  const temporarySourcePath = path.join(
    os.tmpdir(),
    `source-${videoId}-${randomUUID()}.mp4`
  );

  try {
    await downloadSourceFile(sourceUrl, temporarySourcePath);

    const probe = await probeMedia(temporarySourcePath);

    const renditions = pickRenditions(
      probe.width,
      probe.height
    );

    await Promise.all(
      renditions.map((_, index) =>
        mkdir(path.join(outputDirectory, `v${index}`), {
          recursive: true,
        })
      )
    );

    const ffmpegArgs = buildFfmpegArgs(
      temporarySourcePath,
      outputDirectory,
      renditions,
      probe.hasAudio
    );

    await runCommand("ffmpeg", ffmpegArgs);

    const masterPath = path.join(
      outputDirectory,
      "master.m3u8"
    );

    await access(masterPath);

return {
  masterPlaylistPath: `/streams/${videoId}/master.m3u8`,
  outputDirectory,

  variants: renditions.map((rendition, index) => ({
    resolution: rendition.name,
    bitrate: Number.parseInt(
      rendition.videoBitrate.replace("k", ""),
      10
    ),
    playlistUrl: `/streams/${videoId}/v${index}/index.m3u8`,
  })),
};
  } finally {
    await unlink(temporarySourcePath).catch(() => {
      return;
    });
  }
}
