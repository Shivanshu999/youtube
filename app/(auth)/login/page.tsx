import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthCard from "../components/auth-card";
import { prisma } from "@/app/lib/prisma";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email!,
        },
        include: {
            channels: true
        }
    })
    if(!user?.channels.length){
        redirect("/create-channel")
    }
    redirect("/feed");
  }
  
  

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <AuthCard
        title="Sign in"
        subtitle="Welcome back to your platform"
        buttonText="Access your account"
        footerText="Don't have an account?"
        footerLinkText="Sign up"
        footerLinkHref="/signup"
      />
    </div>
  );
}