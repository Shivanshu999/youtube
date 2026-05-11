import Link from "next/link";

import {
  History,
  Radio,
  ListVideo,
  Upload,
  Clock3,
  Home,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-73px)] border-r border-zinc-800 bg-black text-white p-4 sticky top-[73px]">
      <div className="space-y-2">
        <Link
          href="/feed"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <Home size={22} />
          <span>Feed</span>
        </Link>

        <Link
          href="/history"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <History size={22} />
          <span>History</span>
        </Link>

        <Link
          href="/live-stream"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <Radio size={22} />
          <span>Live Stream</span>
        </Link>

        <Link
          href="/playlist"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <ListVideo size={22} />
          <span>Playlist</span>
        </Link>

        <Link
          href="/upload"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <Upload size={22} />
          <span>Upload</span>
        </Link>

        <Link
          href="/watch-later"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
        >
          <Clock3 size={22} />
          <span>Watch Later</span>
        </Link>
      </div>
    </aside>
  );
}