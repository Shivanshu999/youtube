import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{
    historyId: string;
  }>;
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { historyId } = await params;

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const historyItem = await prisma.watchHistory.findUnique({
      where: {
        id: historyId,
      },
    });

    if (!historyItem || historyItem.userId !== currentUser.id) {
      return NextResponse.json(
        { error: "History item not found" },
        { status: 404 },
      );
    }

    await prisma.watchHistory.delete({
      where: {
        id: historyId,
      },
    });

    return NextResponse.json(
      { message: "History item deleted successfully" },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
