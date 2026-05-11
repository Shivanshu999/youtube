"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Camera, ImageIcon, Sparkles } from "lucide-react";
import { UploadButton } from "@/app/components/uploadthing";
import { createChannel } from "@/app/actions/create-channel";

const uploadAppearance = {
  button:
    "w-full justify-center rounded-xl border border-white/15 bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 ut-ready:bg-red-500 ut-uploading:cursor-not-allowed ut-uploading:bg-red-400/70",
  container: "w-full flex flex-col items-stretch",
  allowedContent: "mt-2 text-xs text-zinc-400",
};

export default function CreateChannelPage() {
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [channelNamePreview, setChannelNamePreview] =
    useState("Your Channel");

  const profileInitial = useMemo(() => {
    const initial = channelNamePreview.trim().charAt(0).toUpperCase();
    return initial || "Y";
  }, [channelNamePreview]);

  return (
    <div className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-[#070707] px-4 py-8 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[6%] h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute right-[4%] top-1/3 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-500/20 via-orange-400/15 to-yellow-300/20 blur-3xl" />
      </div>

      <form
        action={createChannel}
        className="relative mx-auto w-full max-w-5xl animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-linear-to-br from-red-700 via-orange-500 to-amber-400 sm:h-64 md:h-72">
            {bannerUrl ? (
              <Image
                src={bannerUrl}
                alt="Channel banner preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            ) : null}

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/5" />

            <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                  <Sparkles size={14} />
                  Creator Studio
                </p>

                <h1 className="mt-3 max-w-[16ch] text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {channelNamePreview}
                </h1>

                <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
                  Build your channel identity before you publish your first
                  video.
                </p>
              </div>

              <div className="hidden rounded-2xl border border-white/25 bg-black/30 px-4 py-3 text-right backdrop-blur-md md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Banner Preview
                </p>

                <p className="mt-1 text-sm text-white/90">
                  2048 x 1152 works best
                </p>
              </div>
            </div>

            <div className="absolute -bottom-14 left-6 sm:-bottom-16 sm:left-10">
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-zinc-950 bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.6)] sm:h-32 sm:w-32">
                {profilePictureUrl ? (
                  <Image
                    src={profilePictureUrl}
                    alt="Profile picture preview"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                ) : (
                  <span className="text-4xl font-black text-white sm:text-5xl">
                    {profileInitial}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-5 pt-20 sm:p-8 sm:pt-24 lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:p-10 lg:pt-24">
            <section className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                  Channel Details
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Create Your Channel
                </h2>

                <p className="mt-2 text-zinc-400">
                  Give viewers a recognizable name and an intro that explains
                  what you create.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="channelName"
                    className="mb-2 block text-sm font-semibold text-zinc-300"
                  >
                    Channel Name
                  </label>

                  <input
                    id="channelName"
                    name="channelName"
                    type="text"
                    placeholder="Enter your channel name"
                    required
                    onChange={(event) => {
                      const value = event.target.value.trim();
                      setChannelNamePreview(value || "Your Channel");
                    }}
                    className="h-14 w-full rounded-2xl border border-zinc-700 bg-zinc-900/85 px-5 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-semibold text-zinc-300"
                  >
                    Description
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    placeholder="Tell viewers about your content"
                    required
                    className="min-h-36 w-full rounded-2xl border border-zinc-700 bg-zinc-900/85 p-5 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/30"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/55 p-5">
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-xl bg-red-500/20 p-2.5 text-red-200">
                    <Camera size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Profile Picture
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Use a square image for better results.
                    </p>
                  </div>
                </div>

                <UploadButton
                  endpoint="imageUploader"
                  appearance={uploadAppearance}
                  content={{
                    button({ ready }) {
                      return ready ? "Upload Profile" : "Loading...";
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    const uploaded =
                      (res[0] as { ufsUrl?: string; url?: string })?.ufsUrl ||
                      (res[0] as { ufsUrl?: string; url?: string })?.url ||
                      "";
                    setProfilePictureUrl(uploaded);
                  }}
                />

                <p className="mt-3 text-xs text-zinc-500">
                  {profilePictureUrl
                    ? "Profile image uploaded."
                    : "Recommended: 800 x 800."}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-900/55 p-5">
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-xl bg-orange-500/20 p-2.5 text-orange-200">
                    <ImageIcon size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Banner Image
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Add a wide visual that defines your brand.
                    </p>
                  </div>
                </div>

                <UploadButton
                  endpoint="imageUploader"
                  appearance={uploadAppearance}
                  content={{
                    button({ ready }) {
                      return ready ? "Upload Banner" : "Loading...";
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    const uploaded =
                      (res[0] as { ufsUrl?: string; url?: string })?.ufsUrl ||
                      (res[0] as { ufsUrl?: string; url?: string })?.url ||
                      "";
                    setBannerUrl(uploaded);
                  }}
                />

                <p className="mt-3 text-xs text-zinc-500">
                  {bannerUrl
                    ? "Banner image uploaded."
                    : "Recommended: 2048 x 1152."}
                </p>
              </div>
            </section>

            <input
              type="hidden"
              name="profilePictureUrl"
              value={profilePictureUrl}
            />

            <input
              type="hidden"
              name="bannerUrl"
              value={bannerUrl}
            />

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="h-14 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-lg font-bold text-white transition-transform duration-200 hover:scale-[1.01] hover:brightness-110"
              >
                Create Channel
              </button>

              <p className="mt-3 text-center text-xs text-zinc-500">
                Upload both images before submitting to complete your channel
                setup.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
