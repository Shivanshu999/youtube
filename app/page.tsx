import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SignIn from "./components/sign-in";

export default async function Home() {
  const session = await auth();

  // User logged in
  if (session?.user) {
    redirect("/feed");
  }

  // User not logged in
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
          Welcome to YouTube Clone
        </h1>

        <SignIn />
      </div>
    </main>
  );
}