import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({
          redirectTo: "/login",
        });
      }}
    >
      <button
        type="submit"
        className="rounded-xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-500 transition-all"
      >
        Sign Out
      </button>
    </form>
  );
}