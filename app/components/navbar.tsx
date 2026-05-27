import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Radio } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";

import { SignOut } from "./signout-button";
import DeleteUserButton from "./delete-user-button";

export default async function Navbar() {
  const session = await auth();

  const name = session?.user?.name || "User";

  return (
    <nav className="w-full border-b border-zinc-800 bg-black px-6 py-4">
      <div className="flex items-center justify-between gap-6">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg">
            Y
          </div>

          <h1 className="text-xl font-bold text-white">YouTube Clone</h1>
        </div>

        {/* CENTER SEARCH */}
        <div className="flex-1 max-w-2xl">
          <Input
            placeholder="Search videos..."
            className="bg-zinc-900 border-zinc-700 text-white h-11 rounded-full px-6"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/live-stream"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-sm font-semibold text-red-300 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-200"
          >
            <Radio size={16} />
            <span className="hidden sm:inline">Go Live</span>
          </Link>

          {/* RIGHT AVATAR */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none cursor-pointer">
              <Avatar className="w-11 h-11">
                <AvatarImage src={session?.user?.image || ""} />

                <AvatarFallback className="bg-red-600 text-white font-bold">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-60 bg-zinc-950 border border-zinc-800 text-white"
            >
              <div className="px-3 py-2">
                <p className="font-semibold">{session?.user?.name}</p>

                <p className="text-xs text-zinc-400">{session?.user?.email}</p>
              </div>

              <DropdownMenuSeparator className="bg-zinc-800" />

              <div className="px-2 py-1">
                <SignOut />
              </div>

              <DropdownMenuSeparator className="bg-zinc-900" />

              <div className="px-2 py-1">
                <DeleteUserButton />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
