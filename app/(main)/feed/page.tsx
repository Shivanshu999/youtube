import { getCurrrentUser } from "@/app/lib/current-user";
import { redirect } from "next/navigation";

export default async function FeedPage() {
  const user = await getCurrrentUser()

  if(!user){
    redirect("/login")
  }

  if(!user.channels || user.channels.length === 0){
    redirect("/create-channel")
  }


  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">
            Welcome to feed page
          </h1>

          <p className="text-zinc-400 mt-2">You are authenticated.</p>
        </div>
      </div>
    </div>
  );
}