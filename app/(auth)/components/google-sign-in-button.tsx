import { signIn } from "@/auth";

export default function GoogleSignInButton() {
  return (
    <form
      action={async () => {
        "use server";

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
        </svg>

        Continue with Google
      </button>
    </form>
  );
}