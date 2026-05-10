import GoogleSignInButton from "./google-sign-in-button";

export default function AuthCard() {
  return (
    <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
      {/* LEFT SIDE */}
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
            Build your audience, upload videos, go live, and manage your content
            on one modern creator platform.
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

      {/* RIGHT SIDE */}
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
            <GoogleSignInButton />

           
          </div>

          <div className="mt-8 text-center text-sm text-zinc-500 leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}