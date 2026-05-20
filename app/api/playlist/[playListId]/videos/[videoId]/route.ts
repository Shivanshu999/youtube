import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface Params{
    params: Promise<{uploadId: string}>
}


export async function DELETE(req: NextRequest, {params}: Params) {
    try{
        const uploadId = await params;
        await prisma.playlistVideo.delete({
            where: {
                id: uploadId.uploadId
            }
        })

        return NextResponse.json({message: "Video removed from playlist"})

    }catch(e){
        console.log(e);
        return NextResponse.json({error: "Failed to remove video from playlist"}, {status: 500})
    }
}