import { prisma } from "@/app/lib/prisma"
import { auth } from "@/auth"

export const getCurrentUser = async ()=> {
   const session = await auth()

   if(!session?.user?.email){
    throw new Error("Unauthorized")
   }

   const user = await prisma.user.findUnique({
    where: {
        email: session.user.email
    },
    include: {
        channels: true
    }
   })
   return user
}