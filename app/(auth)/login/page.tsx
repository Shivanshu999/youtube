import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthCard from "../components/auth-card";
import { prisma } from "@/app/lib/prisma";
import { channel } from "diagnostics_channel";

export default async function LoginPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }
  
  const user = await prisma.user.findUnique({
    ...
    include:{
        channels: true
    },
  });

  if(!user?.channels.length){
    redirect("/create-channel")
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