"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Hls from "hls.js";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HlsVideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  onEnded?: () => void;
}

type QualityOption = {
  value: string;
  label: string;
  levelIndex?: number;
  playlistUrl?: string;
};

function isHlsSource(src: string): boolean {
  return src.endsWith(".m3u8") || src.includes(".m3u8?");
}

function renditionLabelFromPath(
  path: string
): string | undefined {
  const match = path.match(/[\/]v(\d+p)(?:\/|$)/i);

  if (match) {
    return match[1].toLowerCase();
  }

  return undefined;
}

function renditionSortKey(label: string): number {
  const match = label.match(/^(\d+)p$/);

  return match
    ? Number.parseInt(match[1], 10)
    : 0;
}

function formatLevelLabel(
  pathOrUrl: string | undefined,
  height: number | undefined,
  name: string | undefined,
  index: number
): string {
  if (pathOrUrl) {
    const fromPath =
      renditionLabelFromPath(pathOrUrl);

    if (fromPath) {
      return fromPath;
    }
  }

  if (name) {
    return name;
  }

  if (height) {
    return `${height}p`;
  }

  return `Quality ${index + 1}`;
}

function parseMasterPlaylist(
  playlistText: string,
  masterUrl: string
): QualityOption[] {
  const baseUrl = masterUrl.replace(
    /\/[^/]*$/,
    "/"
  );
  const lines = playlistText.split("\n");
  const options: QualityOption[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line.startsWith("#EXT-X-STREAM-INF")) {
      continue;
    }

    const nameMatch = line.match(/NAME="([^"]+)"/);
    const resolutionMatch = line.match(
      /RESOLUTION=\d+x(\d+)/
    );
    const nextLine = lines[i + 1]?.trim();

    if (!nextLine || nextLine.startsWith("#")) {
      continue;
    }

    const playlistUrl = nextLine.startsWith("http")
      ? nextLine
      : new URL(nextLine, baseUrl).href;

    const height = resolutionMatch
      ? Number.parseInt(resolutionMatch[1], 10)
      : undefined;

    options.push({
      value: playlistUrl,
      label: formatLevelLabel(
        nextLine,
        height,
        nameMatch?.[1],
        options.length
      ),
      playlistUrl,
    });
  }

  return options.sort(
    (a, b) =>
      renditionSortKey(b.label) -
      renditionSortKey(a.label)
  );
}

export default function HlsVideoPlayer({
  src,
  className,
  autoPlay = false,
  controls = true,
  onEnded,
}: HlsVideoPlayerProps) {
  const videoRef =
    useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const [qualities, setQualities] = useState<
    QualityOption[]
  >([]);
  const [selectedQuality, setSelectedQuality] =
    useState("auto");
  const [showQualityMenu, setShowQualityMenu] =
    useState(false);

  const selectedLabel =
    selectedQuality === "auto"
      ? "Auto"
      : (qualities.find(
          (quality) =>
            quality.value === selectedQuality
        )?.label ?? "Quality");

  const loadNativeQualities = useCallback(
    async (masterUrl: string) => {
      const response = await fetch(masterUrl);

      if (!response.ok) {
        return;
      }

      const text = await response.text();
      const parsed = parseMasterPlaylist(
        text,
        masterUrl
      );

      if (parsed.length > 1) {
        setQualities(parsed);
        setShowQualityMenu(true);
      }
    },
    []
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setQualities([]);
    setShowQualityMenu(false);
    setSelectedQuality("auto");

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (!isHlsSource(src)) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });

      hlsRef.current = hls;

      hls.on(
        Hls.Events.MANIFEST_PARSED,
        () => {
          const options = hls.levels
            .map((level, index) => {
              const levelPath = Array.isArray(
                level.url
              )
                ? level.url[0]
                : (level.url ?? "");

              return {
                value: String(index),
                label: formatLevelLabel(
                  levelPath,
                  level.height,
                  level.name,
                  index
                ),
                levelIndex: index,
              };
            })
            .sort(
              (a, b) =>
                renditionSortKey(b.label) -
                renditionSortKey(a.label)
            );

          if (options.length > 1) {
            setQualities(options);
            setShowQualityMenu(true);
          }
        }
      );

      hls.on(Hls.Events.LEVEL_SWITCHED, () => {
        if (hls.currentLevel === -1) {
          setSelectedQuality("auto");
          return;
        }

        setSelectedQuality(String(hls.currentLevel));
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
        hlsRef.current = null;
      };
    }

    if (
      video.canPlayType(
        "application/vnd.apple.mpegurl"
      )
    ) {
      video.src = src;
      void loadNativeQualities(src);

      return;
    }

    video.src = src;
  }, [src, loadNativeQualities]);

  function handleQualityChange(value: string) {
    setSelectedQuality(value);

    const video = videoRef.current;
    const hls = hlsRef.current;

    if (!video) {
      return;
    }

    if (hls) {
      hls.currentLevel =
        value === "auto"
          ? -1
          : Number.parseInt(value, 10);
      return;
    }

    if (value === "auto") {
      video.src = src;
      void video.load();
      return;
    }

    const option = qualities.find(
      (quality) => quality.value === value
    );

    if (option?.playlistUrl) {
      const currentTime = video.currentTime;
      const wasPaused = video.paused;

      video.src = option.playlistUrl;
      video.addEventListener(
        "loadedmetadata",
        () => {
          video.currentTime = currentTime;

          if (!wasPaused) {
            void video.play();
          }
        },
        { once: true }
      );

      void video.load();
    }
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        key={src}
        controls={controls}
        autoPlay={autoPlay}
        className={className}
        onEnded={onEnded}
      />

      {showQualityMenu && qualities.length > 0 && (
        <div className="pointer-events-none absolute right-3 bottom-14 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="pointer-events-auto gap-1.5 bg-black/75 text-white hover:bg-black/90"
              >
                <Settings className="h-4 w-4" />
                {selectedLabel}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="pointer-events-auto min-w-32"
            >
              <DropdownMenuRadioGroup
                value={selectedQuality}
                onValueChange={handleQualityChange}
              >
                <DropdownMenuRadioItem value="auto">
                  Auto
                </DropdownMenuRadioItem>

                {qualities.map((quality) => (
                  <DropdownMenuRadioItem
                    key={quality.value}
                    value={quality.value}
                  >
                    {quality.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}
