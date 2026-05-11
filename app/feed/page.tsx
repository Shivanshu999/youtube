import { auth } from "@/auth";

import { SignOut } from "@/app/components/signout-button";

export default async function FeedPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">
            Welcome {session?.user?.name}
          </h1>

          <p className="text-zinc-400 mt-2">You are authenticated.</p>
        </div>

        <SignOut />
      </div>
    </div>
  );
}