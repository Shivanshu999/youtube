import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SignIn from "./components/sign-in";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
          <div>
            <h1 className="text-5xl font-black tracking-tight leading-tight">
              Stream.
              <br />
              Upload.
              <br />
              Go Live.
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-md leading-relaxed">
              Build your audience, upload videos, go live, and manage your
              content — all in one modern streaming platform.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white" />
              <p className="text-white/90">Realtime livestreams</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white" />
              <p className="text-white/90">Creator subscriptions</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white" />
              <p className="text-white/90">Upload videos instantly</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-xl font-bold">
                  Y
                </div>

                <div>
                  <h2 className="text-2xl font-bold">YouTube Clone</h2>
                  <p className="text-zinc-400 text-sm">
                    Welcome back to your platform
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-black tracking-tight">
                Sign in
              </h1>

              <p className="text-zinc-400 mt-2">
                Continue with your preferred provider.
              </p>
            </div>

            <div className="space-y-4">
              <form
                action={async () => {
                  "use server";

                  const { signIn } = await import("@/auth");

                  await signIn("google", {
                    redirectTo: "/feed",
                  });
                }}
              >
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white text-black py-4 font-semibold hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2.1 1.6-4.5 2.4-7.2 2.4-5.3 0-9.8-3.3-11.4-8l-6.5 5C9.5 39.5 16.1 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.5 6.7l.1-.1 6.2 5.2C34.7 40.1 44 34 44 24c0-1.3-.1-2.3-.4-3.5z"
                    />
                  </svg>

                  Continue with Google
                </button>
              </form>

              <button className="w-full rounded-2xl border border-zinc-800 py-4 font-medium hover:bg-zinc-900 transition-all cursor-pointer">
                Continue with GitHub
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-zinc-500 leading-relaxed">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
