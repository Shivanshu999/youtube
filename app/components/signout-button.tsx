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
      className="w-full"
    >
      <button
        type="submit"
        className="w-full text-left cursor-pointer"
      >
        Logout
      </button>
    </form>
  );
}