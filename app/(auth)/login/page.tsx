import { auth } from "@/auth"
import { redirect } from "next/navigation"
import AuthCard from "../components/auth-card"

export default async function LoginPage (){
    const session = await auth()
    if(session?.user){
        redirect("/feed")
    }
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <AuthCard />
    </div>
    )

}