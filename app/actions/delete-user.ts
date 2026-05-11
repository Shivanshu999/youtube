import { auth, signOut } from "@/auth";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function deleteUser(){
    const session = await auth()

    if(!session?.user?.email){
        throw new Error("Unauthorized")
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })
    if(!user){
        throw new Error("User not found")
    }

    await prisma.user.delete({
        where: {
            id: user.id
        }
    });

    await signOut({
        redirect: false,
    })

    redirect("/signup")
}