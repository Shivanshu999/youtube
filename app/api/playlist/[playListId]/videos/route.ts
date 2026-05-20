import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface Params{
    params: Promise<{playListId: string}>
}

export async function POST(req: NextRequest, {params}: Params) {
    try{
            const session = await auth();
            if(!session?.user?.email) return NextResponse.json({error: "Unauthorized"}, {status: 401})
                const body = req.json()
                const {playlistId} = await params;

                const count = await prisma.playlistVideo.count({
                    where: {
                        playlistId
                    }
                })

                const playlistVideo = await prisma.playlistVideo.create({
                    data: {
                        playlistId,
                        uploadId: body.uploadId,
                        order: count + 1
                    }
                })
                return NextResponse.json(playlistVideo)

    }catch(e){
        console.log(e)
        return NextResponse.json({error: "Internal server error"})
    }
}