"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { UploadDropzone } from "@/app/lib/uploadthings";
import { Loader2, UploadCloud } from "lucide-react";
export default function UploadPage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [isTranscoding, setIsTranscoding] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [processingProgress, setProcessingProgress] = useState(0);

  const [processingStatus, setProcessingStatus] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Upload Video</h1>
          <p className="mt-2 text-zinc-400">
            Share your content with the world
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Video Upload */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="mb-4 text-xl font-semibold">Video</h2>

              {!videoUrl ? (
                <div className="rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-950 p-6 transition hover:border-red-500">
                  <UploadDropzone
                    endpoint="videoUploader"
                    appearance={{
                      container: "border-none bg-transparent p-0 min-h-[250px]",
                      uploadIcon: "text-red-500",
                      label: "text-white text-lg",
                      allowedContent: "text-zinc-400",
                      button:
                        "bg-red-600 text-white ut-ready:bg-red-600 ut-uploading:bg-red-500 hover:bg-red-700",
                    }}
                    onUploadBegin={() => {
                      setIsUploadingFile(true);
                    }}
                    onClientUploadComplete={(res) => {
                      setVideoUrl(res?.[0]?.ufsUrl);
                      setIsUploadingFile(false);
                    }}
                    onUploadError={(error) => {
                      console.log(error);
                      setIsUploadingFile(false);
                    }}
                  />

                  {isUploadingFile && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-400">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading video to storage...
                    </div>
                  )}
                </div>
              ) : (
                <video
                  controls
                  className="h-[300px] w-full rounded-2xl object-cover"
                  src={videoUrl}
                />
              )}
            </div>

            {/* Thumbnail Upload */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="mb-4 text-xl font-semibold">Thumbnail</h2>

              {!thumbnailUrl ? (
                <div className="rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-950 p-6 transition hover:border-purple-500">
                  <UploadDropzone
                    endpoint="imageUploader"
                    appearance={{
                      container: "border-none bg-transparent p-0 min-h-[220px]",
                      uploadIcon: "text-purple-500",
                      label: "text-white text-lg",
                      allowedContent: "text-zinc-400",
                      button:
                        "bg-purple-600 text-white ut-ready:bg-purple-600 ut-uploading:bg-purple-500 hover:bg-purple-700",
                    }}
                    onClientUploadComplete={(res) => {
                      setThumbnailUrl(res?.[0]?.ufsUrl);
                      setProcessingStatus(null);
                      setProcessingProgress(0);
                    }}
                  />
                </div>
              ) : (
                <div className="relative h-[220px] overflow-hidden rounded-2xl">
                  <Image
                    src={thumbnailUrl}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
            <h2 className="mb-8 text-2xl font-bold">Video Details</h2>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Enter video title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-red-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Description
                </label>

                <textarea
                  placeholder="Tell viewers about your video"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition focus:border-red-500"
                />
              </div>

              {/* Visibility */}
              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-300">
                  Visibility
                </label>

                <div className="flex gap-4">
                  <button className="rounded-xl border border-red-500 bg-red-500/20 px-5 py-3 text-sm font-medium text-red-400">
                    Public
                  </button>

                  <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300">
                    Private
                  </button>

                  <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300">
                    Unlisted
                  </button>
                </div>
              </div>

              {/* Publish */}

              {processingStatus && (
                <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{processingStatus}</span>

                    <span>{processingProgress}%</span>
                  </div>

                  <div className="h-2 w-full rounded bg-zinc-800">
                    <div
                      className="h-2 rounded bg-red-500 transition-all duration-500"
                      style={{
                        width: `${processingProgress}%`,
                      }}
                    />
                  </div>
                </div>
              )}
              <button
                disabled={
                  !videoUrl ||
                  !thumbnailUrl ||
                  !title.trim() ||
                  isUploadingFile ||
                  isTranscoding
                }
                onClick={async () => {
                  try {
                    setIsTranscoding(true);

                    const response = await fetch("/api/upload", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        title,
                        description,
                        videoUrl,
                        thumbnailUrl,
                      }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                      throw new Error(data?.error ?? "Failed to upload video");
                    }

                    const uploadId = data.uploadId;

                    setProcessingStatus("QUEUED");

                    intervalRef.current = setInterval(async () => {
                      try {
                        const statusResponse = await fetch(
                          `/api/upload/${uploadId}/status`,
                        );

                        const statusData = await statusResponse.json();

                        const statusMap: Record<string, string> = {
                          QUEUED: "Waiting in queue...",
                          PROCESSING: "Transcoding video...",
                          READY: "Completed",
                          FAILED: "Failed",
                        };

                        setProcessingStatus(
                          statusMap[statusData.status] ?? statusData.status,
                        );

                        setProcessingProgress(statusData.progress ?? 0);

                        if (statusData.status === "READY") {
                          if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                          }

                          setProcessingProgress(100);

                          setIsTranscoding(false);

                          alert("Video processed successfully!");

                          setTitle("");
                          setDescription("");
                          setVideoUrl("");
                          setThumbnailUrl("");
                          setProcessingStatus(null);
                          setProcessingProgress(0);
                        }

                        if (statusData.status === "FAILED") {
                          if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                          }

                          setProcessingStatus("Failed");

                          setIsTranscoding(false);

                          alert("Video processing failed");
                        }
                      } catch (error) {
                        console.error(error);
                      }
                    }, 3000);
                  } catch (error) {
                    console.error(error);

                    setIsTranscoding(false);

                    alert(
                      error instanceof Error
                        ? error.message
                        : "Something went wrong",
                    );
                  }
                }}
                className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 text-lg font-semibold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
              >
                {isTranscoding ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />

                    {processingStatus === "QUEUED"
                      ? "Waiting in queue..."
                      : `Processing video (${processingProgress}%)`}
                  </>
                ) : (
                  <>
                    <UploadCloud className="h-5 w-5" />
                    Publish Video
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
