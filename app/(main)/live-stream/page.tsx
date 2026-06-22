"use client";

import { useState } from "react";

interface StreamData {
  streamId: string;
  streamKey: string;
  ingestUrl: string;
  playbackUrl: string | null;
  status: string;
}

export default function LiveStreamPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [stream, setStream] =
    useState<StreamData | null>(null);

  async function createStream() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/live-stream",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            description,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Failed to create stream"
        );
      }

      setStream(data);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-black">
          Create Live Stream
        </h1>

        {!stream ? (
          <div className="space-y-5 rounded-2xl bg-zinc-900 p-6">
            <div>
              <label className="mb-2 block text-sm">
                Stream Title
              </label>

              <input
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
                placeholder="My Live Stream"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="h-32 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3"
              />
            </div>

            <button
              onClick={createStream}
              disabled={
                loading || !title
              }
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold"
            >
              {loading
                ? "Creating..."
                : "Create Stream"}
            </button>
          </div>
        ) : (
          <div className="space-y-5 rounded-2xl bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">
              Stream Created
            </h2>

            <div>
              <p className="text-zinc-400">
                Stream ID
              </p>

              <p className="break-all font-mono">
                {stream.streamId}
              </p>
            </div>

            <div>
              <p className="text-zinc-400">
                RTMP Server URL
              </p>

              <p className="break-all rounded-lg bg-zinc-950 p-3 font-mono">
                {stream.ingestUrl}
              </p>
            </div>

            <div>
              <p className="text-zinc-400">
                Stream Key
              </p>

              <p className="break-all rounded-lg bg-zinc-950 p-3 font-mono">
                {stream.streamKey}
              </p>
            </div>

            <div>
              <p className="text-zinc-400">
                Status
              </p>

              <p>{stream.status}</p>
            </div>

            <div className="rounded-xl border border-yellow-700 bg-yellow-950 p-4 text-sm">
              Open OBS Studio →
              Settings →
              Stream
              <br />
              <br />
              Service: Custom
              <br />
              Server:
              {` ${stream.ingestUrl}`}
              <br />
              Stream Key:
              {` ${stream.streamKey}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}