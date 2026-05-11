import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthCard from "../components/auth-card";

export default async function SignupPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/feed");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <AuthCard
        title="Create account"
        subtitle="Start building your creator platform"
        buttonText="Join the platform today"
        footerText="Already have an account?"
        footerLinkText="Login"
        footerLinkHref="/login"
      />
    </div>
  );
}