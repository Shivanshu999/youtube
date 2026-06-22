├── CLAUDE.md
├── worker/
    └── transcoder.worker.ts
├── app/ (33300 tokens)
    ├── favicon.ico
    ├── api/ (5800 tokens)
    │   ├── auth/ (100 tokens)
    │   │   └── [...nextauth]/ (100 tokens)
    │   │   │   └── route.ts
    │   ├── uploadthing/ (600 tokens)
    │   │   ├── route.ts
    │   │   └── core.ts (500 tokens)
    │   ├── watch-later/ (600 tokens)
    │   │   ├── [watchLaterId]/ (200 tokens)
    │   │   │   └── route.ts (200 tokens)
    │   │   └── route.ts (400 tokens)
    │   ├── view-video/ (1200 tokens)
    │   │   ├── videos/ (700 tokens)
    │   │   │   └── [videoId]/ (700 tokens)
    │   │   │   │   ├── comments/ (300 tokens)
    │   │   │   │       └── route.ts (300 tokens)
    │   │   │   │   └── like/ (400 tokens)
    │   │   │   │       └── route.ts (400 tokens)
    │   │   └── route.ts (500 tokens)
    │   ├── history/ (400 tokens)
    │   │   └── [historyId]/ (400 tokens)
    │   │   │   └── route.ts (400 tokens)
    │   ├── playlist/ (2300 tokens)
    │   │   ├── [playListId]/ (1300 tokens)
    │   │   │   └── videos/ (1300 tokens)
    │   │   │   │   ├── [videoId]/ (500 tokens)
    │   │   │   │       └── route.ts (500 tokens)
    │   │   │   │   └── route.ts (800 tokens)
    │   │   └── route.ts (1000 tokens)
    │   └── upload/ (600 tokens)
    │   │   └── route.ts (600 tokens)
    ├── lib/ (2500 tokens)
    │   ├── redis.ts
    │   ├── video-queu.ts
    │   ├── prisma.ts
    │   ├── uploadthings.ts
    │   ├── current-user.ts
    │   └── hls-transcoder.ts (2000 tokens)
    ├── page.tsx
    ├── components/ (8600 tokens)
    │   ├── sign-in.tsx
    │   ├── uploadthing.tsx
    │   ├── delete-user-button.tsx
    │   ├── signout-button.tsx
    │   ├── feed-video-actions.tsx (200 tokens)
    │   ├── increment-view.tsx (200 tokens)
    │   ├── playlist-video-player.tsx (200 tokens)
    │   ├── like-button.tsx (400 tokens)
    │   ├── sidebar.tsx (500 tokens)
    │   ├── comment-form.tsx (500 tokens)
    │   ├── add-to-watch-later-button.tsx (700 tokens)
    │   ├── navbar.tsx (700 tokens)
    │   ├── create-playlist-form.tsx (700 tokens)
    │   ├── WatchLaterVideoMenu.tsx (900 tokens)
    │   ├── HistoryVideoMenu.tsx (1000 tokens)
    │   └── hls-video-player.tsx (2200 tokens)
    ├── (main)/ (12500 tokens)
    │   ├── layout.tsx
    │   ├── live-stream/ (100 tokens)
    │   │   └── page.tsx
    │   ├── playlist/ (3500 tokens)
    │   │   ├── [playListId]/ (1400 tokens)
    │   │   │   └── page.tsx (1400 tokens)
    │   │   └── page.tsx (2100 tokens)
    │   ├── watch/ (1800 tokens)
    │   │   └── [videoId]/ (1800 tokens)
    │   │   │   └── page.tsx (1800 tokens)
    │   ├── upload/ (2100 tokens)
    │   │   └── page.tsx (2100 tokens)
    │   ├── history/ (2400 tokens)
    │   │   └── page.tsx (2400 tokens)
    │   └── feed/ (2500 tokens)
    │   │   └── page.tsx (2500 tokens)
    ├── (auth)/ (1800 tokens)
    │   ├── components/ (1300 tokens)
    │   │   ├── signout-button.tsx
    │   │   ├── google-sign-in-button.tsx (300 tokens)
    │   │   └── auth-card.tsx (900 tokens)
    │   ├── signup/ (200 tokens)
    │   │   └── page.tsx (200 tokens)
    │   └── login/ (300 tokens)
    │   │   └── page.tsx (300 tokens)
    ├── actions/ (500 tokens)
    │   ├── delete-user.ts (200 tokens)
    │   └── create-channel.ts (300 tokens)
    ├── layout.tsx (300 tokens)
    └── globals.css (1100 tokens)
├── postcss.config.mjs
├── public/ (800 tokens)
    ├── vercel.svg
    ├── window.svg
    ├── file.svg
    ├── globe.svg (200 tokens)
    └── next.svg (300 tokens)
├── prisma/ (8900 tokens)
    ├── migrations/ (6400 tokens)
    │   ├── 20260511152419_channel/ (100 tokens)
    │   │   └── migration.sql
    │   ├── migration_lock.toml
    │   ├── 20260511050317_auth_fix/ (100 tokens)
    │   │   └── migration.sql
    │   ├── 20260511103231_auth/ (100 tokens)
    │   │   └── migration.sql
    │   ├── 20260511151958_create_channel/ (200 tokens)
    │   │   └── migration.sql (200 tokens)
    │   ├── 20260512151240_update_watch_history/ (200 tokens)
    │   │   └── migration.sql (200 tokens)
    │   ├── 20260513182713_watch_later_schema_added/ (300 tokens)
    │   │   └── migration.sql (300 tokens)
    │   ├── 20260514113515_fix_playlist_schema/ (500 tokens)
    │   │   └── migration.sql (500 tokens)
    │   ├── 20260530091337_live_schema/ (900 tokens)
    │   │   └── migration.sql (900 tokens)
    │   ├── 20260506081021_youtube_schema/ (1900 tokens)
    │   │   └── migration.sql (1900 tokens)
    │   └── 20260511045903_auth_fix/ (2000 tokens)
    │   │   └── migration.sql (2000 tokens)
    └── schema.prisma (2500 tokens)
├── lib/ (100 tokens)
    └── utils.ts
├── proxy.ts
├── provider.tsx
├── AGENTS.md
├── prisma.config.ts
├── auth.ts
├── eslint.config.mjs (200 tokens)
├── components.json (200 tokens)
├── .gitignore (200 tokens)
├── tsconfig.json (200 tokens)
├── components/ (4300 tokens)
    └── ui/ (4300 tokens)
    │   ├── input.tsx (300 tokens)
    │   ├── sonner.tsx (300 tokens)
    │   ├── button.tsx (800 tokens)
    │   ├── avatar.tsx (800 tokens)
    │   └── dropdown-menu.tsx (2100 tokens)
├── package.json (300 tokens)
├── next.config.ts (400 tokens)
└── README.md (600 tokens)


/CLAUDE.md:
--------------------------------------------------------------------------------
1 | @AGENTS.md
2 | 


--------------------------------------------------------------------------------
/worker/transcoder.worker.ts:
--------------------------------------------------------------------------------
1 | 


--------------------------------------------------------------------------------
/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Shivanshu999/youtube/HEAD/app/favicon.ico


--------------------------------------------------------------------------------
/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | const config = {
2 |   plugins: {
3 |     "@tailwindcss/postcss": {},
4 |   },
5 | };
6 | 
7 | export default config;
8 | 


--------------------------------------------------------------------------------
/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>


--------------------------------------------------------------------------------
/app/api/auth/[...nextauth]/route.ts:
--------------------------------------------------------------------------------
1 | import { handlers } from "@/auth" // Referring to the auth.ts we just created
2 | export const { GET, POST } = handlers


--------------------------------------------------------------------------------
/prisma/migrations/20260511152419_channel/migration.sql:
--------------------------------------------------------------------------------
1 | -- AlterTable
2 | ALTER TABLE "User" ADD COLUMN     "firstName" TEXT,
3 | ADD COLUMN     "lastName" TEXT;
4 | 


--------------------------------------------------------------------------------
/app/lib/redis.ts:
--------------------------------------------------------------------------------
1 | import IORedis from "ioredis";
2 | 
3 | export const redis = new IORedis({
4 |   host: "localhost",
5 |   port: 6379,
6 |   maxRetriesPerRequest: null,
7 | });


--------------------------------------------------------------------------------
/prisma/migrations/migration_lock.toml:
--------------------------------------------------------------------------------
1 | # Please do not edit this file manually
2 | # It should be added in your version-control system (e.g., Git)
3 | provider = "postgresql"
4 | 


--------------------------------------------------------------------------------
/app/lib/video-queu.ts:
--------------------------------------------------------------------------------
1 | import { Queue } from "bullmq";
2 | import { redis } from "./redis";
3 | 
4 | export const videoQueue = new Queue("video-processing", {
5 |   connection: redis,
6 | });


--------------------------------------------------------------------------------
/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from "clsx"
2 | import { twMerge } from "tailwind-merge"
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs))
6 | }
7 | 


--------------------------------------------------------------------------------
/proxy.ts:
--------------------------------------------------------------------------------
1 | export { auth as proxy } from "@/auth"
2 | 
3 | export const config = {
4 |     matcher: ["/feed/:path*", "/upload/:path*", "/live-stream/:path*", "/channel/:path*", "/playlist/:path*"],
5 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260511050317_auth_fix/migration.sql:
--------------------------------------------------------------------------------
1 | -- AlterTable
2 | ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3),
3 | ADD COLUMN     "image" TEXT,
4 | ADD COLUMN     "name" TEXT;
5 | 


--------------------------------------------------------------------------------
/app/page.tsx:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import { redirect } from "next/navigation";
 3 | 
 4 | export default async function HomePage() {
 5 |   const session = await auth();
 6 | 
 7 |   if (session?.user) {
 8 |     redirect("/feed");
 9 |   }
10 | 
11 |   redirect("/login");
12 | }


--------------------------------------------------------------------------------
/app/lib/prisma.ts:
--------------------------------------------------------------------------------
1 | import { PrismaClient } from "../../generated/prisma/client"
2 | const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
3 |  
4 | export const prisma =
5 |   globalForPrisma.prisma || new PrismaClient()
6 |  
7 | if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
8 | 


--------------------------------------------------------------------------------
/provider.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { SessionProvider } from "next-auth/react";
 4 | 
 5 | export default function Providers({
 6 |   children,
 7 | }: {
 8 |   children: React.ReactNode;
 9 | }) {
10 |   return (
11 |     <SessionProvider>
12 |       
13 |         {children}
14 |       
15 |     </SessionProvider>
16 |   );
17 | }


--------------------------------------------------------------------------------
/AGENTS.md:
--------------------------------------------------------------------------------
1 | <!-- BEGIN:nextjs-agent-rules -->
2 | # This is NOT the Next.js you know
3 | 
4 | This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
5 | <!-- END:nextjs-agent-rules -->
6 | 


--------------------------------------------------------------------------------
/app/components/sign-in.tsx:
--------------------------------------------------------------------------------
 1 | 
 2 | import { signIn } from "@/auth"
 3 |  
 4 | export default function SignIn() {
 5 |   return (
 6 |     <form
 7 |       action={async () => {
 8 |         "use server"
 9 |         await signIn("google")
10 |       }}
11 |     >
12 |       <button type="submit">Signin with Google</button>
13 |     </form>
14 |   )
15 | } 


--------------------------------------------------------------------------------
/app/api/uploadthing/route.ts:
--------------------------------------------------------------------------------
 1 | import { createRouteHandler } from "uploadthing/next";
 2 | 
 3 | import { ourFileRouter } from "./core";
 4 | 
 5 | // Export routes for Next App Router
 6 | export const { GET, POST } = createRouteHandler({
 7 |   router: ourFileRouter,
 8 | 
 9 |   // Apply an (optional) custom config:
10 |   // config: { ... },
11 | });
12 | 


--------------------------------------------------------------------------------
/app/lib/uploadthings.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   generateUploadButton,
 3 |   generateUploadDropzone,
 4 | } from "@uploadthing/react";
 5 | 
 6 | import type { OurFileRouter } from "@/app/api/uploadthing/core";
 7 | 
 8 | export const UploadButton = generateUploadButton<OurFileRouter>();
 9 | export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
10 | 


--------------------------------------------------------------------------------
/public/window.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>


--------------------------------------------------------------------------------
/app/components/uploadthing.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import {
 4 |   generateUploadButton,
 5 |   generateUploadDropzone,
 6 | } from "@uploadthing/react";
 7 | 
 8 | import type { OurFileRouter } from "@/app/api/uploadthing/core";
 9 | 
10 | export const UploadButton =
11 |   generateUploadButton<OurFileRouter>();
12 | 
13 | export const UploadDropzone =
14 |   generateUploadDropzone<OurFileRouter>();


--------------------------------------------------------------------------------
/public/file.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>


--------------------------------------------------------------------------------
/app/components/delete-user-button.tsx:
--------------------------------------------------------------------------------
 1 | import { deleteUser } from "@/app/actions/delete-user";
 2 | 
 3 | export default function DeleteUserButton() {
 4 |   return (
 5 |     <form action={deleteUser}>
 6 |       <button
 7 |         type="submit"
 8 |         className="text-red-700 w-full text-left cursor-pointer"
 9 |       >
10 |         Delete Account
11 |       </button>
12 |     </form>
13 |   );
14 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260511103231_auth/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
 5 |   - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
 6 | 
 7 | */
 8 | -- AlterTable
 9 | ALTER TABLE "User" DROP COLUMN "emailVerified",
10 | DROP COLUMN "password";
11 | 


--------------------------------------------------------------------------------
/prisma.config.ts:
--------------------------------------------------------------------------------
 1 | 
 2 | // This file was generated by Prisma and assumes you have installed the following:
 3 | // npm install --save-dev prisma dotenv
 4 | import "dotenv/config";
 5 | import { defineConfig, env } from "prisma/config";
 6 | 
 7 | export default defineConfig({
 8 |   schema: "prisma/schema.prisma",
 9 |   migrations: {
10 |     path: "prisma/migrations",
11 |   },
12 |   engine: "classic",
13 |   datasource: {
14 |     url: env("DATABASE_URL"),
15 |   },
16 | });
17 | 


--------------------------------------------------------------------------------
/app/(main)/layout.tsx:
--------------------------------------------------------------------------------
 1 | import Navbar from "../components/navbar";
 2 | import Sidebar from "../components/sidebar";
 3 | 
 4 | export default function MainLayout({
 5 |   children,
 6 | }: {
 7 |   children: React.ReactNode;
 8 | }) {
 9 |   return (
10 |     <div className="min-h-screen bg-black">
11 |       <Navbar />
12 |       <div className="flex">
13 |         <Sidebar />
14 |         <main className="flex-1 min-w-0">{children}</main>
15 |       </div>
16 |     </div>
17 |   );
18 | }
19 | 


--------------------------------------------------------------------------------
/app/lib/current-user.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma"
 2 | import { auth } from "@/auth"
 3 | 
 4 | export const getCurrentUser = async ()=> {
 5 |    const session = await auth()
 6 | 
 7 |    if(!session?.user?.email){
 8 |     throw new Error("Unauthorized")
 9 |    }
10 | 
11 |    const user = await prisma.user.findUnique({
12 |     where: {
13 |         email: session.user.email
14 |     },
15 |     include: {
16 |         channels: true
17 |     }
18 |    })
19 |    return user
20 | }


--------------------------------------------------------------------------------
/app/components/signout-button.tsx:
--------------------------------------------------------------------------------
 1 | import { signOut } from "@/auth";
 2 | 
 3 | export function SignOut() {
 4 |   return (
 5 |     <form
 6 |       action={async () => {
 7 |         "use server";
 8 | 
 9 |         await signOut({
10 |           redirectTo: "/login",
11 |         });
12 |       }}
13 |       className="w-full"
14 |     >
15 |       <button
16 |         type="submit"
17 |         className="w-full text-left cursor-pointer"
18 |       >
19 |         Logout
20 |       </button>
21 |     </form>
22 |   );
23 | }


--------------------------------------------------------------------------------
/auth.ts:
--------------------------------------------------------------------------------
 1 | import NextAuth from "next-auth";
 2 | import Google from "next-auth/providers/google";
 3 | import { PrismaAdapter } from "@auth/prisma-adapter"
 4 | 
 5 | import { prisma } from "@/app/lib/prisma"
 6 | 
 7 | 
 8 | export const { handlers, signIn, signOut, auth } = NextAuth({
 9 | adapter: PrismaAdapter(prisma),
10 | 
11 |   providers: [
12 |     Google({
13 |       clientId: process.env.AUTH_GOOGLE_ID!,
14 |       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
15 |     }),
16 |   ],
17 | 
18 |   secret: process.env.AUTH_SECRET,
19 | });


--------------------------------------------------------------------------------
/app/(auth)/components/signout-button.tsx:
--------------------------------------------------------------------------------
 1 | import { signOut } from "@/auth";
 2 | 
 3 | export function SignOut() {
 4 |   return (
 5 |     <form
 6 |       action={async () => {
 7 |         "use server";
 8 | 
 9 |         await signOut({
10 |           redirectTo: "/login",
11 |         });
12 |       }}
13 |     >
14 |       <button
15 |         type="submit"
16 |         className="rounded-xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-500 transition-all"
17 |       >
18 |         Sign Out
19 |       </button>
20 |     </form>
21 |   );
22 | }


--------------------------------------------------------------------------------
/app/(main)/live-stream/page.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react'
 2 | 
 3 | const page = () => {
 4 |   return (
 5 |         <div className="min-h-screen bg-black text-white p-10">
 6 |       <div className="flex items-center justify-between">
 7 |         <div>
 8 |           <h1 className="text-4xl font-black">
 9 |             Welcome to your live stream page
10 |           </h1>
11 | 
12 |           <p className="text-zinc-400 mt-2">You are authenticated.</p>
13 |         </div>
14 |       </div>
15 |     </div>
16 |   )
17 | }
18 | 
19 | export default page
20 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260511151958_create_channel/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `dateOfBirth` on the `User` table. All the data in the column will be lost.
 5 |   - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
 6 |   - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
 7 | 
 8 | */
 9 | -- AlterTable
10 | ALTER TABLE "User" DROP COLUMN "dateOfBirth",
11 | DROP COLUMN "firstName",
12 | DROP COLUMN "lastName";
13 | 


--------------------------------------------------------------------------------
/eslint.config.mjs:
--------------------------------------------------------------------------------
 1 | import { defineConfig, globalIgnores } from "eslint/config";
 2 | import nextVitals from "eslint-config-next/core-web-vitals";
 3 | import nextTs from "eslint-config-next/typescript";
 4 | 
 5 | const eslintConfig = defineConfig([
 6 |   ...nextVitals,
 7 |   ...nextTs,
 8 |   // Override default ignores of eslint-config-next.
 9 |   globalIgnores([
10 |     // Default ignores of eslint-config-next:
11 |     ".next/**",
12 |     "out/**",
13 |     "build/**",
14 |     "next-env.d.ts",
15 |     "public/streams/**",
16 |   ]),
17 | ]);
18 | 
19 | export default eslintConfig;
20 | 


--------------------------------------------------------------------------------
/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "radix-nova",
 4 |   "rsc": true,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "",
 8 |     "css": "app/globals.css",
 9 |     "baseColor": "neutral",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "iconLibrary": "lucide",
14 |   "rtl": false,
15 |   "aliases": {
16 |     "components": "@/components",
17 |     "utils": "@/lib/utils",
18 |     "ui": "@/components/ui",
19 |     "lib": "@/lib",
20 |     "hooks": "@/hooks"
21 |   },
22 |   "menuColor": "default",
23 |   "menuAccent": "subtle",
24 |   "registries": {}
25 | }
26 | 


--------------------------------------------------------------------------------
/app/components/feed-video-actions.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import AddToPlaylistMenu from "@/app/components/add-to-playlist-menu";
 4 | import AddToWatchLaterButton from "@/app/components/add-to-watch-later-button";
 5 | 
 6 | interface FeedVideoActionsProps {
 7 |   videoId: string;
 8 | }
 9 | 
10 | export default function FeedVideoActions({
11 |   videoId,
12 | }: FeedVideoActionsProps) {
13 |   return (
14 |     <div className="mt-3 flex flex-wrap items-center gap-2">
15 |       <AddToWatchLaterButton
16 |         videoId={videoId}
17 |         compact
18 |       />
19 | 
20 |       <AddToPlaylistMenu
21 |         videoId={videoId}
22 |         compact
23 |       />
24 |     </div>
25 |   );
26 | }
27 | 


--------------------------------------------------------------------------------
/app/components/increment-view.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useEffect } from "react";
 4 | 
 5 | interface IncrementViewProps {
 6 |   videoId: string;
 7 | }
 8 | 
 9 | export default function IncrementView({
10 |   videoId,
11 | }: IncrementViewProps) {
12 | useEffect(() => {
13 |   async function increment() {
14 |     const res = await fetch("/api/view-video", {
15 |       method: "POST",
16 |       headers: {
17 |         "Content-Type": "application/json",
18 |       },
19 |       body: JSON.stringify({
20 |         videoId,
21 |       }),
22 |     });
23 | 
24 |     const data = await res.json();
25 | 
26 |     console.log(data);
27 |   }
28 | 
29 |   increment();
30 | }, [videoId]);
31 | 
32 |   return null;
33 | }


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.*
 7 | .yarn/*
 8 | !.yarn/patches
 9 | !.yarn/plugins
10 | !.yarn/releases
11 | !.yarn/versions
12 | 
13 | # testing
14 | /coverage
15 | 
16 | # next.js
17 | /.next/
18 | /out/
19 | 
20 | # production
21 | /build
22 | 
23 | # misc
24 | .DS_Store
25 | *.pem
26 | 
27 | # debug
28 | npm-debug.log*
29 | yarn-debug.log*
30 | yarn-error.log*
31 | .pnpm-debug.log*
32 | 
33 | # env files (can opt-in for committing if needed)
34 | .env*
35 | 
36 | # vercel
37 | .vercel
38 | 
39 | # typescript
40 | *.tsbuildinfo
41 | next-env.d.ts
42 | 
43 | /generated/prisma
44 | /public/streams
45 | 


--------------------------------------------------------------------------------
/app/components/playlist-video-player.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useRouter } from "next/navigation";
 4 | import HlsVideoPlayer from "@/app/components/hls-video-player";
 5 | 
 6 | interface PlaylistVideoPlayerProps {
 7 |   videoUrl: string;
 8 |   nextVideoUrl?: string;
 9 | }
10 | 
11 | export default function PlaylistVideoPlayer({
12 |   videoUrl,
13 |   nextVideoUrl,
14 | }: PlaylistVideoPlayerProps) {
15 |   const router = useRouter();
16 | 
17 |   return (
18 |     <HlsVideoPlayer
19 |       src={videoUrl}
20 |       controls
21 |       autoPlay
22 |       className="aspect-video w-full"
23 |       onEnded={() => {
24 |         if (nextVideoUrl) {
25 |           router.push(nextVideoUrl);
26 |         }
27 |       }}
28 |     />
29 |   );
30 | }
31 | 


--------------------------------------------------------------------------------
/app/(auth)/signup/page.tsx:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import { redirect } from "next/navigation";
 3 | import AuthCard from "../components/auth-card";
 4 | 
 5 | export default async function SignupPage() {
 6 |   const session = await auth();
 7 | 
 8 |   if (session?.user) {
 9 |     redirect("/feed");
10 |   }
11 | 
12 |   return (
13 |     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
14 |       <AuthCard
15 |         title="Create account"
16 |         subtitle="Start building your creator platform"
17 |         buttonText="Join the platform today"
18 |         footerText="Already have an account?"
19 |         footerLinkText="Login"
20 |         footerLinkHref="/login"
21 |       />
22 |     </div>
23 |   );
24 | }


--------------------------------------------------------------------------------
/app/actions/delete-user.ts:
--------------------------------------------------------------------------------
 1 | "use server"
 2 | import { auth, signOut } from "@/auth";
 3 | import { prisma } from "../lib/prisma";
 4 | import { redirect } from "next/navigation";
 5 | 
 6 | export async function deleteUser(){
 7 |     const session = await auth()
 8 | 
 9 |     if(!session?.user?.email){
10 |         throw new Error("Unauthorized")
11 |     }
12 |     const user = await prisma.user.findUnique({
13 |         where: {
14 |             email: session.user.email
15 |         }
16 |     })
17 |     if(!user){
18 |         throw new Error("User not found")
19 |     }
20 | 
21 |     await prisma.user.delete({
22 |         where: {
23 |             id: user.id
24 |         }
25 |     });
26 | 
27 |     await signOut({
28 |         redirect: false,
29 |     })
30 | 
31 |     redirect("/signup")
32 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260512151240_update_watch_history/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - A unique constraint covering the columns `[userId,videoId]` on the table `WatchHistory` will be added. If there are existing duplicate values, this will fail.
 5 |   - Added the required column `updatedAt` to the `WatchHistory` table without a default value. This is not possible if the table is not empty.
 6 | 
 7 | */
 8 | -- AlterTable
 9 | ALTER TABLE "WatchHistory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
10 | ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
11 | 
12 | -- CreateIndex
13 | CREATE INDEX "WatchHistory_watchedAt_idx" ON "WatchHistory"("watchedAt");
14 | 
15 | -- CreateIndex
16 | CREATE UNIQUE INDEX "WatchHistory_userId_videoId_key" ON "WatchHistory"("userId", "videoId");
17 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2023",
 4 |     "lib": ["dom", "dom.iterable", "esnext"],
 5 |     "allowJs": true,
 6 |     "skipLibCheck": true,
 7 |     "strict": true,
 8 |     "noEmit": true,
 9 |     "esModuleInterop": true,
10 |     "module": "ESnext",
11 |     "moduleResolution": "bundler",
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "jsx": "react-jsx",
15 |     "incremental": true,
16 |     "ignoreDeprecations": "6.0",
17 |     "plugins": [
18 |       {
19 |         "name": "next"
20 |       }
21 |     ],
22 |     "paths": {
23 |       "@/*": ["./*"]
24 |     }
25 |   },
26 |   "include": [
27 |     "next-env.d.ts",
28 |     "**/*.ts",
29 |     "**/*.tsx",
30 |     ".next/types/**/*.ts",
31 |     ".next/dev/types/**/*.ts",
32 |     "**/*.mts"
33 |   ],
34 |   "exclude": ["node_modules"]
35 | }
36 | 


--------------------------------------------------------------------------------
/public/globe.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>


--------------------------------------------------------------------------------
/app/api/watch-later/[watchLaterId]/route.ts:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import { prisma } from "@/app/lib/prisma";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | 
 5 | interface Params {
 6 |   params: Promise<{
 7 |     watchLaterId: string;
 8 |   }>;
 9 | }
10 | 
11 | export async function DELETE(
12 |   req: NextRequest,
13 |   { params }: Params
14 | ) {
15 |   try {
16 |     const session = await auth();
17 | 
18 |     if (!session?.user?.email) {
19 |       return NextResponse.json(
20 |         { error: "Unauthorized" },
21 |         { status: 401 }
22 |       );
23 |     }
24 | 
25 |     const { watchLaterId } = await params;
26 | 
27 |     await prisma.watchLater.delete({
28 |       where: {
29 |         id: watchLaterId,
30 |       },
31 |     });
32 | 
33 |     return NextResponse.json({
34 |       success: true,
35 |     });
36 |   } catch (error) {
37 |     console.log(error);
38 | 
39 |     return NextResponse.json(
40 |       { error: "Internal server error" },
41 |       { status: 500 }
42 |     );
43 |   }
44 | }


--------------------------------------------------------------------------------
/components/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | function Input({ className, type, ...props }: React.ComponentProps<"input">) {
 6 |   return (
 7 |     <input
 8 |       type={type}
 9 |       data-slot="input"
10 |       className={cn(
11 |         "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
12 |         className
13 |       )}
14 |       {...props}
15 |     />
16 |   )
17 | }
18 | 
19 | export { Input }
20 | 


--------------------------------------------------------------------------------
/app/layout.tsx:
--------------------------------------------------------------------------------
 1 | import type { Metadata } from "next";
 2 | import { Geist, Geist_Mono } from "next/font/google";
 3 | import "./globals.css";
 4 | import Providers from "@/provider";
 5 | import { Toaster } from "@/components/ui/sonner";
 6 | 
 7 | const geistSans = Geist({
 8 |   variable: "--font-geist-sans",
 9 |   subsets: ["latin"],
10 | });
11 | 
12 | const geistMono = Geist_Mono({
13 |   variable: "--font-geist-mono",
14 |   subsets: ["latin"],
15 | });
16 | 
17 | export const metadata: Metadata = {
18 |   title: "Create Next App",
19 |   description: "Generated by create next app",
20 | };
21 | 
22 | export default function RootLayout({
23 |   children,
24 | }: Readonly<{
25 |   children: React.ReactNode;
26 | }>) {
27 |   return (
28 |     <html
29 |       lang="en"
30 |       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
31 |     >
32 |       <body className="min-h-full flex flex-col">
33 |         <Providers>{children}</Providers>
34 |         <Toaster richColors position="top-right" />
35 |       </body>
36 |     </html>
37 |   );
38 | }
39 | 


--------------------------------------------------------------------------------
/app/(auth)/login/page.tsx:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import { redirect } from "next/navigation";
 3 | import AuthCard from "../components/auth-card";
 4 | import { prisma } from "@/app/lib/prisma";
 5 | 
 6 | export default async function LoginPage() {
 7 |   const session = await auth();
 8 | 
 9 |   if (session?.user) {
10 |     const user = await prisma.user.findUnique({
11 |         where: {
12 |             email: session.user.email!,
13 |         },
14 |         include: {
15 |             channels: true
16 |         }
17 |     })
18 |     if(!user?.channels.length){
19 |         redirect("/create-channel")
20 |     }
21 |     redirect("/feed");
22 |   }
23 |   
24 |   
25 | 
26 |   return (
27 |     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
28 |       <AuthCard
29 |         title="Sign in"
30 |         subtitle="Welcome back to your platform"
31 |         buttonText="Access your account"
32 |         footerText="Don't have an account?"
33 |         footerLinkText="Sign up"
34 |         footerLinkHref="/signup"
35 |       />
36 |     </div>
37 |   );
38 | }


--------------------------------------------------------------------------------
/app/(auth)/components/google-sign-in-button.tsx:
--------------------------------------------------------------------------------
 1 | import { signIn } from "@/auth";
 2 | 
 3 | export default function GoogleSignInButton() {
 4 |   return (
 5 |     <form
 6 |       action={async () => {
 7 |         "use server";
 8 | 
 9 |         await signIn("google", {
10 |           redirectTo: "/feed",
11 |         });
12 |       }}
13 |     >
14 |       <button
15 |         type="submit"
16 |         className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white text-black py-4 font-semibold hover:scale-[1.01] transition-all cursor-pointer"
17 |       >
18 |         <svg
19 |           xmlns="http://www.w3.org/2000/svg"
20 |           width="22"
21 |           height="22"
22 |           viewBox="0 0 48 48"
23 |         >
24 |           <path
25 |             fill="#FFC107"
26 |             d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
27 |           />
28 |         </svg>
29 | 
30 |         Continue with Google
31 |       </button>
32 |     </form>
33 |   );
34 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260513182713_watch_later_schema_added/migration.sql:
--------------------------------------------------------------------------------
 1 | -- CreateTable
 2 | CREATE TABLE "WatchLater" (
 3 |     "id" TEXT NOT NULL,
 4 |     "userId" TEXT NOT NULL,
 5 |     "uploadId" TEXT NOT NULL,
 6 |     "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 7 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 8 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 9 | 
10 |     CONSTRAINT "WatchLater_pkey" PRIMARY KEY ("id")
11 | );
12 | 
13 | -- CreateIndex
14 | CREATE INDEX "WatchLater_userId_idx" ON "WatchLater"("userId");
15 | 
16 | -- CreateIndex
17 | CREATE INDEX "WatchLater_uploadId_idx" ON "WatchLater"("uploadId");
18 | 
19 | -- CreateIndex
20 | CREATE UNIQUE INDEX "WatchLater_userId_uploadId_key" ON "WatchLater"("userId", "uploadId");
21 | 
22 | -- AddForeignKey
23 | ALTER TABLE "WatchLater" ADD CONSTRAINT "WatchLater_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
24 | 
25 | -- AddForeignKey
26 | ALTER TABLE "WatchLater" ADD CONSTRAINT "WatchLater_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
27 | 


--------------------------------------------------------------------------------
/public/next.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "youtube",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "dev": "next dev",
 8 |     "build": "next build",
 9 |     "start": "next start",
10 |     "lint": "eslint"
11 |   },
12 |   "dependencies": {
13 |     "@auth/prisma-adapter": "^2.11.2",
14 |     "@prisma/adapter-pg": "^7.8.0",
15 |     "@prisma/client": "^6.19.3",
16 |     "@uploadthing/react": "^7.3.3",
17 |     "bullmq": "^5.77.6",
18 |     "class-variance-authority": "^0.7.1",
19 |     "clsx": "^2.1.1",
20 |     "dotenv": "^17.4.2",
21 |     "hls.js": "^1.6.8",
22 |     "ioredis": "^5.11.0",
23 |     "lucide-react": "^1.14.0",
24 |     "next": "16.2.4",
25 |     "next-auth": "^5.0.0-beta.31",
26 |     "next-themes": "^0.4.6",
27 |     "pg": "^8.20.0",
28 |     "radix-ui": "^1.4.3",
29 |     "react": "19.2.4",
30 |     "react-dom": "19.2.4",
31 |     "shadcn": "^4.7.0",
32 |     "sonner": "^2.0.7",
33 |     "tailwind-merge": "^3.6.0",
34 |     "tw-animate-css": "^1.4.0",
35 |     "uploadthing": "^7.7.4"
36 |   },
37 |   "devDependencies": {
38 |     "@tailwindcss/postcss": "^4",
39 |     "@types/node": "^20",
40 |     "@types/pg": "^8.20.0",
41 |     "@types/react": "^19",
42 |     "@types/react-dom": "^19",
43 |     "eslint": "^9",
44 |     "eslint-config-next": "16.2.4",
45 |     "prisma": "^6.19.3",
46 |     "tailwindcss": "^4",
47 |     "typescript": "^5"
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/components/ui/sonner.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useTheme } from "next-themes"
 4 | import { Toaster as Sonner, type ToasterProps } from "sonner"
 5 | import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"
 6 | 
 7 | const Toaster = ({ ...props }: ToasterProps) => {
 8 |   const { theme = "system" } = useTheme()
 9 | 
10 |   return (
11 |     <Sonner
12 |       theme={theme as ToasterProps["theme"]}
13 |       className="toaster group"
14 |       icons={{
15 |         success: (
16 |           <CircleCheckIcon className="size-4" />
17 |         ),
18 |         info: (
19 |           <InfoIcon className="size-4" />
20 |         ),
21 |         warning: (
22 |           <TriangleAlertIcon className="size-4" />
23 |         ),
24 |         error: (
25 |           <OctagonXIcon className="size-4" />
26 |         ),
27 |         loading: (
28 |           <Loader2Icon className="size-4 animate-spin" />
29 |         ),
30 |       }}
31 |       style={
32 |         {
33 |           "--normal-bg": "var(--popover)",
34 |           "--normal-text": "var(--popover-foreground)",
35 |           "--normal-border": "var(--border)",
36 |           "--border-radius": "var(--radius)",
37 |         } as React.CSSProperties
38 |       }
39 |       toastOptions={{
40 |         classNames: {
41 |           toast: "cn-toast",
42 |         },
43 |       }}
44 |       {...props}
45 |     />
46 |   )
47 | }
48 | 
49 | export { Toaster }
50 | 


--------------------------------------------------------------------------------
/app/actions/create-channel.ts:
--------------------------------------------------------------------------------
 1 | "use server";
 2 | 
 3 | import { auth } from "@/auth";
 4 | import { prisma } from "../lib/prisma";
 5 | import { redirect } from "next/navigation";
 6 | 
 7 | export async function createChannel(formData: FormData) {
 8 |   const session = await auth();
 9 | 
10 |   if (!session?.user?.email) {
11 |     throw new Error("Unauthorized");
12 |   }
13 | 
14 |   const channelName = formData.get("channelName") as string;
15 | 
16 |   const description = formData.get("description") as string;
17 | 
18 |   const profilePictureUrl = formData.get(
19 |     "profilePictureUrl",
20 |   ) as string;
21 | 
22 |   const bannerUrl = formData.get(
23 |     "bannerUrl",
24 |   ) as string;
25 | 
26 |   if (
27 |     !channelName ||
28 |     !description ||
29 |     !profilePictureUrl ||
30 |     !bannerUrl
31 |   ) {
32 |     throw new Error("All fields are required");
33 |   }
34 | 
35 |   const user = await prisma.user.findUnique({
36 |     where: {
37 |       email: session.user.email,
38 |     },
39 |     include: {
40 |       channels: true,
41 |     },
42 |   });
43 | 
44 |   if (!user) {
45 |     throw new Error("User not found");
46 |   }
47 | 
48 |   if (user.channels.length > 0) {
49 |     redirect("/feed");
50 |   }
51 | 
52 |   await prisma.channel.create({
53 |     data: {
54 |       channelName,
55 |       description,
56 |       userId: user.id,
57 |       profilePictureUrl,
58 |       bannerUrl,
59 |     },
60 |   });
61 | 
62 |   redirect("/feed");
63 | }


--------------------------------------------------------------------------------
/app/api/view-video/videos/[videoId]/comments/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | 
 5 | interface Params {
 6 |   params: Promise<{
 7 |     videoId: string;
 8 |   }>;
 9 | }
10 | 
11 | export async function POST(req: NextRequest, { params }: Params) {
12 |   try {
13 |     const session = await auth();
14 |     if (!session?.user?.email) {
15 |       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
16 |     }
17 |     const body = await req.json();
18 | 
19 |     if (!body.text) {
20 |       return NextResponse.json(
21 |         { error: "Comment is required" },
22 |         { status: 400 },
23 |       );
24 |     }
25 | 
26 |     const { videoId } = await params;
27 |     const user = await prisma.user.findUnique({
28 |       where: {
29 |         email: session.user.email,
30 |       },
31 |     });
32 |     if (!user)
33 |       return NextResponse.json({ error: "User not found" }, { status: 404 });
34 |     const comment = await prisma.comment.create({
35 |       data: {
36 |         commentText: body.text,
37 |         userId: user.id,
38 |         videoId,
39 |       },
40 | 
41 |       include: {
42 |         user: true,
43 |       },
44 |     });
45 |     return NextResponse.json(comment);
46 |   } catch (e) {
47 |     console.log(e);
48 |     return NextResponse.json(
49 |       { error: "Internal server error" },
50 |       { status: 500 },
51 |     );
52 |   }
53 | }
54 | 


--------------------------------------------------------------------------------
/app/components/like-button.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { Heart } from "lucide-react";
 4 | import { useState } from "react";
 5 | import { toast } from "sonner";
 6 | 
 7 | interface LikeButtonProps {
 8 |   videoId: string;
 9 |   initialLikes: number;
10 | }
11 | 
12 | export default function LikeButton({
13 |   videoId,
14 |   initialLikes,
15 | }: LikeButtonProps) {
16 |   const [likes, setLikes] =
17 |     useState(initialLikes);
18 | 
19 |   const [loading, setLoading] =
20 |     useState(false);
21 | 
22 | async function handleLike() {
23 |   if (loading) return;
24 | 
25 |   try {
26 |     setLoading(true);
27 | 
28 |     const res = await fetch(
29 |       `/api/view-video/videos/${videoId}/like`,
30 |       {
31 |         method: "POST",
32 |       }
33 |     );
34 | 
35 |     if (!res.ok) {
36 |       throw new Error("Failed to like video");
37 |     }
38 | 
39 |     const data = await res.json();
40 | 
41 |     if (data.liked) {
42 |       setLikes((prev) => prev + 1);
43 | 
44 |       toast.success("Video liked");
45 |     } else {
46 |       setLikes((prev) => Math.max(prev - 1, 0));
47 | 
48 |       toast.success("Like removed");
49 |     }
50 |   } catch (error) {
51 |     console.log(error);
52 | 
53 |     toast.error("Something went wrong");
54 |   } finally {
55 |     setLoading(false);
56 |   }
57 | }
58 | 
59 |   return (
60 |     <button
61 |       onClick={handleLike}
62 |       className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 transition hover:bg-zinc-800"
63 |     >
64 |       <Heart size={18} />
65 | 
66 |       <span>{likes}</span>
67 |     </button>
68 |   );
69 | }


--------------------------------------------------------------------------------
/next.config.ts:
--------------------------------------------------------------------------------
 1 | import type { NextConfig } from "next";
 2 | 
 3 | const nextConfig: NextConfig = {
 4 |   images: {
 5 |     remotePatterns: [
 6 |       {
 7 |         protocol: "https",
 8 |         hostname: "*.ufs.sh",
 9 |       },
10 |     ],
11 |   },
12 |   async headers() {
13 |     const isDev = process.env.NODE_ENV === "development";
14 | 
15 |     const playlistCache =
16 |       "no-cache, no-store, must-revalidate";
17 |     const segmentCache = isDev
18 |       ? playlistCache
19 |       : "public, max-age=31536000, immutable";
20 | 
21 |     return [
22 |       {
23 |         source: "/streams/:videoId/master.m3u8",
24 |         headers: [
25 |           {
26 |             key: "Content-Type",
27 |             value: "application/vnd.apple.mpegurl",
28 |           },
29 |           {
30 |             key: "Cache-Control",
31 |             value: playlistCache,
32 |           },
33 |         ],
34 |       },
35 |       {
36 |         source: "/streams/:videoId/:rendition/index.m3u8",
37 |         headers: [
38 |           {
39 |             key: "Content-Type",
40 |             value: "application/vnd.apple.mpegurl",
41 |           },
42 |           {
43 |             key: "Cache-Control",
44 |             value: playlistCache,
45 |           },
46 |         ],
47 |       },
48 |       {
49 |         source: "/streams/:videoId/:rendition/:segment.ts",
50 |         headers: [
51 |           {
52 |             key: "Content-Type",
53 |             value: "video/mp2t",
54 |           },
55 |           {
56 |             key: "Cache-Control",
57 |             value: segmentCache,
58 |           },
59 |         ],
60 |       },
61 |     ];
62 |   },
63 | };
64 | 
65 | export default nextConfig;


--------------------------------------------------------------------------------
/app/api/view-video/videos/[videoId]/like/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | interface Params {
 5 |   params: Promise<{
 6 |     videoId: string;
 7 |   }>;
 8 | }
 9 | 
10 | export async function POST(req: NextRequest, { params }: Params) {
11 |   try {
12 |     const session = await auth();
13 |     if (!session?.user?.email) {
14 |       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
15 |     }
16 |     const { videoId } = await params;
17 |     const user = await prisma.user.findUnique({
18 |       where: {
19 |         email: session.user.email,
20 |       },
21 |     });
22 | 
23 |     if (!user) {
24 |       return NextResponse.json({ error: "User not found" }, { status: 404 });
25 |     }
26 | 
27 |     const existingLike = await prisma.like.findUnique({
28 |       where: {
29 |         userId_videoId: {
30 |           userId: user.id,
31 |           videoId,
32 |         },
33 |       },
34 |     });
35 |     if (existingLike) {
36 |       await prisma.like.delete({
37 |         where: {
38 |           id: existingLike.id,
39 |         },
40 |       });
41 | 
42 |       return NextResponse.json({
43 |         liked: false,
44 |       });
45 |     }
46 | 
47 |     await prisma.like.create({
48 |       data: {
49 |         userId: user.id,
50 |         videoId,
51 |       },
52 |     });
53 | 
54 |     return NextResponse.json({
55 |       liked: true,
56 |     });
57 |   } catch (err) {
58 |     console.log(err);
59 | 
60 |     return NextResponse.json(
61 |       { error: "Internal server error" },
62 |       { status: 500 },
63 |     );
64 |   }
65 | }
66 | 


--------------------------------------------------------------------------------
/app/api/history/[historyId]/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | 
 5 | interface Params {
 6 |   params: Promise<{
 7 |     historyId: string;
 8 |   }>;
 9 | }
10 | 
11 | export async function DELETE(req: NextRequest, { params }: Params) {
12 |   try {
13 |     const session = await auth();
14 | 
15 |     if (!session?.user?.email) {
16 |       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
17 |     }
18 | 
19 |     const { historyId } = await params;
20 | 
21 |     const currentUser = await prisma.user.findUnique({
22 |       where: {
23 |         email: session.user.email,
24 |       },
25 |       select: {
26 |         id: true,
27 |       },
28 |     });
29 | 
30 |     if (!currentUser) {
31 |       return NextResponse.json({ error: "user not found" }, { status: 404 });
32 |     }
33 | 
34 |     const historyItem = await prisma.watchHistory.findUnique({
35 |       where: {
36 |         id: historyId,
37 |       },
38 |     });
39 | 
40 |     if (!historyItem || historyItem.userId !== currentUser.id) {
41 |       return NextResponse.json(
42 |         { error: "History item not found" },
43 |         { status: 404 },
44 |       );
45 |     }
46 | 
47 |     await prisma.watchHistory.delete({
48 |       where: {
49 |         id: historyId,
50 |       },
51 |     });
52 | 
53 |     return NextResponse.json(
54 |       { message: "History item deleted successfully" },
55 |       { status: 200 },
56 |     );
57 |   } catch (e) {
58 |     console.error(e);
59 |     return NextResponse.json(
60 |       { error: "Internal server error" },
61 |       { status: 500 },
62 |     );
63 |   }
64 | }
65 | 


--------------------------------------------------------------------------------
/app/api/watch-later/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | 
 5 | export async function POST(req: NextRequest) {
 6 |   try {
 7 |     const session = await auth();
 8 |     if (!session?.user?.email) {
 9 |       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
10 |     }
11 |     const body = await req.json();
12 |     const { uploadId } = body;
13 | 
14 |     if (!uploadId) {
15 |       return NextResponse.json(
16 |         { error: "uploadId is required" },
17 |         { status: 400 },
18 |       );
19 |     }
20 |     const currentUser = await prisma.user.findUnique({
21 |       where: {
22 |         email: session.user.email,
23 |       },
24 |       select: {
25 |         id: true,
26 |       },
27 |     });
28 | 
29 |     if (!currentUser) {
30 |       return NextResponse.json({ error: "User not found" }, { status: 404 });
31 |     }
32 | 
33 |     const existingVideo = await prisma.watchLater.findFirst({
34 |       where: {
35 |         userId: currentUser.id,
36 |         uploadId,
37 |       },
38 |     });
39 | 
40 |     if (existingVideo) {
41 |       return NextResponse.json(
42 |         { message: "Video already in watch later" },
43 |         { status: 200 },
44 |       );
45 |     }
46 | 
47 |     await prisma.watchLater.create({
48 |       data: {
49 |         userId: currentUser.id,
50 |         uploadId,
51 |       },
52 |     });
53 | 
54 |     return NextResponse.json(
55 |       { message: "Video added to watch later" },
56 |       { status: 201 },
57 |     );
58 |   } catch (e) {
59 |     console.error(e);
60 |     return NextResponse.json(
61 |       { error: "Internal server error" },
62 |       { status: 500 },
63 |     );
64 |   }
65 | }
66 | 


--------------------------------------------------------------------------------
/app/api/uploadthing/core.ts:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import { createUploadthing, type FileRouter } from "uploadthing/next";
 3 | import { UploadThingError } from "uploadthing/server";
 4 | 
 5 | const f = createUploadthing();
 6 | 
 7 | const handleAuth = async () => {
 8 |   const session = await auth();
 9 | 
10 |   if (!session?.user?.email) {
11 |     throw new UploadThingError("Unauthorized");
12 |   }
13 | 
14 |   return session.user.email;
15 | };
16 | 
17 | // FileRouter for your app
18 | export const ourFileRouter = {
19 |   imageUploader: f({
20 |     image: {
21 |       maxFileSize: "4MB",
22 |       maxFileCount: 1,
23 |     },
24 |   })
25 |     .middleware(async () => {
26 |       const userEmail = await handleAuth();
27 | 
28 |       if (!userEmail) {
29 |         throw new UploadThingError("Unauthorized");
30 |       }
31 | 
32 |       return { userEmail };
33 |     })
34 |     .onUploadComplete(async ({ metadata, file }) => {
35 |       console.log(
36 |         "Image upload complete for user:",
37 |         metadata.userEmail,
38 |       );
39 | 
40 |       console.log("Image URL:", file.ufsUrl);
41 | 
42 |       return {
43 |         uploadedBy: metadata.userEmail,
44 |         fileUrl: file.ufsUrl,
45 |       };
46 |     }),
47 | 
48 |   videoUploader: f({
49 |     video: {
50 |       maxFileSize: "256MB",
51 |       maxFileCount: 1,
52 |     },
53 |   })
54 |     .middleware(async () => {
55 |       const userEmail = await handleAuth();
56 | 
57 |       if (!userEmail) {
58 |         throw new UploadThingError("Unauthorized");
59 |       }
60 | 
61 |       return { userEmail };
62 |     })
63 |     .onUploadComplete(async ({ metadata, file }) => {
64 |       console.log(
65 |         "Video upload complete for user:",
66 |         metadata.userEmail,
67 |       );
68 | 
69 |       console.log("Video URL:", file.ufsUrl);
70 | 
71 |       return {
72 |         uploadedBy: metadata.userEmail,
73 |         fileUrl: file.ufsUrl,
74 |       };
75 |     }),
76 | } satisfies FileRouter;
77 | 
78 | export type OurFileRouter = typeof ourFileRouter;


--------------------------------------------------------------------------------
/app/components/sidebar.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link";
 2 | 
 3 | import {
 4 |   History,
 5 |   Radio,
 6 |   ListVideo,
 7 |   Upload,
 8 |   Clock3,
 9 |   Home,
10 | } from "lucide-react";
11 | 
12 | export default function Sidebar() {
13 |   return (
14 |     <aside className="w-64 h-[calc(100vh-73px)] border-r border-zinc-800 bg-black text-white p-4 sticky top-[73px]">
15 |       <div className="space-y-2">
16 |         <Link
17 |           href="/feed"
18 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
19 |         >
20 |           <Home size={22} />
21 |           <span>Feed</span>
22 |         </Link>
23 | 
24 |         <Link
25 |           href="/history"
26 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
27 |         >
28 |           <History size={22} />
29 |           <span>History</span>
30 |         </Link>
31 | 
32 |         <Link
33 |           href="/live-stream"
34 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
35 |         >
36 |           <Radio size={22} />
37 |           <span>Live Stream</span>
38 |         </Link>
39 | 
40 |         <Link
41 |           href="/playlist"
42 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
43 |         >
44 |           <ListVideo size={22} />
45 |           <span>Playlist</span>
46 |         </Link>
47 | 
48 |         <Link
49 |           href="/upload"
50 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
51 |         >
52 |           <Upload size={22} />
53 |           <span>Upload</span>
54 |         </Link>
55 | 
56 |         <Link
57 |           href="/watch-later"
58 |           className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-900 transition-colors"
59 |         >
60 |           <Clock3 size={22} />
61 |           <span>Watch Later</span>
62 |         </Link>
63 |       </div>
64 |     </aside>
65 |   );
66 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260514113515_fix_playlist_schema/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `name` on the `Playlist` table. All the data in the column will be lost.
 5 |   - You are about to drop the `_PlaylistToUpload` table. If the table is not empty, all the data it contains will be lost.
 6 |   - Added the required column `title` to the `Playlist` table without a default value. This is not possible if the table is not empty.
 7 | 
 8 | */
 9 | -- DropForeignKey
10 | ALTER TABLE "_PlaylistToUpload" DROP CONSTRAINT "_PlaylistToUpload_A_fkey";
11 | 
12 | -- DropForeignKey
13 | ALTER TABLE "_PlaylistToUpload" DROP CONSTRAINT "_PlaylistToUpload_B_fkey";
14 | 
15 | -- AlterTable
16 | ALTER TABLE "Playlist" DROP COLUMN "name",
17 | ADD COLUMN     "title" TEXT NOT NULL,
18 | ADD COLUMN     "uploadId" TEXT;
19 | 
20 | -- DropTable
21 | DROP TABLE "_PlaylistToUpload";
22 | 
23 | -- CreateTable
24 | CREATE TABLE "PlaylistVideo" (
25 |     "id" TEXT NOT NULL,
26 |     "playlistId" TEXT NOT NULL,
27 |     "uploadId" TEXT NOT NULL,
28 |     "order" INTEGER NOT NULL,
29 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
30 |     "updatedAt" TIMESTAMP(3) NOT NULL,
31 | 
32 |     CONSTRAINT "PlaylistVideo_pkey" PRIMARY KEY ("id")
33 | );
34 | 
35 | -- CreateIndex
36 | CREATE INDEX "PlaylistVideo_playlistId_idx" ON "PlaylistVideo"("playlistId");
37 | 
38 | -- CreateIndex
39 | CREATE INDEX "PlaylistVideo_uploadId_idx" ON "PlaylistVideo"("uploadId");
40 | 
41 | -- CreateIndex
42 | CREATE UNIQUE INDEX "PlaylistVideo_playlistId_uploadId_key" ON "PlaylistVideo"("playlistId", "uploadId");
43 | 
44 | -- AddForeignKey
45 | ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE SET NULL ON UPDATE CASCADE;
46 | 
47 | -- AddForeignKey
48 | ALTER TABLE "PlaylistVideo" ADD CONSTRAINT "PlaylistVideo_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
49 | 
50 | -- AddForeignKey
51 | ALTER TABLE "PlaylistVideo" ADD CONSTRAINT "PlaylistVideo_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
52 | 


--------------------------------------------------------------------------------
/app/api/view-video/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { cookies } from "next/headers";
 4 | import { NextRequest, NextResponse } from "next/server";
 5 | 
 6 | export async function POST(req: NextRequest) {
 7 |   try {
 8 |     const body = await req.json();
 9 | 
10 |     const videoId = body.videoId;
11 | 
12 |     if (!videoId) {
13 |       return NextResponse.json({ error: "Video ID required" }, { status: 400 });
14 |     }
15 | 
16 |     const session = await auth();
17 | 
18 |     const cookieStore = await cookies();
19 | 
20 |     const alreadyViewed = cookieStore.get(`viewed-${videoId}`);
21 | 
22 |     // increment view only once in 24h
23 |     if (!alreadyViewed) {
24 |       await prisma.upload.update({
25 |         where: {
26 |           id: videoId,
27 |         },
28 | 
29 |         data: {
30 |           viewCount: {
31 |             increment: 1,
32 |           },
33 |         },
34 |       });
35 | 
36 |       // set cookie
37 |       cookieStore.set(`viewed-${videoId}`, "true", {
38 |         maxAge: 60 * 60 * 24,
39 |         httpOnly: true,
40 |         sameSite: "lax",
41 |       });
42 |     }
43 | 
44 |     // always update history for logged in users
45 |     if (session?.user?.email) {
46 |       const user = await prisma.user.findUnique({
47 |         where: {
48 |           email: session.user.email,
49 |         },
50 |       });
51 | 
52 |       if (user) {
53 |         await prisma.watchHistory.upsert({
54 |           where: {
55 |             userId_videoId: {
56 |               userId: user.id,
57 |               videoId,
58 |             },
59 |           },
60 | 
61 |           update: {
62 |             watchedAt: new Date(),
63 |           },
64 | 
65 |           create: {
66 |             userId: user.id,
67 |             videoId,
68 |             watchedAt: new Date(),
69 |             updatedAt: new Date(),
70 |           },
71 |         });
72 |       }
73 |     }
74 | 
75 |     return NextResponse.json({
76 |       success: true,
77 |       viewed: !!alreadyViewed,
78 |     });
79 |   } catch (error) {
80 |     console.log(error);
81 | 
82 |     return NextResponse.json(
83 |       { error: "Something went wrong" },
84 |       { status: 500 },
85 |     );
86 |   }
87 | }
88 | 


--------------------------------------------------------------------------------
/app/components/comment-form.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useRouter } from "next/navigation";
 4 | import { useState } from "react";
 5 | import { toast } from "sonner";
 6 | 
 7 | interface CommentFormProps {
 8 |   videoId: string;
 9 | }
10 | 
11 | export default function CommentForm({
12 |   videoId,
13 | }: CommentFormProps) {
14 |   const [text, setText] = useState("");
15 |   const [loading, setLoading] =
16 |     useState(false);
17 | 
18 |   const router = useRouter();
19 | 
20 |   async function handleSubmit(
21 |     e: React.FormEvent
22 |   ) {
23 |     e.preventDefault();
24 | 
25 |     if (!text.trim()) return;
26 | 
27 |     try {
28 |       setLoading(true);
29 | 
30 | const res = await fetch(
31 |   `/api/view-video/videos/${videoId}/comments`,
32 |         {
33 |           method: "POST",
34 | 
35 |           headers: {
36 |             "Content-Type":
37 |               "application/json",
38 |           },
39 | 
40 |           body: JSON.stringify({
41 |             text,
42 |           }),
43 |         }
44 |       );
45 | 
46 |       if (!res.ok) {
47 |         throw new Error(
48 |           "Failed to comment"
49 |         );
50 |       }
51 | 
52 |       setText("");
53 | 
54 | toast.success("Comment added");
55 | 
56 | router.refresh();
57 | 
58 |       // refresh server component data
59 |       router.refresh();
60 |     } catch (e) {
61 |       console.log(e);
62 |       toast.error("Failed to add comment");
63 |     } finally {
64 |       setLoading(false);
65 |     }
66 |   }
67 | 
68 |   return (
69 |     <form
70 |       onSubmit={handleSubmit}
71 |       className="mb-6"
72 |     >
73 |       <textarea
74 |         value={text}
75 |         onChange={(e) =>
76 |           setText(e.target.value)
77 |         }
78 |         placeholder="Add a comment..."
79 |         className="min-h-[120px] w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-zinc-600"
80 |       />
81 | 
82 |       <button
83 |         type="submit"
84 |         disabled={loading}
85 |         className="mt-3 rounded-xl bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-500 disabled:opacity-50"
86 |       >
87 |         {loading
88 |           ? "Commenting..."
89 |           : "Comment"}
90 |       </button>
91 |     </form>
92 |   );
93 | }


--------------------------------------------------------------------------------
/app/api/playlist/[playListId]/videos/[videoId]/route.ts:
--------------------------------------------------------------------------------
 1 | import { prisma } from "@/app/lib/prisma";
 2 | import { auth } from "@/auth";
 3 | import { NextRequest, NextResponse } from "next/server";
 4 | 
 5 | interface Params {
 6 |   params: Promise<{
 7 |     playListId: string;
 8 |     videoId: string;
 9 |   }>;
10 | }
11 | 
12 | export async function DELETE(
13 |   _req: NextRequest,
14 |   { params }: Params
15 | ) {
16 |   try {
17 |     const session = await auth();
18 | 
19 |     if (!session?.user?.email) {
20 |       return NextResponse.json(
21 |         { error: "Unauthorized" },
22 |         { status: 401 }
23 |       );
24 |     }
25 | 
26 |     const currentUser = await prisma.user.findUnique({
27 |       where: {
28 |         email: session.user.email,
29 |       },
30 |       select: {
31 |         id: true,
32 |       },
33 |     });
34 | 
35 |     if (!currentUser) {
36 |       return NextResponse.json(
37 |         { error: "User not found" },
38 |         { status: 404 }
39 |       );
40 |     }
41 | 
42 |     const {
43 |       playListId: playlistId,
44 |       videoId: playlistVideoId,
45 |     } = await params;
46 | 
47 |     const playlist = await prisma.playlist.findFirst({
48 |       where: {
49 |         id: playlistId,
50 |         userId: currentUser.id,
51 |       },
52 |       select: {
53 |         id: true,
54 |       },
55 |     });
56 | 
57 |     if (!playlist) {
58 |       return NextResponse.json(
59 |         {
60 |           error:
61 |             "Playlist not found or not owned by user",
62 |         },
63 |         { status: 404 }
64 |       );
65 |     }
66 | 
67 |     const deleted = await prisma.playlistVideo.deleteMany(
68 |       {
69 |         where: {
70 |           id: playlistVideoId,
71 |           playlistId,
72 |         },
73 |       }
74 |     );
75 | 
76 |     if (deleted.count === 0) {
77 |       return NextResponse.json(
78 |         { error: "Playlist video not found" },
79 |         { status: 404 }
80 |       );
81 |     }
82 | 
83 |     return NextResponse.json({
84 |       message: "Video removed from playlist",
85 |     });
86 |   } catch (e) {
87 |     console.error(e);
88 |     return NextResponse.json(
89 |       {
90 |         error: "Failed to remove video from playlist",
91 |       },
92 |       { status: 500 }
93 |     );
94 |   }
95 | }
96 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
 2 | 
 3 | ## Video transcoding (HLS)
 4 | 
 5 | Uploads are transcoded on the server with **FFmpeg** into multi-bitrate HLS (`.m3u8` + `.ts` segments) and served from `public/streams/`.
 6 | 
 7 | ### Requirements
 8 | 
 9 | Install FFmpeg and FFprobe on your machine:
10 | 
11 | ```bash
12 | # macOS (Homebrew)
13 | brew install ffmpeg
14 | 
15 | # Ubuntu / Debian
16 | sudo apt install ffmpeg
17 | ```
18 | 
19 | Verify:
20 | 
21 | ```bash
22 | ffmpeg -version
23 | ffprobe -version
24 | ```
25 | 
26 | ### Flow
27 | 
28 | 1. User uploads the raw MP4 to UploadThing from the upload page.
29 | 2. `POST /api/upload` saves the row as `PROCESSING`, downloads the source, runs `transcodeToMultibitrateHls`, then sets `videoUrl` to `/streams/{id}/master.m3u8` and `status` to `READY`.
30 | 3. The watch page plays HLS via `HlsVideoPlayer` (native Safari / `hls.js` elsewhere).
31 | 4. The feed only lists videos with `status: READY`.
32 | 
33 | Transcoded files live under `public/streams/` (gitignored). For production, consider a background job queue so transcoding does not block the HTTP request.
34 | 
35 | ## Getting Started
36 | 
37 | First, run the development server:
38 | 
39 | ```bash
40 | npm run dev
41 | # or
42 | yarn dev
43 | # or
44 | pnpm dev
45 | # or
46 | bun dev
47 | ```
48 | 
49 | Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
50 | 
51 | You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
52 | 
53 | This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
54 | 
55 | ## Learn More
56 | 
57 | To learn more about Next.js, take a look at the following resources:
58 | 
59 | - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
60 | - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
61 | 
62 | You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
63 | 
64 | ## Deploy on Vercel
65 | 
66 | The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
67 | 
68 | Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
69 | 


--------------------------------------------------------------------------------
/app/api/upload/route.ts:
--------------------------------------------------------------------------------
  1 | import { prisma } from "@/app/lib/prisma";
  2 | import { transcodeToMultibitrateHls } from "@/app/lib/hls-transcoder";
  3 | import { auth } from "@/auth";
  4 | import { NextRequest, NextResponse } from "next/server";
  5 | 
  6 | export const maxDuration = 300;
  7 | 
  8 | export async function POST(req: NextRequest) {
  9 |   try {
 10 |     const session = await auth();
 11 |     if (!session?.user?.email) {
 12 |       return NextResponse.json(
 13 |         { error: "Unauthorized" },
 14 |         { status: 401 }
 15 |       );
 16 |     }
 17 | 
 18 |     const body = await req.json();
 19 | 
 20 |     const user = await prisma.user.findUnique({
 21 |       where: {
 22 |         email: session.user.email,
 23 |       },
 24 |       include: {
 25 |         channels: true,
 26 |       },
 27 |     });
 28 | 
 29 |     if (!user?.channels[0]) {
 30 |       return NextResponse.json(
 31 |         { error: "No channel found" },
 32 |         { status: 400 }
 33 |       );
 34 |     }
 35 | 
 36 |     if (!body.title || !body.videoUrl || !body.thumbnailUrl) {
 37 |       return NextResponse.json(
 38 |         { error: "Missing fields" },
 39 |         { status: 400 }
 40 |       );
 41 |     }
 42 | 
 43 |     const createdUpload = await prisma.upload.create({
 44 |       data: {
 45 |         title: body.title,
 46 |         description: body.description,
 47 |         videoUrl: body.videoUrl,
 48 |         thumbnailUrl: body.thumbnailUrl,
 49 |         type: "PUBLIC",
 50 |         status: "PROCESSING",
 51 |         channelId: user.channels[0].id,
 52 |       },
 53 |     });
 54 | 
 55 |     try {
 56 |       const hls =
 57 |         await transcodeToMultibitrateHls({
 58 |           videoId: createdUpload.id,
 59 |           sourceUrl: body.videoUrl,
 60 |         });
 61 | 
 62 |       const readyUpload = await prisma.upload.update({
 63 |         where: {
 64 |           id: createdUpload.id,
 65 |         },
 66 |         data: {
 67 |           videoUrl: hls.masterPlaylistPath,
 68 |           status: "READY",
 69 |         },
 70 |       });
 71 | 
 72 |       return NextResponse.json(readyUpload, {
 73 |         status: 201,
 74 |       });
 75 |     } catch (error) {
 76 |       console.error(
 77 |         "Failed to transcode upload",
 78 |         error
 79 |       );
 80 | 
 81 |       await prisma.upload.update({
 82 |         where: {
 83 |           id: createdUpload.id,
 84 |         },
 85 |         data: {
 86 |           status: "FAILED",
 87 |         },
 88 |       });
 89 | 
 90 |       return NextResponse.json(
 91 |         {
 92 |           error:
 93 |             "Upload saved but video processing failed",
 94 |         },
 95 |         { status: 500 }
 96 |       );
 97 |     }
 98 |   } catch (error) {
 99 |     console.error(error);
100 |     return NextResponse.json(
101 |       {
102 |         error: "Internal server error",
103 |       },
104 |       { status: 500 }
105 |     );
106 |   }
107 | }
108 | 


--------------------------------------------------------------------------------
/app/components/add-to-watch-later-button.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { useState } from "react";
  4 | import { Check, Clock3, Loader2 } from "lucide-react";
  5 | import { toast } from "sonner";
  6 | 
  7 | interface AddToWatchLaterButtonProps {
  8 |   videoId: string;
  9 |   compact?: boolean;
 10 | }
 11 | 
 12 | export default function AddToWatchLaterButton({
 13 |   videoId,
 14 |   compact = false,
 15 | }: AddToWatchLaterButtonProps) {
 16 |   const [loading, setLoading] =
 17 |     useState(false);
 18 |   const [saved, setSaved] =
 19 |     useState(false);
 20 | 
 21 |   async function handleAddToWatchLater() {
 22 |     if (loading) {
 23 |       return;
 24 |     }
 25 | 
 26 |     try {
 27 |       setLoading(true);
 28 | 
 29 |       const response = await fetch(
 30 |         "/api/watch-later",
 31 |         {
 32 |           method: "POST",
 33 |           headers: {
 34 |             "Content-Type": "application/json",
 35 |           },
 36 |           body: JSON.stringify({
 37 |             uploadId: videoId,
 38 |           }),
 39 |         }
 40 |       );
 41 | 
 42 |       const data = await response.json();
 43 | 
 44 |       if (response.status === 401) {
 45 |         toast.error("Sign in to save videos");
 46 |         return;
 47 |       }
 48 | 
 49 |       if (!response.ok) {
 50 |         throw new Error(
 51 |           data?.error ??
 52 |             "Failed to save video"
 53 |         );
 54 |       }
 55 | 
 56 |       setSaved(true);
 57 | 
 58 |       if (response.status === 201) {
 59 |         toast.success("Added to Watch Later");
 60 |       } else {
 61 |         toast.message("Already in Watch Later");
 62 |       }
 63 |     } catch (error) {
 64 |       console.error(error);
 65 |       toast.error("Could not save video");
 66 |     } finally {
 67 |       setLoading(false);
 68 |     }
 69 |   }
 70 | 
 71 |   const icon = loading ? (
 72 |     <Loader2
 73 |       size={compact ? 14 : 18}
 74 |       className="animate-spin"
 75 |     />
 76 |   ) : saved ? (
 77 |     <Check size={compact ? 14 : 18} />
 78 |   ) : (
 79 |     <Clock3 size={compact ? 14 : 18} />
 80 |   );
 81 | 
 82 |   return (
 83 |     <button
 84 |       type="button"
 85 |       onClick={handleAddToWatchLater}
 86 |       disabled={loading}
 87 |       className={
 88 |         compact
 89 |           ? "inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 px-3 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
 90 |           : "flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
 91 |       }
 92 |     >
 93 |       {icon}
 94 | 
 95 |       <span>
 96 |         {saved
 97 |           ? compact
 98 |             ? "Saved"
 99 |             : "In Watch Later"
100 |           : compact
101 |             ? "Watch Later"
102 |             : "Save to Watch Later"}
103 |       </span>
104 |     </button>
105 |   );
106 | }
107 | 


--------------------------------------------------------------------------------
/app/components/navbar.tsx:
--------------------------------------------------------------------------------
 1 | import { auth } from "@/auth";
 2 | import {
 3 |   DropdownMenu,
 4 |   DropdownMenuContent,
 5 |   DropdownMenuSeparator,
 6 |   DropdownMenuTrigger,
 7 | } from "@/components/ui/dropdown-menu";
 8 | import Link from "next/link";
 9 | import { Radio } from "lucide-react";
10 | 
11 | import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
12 | 
13 | import { Input } from "@/components/ui/input";
14 | 
15 | import { SignOut } from "./signout-button";
16 | import DeleteUserButton from "./delete-user-button";
17 | 
18 | export default async function Navbar() {
19 |   const session = await auth();
20 | 
21 |   const name = session?.user?.name || "User";
22 | 
23 |   return (
24 |     <nav className="w-full border-b border-zinc-800 bg-black px-6 py-4">
25 |       <div className="flex items-center justify-between gap-6">
26 |         {/* LEFT */}
27 |         <div className="flex items-center gap-3">
28 |           <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg">
29 |             Y
30 |           </div>
31 | 
32 |           <h1 className="text-xl font-bold text-white">YouTube Clone</h1>
33 |         </div>
34 | 
35 |         {/* CENTER SEARCH */}
36 |         <div className="flex-1 max-w-2xl">
37 |           <Input
38 |             placeholder="Search videos..."
39 |             className="bg-zinc-900 border-zinc-700 text-white h-11 rounded-full px-6"
40 |           />
41 |         </div>
42 | 
43 |         <div className="flex items-center gap-3">
44 |           <Link
45 |             href="/live-stream"
46 |             className="inline-flex h-11 items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-sm font-semibold text-red-300 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-200"
47 |           >
48 |             <Radio size={16} />
49 |             <span className="hidden sm:inline">Go Live</span>
50 |           </Link>
51 | 
52 |           {/* RIGHT AVATAR */}
53 |           <DropdownMenu>
54 |             <DropdownMenuTrigger className="outline-none cursor-pointer">
55 |               <Avatar className="w-11 h-11">
56 |                 <AvatarImage src={session?.user?.image || ""} />
57 | 
58 |                 <AvatarFallback className="bg-red-600 text-white font-bold">
59 |                   {name.charAt(0)}
60 |                 </AvatarFallback>
61 |               </Avatar>
62 |             </DropdownMenuTrigger>
63 | 
64 |             <DropdownMenuContent
65 |               align="end"
66 |               className="w-60 bg-zinc-950 border border-zinc-800 text-white"
67 |             >
68 |               <div className="px-3 py-2">
69 |                 <p className="font-semibold">{session?.user?.name}</p>
70 | 
71 |                 <p className="text-xs text-zinc-400">{session?.user?.email}</p>
72 |               </div>
73 | 
74 |               <DropdownMenuSeparator className="bg-zinc-800" />
75 | 
76 |               <div className="px-2 py-1">
77 |                 <SignOut />
78 |               </div>
79 | 
80 |               <DropdownMenuSeparator className="bg-zinc-900" />
81 | 
82 |               <div className="px-2 py-1">
83 |                 <DeleteUserButton />
84 |               </div>
85 |             </DropdownMenuContent>
86 |           </DropdownMenu>
87 |         </div>
88 |       </div>
89 |     </nav>
90 |   );
91 | }
92 | 


--------------------------------------------------------------------------------
/app/components/create-playlist-form.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { FormEvent, useState } from "react";
  4 | import { useRouter } from "next/navigation";
  5 | import { Loader2, Plus } from "lucide-react";
  6 | import { toast } from "sonner";
  7 | 
  8 | export default function CreatePlaylistForm() {
  9 |   const router = useRouter();
 10 | 
 11 |   const [title, setTitle] = useState("");
 12 |   const [description, setDescription] = useState("");
 13 |   const [loading, setLoading] = useState(false);
 14 | 
 15 |   async function handleSubmit(
 16 |     event: FormEvent<HTMLFormElement>
 17 |   ) {
 18 |     event.preventDefault();
 19 | 
 20 |     if (!title.trim()) {
 21 |       toast.error("Playlist title is required");
 22 |       return;
 23 |     }
 24 | 
 25 |     try {
 26 |       setLoading(true);
 27 | 
 28 |       const response = await fetch("/api/playlist", {
 29 |         method: "POST",
 30 |         headers: {
 31 |           "Content-Type": "application/json",
 32 |         },
 33 |         body: JSON.stringify({
 34 |           title,
 35 |           description,
 36 |         }),
 37 |       });
 38 | 
 39 |       const data = await response.json();
 40 | 
 41 |       if (!response.ok) {
 42 |         throw new Error(
 43 |           data?.error ?? "Failed to create playlist"
 44 |         );
 45 |       }
 46 | 
 47 |       toast.success("Playlist created");
 48 |       setTitle("");
 49 |       setDescription("");
 50 |       router.refresh();
 51 |     } catch (error) {
 52 |       console.error(error);
 53 |       toast.error("Could not create playlist");
 54 |     } finally {
 55 |       setLoading(false);
 56 |     }
 57 |   }
 58 | 
 59 |   return (
 60 |     <form
 61 |       onSubmit={handleSubmit}
 62 |       className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4"
 63 |     >
 64 |       <h2 className="text-lg font-bold text-white">
 65 |         Create playlist
 66 |       </h2>
 67 | 
 68 |       <div className="mt-3 grid gap-3">
 69 |         <input
 70 |           value={title}
 71 |           onChange={(event) =>
 72 |             setTitle(event.target.value)
 73 |           }
 74 |           placeholder="Playlist title"
 75 |           className="h-11 rounded-xl border border-white/10 bg-black/40 px-3 text-sm text-white outline-none transition focus:border-white/30"
 76 |           maxLength={80}
 77 |         />
 78 | 
 79 |         <textarea
 80 |           value={description}
 81 |           onChange={(event) =>
 82 |             setDescription(event.target.value)
 83 |           }
 84 |           placeholder="Description (optional)"
 85 |           className="min-h-24 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
 86 |           maxLength={250}
 87 |         />
 88 |       </div>
 89 | 
 90 |       <button
 91 |         type="submit"
 92 |         disabled={loading}
 93 |         className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
 94 |       >
 95 |         {loading ? (
 96 |           <Loader2
 97 |             size={16}
 98 |             className="animate-spin"
 99 |           />
100 |         ) : (
101 |           <Plus size={16} />
102 |         )}
103 | 
104 |         Create
105 |       </button>
106 |     </form>
107 |   );
108 | }
109 | 


--------------------------------------------------------------------------------
/app/api/playlist/[playListId]/videos/route.ts:
--------------------------------------------------------------------------------
  1 | import { prisma } from "@/app/lib/prisma";
  2 | import { auth } from "@/auth";
  3 | import { NextRequest, NextResponse } from "next/server";
  4 | 
  5 | interface Params {
  6 |   params: Promise<{
  7 |     playListId: string;
  8 |   }>;
  9 | }
 10 | 
 11 | export async function POST(
 12 |   req: NextRequest,
 13 |   { params }: Params
 14 | ) {
 15 |   try {
 16 |     const session = await auth();
 17 | 
 18 |     if (!session?.user?.email) {
 19 |       return NextResponse.json(
 20 |         { error: "Unauthorized" },
 21 |         { status: 401 }
 22 |       );
 23 |     }
 24 | 
 25 |     const currentUser = await prisma.user.findUnique({
 26 |       where: {
 27 |         email: session.user.email,
 28 |       },
 29 |       select: {
 30 |         id: true,
 31 |       },
 32 |     });
 33 | 
 34 |     if (!currentUser) {
 35 |       return NextResponse.json(
 36 |         { error: "User not found" },
 37 |         { status: 404 }
 38 |       );
 39 |     }
 40 | 
 41 |     const body = await req.json();
 42 |     const uploadId =
 43 |       typeof body.uploadId === "string"
 44 |         ? body.uploadId
 45 |         : "";
 46 | 
 47 |     if (!uploadId) {
 48 |       return NextResponse.json(
 49 |         { error: "uploadId is required" },
 50 |         { status: 400 }
 51 |       );
 52 |     }
 53 | 
 54 |     const { playListId: playlistId } =
 55 |       await params;
 56 | 
 57 |     const playlist = await prisma.playlist.findFirst({
 58 |       where: {
 59 |         id: playlistId,
 60 |         userId: currentUser.id,
 61 |       },
 62 |       select: {
 63 |         id: true,
 64 |       },
 65 |     });
 66 | 
 67 |     if (!playlist) {
 68 |       return NextResponse.json(
 69 |         {
 70 |           error:
 71 |             "Playlist not found or not owned by user",
 72 |         },
 73 |         { status: 404 }
 74 |       );
 75 |     }
 76 | 
 77 |     const video = await prisma.upload.findUnique({
 78 |       where: {
 79 |         id: uploadId,
 80 |       },
 81 |       select: {
 82 |         id: true,
 83 |       },
 84 |     });
 85 | 
 86 |     if (!video) {
 87 |       return NextResponse.json(
 88 |         { error: "Video not found" },
 89 |         { status: 404 }
 90 |       );
 91 |     }
 92 | 
 93 |     const existingPlaylistVideo =
 94 |       await prisma.playlistVideo.findUnique({
 95 |         where: {
 96 |           playlistId_uploadId: {
 97 |             playlistId,
 98 |             uploadId,
 99 |           },
100 |         },
101 |       });
102 | 
103 |     if (existingPlaylistVideo) {
104 |       return NextResponse.json({
105 |         added: false,
106 |         alreadyExists: true,
107 |         playlistVideo: existingPlaylistVideo,
108 |       });
109 |     }
110 | 
111 |     const count = await prisma.playlistVideo.count({
112 |       where: {
113 |         playlistId,
114 |       },
115 |     });
116 | 
117 |     const playlistVideo = await prisma.playlistVideo.create({
118 |       data: {
119 |         playlistId,
120 |         uploadId,
121 |         order: count + 1,
122 |       },
123 |     });
124 | 
125 |     return NextResponse.json(
126 |       {
127 |         added: true,
128 |         alreadyExists: false,
129 |         playlistVideo,
130 |       },
131 |       { status: 201 }
132 |     );
133 |   } catch (e) {
134 |     console.error(e);
135 | 
136 |     return NextResponse.json(
137 |       { error: "Internal server error" },
138 |       { status: 500 }
139 |     );
140 |   }
141 | }
142 | 


--------------------------------------------------------------------------------
/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { cva, type VariantProps } from "class-variance-authority"
 3 | import { Slot } from "radix-ui"
 4 | 
 5 | import { cn } from "@/lib/utils"
 6 | 
 7 | const buttonVariants = cva(
 8 |   "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
 9 |   {
10 |     variants: {
11 |       variant: {
12 |         default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
13 |         outline:
14 |           "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
15 |         secondary:
16 |           "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
17 |         ghost:
18 |           "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
19 |         destructive:
20 |           "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
21 |         link: "text-primary underline-offset-4 hover:underline",
22 |       },
23 |       size: {
24 |         default:
25 |           "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
26 |         xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
27 |         sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
28 |         lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
29 |         icon: "size-8",
30 |         "icon-xs":
31 |           "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
32 |         "icon-sm":
33 |           "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
34 |         "icon-lg": "size-9",
35 |       },
36 |     },
37 |     defaultVariants: {
38 |       variant: "default",
39 |       size: "default",
40 |     },
41 |   }
42 | )
43 | 
44 | function Button({
45 |   className,
46 |   variant = "default",
47 |   size = "default",
48 |   asChild = false,
49 |   ...props
50 | }: React.ComponentProps<"button"> &
51 |   VariantProps<typeof buttonVariants> & {
52 |     asChild?: boolean
53 |   }) {
54 |   const Comp = asChild ? Slot.Root : "button"
55 | 
56 |   return (
57 |     <Comp
58 |       data-slot="button"
59 |       data-variant={variant}
60 |       data-size={size}
61 |       className={cn(buttonVariants({ variant, size, className }))}
62 |       {...props}
63 |     />
64 |   )
65 | }
66 | 
67 | export { Button, buttonVariants }
68 | 


--------------------------------------------------------------------------------
/components/ui/avatar.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | import { Avatar as AvatarPrimitive } from "radix-ui"
  5 | 
  6 | import { cn } from "@/lib/utils"
  7 | 
  8 | function Avatar({
  9 |   className,
 10 |   size = "default",
 11 |   ...props
 12 | }: React.ComponentProps<typeof AvatarPrimitive.Root> & {
 13 |   size?: "default" | "sm" | "lg"
 14 | }) {
 15 |   return (
 16 |     <AvatarPrimitive.Root
 17 |       data-slot="avatar"
 18 |       data-size={size}
 19 |       className={cn(
 20 |         "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
 21 |         className
 22 |       )}
 23 |       {...props}
 24 |     />
 25 |   )
 26 | }
 27 | 
 28 | function AvatarImage({
 29 |   className,
 30 |   ...props
 31 | }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
 32 |   return (
 33 |     <AvatarPrimitive.Image
 34 |       data-slot="avatar-image"
 35 |       className={cn(
 36 |         "aspect-square size-full rounded-full object-cover",
 37 |         className
 38 |       )}
 39 |       {...props}
 40 |     />
 41 |   )
 42 | }
 43 | 
 44 | function AvatarFallback({
 45 |   className,
 46 |   ...props
 47 | }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
 48 |   return (
 49 |     <AvatarPrimitive.Fallback
 50 |       data-slot="avatar-fallback"
 51 |       className={cn(
 52 |         "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
 53 |         className
 54 |       )}
 55 |       {...props}
 56 |     />
 57 |   )
 58 | }
 59 | 
 60 | function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
 61 |   return (
 62 |     <span
 63 |       data-slot="avatar-badge"
 64 |       className={cn(
 65 |         "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
 66 |         "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
 67 |         "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
 68 |         "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
 69 |         className
 70 |       )}
 71 |       {...props}
 72 |     />
 73 |   )
 74 | }
 75 | 
 76 | function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
 77 |   return (
 78 |     <div
 79 |       data-slot="avatar-group"
 80 |       className={cn(
 81 |         "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
 82 |         className
 83 |       )}
 84 |       {...props}
 85 |     />
 86 |   )
 87 | }
 88 | 
 89 | function AvatarGroupCount({
 90 |   className,
 91 |   ...props
 92 | }: React.ComponentProps<"div">) {
 93 |   return (
 94 |     <div
 95 |       data-slot="avatar-group-count"
 96 |       className={cn(
 97 |         "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
 98 |         className
 99 |       )}
100 |       {...props}
101 |     />
102 |   )
103 | }
104 | 
105 | export {
106 |   Avatar,
107 |   AvatarImage,
108 |   AvatarFallback,
109 |   AvatarGroup,
110 |   AvatarGroupCount,
111 |   AvatarBadge,
112 | }
113 | 


--------------------------------------------------------------------------------
/app/(auth)/components/auth-card.tsx:
--------------------------------------------------------------------------------
  1 | import Link from "next/link";
  2 | import GoogleSignInButton from "./google-sign-in-button";
  3 | 
  4 | interface AuthCardProps {
  5 |   title: string;
  6 |   subtitle: string;
  7 |   buttonText: string;
  8 | 
  9 |   footerText: string;
 10 |   footerLinkText: string;
 11 |   footerLinkHref: string;
 12 | }
 13 | 
 14 | export default function AuthCard({
 15 |   title,
 16 |   subtitle,
 17 |   buttonText,
 18 |   footerText,
 19 |   footerLinkText,
 20 |   footerLinkHref,
 21 | }: AuthCardProps) {
 22 |   return (
 23 |     <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
 24 |       
 25 |       {/* LEFT SIDE */}
 26 |       <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
 27 |         <div>
 28 |           <h1 className="text-5xl font-black tracking-tight leading-tight">
 29 |             Stream.
 30 |             <br />
 31 |             Upload.
 32 |             <br />
 33 |             Go Live.
 34 |           </h1>
 35 | 
 36 |           <p className="mt-6 text-lg text-white/90 max-w-md leading-relaxed">
 37 |             Build your audience, upload videos, go live, and manage your content
 38 |             on one modern creator platform.
 39 |           </p>
 40 |         </div>
 41 | 
 42 |         <div className="space-y-4">
 43 |           <div className="flex items-center gap-3">
 44 |             <div className="w-3 h-3 rounded-full bg-white" />
 45 |             <p className="text-white/90">Realtime livestreams</p>
 46 |           </div>
 47 | 
 48 |           <div className="flex items-center gap-3">
 49 |             <div className="w-3 h-3 rounded-full bg-white" />
 50 |             <p className="text-white/90">Creator subscriptions</p>
 51 |           </div>
 52 | 
 53 |           <div className="flex items-center gap-3">
 54 |             <div className="w-3 h-3 rounded-full bg-white" />
 55 |             <p className="text-white/90">Upload videos instantly</p>
 56 |           </div>
 57 |         </div>
 58 |       </div>
 59 | 
 60 |       {/* RIGHT SIDE */}
 61 |       <div className="flex items-center justify-center p-8 lg:p-14">
 62 |         <div className="w-full max-w-md">
 63 |           <div className="mb-10">
 64 |             <div className="flex items-center gap-3 mb-6">
 65 |               <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-xl font-bold">
 66 |                 Y
 67 |               </div>
 68 | 
 69 |               <div>
 70 |                 <h2 className="text-2xl font-bold">YouTube Clone</h2>
 71 |                 <p className="text-zinc-400 text-sm">{subtitle}</p>
 72 |               </div>
 73 |             </div>
 74 | 
 75 |             <h1 className="text-4xl font-black tracking-tight">
 76 |               {title}
 77 |             </h1>
 78 | 
 79 |             <p className="text-zinc-400 mt-2">
 80 |               Continue with your preferred provider.
 81 |             </p>
 82 |           </div>
 83 | 
 84 |           <div className="space-y-4">
 85 |             <GoogleSignInButton />
 86 | 
 87 |             <p className="text-center text-sm text-zinc-500">
 88 |               {buttonText}
 89 |             </p>
 90 |           </div>
 91 | 
 92 |           {/* FOOTER LINK */}
 93 |           <div className="mt-6 text-center text-sm text-zinc-400">
 94 |             {footerText}{" "}
 95 |             <Link
 96 |               href={footerLinkHref}
 97 |               className="text-red-500 hover:text-red-400 font-semibold transition-colors"
 98 |             >
 99 |               {footerLinkText}
100 |             </Link>
101 |           </div>
102 | 
103 |           <div className="mt-8 text-center text-sm text-zinc-500 leading-relaxed">
104 |             By continuing, you agree to our Terms of Service and Privacy Policy.
105 |           </div>
106 |         </div>
107 |       </div>
108 |     </div>
109 |   );
110 | }


--------------------------------------------------------------------------------
/prisma/migrations/20260530091337_live_schema/migration.sql:
--------------------------------------------------------------------------------
  1 | /*
  2 |   Warnings:
  3 | 
  4 |   - You are about to drop the column `streamUrl` on the `LiveStream` table. All the data in the column will be lost.
  5 |   - You are about to drop the column `uploadId` on the `Playlist` table. All the data in the column will be lost.
  6 |   - You are about to drop the column `videoUrl` on the `Upload` table. All the data in the column will be lost.
  7 | 
  8 | */
  9 | -- CreateEnum
 10 | CREATE TYPE "ProcessingJobStatus" AS ENUM ('QUEUED', 'PROCESSING', 'COMPLETED', 'FAILED');
 11 | 
 12 | -- CreateEnum
 13 | CREATE TYPE "VideoResolution" AS ENUM ('P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160');
 14 | 
 15 | -- DropForeignKey
 16 | ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_uploadId_fkey";
 17 | 
 18 | -- AlterTable
 19 | ALTER TABLE "LiveStream" DROP COLUMN "streamUrl",
 20 | ADD COLUMN     "ingestUrl" TEXT,
 21 | ADD COLUMN     "playbackUrl" TEXT;
 22 | 
 23 | -- AlterTable
 24 | ALTER TABLE "Playlist" DROP COLUMN "uploadId";
 25 | 
 26 | -- AlterTable
 27 | ALTER TABLE "Upload" DROP COLUMN "videoUrl",
 28 | ADD COLUMN     "duration" INTEGER,
 29 | ADD COLUMN     "originalVideoUrl" TEXT,
 30 | ADD COLUMN     "playbackUrl" TEXT,
 31 | ALTER COLUMN "thumbnailUrl" DROP NOT NULL;
 32 | 
 33 | -- CreateTable
 34 | CREATE TABLE "VideoProcessingJob" (
 35 |     "id" TEXT NOT NULL,
 36 |     "uploadId" TEXT NOT NULL,
 37 |     "status" "ProcessingJobStatus" NOT NULL DEFAULT 'QUEUED',
 38 |     "progress" INTEGER NOT NULL DEFAULT 0,
 39 |     "retryCount" INTEGER NOT NULL DEFAULT 0,
 40 |     "errorMessage" TEXT,
 41 |     "startedAt" TIMESTAMP(3),
 42 |     "completedAt" TIMESTAMP(3),
 43 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 44 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 45 | 
 46 |     CONSTRAINT "VideoProcessingJob_pkey" PRIMARY KEY ("id")
 47 | );
 48 | 
 49 | -- CreateTable
 50 | CREATE TABLE "StreamChatMessage" (
 51 |     "id" TEXT NOT NULL,
 52 |     "streamId" TEXT NOT NULL,
 53 |     "userId" TEXT NOT NULL,
 54 |     "message" TEXT NOT NULL,
 55 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 56 | 
 57 |     CONSTRAINT "StreamChatMessage_pkey" PRIMARY KEY ("id")
 58 | );
 59 | 
 60 | -- CreateTable
 61 | CREATE TABLE "VideoVariant" (
 62 |     "id" TEXT NOT NULL,
 63 |     "uploadId" TEXT NOT NULL,
 64 |     "resolution" TEXT NOT NULL,
 65 |     "bitrate" INTEGER NOT NULL,
 66 |     "playlistUrl" TEXT NOT NULL,
 67 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 68 | 
 69 |     CONSTRAINT "VideoVariant_pkey" PRIMARY KEY ("id")
 70 | );
 71 | 
 72 | -- CreateIndex
 73 | CREATE INDEX "VideoProcessingJob_uploadId_idx" ON "VideoProcessingJob"("uploadId");
 74 | 
 75 | -- CreateIndex
 76 | CREATE INDEX "VideoProcessingJob_status_idx" ON "VideoProcessingJob"("status");
 77 | 
 78 | -- CreateIndex
 79 | CREATE INDEX "StreamChatMessage_streamId_idx" ON "StreamChatMessage"("streamId");
 80 | 
 81 | -- CreateIndex
 82 | CREATE INDEX "StreamChatMessage_createdAt_idx" ON "StreamChatMessage"("createdAt");
 83 | 
 84 | -- CreateIndex
 85 | CREATE INDEX "VideoVariant_uploadId_idx" ON "VideoVariant"("uploadId");
 86 | 
 87 | -- CreateIndex
 88 | CREATE UNIQUE INDEX "VideoVariant_uploadId_resolution_key" ON "VideoVariant"("uploadId", "resolution");
 89 | 
 90 | -- CreateIndex
 91 | CREATE INDEX "Upload_status_idx" ON "Upload"("status");
 92 | 
 93 | -- AddForeignKey
 94 | ALTER TABLE "VideoProcessingJob" ADD CONSTRAINT "VideoProcessingJob_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
 95 | 
 96 | -- AddForeignKey
 97 | ALTER TABLE "StreamChatMessage" ADD CONSTRAINT "StreamChatMessage_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;
 98 | 
 99 | -- AddForeignKey
100 | ALTER TABLE "StreamChatMessage" ADD CONSTRAINT "StreamChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
101 | 
102 | -- AddForeignKey
103 | ALTER TABLE "VideoVariant" ADD CONSTRAINT "VideoVariant_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
104 | 


--------------------------------------------------------------------------------
/app/components/WatchLaterVideoMenu.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import {
  4 |   EllipsisVertical,
  5 |   Loader2,
  6 |   Trash2,
  7 |   PlayCircle,
  8 | } from "lucide-react";
  9 | 
 10 | import { useEffect, useRef, useState } from "react";
 11 | 
 12 | import { useRouter } from "next/navigation";
 13 | 
 14 | interface WatchLaterVideoMenuProps {
 15 |   watchLaterId: string;
 16 | }
 17 | 
 18 | export default function WatchLaterVideoMenu({
 19 |   watchLaterId,
 20 | }: WatchLaterVideoMenuProps) {
 21 |   const router = useRouter();
 22 | 
 23 |   const [open, setOpen] = useState(false);
 24 | 
 25 |   const [loading, setLoading] =
 26 |     useState(false);
 27 | 
 28 |   const dropdownRef =
 29 |     useRef<HTMLDivElement>(null);
 30 | 
 31 |   useEffect(() => {
 32 |     function handleClickOutside(
 33 |       event: MouseEvent
 34 |     ) {
 35 |       if (
 36 |         dropdownRef.current &&
 37 |         !dropdownRef.current.contains(
 38 |           event.target as Node
 39 |         )
 40 |       ) {
 41 |         setOpen(false);
 42 |       }
 43 |     }
 44 | 
 45 |     document.addEventListener(
 46 |       "mousedown",
 47 |       handleClickOutside
 48 |     );
 49 | 
 50 |     return () => {
 51 |       document.removeEventListener(
 52 |         "mousedown",
 53 |         handleClickOutside
 54 |       );
 55 |     };
 56 |   }, []);
 57 | 
 58 |   async function removeFromWatchLater(
 59 |     e: React.MouseEvent<HTMLButtonElement>
 60 |   ) {
 61 |     e.preventDefault();
 62 | 
 63 |     try {
 64 |       setLoading(true);
 65 | 
 66 |       const response = await fetch(
 67 |         `/api/watch-later/${watchLaterId}`,
 68 |         {
 69 |           method: "DELETE",
 70 |         }
 71 |       );
 72 | 
 73 |       if (!response.ok) {
 74 |         throw new Error(
 75 |           "Failed to remove video"
 76 |         );
 77 |       }
 78 | 
 79 |       router.refresh();
 80 |     } catch (error) {
 81 |       console.log(error);
 82 |     } finally {
 83 |       setLoading(false);
 84 | 
 85 |       setOpen(false);
 86 |     }
 87 |   }
 88 | 
 89 |   return (
 90 |     <div
 91 |       className="relative shrink-0"
 92 |       ref={dropdownRef}
 93 |     >
 94 |       <button
 95 |         onClick={(e) => {
 96 |           e.preventDefault();
 97 | 
 98 |           setOpen((prev) => !prev);
 99 |         }}
100 |         className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-300 transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
101 |       >
102 |         <EllipsisVertical size={18} />
103 |       </button>
104 | 
105 |       {open && (
106 |         <div className="absolute right-0 top-12 z-[999] w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-100">
107 |           
108 |           <div className="mb-1 px-3 py-2">
109 |             <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
110 |               Watch Later
111 |             </p>
112 |           </div>
113 | 
114 |           <button
115 |             disabled={loading}
116 |             className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
117 |           >
118 |             <PlayCircle size={16} />
119 | 
120 |             Play Next
121 |           </button>
122 | 
123 |           <div className="my-1 h-px bg-white/10" />
124 | 
125 |           <button
126 |             onClick={
127 |               removeFromWatchLater
128 |             }
129 |             disabled={loading}
130 |             className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300 disabled:cursor-not-allowed"
131 |           >
132 |             {loading ? (
133 |               <Loader2
134 |                 size={16}
135 |                 className="animate-spin"
136 |               />
137 |             ) : (
138 |               <Trash2 size={16} />
139 |             )}
140 | 
141 |             Remove from Watch Later
142 |           </button>
143 |         </div>
144 |       )}
145 |     </div>
146 |   );
147 | }


--------------------------------------------------------------------------------
/app/api/playlist/route.ts:
--------------------------------------------------------------------------------
  1 | import { prisma } from "@/app/lib/prisma";
  2 | import { auth } from "@/auth";
  3 | import { NextRequest, NextResponse } from "next/server";
  4 | 
  5 | async function getCurrentUserId(email: string) {
  6 |   const currentUser = await prisma.user.findUnique({
  7 |     where: {
  8 |       email,
  9 |     },
 10 |     select: {
 11 |       id: true,
 12 |     },
 13 |   });
 14 | 
 15 |   return currentUser?.id ?? null;
 16 | }
 17 | 
 18 | export async function GET(req: NextRequest) {
 19 |   try {
 20 |     const session = await auth();
 21 | 
 22 |     if (!session?.user?.email) {
 23 |       return NextResponse.json(
 24 |         { error: "Unauthorized" },
 25 |         { status: 401 }
 26 |       );
 27 |     }
 28 | 
 29 |     const currentUserId = await getCurrentUserId(
 30 |       session.user.email
 31 |     );
 32 | 
 33 |     if (!currentUserId) {
 34 |       return NextResponse.json(
 35 |         { error: "User not found" },
 36 |         { status: 404 }
 37 |       );
 38 |     }
 39 | 
 40 |     const uploadId =
 41 |       req.nextUrl.searchParams.get("uploadId");
 42 | 
 43 |     if (uploadId) {
 44 |       const playlists =
 45 |         await prisma.playlist.findMany({
 46 |           where: {
 47 |             userId: currentUserId,
 48 |           },
 49 |           include: {
 50 |             _count: {
 51 |               select: {
 52 |                 playlistVideos: true,
 53 |               },
 54 |             },
 55 |             playlistVideos: {
 56 |               where: {
 57 |                 uploadId,
 58 |               },
 59 |               select: {
 60 |                 id: true,
 61 |               },
 62 |               take: 1,
 63 |             },
 64 |           },
 65 |           orderBy: {
 66 |             updatedAt: "desc",
 67 |           },
 68 |         });
 69 | 
 70 |       return NextResponse.json(
 71 |         playlists.map((playlist) => ({
 72 |           id: playlist.id,
 73 |           title: playlist.title,
 74 |           description: playlist.description,
 75 |           videosCount:
 76 |             playlist._count.playlistVideos,
 77 |           containsVideo:
 78 |             playlist.playlistVideos.length > 0,
 79 |         }))
 80 |       );
 81 |     }
 82 | 
 83 |     const playlists = await prisma.playlist.findMany({
 84 |       where: {
 85 |         userId: currentUserId,
 86 |       },
 87 |       include: {
 88 |         _count: {
 89 |           select: {
 90 |             playlistVideos: true,
 91 |           },
 92 |         },
 93 |       },
 94 |       orderBy: {
 95 |         updatedAt: "desc",
 96 |       },
 97 |     });
 98 | 
 99 |     return NextResponse.json(
100 |       playlists.map((playlist) => ({
101 |         id: playlist.id,
102 |         title: playlist.title,
103 |         description: playlist.description,
104 |         videosCount: playlist._count.playlistVideos,
105 |         containsVideo: false,
106 |       }))
107 |     );
108 |   } catch (e) {
109 |     console.error(e);
110 |     return NextResponse.json(
111 |       { error: "Internal Server Error" },
112 |       { status: 500 }
113 |     );
114 |   }
115 | }
116 | 
117 | export async function POST(req: NextRequest) {
118 |   try {
119 |     const session = await auth();
120 |     if (!session?.user?.email) {
121 |       return NextResponse.json(
122 |         { error: "Unauthorized" },
123 |         { status: 401 }
124 |       );
125 |     }
126 | 
127 |     const body = await req.json();
128 |     const title =
129 |       typeof body.title === "string"
130 |         ? body.title.trim()
131 |         : "";
132 |     const description =
133 |       typeof body.description === "string"
134 |         ? body.description.trim()
135 |         : "";
136 | 
137 |     if (!title) {
138 |       return NextResponse.json(
139 |         {
140 |           error: "Playlist title is required",
141 |         },
142 |         { status: 400 }
143 |       );
144 |     }
145 | 
146 |     const currentUserId = await getCurrentUserId(
147 |       session.user.email
148 |     );
149 | 
150 |     if (!currentUserId) {
151 |       return NextResponse.json(
152 |         { error: "User not found" },
153 |         { status: 404 }
154 |       );
155 |     }
156 | 
157 |     const playlist = await prisma.playlist.create({
158 |       data: {
159 |         title,
160 |         description: description || null,
161 |         userId: currentUserId,
162 |       },
163 |     });
164 | 
165 |     return NextResponse.json(playlist, {
166 |       status: 201,
167 |     });
168 |   } catch (e) {
169 |     console.error(e);
170 |     return NextResponse.json(
171 |       { error: "Internal Server Error" },
172 |       { status: 500 }
173 |     );
174 |   }
175 | }
176 | 


--------------------------------------------------------------------------------
/app/components/HistoryVideoMenu.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import {
  4 |   EllipsisVertical,
  5 |   Loader2,
  6 |   Trash2,
  7 |   Clock3,
  8 | } from "lucide-react";
  9 | 
 10 | import { useEffect, useRef, useState } from "react";
 11 | import { useRouter } from "next/navigation";
 12 | 
 13 | interface HistoryVideoMenuProps {
 14 |   historyId: string;
 15 |   uploadId: string;
 16 | }
 17 | 
 18 | export default function HistoryVideoMenu({
 19 |   historyId,
 20 |   uploadId,
 21 | }: HistoryVideoMenuProps) {
 22 |   const router = useRouter();
 23 | 
 24 |   const [open, setOpen] = useState(false);
 25 | 
 26 |   const [loading, setLoading] = useState(false);
 27 | 
 28 |   const dropdownRef =
 29 |     useRef<HTMLDivElement>(null);
 30 | 
 31 |   useEffect(() => {
 32 |     function handleClickOutside(
 33 |       event: MouseEvent
 34 |     ) {
 35 |       if (
 36 |         dropdownRef.current &&
 37 |         !dropdownRef.current.contains(
 38 |           event.target as Node
 39 |         )
 40 |       ) {
 41 |         setOpen(false);
 42 |       }
 43 |     }
 44 | 
 45 |     document.addEventListener(
 46 |       "mousedown",
 47 |       handleClickOutside
 48 |     );
 49 | 
 50 |     return () => {
 51 |       document.removeEventListener(
 52 |         "mousedown",
 53 |         handleClickOutside
 54 |       );
 55 |     };
 56 |   }, []);
 57 | 
 58 |   async function removeFromHistory(
 59 |     e: React.MouseEvent<HTMLButtonElement>
 60 |   ) {
 61 |     e.preventDefault();
 62 | 
 63 |     try {
 64 |       setLoading(true);
 65 | 
 66 |       const response = await fetch(
 67 |         `/api/history/${historyId}`,
 68 |         {
 69 |           method: "DELETE",
 70 |         }
 71 |       );
 72 | 
 73 |       if (!response.ok) {
 74 |         throw new Error(
 75 |           "Failed to remove history"
 76 |         );
 77 |       }
 78 | 
 79 |       router.refresh();
 80 |     } catch (error) {
 81 |       console.log(error);
 82 |     } finally {
 83 |       setLoading(false);
 84 |       setOpen(false);
 85 |     }
 86 |   }
 87 | 
 88 |   async function addToWatchLater(
 89 |     e: React.MouseEvent<HTMLButtonElement>
 90 |   ) {
 91 |     e.preventDefault();
 92 | 
 93 |     try {
 94 |       setLoading(true);
 95 | 
 96 |       const response = await fetch(
 97 |         "/api/watch-later",
 98 |         {
 99 |           method: "POST",
100 | 
101 |           headers: {
102 |             "Content-Type":
103 |               "application/json",
104 |           },
105 | 
106 |           body: JSON.stringify({
107 |             uploadId,
108 |           }),
109 |         }
110 |       );
111 | 
112 |       if (!response.ok) {
113 |         throw new Error(
114 |           "Failed to save video"
115 |         );
116 |       }
117 | 
118 |       router.refresh();
119 |     } catch (error) {
120 |       console.log(error);
121 |     } finally {
122 |       setLoading(false);
123 |       setOpen(false);
124 |     }
125 |   }
126 | 
127 |   return (
128 |     <div
129 |       className="relative"
130 |       ref={dropdownRef}
131 |     >
132 |       <button
133 |         onClick={(e) => {
134 |           e.preventDefault();
135 | 
136 |           setOpen((prev) => !prev);
137 |         }}
138 |         className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
139 |       >
140 |         <EllipsisVertical size={18} />
141 |       </button>
142 | 
143 | {open && (
144 |   <div className="absolute right-0 top-12 z-[999] w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-100">
145 |     
146 |     <button
147 |       onClick={addToWatchLater}
148 |       disabled={loading}
149 |       className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
150 |     >
151 |       {loading ? (
152 |         <Loader2
153 |           size={16}
154 |           className="animate-spin"
155 |         />
156 |       ) : (
157 |         <Clock3 size={16} />
158 |       )}
159 | 
160 |       Add to Watch Later
161 |     </button>
162 | 
163 |     <div className="my-1 h-px bg-white/10" />
164 | 
165 |     <button
166 |       onClick={removeFromHistory}
167 |       disabled={loading}
168 |       className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-all hover:bg-red-500/10 hover:text-red-300 disabled:cursor-not-allowed"
169 |     >
170 |       {loading ? (
171 |         <Loader2
172 |           size={16}
173 |           className="animate-spin"
174 |         />
175 |       ) : (
176 |         <Trash2 size={16} />
177 |       )}
178 | 
179 |       Remove from History
180 |     </button>
181 |   </div>
182 | )}
183 |     </div>
184 |   );
185 | }


--------------------------------------------------------------------------------
/app/globals.css:
--------------------------------------------------------------------------------
  1 | @import "tailwindcss";
  2 | @import "tw-animate-css";
  3 | @import "uploadthing/tw/v4";
  4 | @import "shadcn/tailwind.css";
  5 | 
  6 | @custom-variant dark (&:is(.dark *));
  7 | 
  8 | @theme inline {
  9 |   --color-background: var(--background);
 10 |   --color-foreground: var(--foreground);
 11 |   --font-sans: var(--font-sans);
 12 |   --font-mono: var(--font-geist-mono);
 13 |   --font-heading: var(--font-sans);
 14 |   --color-sidebar-ring: var(--sidebar-ring);
 15 |   --color-sidebar-border: var(--sidebar-border);
 16 |   --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
 17 |   --color-sidebar-accent: var(--sidebar-accent);
 18 |   --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
 19 |   --color-sidebar-primary: var(--sidebar-primary);
 20 |   --color-sidebar-foreground: var(--sidebar-foreground);
 21 |   --color-sidebar: var(--sidebar);
 22 |   --color-chart-5: var(--chart-5);
 23 |   --color-chart-4: var(--chart-4);
 24 |   --color-chart-3: var(--chart-3);
 25 |   --color-chart-2: var(--chart-2);
 26 |   --color-chart-1: var(--chart-1);
 27 |   --color-ring: var(--ring);
 28 |   --color-input: var(--input);
 29 |   --color-border: var(--border);
 30 |   --color-destructive: var(--destructive);
 31 |   --color-accent-foreground: var(--accent-foreground);
 32 |   --color-accent: var(--accent);
 33 |   --color-muted-foreground: var(--muted-foreground);
 34 |   --color-muted: var(--muted);
 35 |   --color-secondary-foreground: var(--secondary-foreground);
 36 |   --color-secondary: var(--secondary);
 37 |   --color-primary-foreground: var(--primary-foreground);
 38 |   --color-primary: var(--primary);
 39 |   --color-popover-foreground: var(--popover-foreground);
 40 |   --color-popover: var(--popover);
 41 |   --color-card-foreground: var(--card-foreground);
 42 |   --color-card: var(--card);
 43 |   --radius-sm: calc(var(--radius) * 0.6);
 44 |   --radius-md: calc(var(--radius) * 0.8);
 45 |   --radius-lg: var(--radius);
 46 |   --radius-xl: calc(var(--radius) * 1.4);
 47 |   --radius-2xl: calc(var(--radius) * 1.8);
 48 |   --radius-3xl: calc(var(--radius) * 2.2);
 49 |   --radius-4xl: calc(var(--radius) * 2.6);
 50 | }
 51 | 
 52 | :root {
 53 |   --background: oklch(1 0 0);
 54 |   --foreground: oklch(0.145 0 0);
 55 |   --card: oklch(1 0 0);
 56 |   --card-foreground: oklch(0.145 0 0);
 57 |   --popover: oklch(1 0 0);
 58 |   --popover-foreground: oklch(0.145 0 0);
 59 |   --primary: oklch(0.205 0 0);
 60 |   --primary-foreground: oklch(0.985 0 0);
 61 |   --secondary: oklch(0.97 0 0);
 62 |   --secondary-foreground: oklch(0.205 0 0);
 63 |   --muted: oklch(0.97 0 0);
 64 |   --muted-foreground: oklch(0.556 0 0);
 65 |   --accent: oklch(0.97 0 0);
 66 |   --accent-foreground: oklch(0.205 0 0);
 67 |   --destructive: oklch(0.577 0.245 27.325);
 68 |   --border: oklch(0.922 0 0);
 69 |   --input: oklch(0.922 0 0);
 70 |   --ring: oklch(0.708 0 0);
 71 |   --chart-1: oklch(0.87 0 0);
 72 |   --chart-2: oklch(0.556 0 0);
 73 |   --chart-3: oklch(0.439 0 0);
 74 |   --chart-4: oklch(0.371 0 0);
 75 |   --chart-5: oklch(0.269 0 0);
 76 |   --radius: 0.625rem;
 77 |   --sidebar: oklch(0.985 0 0);
 78 |   --sidebar-foreground: oklch(0.145 0 0);
 79 |   --sidebar-primary: oklch(0.205 0 0);
 80 |   --sidebar-primary-foreground: oklch(0.985 0 0);
 81 |   --sidebar-accent: oklch(0.97 0 0);
 82 |   --sidebar-accent-foreground: oklch(0.205 0 0);
 83 |   --sidebar-border: oklch(0.922 0 0);
 84 |   --sidebar-ring: oklch(0.708 0 0);
 85 | }
 86 | 
 87 | .dark {
 88 |   --background: oklch(0.145 0 0);
 89 |   --foreground: oklch(0.985 0 0);
 90 |   --card: oklch(0.205 0 0);
 91 |   --card-foreground: oklch(0.985 0 0);
 92 |   --popover: oklch(0.205 0 0);
 93 |   --popover-foreground: oklch(0.985 0 0);
 94 |   --primary: oklch(0.922 0 0);
 95 |   --primary-foreground: oklch(0.205 0 0);
 96 |   --secondary: oklch(0.269 0 0);
 97 |   --secondary-foreground: oklch(0.985 0 0);
 98 |   --muted: oklch(0.269 0 0);
 99 |   --muted-foreground: oklch(0.708 0 0);
100 |   --accent: oklch(0.269 0 0);
101 |   --accent-foreground: oklch(0.985 0 0);
102 |   --destructive: oklch(0.704 0.191 22.216);
103 |   --border: oklch(1 0 0 / 10%);
104 |   --input: oklch(1 0 0 / 15%);
105 |   --ring: oklch(0.556 0 0);
106 |   --chart-1: oklch(0.87 0 0);
107 |   --chart-2: oklch(0.556 0 0);
108 |   --chart-3: oklch(0.439 0 0);
109 |   --chart-4: oklch(0.371 0 0);
110 |   --chart-5: oklch(0.269 0 0);
111 |   --sidebar: oklch(0.205 0 0);
112 |   --sidebar-foreground: oklch(0.985 0 0);
113 |   --sidebar-primary: oklch(0.488 0.243 264.376);
114 |   --sidebar-primary-foreground: oklch(0.985 0 0);
115 |   --sidebar-accent: oklch(0.269 0 0);
116 |   --sidebar-accent-foreground: oklch(0.985 0 0);
117 |   --sidebar-border: oklch(1 0 0 / 10%);
118 |   --sidebar-ring: oklch(0.556 0 0);
119 | }
120 | 
121 | @layer base {
122 |   * {
123 |     @apply border-border outline-ring/50;
124 |   }
125 |   body {
126 |     @apply bg-background text-foreground;
127 |   }
128 |   html {
129 |     @apply font-sans;
130 |   }
131 | }


--------------------------------------------------------------------------------
/app/(main)/playlist/[playListId]/page.tsx:
--------------------------------------------------------------------------------
  1 | import { prisma } from "@/app/lib/prisma";
  2 | 
  3 | import Image from "next/image";
  4 | import Link from "next/link";
  5 | 
  6 | import {
  7 |   PlayCircle,
  8 |   ListVideo,
  9 | } from "lucide-react";
 10 | 
 11 | import PlaylistVideoPlayer from "../../../components/playlist-video-player";
 12 | 
 13 | interface PageProps {
 14 |   params: Promise<{
 15 |     playListId: string;
 16 |   }>;
 17 |   searchParams: Promise<{
 18 |     video?: string | string[];
 19 |   }>;
 20 | }
 21 | 
 22 | export default async function PlaylistPage({
 23 |   params,
 24 |   searchParams,
 25 | }: PageProps) {
 26 |   const { playListId: playlistId } =
 27 |     await params;
 28 | 
 29 |   const { video } = await searchParams;
 30 |   const videoId = Array.isArray(video)
 31 |     ? video[0]
 32 |     : video;
 33 | 
 34 |   const playlist =
 35 |     await prisma.playlist.findUnique({
 36 |       where: {
 37 |         id: playlistId,
 38 |       },
 39 | 
 40 |       include: {
 41 |         playlistVideos: {
 42 |           include: {
 43 |             upload: {
 44 |               include: {
 45 |                 channel: true,
 46 |               },
 47 |             },
 48 |           },
 49 | 
 50 |           orderBy: {
 51 |             order: "asc",
 52 |           },
 53 |         },
 54 |       },
 55 |     });
 56 | 
 57 |   if (!playlist) {
 58 |     return (
 59 |       <div className="p-10 text-white">
 60 |         Playlist not found
 61 |       </div>
 62 |     );
 63 |   }
 64 | 
 65 |   if (
 66 |     playlist.playlistVideos.length === 0
 67 |   ) {
 68 |     return (
 69 |       <div className="p-10 text-white">
 70 |         Playlist is empty
 71 |       </div>
 72 |     );
 73 |   }
 74 | 
 75 |   const currentVideo =
 76 |     playlist.playlistVideos.find(
 77 |       (item) => item.upload.id === videoId
 78 |     ) || playlist.playlistVideos[0];
 79 | 
 80 |   const currentIndex =
 81 |     playlist.playlistVideos.findIndex(
 82 |       (item) =>
 83 |         item.upload.id ===
 84 |         currentVideo.upload.id
 85 |     );
 86 | 
 87 |   const nextVideo =
 88 |     playlist.playlistVideos[
 89 |       currentIndex + 1
 90 |     ];
 91 | 
 92 |   return (
 93 |     <div className="min-h-screen bg-[#0f0f0f] text-white">
 94 |       <div className="mx-auto flex max-w-[1700px] flex-col gap-6 px-4 py-6 lg:flex-row">
 95 |         <div className="flex-1">
 96 |           <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
 97 |             <PlaylistVideoPlayer
 98 |               videoUrl={
 99 |                 currentVideo.upload
100 |                   .videoUrl
101 |               }
102 |               nextVideoUrl={
103 |                 nextVideo
104 |                   ? `/playlist/${playlist.id}?video=${nextVideo.upload.id}`
105 |                   : undefined
106 |               }
107 |             />
108 |           </div>
109 | 
110 |           <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
111 |             <h1 className="text-3xl font-black">
112 |               {
113 |                 currentVideo.upload
114 |                   .title
115 |               }
116 |             </h1>
117 | 
118 |             <p className="mt-3 text-zinc-400">
119 |               {
120 |                 currentVideo.upload
121 |                   .description
122 |               }
123 |             </p>
124 |           </div>
125 |         </div>
126 | 
127 |         <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 lg:w-[430px]">
128 |           <div className="border-b border-white/10 p-5">
129 |             <div className="flex items-center gap-2">
130 |               <ListVideo size={18} />
131 | 
132 |               <h2 className="text-lg font-bold">
133 |                 {playlist.title}
134 |               </h2>
135 |             </div>
136 | 
137 |             <p className="mt-2 text-sm text-zinc-400">
138 |               {
139 |                 playlist.playlistVideos
140 |                   .length
141 |               }{" "}
142 |               videos
143 |             </p>
144 |           </div>
145 | 
146 |           <div className="max-h-[75vh] overflow-y-auto">
147 |             {playlist.playlistVideos.map(
148 |               (item, index) => {
149 |                 const isActive =
150 |                   item.upload.id ===
151 |                   currentVideo.upload.id;
152 | 
153 |                 return (
154 |                   <Link
155 |                     key={item.id}
156 |                     href={`/playlist/${playlist.id}?video=${item.upload.id}`}
157 |                     className={`flex gap-3 border-b border-white/5 p-3 transition ${
158 |                       isActive
159 |                         ? "bg-red-500/10"
160 |                         : "hover:bg-white/5"
161 |                     }`}
162 |                   >
163 |                     <div className="flex w-6 items-center justify-center text-sm text-zinc-400">
164 |                       {isActive ? (
165 |                         <PlayCircle
166 |                           size={18}
167 |                           className="text-red-500"
168 |                         />
169 |                       ) : (
170 |                         index + 1
171 |                       )}
172 |                     </div>
173 | 
174 |                     <div className="relative aspect-video w-[150px] overflow-hidden rounded-lg">
175 |                       <Image
176 |                         src={
177 |                           item.upload
178 |                             .thumbnailUrl
179 |                         }
180 |                         alt={
181 |                           item.upload.title
182 |                         }
183 |                         fill
184 |                         className="object-cover"
185 |                       />
186 |                     </div>
187 | 
188 |                     <div className="min-w-0 flex-1">
189 |                       <h3 className="line-clamp-2 text-sm font-semibold text-white">
190 |                         {item.upload.title}
191 |                       </h3>
192 | 
193 |                       <p className="mt-1 text-xs text-zinc-400">
194 |                         {
195 |                           item.upload
196 |                             .channel
197 |                             .channelName
198 |                         }
199 |                       </p>
200 |                     </div>
201 |                   </Link>
202 |                 );
203 |               }
204 |             )}
205 |           </div>
206 |         </div>
207 |       </div>
208 |     </div>
209 |   );
210 | }
211 | 


--------------------------------------------------------------------------------
/app/(main)/watch/[videoId]/page.tsx:
--------------------------------------------------------------------------------
  1 | import { prisma } from "@/app/lib/prisma";
  2 | import { auth } from "@/auth";
  3 | import { notFound } from "next/navigation";
  4 | import IncrementView from "../../../components/increment-view";
  5 | import LikeButton from "../../../components/like-button";
  6 | import CommentForm from "@/app/components/comment-form";
  7 | import AddToPlaylistMenu from "@/app/components/add-to-playlist-menu";
  8 | import AddToWatchLaterButton from "@/app/components/add-to-watch-later-button";
  9 | import HlsVideoPlayer from "@/app/components/hls-video-player";
 10 | 
 11 | interface WatchPageProps {
 12 |   params: Promise<{
 13 |     videoId: string;
 14 |   }>;
 15 | }
 16 | 
 17 | async function trackWatchHistory(videoId: string) {
 18 |   const session = await auth();
 19 | 
 20 |   if (!session?.user?.email) {
 21 |     return;
 22 |   }
 23 | 
 24 |   const user = await prisma.user.findUnique({
 25 |     where: {
 26 |       email: session.user.email,
 27 |     },
 28 | 
 29 |     select: {
 30 |       id: true,
 31 |     },
 32 |   });
 33 | 
 34 |   if (!user) {
 35 |     return;
 36 |   }
 37 | 
 38 |   await prisma.watchHistory.upsert({
 39 |     where: {
 40 |       userId_videoId: {
 41 |         userId: user.id,
 42 |         videoId,
 43 |       },
 44 |     },
 45 | 
 46 |     update: {
 47 |       watchedAt: new Date(),
 48 |     },
 49 | 
 50 |     create: {
 51 |       userId: user.id,
 52 |       videoId,
 53 |       watchedAt: new Date(),
 54 |     },
 55 |   });
 56 | }
 57 | 
 58 | function formatViews(count: number): string {
 59 |   if (count >= 1_000_000) {
 60 |     return `${(count / 1_000_000).toFixed(1)}M`;
 61 |   }
 62 | 
 63 |   if (count >= 1_000) {
 64 |     return `${(count / 1_000).toFixed(1)}K`;
 65 |   }
 66 | 
 67 |   return count.toString();
 68 | }
 69 | 
 70 | export default async function WatchPage({
 71 |   params,
 72 | }: WatchPageProps) {
 73 |   const { videoId } = await params;
 74 | 
 75 |   const video = await prisma.upload.findUnique({
 76 |     where: {
 77 |       id: videoId,
 78 |     },
 79 | 
 80 |     include: {
 81 |       channel: true,
 82 | 
 83 |       like: true,
 84 | 
 85 |       comment: {
 86 |         include: {
 87 |           user: true,
 88 |         },
 89 | 
 90 |         orderBy: {
 91 |           createdAt: "desc",
 92 |         },
 93 |       },
 94 |     },
 95 |   });
 96 | 
 97 |   if (!video) {
 98 |     notFound();
 99 |   }
100 | 
101 |   try {
102 |     await trackWatchHistory(video.id);
103 |   } catch (error) {
104 |     console.error("Failed to track watch history", error);
105 |   }
106 | 
107 |   return (
108 |     <div className="min-h-screen bg-black px-6 py-8 text-white">
109 |       {/* increment views */}
110 |       <IncrementView videoId={video.id} />
111 | 
112 |       <div className="mx-auto max-w-6xl">
113 |         {/* VIDEO */}
114 |         <div className="overflow-hidden rounded-2xl bg-zinc-900">
115 |           {video.status === "READY" ? (
116 |             <HlsVideoPlayer
117 |               src={video.videoUrl}
118 |               controls
119 |               className="aspect-video w-full"
120 |             />
121 |           ) : video.status === "PROCESSING" ? (
122 |             <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-950 p-8 text-center">
123 |               <p className="text-lg font-semibold">
124 |                 Video is still processing
125 |               </p>
126 |               <p className="max-w-md text-sm text-zinc-400">
127 |                 We are transcoding this upload into adaptive HLS streams.
128 |                 Refresh in a minute or check the feed later.
129 |               </p>
130 |             </div>
131 |           ) : (
132 |             <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-950 p-8 text-center">
133 |               <p className="text-lg font-semibold text-red-400">
134 |                 Processing failed
135 |               </p>
136 |               <p className="max-w-md text-sm text-zinc-400">
137 |                 This video could not be transcoded. Try uploading again from
138 |                 the upload page.
139 |               </p>
140 |             </div>
141 |           )}
142 |         </div>
143 | 
144 |         {/* DETAILS */}
145 |         <div className="mt-6">
146 |           <h1 className="text-3xl font-black">
147 |             {video.title}
148 |           </h1>
149 | 
150 |           {/* CHANNEL + ACTIONS */}
151 |           <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-zinc-900 p-4 sm:flex-row sm:items-center sm:justify-between">
152 |             {/* CHANNEL */}
153 |             <div className="flex items-center gap-3">
154 |               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
155 |                 {video.channel.channelName
156 |                   .charAt(0)
157 |                   .toUpperCase()}
158 |               </div>
159 | 
160 |               <div>
161 |                 <p className="font-semibold">
162 |                   {video.channel.channelName}
163 |                 </p>
164 | 
165 |                 <p className="text-sm text-zinc-400">
166 |                   {formatViews(
167 |                     video.viewCount
168 |                   )}{" "}
169 |                   views
170 |                 </p>
171 |               </div>
172 |             </div>
173 | 
174 |             <div className="flex flex-wrap items-center gap-3">
175 |               {/* LIKE BUTTON */}
176 |               <LikeButton
177 |                 videoId={video.id}
178 |                 initialLikes={
179 |                   video.like.length
180 |                 }
181 |               />
182 | 
183 |               <AddToWatchLaterButton
184 |                 videoId={video.id}
185 |               />
186 | 
187 |               <AddToPlaylistMenu
188 |                 videoId={video.id}
189 |               />
190 |             </div>
191 |           </div>
192 | 
193 |           {/* DESCRIPTION */}
194 |           <div className="mt-6 rounded-2xl bg-zinc-900 p-5">
195 |             <h2 className="mb-3 text-lg font-bold">
196 |               Description
197 |             </h2>
198 | 
199 |             <p className="whitespace-pre-wrap text-zinc-300">
200 |               {video.description}
201 |             </p>
202 |           </div>
203 | 
204 |           {/* COMMENTS */}
205 |           <div className="mt-8">
206 |             <h2 className="mb-5 text-2xl font-bold">
207 |               Comments (
208 |               {video.comment.length})
209 |             </h2>
210 | 
211 |             {/* COMMENT FORM */}
212 | {/* COMMENT FORM */}
213 | <CommentForm videoId={video.id} />
214 | 
215 |             {/* COMMENTS LIST */}
216 |             <div className="space-y-4">
217 |               {video.comment.length ===
218 |               0 ? (
219 |                 <div className="rounded-2xl bg-zinc-900 p-6 text-center text-zinc-400">
220 |                   No comments yet
221 |                 </div>
222 |               ) : (
223 |                 video.comment.map(
224 |                   (comment) => (
225 |                     <div
226 |                       key={comment.id}
227 |                       className="rounded-2xl bg-zinc-900 p-5"
228 |                     >
229 |                       <div className="flex items-start gap-3">
230 |                         {/* USER AVATAR */}
231 |                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 font-bold">
232 |                           {comment.user.name
233 |                             ?.charAt(0)
234 |                             .toUpperCase()}
235 |                         </div>
236 | 
237 |                         {/* COMMENT */}
238 |                         <div>
239 |                           <p className="font-semibold">
240 |                             {
241 |                               comment.user
242 |                                 .name
243 |                             }
244 |                           </p>
245 | 
246 |                           <p className="mt-2 whitespace-pre-wrap text-zinc-300">
247 |                             {comment.commentText}
248 |                           </p>
249 |                         </div>
250 |                       </div>
251 |                     </div>
252 |                   )
253 |                 )
254 |               )}
255 |             </div>
256 |           </div>
257 |         </div>
258 |       </div>
259 |     </div>
260 |   );
261 | }
262 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260506081021_youtube_schema/migration.sql:
--------------------------------------------------------------------------------
  1 | -- CreateEnum
  2 | CREATE TYPE "Plan" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM');
  3 | 
  4 | -- CreateEnum
  5 | CREATE TYPE "VideoType" AS ENUM ('PUBLIC', 'PRIVATE', 'UNLISTED');
  6 | 
  7 | -- CreateEnum
  8 | CREATE TYPE "StreamStatus" AS ENUM ('LIVE', 'ENDED', 'SCHEDULED');
  9 | 
 10 | -- CreateTable
 11 | CREATE TABLE "User" (
 12 |     "id" TEXT NOT NULL,
 13 |     "firstName" TEXT NOT NULL,
 14 |     "lastName" TEXT NOT NULL,
 15 |     "email" TEXT NOT NULL,
 16 |     "password" TEXT NOT NULL,
 17 |     "dateOfBirth" TIMESTAMP(3) NOT NULL,
 18 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 19 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 20 | 
 21 |     CONSTRAINT "User_pkey" PRIMARY KEY ("id")
 22 | );
 23 | 
 24 | -- CreateTable
 25 | CREATE TABLE "Channel" (
 26 |     "id" TEXT NOT NULL,
 27 |     "channelName" TEXT NOT NULL,
 28 |     "bannerUrl" TEXT NOT NULL,
 29 |     "profilePictureUrl" TEXT NOT NULL,
 30 |     "description" TEXT NOT NULL,
 31 |     "subscriberCount" INTEGER NOT NULL DEFAULT 0,
 32 |     "userId" TEXT NOT NULL,
 33 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 34 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 35 | 
 36 |     CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
 37 | );
 38 | 
 39 | -- CreateTable
 40 | CREATE TABLE "Subscription" (
 41 |     "id" TEXT NOT NULL,
 42 |     "userId" TEXT NOT NULL,
 43 |     "channelId" TEXT NOT NULL,
 44 |     "plan" "Plan" NOT NULL,
 45 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 46 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 47 | 
 48 |     CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
 49 | );
 50 | 
 51 | -- CreateTable
 52 | CREATE TABLE "Upload" (
 53 |     "id" TEXT NOT NULL,
 54 |     "channelId" TEXT NOT NULL,
 55 |     "videoUrl" TEXT NOT NULL,
 56 |     "thumbnailUrl" TEXT NOT NULL,
 57 |     "title" TEXT NOT NULL,
 58 |     "description" TEXT NOT NULL,
 59 |     "type" "VideoType" NOT NULL,
 60 |     "viewCount" INTEGER NOT NULL DEFAULT 0,
 61 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 62 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 63 | 
 64 |     CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
 65 | );
 66 | 
 67 | -- CreateTable
 68 | CREATE TABLE "Like" (
 69 |     "id" TEXT NOT NULL,
 70 |     "userId" TEXT NOT NULL,
 71 |     "videoId" TEXT NOT NULL,
 72 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 73 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 74 | 
 75 |     CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
 76 | );
 77 | 
 78 | -- CreateTable
 79 | CREATE TABLE "Comment" (
 80 |     "id" TEXT NOT NULL,
 81 |     "userId" TEXT NOT NULL,
 82 |     "videoId" TEXT NOT NULL,
 83 |     "commentText" TEXT NOT NULL,
 84 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 85 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 86 | 
 87 |     CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
 88 | );
 89 | 
 90 | -- CreateTable
 91 | CREATE TABLE "LiveStream" (
 92 |     "id" TEXT NOT NULL,
 93 |     "title" TEXT NOT NULL,
 94 |     "description" TEXT NOT NULL,
 95 |     "thumbnailUrl" TEXT,
 96 |     "streamUrl" TEXT,
 97 |     "streamKey" TEXT NOT NULL,
 98 |     "isChatEnabled" BOOLEAN NOT NULL DEFAULT true,
 99 |     "concurrentViewers" INTEGER NOT NULL DEFAULT 0,
100 |     "totalViews" INTEGER NOT NULL DEFAULT 0,
101 |     "status" "StreamStatus" NOT NULL DEFAULT 'SCHEDULED',
102 |     "scheduledFor" TIMESTAMP(3),
103 |     "channelId" TEXT NOT NULL,
104 |     "recordingUrl" TEXT,
105 |     "startedAt" TIMESTAMP(3),
106 |     "endedAt" TIMESTAMP(3),
107 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
108 |     "updatedAt" TIMESTAMP(3) NOT NULL,
109 | 
110 |     CONSTRAINT "LiveStream_pkey" PRIMARY KEY ("id")
111 | );
112 | 
113 | -- CreateTable
114 | CREATE TABLE "LiveComment" (
115 |     "id" TEXT NOT NULL,
116 |     "message" TEXT NOT NULL,
117 |     "userId" TEXT NOT NULL,
118 |     "liveStreamId" TEXT NOT NULL,
119 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
120 |     "updatedAt" TIMESTAMP(3) NOT NULL,
121 | 
122 |     CONSTRAINT "LiveComment_pkey" PRIMARY KEY ("id")
123 | );
124 | 
125 | -- CreateTable
126 | CREATE TABLE "LiveLike" (
127 |     "id" TEXT NOT NULL,
128 |     "userId" TEXT NOT NULL,
129 |     "liveStreamId" TEXT NOT NULL,
130 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
131 |     "updatedAt" TIMESTAMP(3) NOT NULL,
132 | 
133 |     CONSTRAINT "LiveLike_pkey" PRIMARY KEY ("id")
134 | );
135 | 
136 | -- CreateTable
137 | CREATE TABLE "WatchHistory" (
138 |     "id" TEXT NOT NULL,
139 |     "userId" TEXT NOT NULL,
140 |     "videoId" TEXT NOT NULL,
141 |     "watchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
142 | 
143 |     CONSTRAINT "WatchHistory_pkey" PRIMARY KEY ("id")
144 | );
145 | 
146 | -- CreateIndex
147 | CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
148 | 
149 | -- CreateIndex
150 | CREATE INDEX "User_email_idx" ON "User"("email");
151 | 
152 | -- CreateIndex
153 | CREATE UNIQUE INDEX "Channel_channelName_key" ON "Channel"("channelName");
154 | 
155 | -- CreateIndex
156 | CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");
157 | 
158 | -- CreateIndex
159 | CREATE INDEX "Subscription_channelId_idx" ON "Subscription"("channelId");
160 | 
161 | -- CreateIndex
162 | CREATE INDEX "Upload_channelId_idx" ON "Upload"("channelId");
163 | 
164 | -- CreateIndex
165 | CREATE INDEX "Like_userId_idx" ON "Like"("userId");
166 | 
167 | -- CreateIndex
168 | CREATE INDEX "Like_videoId_idx" ON "Like"("videoId");
169 | 
170 | -- CreateIndex
171 | CREATE INDEX "Comment_videoId_idx" ON "Comment"("videoId");
172 | 
173 | -- CreateIndex
174 | CREATE UNIQUE INDEX "LiveStream_streamKey_key" ON "LiveStream"("streamKey");
175 | 
176 | -- CreateIndex
177 | CREATE INDEX "LiveStream_channelId_idx" ON "LiveStream"("channelId");
178 | 
179 | -- CreateIndex
180 | CREATE INDEX "LiveStream_status_idx" ON "LiveStream"("status");
181 | 
182 | -- CreateIndex
183 | CREATE INDEX "LiveComment_userId_idx" ON "LiveComment"("userId");
184 | 
185 | -- CreateIndex
186 | CREATE INDEX "LiveComment_liveStreamId_idx" ON "LiveComment"("liveStreamId");
187 | 
188 | -- CreateIndex
189 | CREATE INDEX "LiveLike_userId_idx" ON "LiveLike"("userId");
190 | 
191 | -- CreateIndex
192 | CREATE UNIQUE INDEX "LiveLike_userId_liveStreamId_key" ON "LiveLike"("userId", "liveStreamId");
193 | 
194 | -- CreateIndex
195 | CREATE INDEX "WatchHistory_userId_idx" ON "WatchHistory"("userId");
196 | 
197 | -- CreateIndex
198 | CREATE INDEX "WatchHistory_videoId_idx" ON "WatchHistory"("videoId");
199 | 
200 | -- AddForeignKey
201 | ALTER TABLE "Channel" ADD CONSTRAINT "Channel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
202 | 
203 | -- AddForeignKey
204 | ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
205 | 
206 | -- AddForeignKey
207 | ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
208 | 
209 | -- AddForeignKey
210 | ALTER TABLE "Upload" ADD CONSTRAINT "Upload_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
211 | 
212 | -- AddForeignKey
213 | ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
214 | 
215 | -- AddForeignKey
216 | ALTER TABLE "Like" ADD CONSTRAINT "Like_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
217 | 
218 | -- AddForeignKey
219 | ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
220 | 
221 | -- AddForeignKey
222 | ALTER TABLE "Comment" ADD CONSTRAINT "Comment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
223 | 
224 | -- AddForeignKey
225 | ALTER TABLE "LiveStream" ADD CONSTRAINT "LiveStream_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
226 | 
227 | -- AddForeignKey
228 | ALTER TABLE "LiveComment" ADD CONSTRAINT "LiveComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
229 | 
230 | -- AddForeignKey
231 | ALTER TABLE "LiveComment" ADD CONSTRAINT "LiveComment_liveStreamId_fkey" FOREIGN KEY ("liveStreamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;
232 | 
233 | -- AddForeignKey
234 | ALTER TABLE "LiveLike" ADD CONSTRAINT "LiveLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
235 | 
236 | -- AddForeignKey
237 | ALTER TABLE "LiveLike" ADD CONSTRAINT "LiveLike_liveStreamId_fkey" FOREIGN KEY ("liveStreamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;
238 | 
239 | -- AddForeignKey
240 | ALTER TABLE "WatchHistory" ADD CONSTRAINT "WatchHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
241 | 
242 | -- AddForeignKey
243 | ALTER TABLE "WatchHistory" ADD CONSTRAINT "WatchHistory_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
244 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260511045903_auth_fix/migration.sql:
--------------------------------------------------------------------------------
  1 | /*
  2 |   Warnings:
  3 | 
  4 |   - You are about to drop the `LiveComment` table. If the table is not empty, all the data it contains will be lost.
  5 |   - You are about to drop the `LiveLike` table. If the table is not empty, all the data it contains will be lost.
  6 |   - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  7 |   - A unique constraint covering the columns `[userId,videoId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  8 |   - A unique constraint covering the columns `[userId,LiveStreamId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  9 | 
 10 | */
 11 | -- CreateEnum
 12 | CREATE TYPE "PlatformPlan" AS ENUM ('FREE', 'PREMIUM', 'FAMILY', 'STUDENT');
 13 | 
 14 | -- CreateEnum
 15 | CREATE TYPE "UploadStatus" AS ENUM ('PROCESSING', 'READY', 'FAILED');
 16 | 
 17 | -- DropForeignKey
 18 | ALTER TABLE "LiveComment" DROP CONSTRAINT "LiveComment_liveStreamId_fkey";
 19 | 
 20 | -- DropForeignKey
 21 | ALTER TABLE "LiveComment" DROP CONSTRAINT "LiveComment_userId_fkey";
 22 | 
 23 | -- DropForeignKey
 24 | ALTER TABLE "LiveLike" DROP CONSTRAINT "LiveLike_liveStreamId_fkey";
 25 | 
 26 | -- DropForeignKey
 27 | ALTER TABLE "LiveLike" DROP CONSTRAINT "LiveLike_userId_fkey";
 28 | 
 29 | -- DropForeignKey
 30 | ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_channelId_fkey";
 31 | 
 32 | -- DropForeignKey
 33 | ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";
 34 | 
 35 | -- DropIndex
 36 | DROP INDEX "Like_userId_idx";
 37 | 
 38 | -- DropIndex
 39 | DROP INDEX "Like_videoId_idx";
 40 | 
 41 | -- AlterTable
 42 | ALTER TABLE "Channel" ALTER COLUMN "bannerUrl" DROP NOT NULL,
 43 | ALTER COLUMN "profilePictureUrl" DROP NOT NULL;
 44 | 
 45 | -- AlterTable
 46 | ALTER TABLE "Comment" ADD COLUMN     "LiveStreamId" TEXT,
 47 | ADD COLUMN     "deletedAt" TIMESTAMP(3),
 48 | ADD COLUMN     "isEdited" BOOLEAN NOT NULL DEFAULT false,
 49 | ADD COLUMN     "parentId" TEXT,
 50 | ALTER COLUMN "videoId" DROP NOT NULL;
 51 | 
 52 | -- AlterTable
 53 | ALTER TABLE "Like" ADD COLUMN     "LiveStreamId" TEXT,
 54 | ALTER COLUMN "videoId" DROP NOT NULL;
 55 | 
 56 | -- AlterTable
 57 | ALTER TABLE "LiveStream" ADD COLUMN     "deletedAt" TIMESTAMP(3);
 58 | 
 59 | -- AlterTable
 60 | ALTER TABLE "Upload" ADD COLUMN     "deletedAt" TIMESTAMP(3),
 61 | ADD COLUMN     "status" "UploadStatus" NOT NULL DEFAULT 'PROCESSING';
 62 | 
 63 | -- AlterTable
 64 | ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
 65 | ALTER COLUMN "lastName" DROP NOT NULL,
 66 | ALTER COLUMN "email" DROP NOT NULL,
 67 | ALTER COLUMN "password" DROP NOT NULL,
 68 | ALTER COLUMN "dateOfBirth" DROP NOT NULL;
 69 | 
 70 | -- DropTable
 71 | DROP TABLE "LiveComment";
 72 | 
 73 | -- DropTable
 74 | DROP TABLE "LiveLike";
 75 | 
 76 | -- DropTable
 77 | DROP TABLE "Subscription";
 78 | 
 79 | -- DropEnum
 80 | DROP TYPE "Plan";
 81 | 
 82 | -- CreateTable
 83 | CREATE TABLE "Account" (
 84 |     "id" TEXT NOT NULL,
 85 |     "userId" TEXT NOT NULL,
 86 |     "type" TEXT NOT NULL,
 87 |     "provider" TEXT NOT NULL,
 88 |     "providerAccountId" TEXT NOT NULL,
 89 |     "refresh_token" TEXT,
 90 |     "access_token" TEXT,
 91 |     "expires_at" INTEGER,
 92 |     "token_type" TEXT,
 93 |     "scope" TEXT,
 94 |     "id_token" TEXT,
 95 |     "session_state" TEXT,
 96 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 97 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 98 | 
 99 |     CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
100 | );
101 | 
102 | -- CreateTable
103 | CREATE TABLE "Session" (
104 |     "id" TEXT NOT NULL,
105 |     "sessionToken" TEXT NOT NULL,
106 |     "userId" TEXT NOT NULL,
107 |     "expires" TIMESTAMP(3) NOT NULL,
108 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
109 |     "updatedAt" TIMESTAMP(3) NOT NULL,
110 | 
111 |     CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
112 | );
113 | 
114 | -- CreateTable
115 | CREATE TABLE "VerificationToken" (
116 |     "identifier" TEXT NOT NULL,
117 |     "token" TEXT NOT NULL,
118 |     "expires" TIMESTAMP(3) NOT NULL
119 | );
120 | 
121 | -- CreateTable
122 | CREATE TABLE "ChannelSubscription" (
123 |     "id" TEXT NOT NULL,
124 |     "userId" TEXT NOT NULL,
125 |     "channelId" TEXT NOT NULL,
126 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
127 |     "updatedAt" TIMESTAMP(3) NOT NULL,
128 | 
129 |     CONSTRAINT "ChannelSubscription_pkey" PRIMARY KEY ("id")
130 | );
131 | 
132 | -- CreateTable
133 | CREATE TABLE "PlatformSubscription" (
134 |     "id" TEXT NOT NULL,
135 |     "userId" TEXT NOT NULL,
136 |     "plan" "PlatformPlan" NOT NULL DEFAULT 'FREE',
137 |     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
138 |     "expiresAt" TIMESTAMP(3),
139 |     "isActive" BOOLEAN NOT NULL DEFAULT true,
140 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
141 |     "updatedAt" TIMESTAMP(3) NOT NULL,
142 | 
143 |     CONSTRAINT "PlatformSubscription_pkey" PRIMARY KEY ("id")
144 | );
145 | 
146 | -- CreateTable
147 | CREATE TABLE "Playlist" (
148 |     "id" TEXT NOT NULL,
149 |     "name" TEXT NOT NULL,
150 |     "description" TEXT,
151 |     "userId" TEXT NOT NULL,
152 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
153 |     "updatedAt" TIMESTAMP(3) NOT NULL,
154 | 
155 |     CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
156 | );
157 | 
158 | -- CreateTable
159 | CREATE TABLE "_PlaylistToUpload" (
160 |     "A" TEXT NOT NULL,
161 |     "B" TEXT NOT NULL,
162 | 
163 |     CONSTRAINT "_PlaylistToUpload_AB_pkey" PRIMARY KEY ("A","B")
164 | );
165 | 
166 | -- CreateIndex
167 | CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
168 | 
169 | -- CreateIndex
170 | CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
171 | 
172 | -- CreateIndex
173 | CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
174 | 
175 | -- CreateIndex
176 | CREATE INDEX "ChannelSubscription_userId_idx" ON "ChannelSubscription"("userId");
177 | 
178 | -- CreateIndex
179 | CREATE INDEX "ChannelSubscription_channelId_idx" ON "ChannelSubscription"("channelId");
180 | 
181 | -- CreateIndex
182 | CREATE UNIQUE INDEX "ChannelSubscription_userId_channelId_key" ON "ChannelSubscription"("userId", "channelId");
183 | 
184 | -- CreateIndex
185 | CREATE UNIQUE INDEX "PlatformSubscription_userId_key" ON "PlatformSubscription"("userId");
186 | 
187 | -- CreateIndex
188 | CREATE INDEX "Playlist_userId_idx" ON "Playlist"("userId");
189 | 
190 | -- CreateIndex
191 | CREATE INDEX "_PlaylistToUpload_B_index" ON "_PlaylistToUpload"("B");
192 | 
193 | -- CreateIndex
194 | CREATE INDEX "Comment_LiveStreamId_idx" ON "Comment"("LiveStreamId");
195 | 
196 | -- CreateIndex
197 | CREATE INDEX "Comment_parentId_idx" ON "Comment"("parentId");
198 | 
199 | -- CreateIndex
200 | CREATE UNIQUE INDEX "Like_userId_videoId_key" ON "Like"("userId", "videoId");
201 | 
202 | -- CreateIndex
203 | CREATE UNIQUE INDEX "Like_userId_LiveStreamId_key" ON "Like"("userId", "LiveStreamId");
204 | 
205 | -- CreateIndex
206 | CREATE INDEX "LiveStream_scheduledFor_idx" ON "LiveStream"("scheduledFor");
207 | 
208 | -- CreateIndex
209 | CREATE INDEX "Upload_createdAt_idx" ON "Upload"("createdAt");
210 | 
211 | -- AddForeignKey
212 | ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
213 | 
214 | -- AddForeignKey
215 | ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
216 | 
217 | -- AddForeignKey
218 | ALTER TABLE "ChannelSubscription" ADD CONSTRAINT "ChannelSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
219 | 
220 | -- AddForeignKey
221 | ALTER TABLE "ChannelSubscription" ADD CONSTRAINT "ChannelSubscription_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
222 | 
223 | -- AddForeignKey
224 | ALTER TABLE "PlatformSubscription" ADD CONSTRAINT "PlatformSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
225 | 
226 | -- AddForeignKey
227 | ALTER TABLE "Like" ADD CONSTRAINT "Like_LiveStreamId_fkey" FOREIGN KEY ("LiveStreamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;
228 | 
229 | -- AddForeignKey
230 | ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
231 | 
232 | -- AddForeignKey
233 | ALTER TABLE "Comment" ADD CONSTRAINT "Comment_LiveStreamId_fkey" FOREIGN KEY ("LiveStreamId") REFERENCES "LiveStream"("id") ON DELETE CASCADE ON UPDATE CASCADE;
234 | 
235 | -- AddForeignKey
236 | ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
237 | 
238 | -- AddForeignKey
239 | ALTER TABLE "_PlaylistToUpload" ADD CONSTRAINT "_PlaylistToUpload_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
240 | 
241 | -- AddForeignKey
242 | ALTER TABLE "_PlaylistToUpload" ADD CONSTRAINT "_PlaylistToUpload_B_fkey" FOREIGN KEY ("B") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
243 | 


--------------------------------------------------------------------------------
/app/lib/hls-transcoder.ts:
--------------------------------------------------------------------------------
  1 | import { spawn } from "node:child_process";
  2 | import { createWriteStream } from "node:fs";
  3 | import {
  4 |   access,
  5 |   mkdir,
  6 |   rm,
  7 |   unlink,
  8 | } from "node:fs/promises";
  9 | import os from "node:os";
 10 | import path from "node:path";
 11 | import { pipeline } from "node:stream/promises";
 12 | import { Readable } from "node:stream";
 13 | import { randomUUID } from "node:crypto";
 14 | 
 15 | interface Rendition {
 16 |   name: string;
 17 |   width: number;
 18 |   height: number;
 19 |   videoBitrate: string;
 20 |   maxRate: string;
 21 |   bufSize: string;
 22 |   audioBitrate: string;
 23 | }
 24 | 
 25 | interface ProbeResult {
 26 |   width: number | null;
 27 |   height: number | null;
 28 |   hasAudio: boolean;
 29 | }
 30 | 
 31 | export interface HlsTranscodeResult {
 32 |   masterPlaylistPath: string;
 33 |   outputDirectory: string;
 34 | }
 35 | 
 36 | const LADDER: Rendition[] = [
 37 |   {
 38 |     name: "1080p",
 39 |     width: 1920,
 40 |     height: 1080,
 41 |     videoBitrate: "5000k",
 42 |     maxRate: "5350k",
 43 |     bufSize: "7500k",
 44 |     audioBitrate: "128k",
 45 |   },
 46 |   {
 47 |     name: "720p",
 48 |     width: 1280,
 49 |     height: 720,
 50 |     videoBitrate: "2800k",
 51 |     maxRate: "2996k",
 52 |     bufSize: "4200k",
 53 |     audioBitrate: "128k",
 54 |   },
 55 |   {
 56 |     name: "480p",
 57 |     width: 854,
 58 |     height: 480,
 59 |     videoBitrate: "1400k",
 60 |     maxRate: "1498k",
 61 |     bufSize: "2100k",
 62 |     audioBitrate: "96k",
 63 |   },
 64 |   {
 65 |     name: "360p",
 66 |     width: 640,
 67 |     height: 360,
 68 |     videoBitrate: "800k",
 69 |     maxRate: "856k",
 70 |     bufSize: "1200k",
 71 |     audioBitrate: "96k",
 72 |   },
 73 | ];
 74 | 
 75 | function ensureEven(value: number): number {
 76 |   if (value <= 0) {
 77 |     return 2;
 78 |   }
 79 | 
 80 |   return value % 2 === 0 ? value : value - 1;
 81 | }
 82 | 
 83 | async function runCommand(
 84 |   command: string,
 85 |   args: string[]
 86 | ): Promise<string> {
 87 |   return new Promise((resolve, reject) => {
 88 |     const child = spawn(command, args);
 89 | 
 90 |     let stdout = "";
 91 |     let stderr = "";
 92 | 
 93 |     child.stdout.on("data", (chunk) => {
 94 |       stdout += chunk.toString();
 95 |     });
 96 | 
 97 |     child.stderr.on("data", (chunk) => {
 98 |       stderr += chunk.toString();
 99 |     });
100 | 
101 |     child.on("error", (error) => {
102 |       reject(error);
103 |     });
104 | 
105 |     child.on("close", (code) => {
106 |       if (code === 0) {
107 |         resolve(stdout.trim());
108 |         return;
109 |       }
110 | 
111 |       const errorLines = stderr
112 |         .split("\n")
113 |         .filter((line) =>
114 |           /error|failed|invalid|cannot/i.test(line)
115 |         )
116 |         .slice(-8)
117 |         .join("\n");
118 | 
119 |       const tail = stderr.slice(-3000);
120 | 
121 |       reject(
122 |         new Error(
123 |           `${command} exited with code ${code}.${
124 |             errorLines
125 |               ? `\n${errorLines}`
126 |               : `\n${tail}`
127 |           }`
128 |         )
129 |       );
130 |     });
131 |   });
132 | }
133 | 
134 | async function downloadSourceFile(
135 |   sourceUrl: string,
136 |   destinationPath: string
137 | ) {
138 |   const response = await fetch(sourceUrl);
139 | 
140 |   if (!response.ok || !response.body) {
141 |     throw new Error(
142 |       `Failed to download source video: ${response.status} ${response.statusText}`
143 |     );
144 |   }
145 | 
146 |   await pipeline(
147 |     Readable.fromWeb(response.body as ReadableStream),
148 |     createWriteStream(destinationPath)
149 |   );
150 | }
151 | 
152 | async function probeMedia(
153 |   inputPath: string
154 | ): Promise<ProbeResult> {
155 |   const raw = await runCommand("ffprobe", [
156 |     "-v",
157 |     "error",
158 |     "-show_streams",
159 |     "-of",
160 |     "json",
161 |     inputPath,
162 |   ]);
163 | 
164 |   const parsed = JSON.parse(raw) as {
165 |     streams?: Array<{
166 |       codec_type?: string;
167 |       width?: number;
168 |       height?: number;
169 |     }>;
170 |   };
171 | 
172 |   const streams = parsed.streams ?? [];
173 | 
174 |   const videoStream = streams.find(
175 |     (stream) => stream.codec_type === "video"
176 |   );
177 | 
178 |   const hasAudio = streams.some(
179 |     (stream) => stream.codec_type === "audio"
180 |   );
181 | 
182 |   return {
183 |     width:
184 |       typeof videoStream?.width === "number"
185 |         ? videoStream.width
186 |         : null,
187 |     height:
188 |       typeof videoStream?.height === "number"
189 |         ? videoStream.height
190 |         : null,
191 |     hasAudio,
192 |   };
193 | }
194 | 
195 | function pickRenditions(
196 |   width: number | null,
197 |   height: number | null
198 | ): Rendition[] {
199 |   if (!height) {
200 |     return LADDER;
201 |   }
202 | 
203 |   const allowed = LADDER.filter(
204 |     (rendition) => rendition.height <= height
205 |   );
206 | 
207 |   if (allowed.length > 0) {
208 |     return allowed;
209 |   }
210 | 
211 |   const safeWidth = ensureEven(width ?? 640);
212 |   const safeHeight = ensureEven(height ?? 360);
213 | 
214 |   return [
215 |     {
216 |       name: `${safeHeight}p`,
217 |       width: safeWidth,
218 |       height: safeHeight,
219 |       videoBitrate: "900k",
220 |       maxRate: "963k",
221 |       bufSize: "1400k",
222 |       audioBitrate: "96k",
223 |     },
224 |   ];
225 | }
226 | 
227 | function buildFfmpegArgs(
228 |   inputPath: string,
229 |   outputDirectory: string,
230 |   renditions: Rendition[],
231 |   hasAudio: boolean
232 | ): string[] {
233 |   const args: string[] = ["-y", "-i", inputPath];
234 | 
235 |   const mapAndScale: string[] = [];
236 | 
237 |   renditions.forEach((rendition, index) => {
238 |     mapAndScale.push("-map", "0:v:0");
239 | 
240 |     if (hasAudio) {
241 |       mapAndScale.push("-map", "0:a:0");
242 |     }
243 | 
244 |     mapAndScale.push(
245 |       `-filter:v:${index}`,
246 |       `scale=w=${rendition.width}:h=${rendition.height}:force_original_aspect_ratio=decrease:force_divisible_by=2`
247 |     );
248 |   });
249 | 
250 |   args.push(...mapAndScale);
251 | 
252 |   args.push(
253 |     "-c:v",
254 |     "libx264",
255 |     "-preset",
256 |     "veryfast",
257 |     "-profile:v",
258 |     "main",
259 |     "-pix_fmt",
260 |     "yuv420p",
261 |     "-sc_threshold",
262 |     "0",
263 |     "-g",
264 |     "48",
265 |     "-keyint_min",
266 |     "48"
267 |   );
268 | 
269 |   renditions.forEach((rendition, index) => {
270 |     args.push(
271 |       `-b:v:${index}`,
272 |       rendition.videoBitrate,
273 |       `-maxrate:v:${index}`,
274 |       rendition.maxRate,
275 |       `-bufsize:v:${index}`,
276 |       rendition.bufSize
277 |     );
278 |   });
279 | 
280 |   if (hasAudio) {
281 |     args.push("-c:a", "aac", "-ar", "48000", "-ac", "2");
282 | 
283 |     renditions.forEach((rendition, index) => {
284 |       args.push(`-b:a:${index}`, rendition.audioBitrate);
285 |     });
286 |   }
287 | 
288 |   const varStreamMap = renditions
289 |     .map((rendition, index) => {
290 |       if (hasAudio) {
291 |         return `v:${index},a:${index},name:${rendition.name}`;
292 |       }
293 | 
294 |       return `v:${index},name:${rendition.name}`;
295 |     })
296 |     .join(" ");
297 | 
298 |   args.push(
299 |     "-f",
300 |     "hls",
301 |     "-hls_time",
302 |     "6",
303 |     "-hls_playlist_type",
304 |     "vod",
305 |     "-hls_flags",
306 |     "independent_segments",
307 |     "-hls_list_size",
308 |     "0",
309 |     "-master_pl_name",
310 |     "master.m3u8",
311 |     "-var_stream_map",
312 |     varStreamMap,
313 |     "-hls_segment_filename",
314 |     path.join(outputDirectory, "v%v", "segment_%03d.ts"),
315 |     path.join(outputDirectory, "v%v", "index.m3u8")
316 |   );
317 | 
318 |   return args;
319 | }
320 | 
321 | function streamDirectory(videoId: string) {
322 |   return path.join(
323 |     process.cwd(),
324 |     "public",
325 |     "streams",
326 |     videoId
327 |   );
328 | }
329 | 
330 | export async function transcodeToMultibitrateHls({
331 |   videoId,
332 |   sourceUrl,
333 | }: {
334 |   videoId: string;
335 |   sourceUrl: string;
336 | }): Promise<HlsTranscodeResult> {
337 |   const outputDirectory = streamDirectory(videoId);
338 | 
339 |   await rm(outputDirectory, {
340 |     recursive: true,
341 |     force: true,
342 |   });
343 | 
344 |   await mkdir(outputDirectory, {
345 |     recursive: true,
346 |   });
347 | 
348 |   const temporarySourcePath = path.join(
349 |     os.tmpdir(),
350 |     `source-${videoId}-${randomUUID()}.mp4`
351 |   );
352 | 
353 |   try {
354 |     await downloadSourceFile(sourceUrl, temporarySourcePath);
355 | 
356 |     const probe = await probeMedia(temporarySourcePath);
357 | 
358 |     const renditions = pickRenditions(
359 |       probe.width,
360 |       probe.height
361 |     );
362 | 
363 |     await Promise.all(
364 |       renditions.map((_, index) =>
365 |         mkdir(path.join(outputDirectory, `v${index}`), {
366 |           recursive: true,
367 |         })
368 |       )
369 |     );
370 | 
371 |     const ffmpegArgs = buildFfmpegArgs(
372 |       temporarySourcePath,
373 |       outputDirectory,
374 |       renditions,
375 |       probe.hasAudio
376 |     );
377 | 
378 |     await runCommand("ffmpeg", ffmpegArgs);
379 | 
380 |     const masterPath = path.join(
381 |       outputDirectory,
382 |       "master.m3u8"
383 |     );
384 | 
385 |     await access(masterPath);
386 | 
387 |     return {
388 |       masterPlaylistPath: `/streams/${videoId}/master.m3u8`,
389 |       outputDirectory,
390 |     };
391 |   } finally {
392 |     await unlink(temporarySourcePath).catch(() => {
393 |       return;
394 |     });
395 |   }
396 | }
397 | 


--------------------------------------------------------------------------------
/app/(main)/playlist/page.tsx:
--------------------------------------------------------------------------------
  1 | import { auth } from "@/auth";
  2 | import { prisma } from "@/app/lib/prisma";
  3 | 
  4 | import Link from "next/link";
  5 | import Image from "next/image";
  6 | 
  7 | import {
  8 |   ListVideo,
  9 |   Sparkles,
 10 |   PlayCircle,
 11 | } from "lucide-react";
 12 | 
 13 | import CreatePlaylistForm from "@/app/components/create-playlist-form";
 14 | 
 15 | export const dynamic = "force-dynamic";
 16 | 
 17 | function formatDate(date: Date) {
 18 |   return new Intl.DateTimeFormat("en-US", {
 19 |     month: "short",
 20 |     day: "numeric",
 21 |     year: "numeric",
 22 |   }).format(date);
 23 | }
 24 | 
 25 | export default async function PlaylistIndexPage() {
 26 |   const session = await auth();
 27 | 
 28 |   if (!session?.user?.email) {
 29 |     return (
 30 |       <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] px-4 py-8 text-white sm:px-6 lg:px-10">
 31 |         <div className="pointer-events-none absolute inset-0">
 32 |           <div className="absolute left-[10%] top-12 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
 33 |           <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
 34 |         </div>
 35 | 
 36 |         <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/70 p-8 text-center backdrop-blur-xl">
 37 |           <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
 38 |             <ListVideo size={14} />
 39 |             Playlist
 40 |           </p>
 41 | 
 42 |           <h1 className="mt-4 text-3xl font-black tracking-tight">
 43 |             Sign in to use playlists
 44 |           </h1>
 45 | 
 46 |           <p className="mx-auto mt-3 max-w-xl text-zinc-400">
 47 |             Save videos into playlists so you can watch them in order anytime.
 48 |           </p>
 49 | 
 50 |           <Link
 51 |             href="/login"
 52 |             className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
 53 |           >
 54 |             Go to Login
 55 |           </Link>
 56 |         </div>
 57 |       </div>
 58 |     );
 59 |   }
 60 | 
 61 |   const currentUser = await prisma.user.findUnique({
 62 |     where: {
 63 |       email: session.user.email,
 64 |     },
 65 |     select: {
 66 |       id: true,
 67 |       firstName: true,
 68 |       name: true,
 69 |     },
 70 |   });
 71 | 
 72 |   if (!currentUser) {
 73 |     return (
 74 |       <div className="min-h-[calc(100vh-73px)] bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
 75 |         <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/80 p-8 text-center">
 76 |           <h1 className="text-2xl font-bold">We could not find your profile</h1>
 77 | 
 78 |           <p className="mt-2 text-zinc-400">
 79 |             Please sign out and sign in again.
 80 |           </p>
 81 |         </div>
 82 |       </div>
 83 |     );
 84 |   }
 85 | 
 86 |   const playlists = await prisma.playlist.findMany({
 87 |     where: {
 88 |       userId: currentUser.id,
 89 |     },
 90 |     include: {
 91 |       _count: {
 92 |         select: {
 93 |           playlistVideos: true,
 94 |         },
 95 |       },
 96 |       playlistVideos: {
 97 |         include: {
 98 |           upload: {
 99 |             select: {
100 |               thumbnailUrl: true,
101 |               title: true,
102 |             },
103 |           },
104 |         },
105 |         orderBy: {
106 |           order: "asc",
107 |         },
108 |         take: 1,
109 |       },
110 |     },
111 |     orderBy: {
112 |       updatedAt: "desc",
113 |     },
114 |   });
115 | 
116 |   const userName =
117 |     currentUser.firstName ||
118 |     currentUser.name?.split(" ")[0] ||
119 |     "Creator";
120 | 
121 |   return (
122 |     <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] text-white">
123 |       <div className="pointer-events-none absolute inset-0">
124 |         <div className="absolute left-[6%] top-8 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
125 | 
126 |         <div className="absolute right-[12%] top-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
127 | 
128 |         <div className="absolute bottom-0 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600/15 via-orange-500/10 to-amber-400/15 blur-3xl" />
129 |       </div>
130 | 
131 |       <div className="relative mx-auto w-full max-w-[1500px] px-4 pb-10 pt-7 sm:px-6 lg:px-10">
132 |         <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_18px_56px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
133 |           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
134 |             <div>
135 |               <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
136 |                 <Sparkles size={13} />
137 |                 Playlist Library
138 |               </p>
139 | 
140 |               <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
141 |                 {userName}&apos;s Playlists
142 |               </h1>
143 | 
144 |               <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
145 |                 Build collections for tutorials, music, and series you want to
146 |                 watch in sequence.
147 |               </p>
148 |             </div>
149 | 
150 |             <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
151 |               <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
152 |                 <PlayCircle size={14} />
153 |                 Total Playlists
154 |               </p>
155 | 
156 |               <p className="mt-2 text-3xl font-extrabold text-white">
157 |                 {playlists.length}
158 |               </p>
159 |             </div>
160 |           </div>
161 |         </header>
162 | 
163 |         <div className="mt-8 grid gap-6 lg:grid-cols-[380px,1fr]">
164 |           <CreatePlaylistForm />
165 | 
166 |           <div>
167 |             {playlists.length === 0 ? (
168 |               <div className="rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
169 |                 <h2 className="text-2xl font-bold text-white">
170 |                   No playlists yet
171 |                 </h2>
172 | 
173 |                 <p className="mx-auto mt-2 max-w-xl text-zinc-400">
174 |                   Create your first playlist using the form.
175 |                 </p>
176 |               </div>
177 |             ) : (
178 |               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
179 |                 {playlists.map((playlist) => {
180 |                   const firstVideo =
181 |                     playlist.playlistVideos[0]?.upload;
182 | 
183 |                   return (
184 |                     <Link
185 |                       key={playlist.id}
186 |                       href={`/playlist/${playlist.id}`}
187 |                       className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
188 |                     >
189 |                       <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
190 |                         {firstVideo ? (
191 |                           <Image
192 |                             src={firstVideo.thumbnailUrl}
193 |                             alt={firstVideo.title}
194 |                             fill
195 |                             className="object-cover transition-transform duration-500 group-hover:scale-105"
196 |                           />
197 |                         ) : (
198 |                           <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-500">
199 |                             <ListVideo size={36} />
200 |                           </div>
201 |                         )}
202 | 
203 |                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
204 |                       </div>
205 | 
206 |                       <div className="mt-3">
207 |                         <h2 className="line-clamp-1 text-lg font-bold text-white">
208 |                           {playlist.title}
209 |                         </h2>
210 | 
211 |                         {playlist.description ? (
212 |                           <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
213 |                             {playlist.description}
214 |                           </p>
215 |                         ) : (
216 |                           <p className="mt-1 text-sm text-zinc-500">
217 |                             No description
218 |                           </p>
219 |                         )}
220 | 
221 |                         <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
222 |                           <span>
223 |                             {playlist._count.playlistVideos} videos
224 |                           </span>
225 | 
226 |                           <span>
227 |                             Updated {formatDate(playlist.updatedAt)}
228 |                           </span>
229 |                         </div>
230 |                       </div>
231 |                     </Link>
232 |                   );
233 |                 })}
234 |               </div>
235 |             )}
236 |           </div>
237 |         </div>
238 |       </div>
239 |     </div>
240 |   );
241 | }
242 | 


--------------------------------------------------------------------------------
/components/ui/dropdown-menu.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
  5 | 
  6 | import { cn } from "@/lib/utils"
  7 | import { CheckIcon, ChevronRightIcon } from "lucide-react"
  8 | 
  9 | function DropdownMenu({
 10 |   ...props
 11 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
 12 |   return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
 13 | }
 14 | 
 15 | function DropdownMenuPortal({
 16 |   ...props
 17 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
 18 |   return (
 19 |     <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
 20 |   )
 21 | }
 22 | 
 23 | function DropdownMenuTrigger({
 24 |   ...props
 25 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
 26 |   return (
 27 |     <DropdownMenuPrimitive.Trigger
 28 |       data-slot="dropdown-menu-trigger"
 29 |       {...props}
 30 |     />
 31 |   )
 32 | }
 33 | 
 34 | function DropdownMenuContent({
 35 |   className,
 36 |   align = "start",
 37 |   sideOffset = 4,
 38 |   ...props
 39 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
 40 |   return (
 41 |     <DropdownMenuPrimitive.Portal>
 42 |       <DropdownMenuPrimitive.Content
 43 |         data-slot="dropdown-menu-content"
 44 |         sideOffset={sideOffset}
 45 |         align={align}
 46 |         className={cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
 47 |         {...props}
 48 |       />
 49 |     </DropdownMenuPrimitive.Portal>
 50 |   )
 51 | }
 52 | 
 53 | function DropdownMenuGroup({
 54 |   ...props
 55 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
 56 |   return (
 57 |     <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
 58 |   )
 59 | }
 60 | 
 61 | function DropdownMenuItem({
 62 |   className,
 63 |   inset,
 64 |   variant = "default",
 65 |   ...props
 66 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
 67 |   inset?: boolean
 68 |   variant?: "default" | "destructive"
 69 | }) {
 70 |   return (
 71 |     <DropdownMenuPrimitive.Item
 72 |       data-slot="dropdown-menu-item"
 73 |       data-inset={inset}
 74 |       data-variant={variant}
 75 |       className={cn(
 76 |         "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
 77 |         className
 78 |       )}
 79 |       {...props}
 80 |     />
 81 |   )
 82 | }
 83 | 
 84 | function DropdownMenuCheckboxItem({
 85 |   className,
 86 |   children,
 87 |   checked,
 88 |   inset,
 89 |   ...props
 90 | }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
 91 |   inset?: boolean
 92 | }) {
 93 |   return (
 94 |     <DropdownMenuPrimitive.CheckboxItem
 95 |       data-slot="dropdown-menu-checkbox-item"
 96 |       data-inset={inset}
 97 |       className={cn(
 98 |         "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
 99 |         className
100 |       )}
101 |       checked={checked}
102 |       {...props}
103 |     >
104 |       <span
105 |         className="pointer-events-none absolute right-2 flex items-center justify-center"
106 |         data-slot="dropdown-menu-checkbox-item-indicator"
107 |       >
108 |         <DropdownMenuPrimitive.ItemIndicator>
109 |           <CheckIcon
110 |           />
111 |         </DropdownMenuPrimitive.ItemIndicator>
112 |       </span>
113 |       {children}
114 |     </DropdownMenuPrimitive.CheckboxItem>
115 |   )
116 | }
117 | 
118 | function DropdownMenuRadioGroup({
119 |   ...props
120 | }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
121 |   return (
122 |     <DropdownMenuPrimitive.RadioGroup
123 |       data-slot="dropdown-menu-radio-group"
124 |       {...props}
125 |     />
126 |   )
127 | }
128 | 
129 | function DropdownMenuRadioItem({
130 |   className,
131 |   children,
132 |   inset,
133 |   ...props
134 | }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
135 |   inset?: boolean
136 | }) {
137 |   return (
138 |     <DropdownMenuPrimitive.RadioItem
139 |       data-slot="dropdown-menu-radio-item"
140 |       data-inset={inset}
141 |       className={cn(
142 |         "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
143 |         className
144 |       )}
145 |       {...props}
146 |     >
147 |       <span
148 |         className="pointer-events-none absolute right-2 flex items-center justify-center"
149 |         data-slot="dropdown-menu-radio-item-indicator"
150 |       >
151 |         <DropdownMenuPrimitive.ItemIndicator>
152 |           <CheckIcon
153 |           />
154 |         </DropdownMenuPrimitive.ItemIndicator>
155 |       </span>
156 |       {children}
157 |     </DropdownMenuPrimitive.RadioItem>
158 |   )
159 | }
160 | 
161 | function DropdownMenuLabel({
162 |   className,
163 |   inset,
164 |   ...props
165 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
166 |   inset?: boolean
167 | }) {
168 |   return (
169 |     <DropdownMenuPrimitive.Label
170 |       data-slot="dropdown-menu-label"
171 |       data-inset={inset}
172 |       className={cn(
173 |         "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
174 |         className
175 |       )}
176 |       {...props}
177 |     />
178 |   )
179 | }
180 | 
181 | function DropdownMenuSeparator({
182 |   className,
183 |   ...props
184 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
185 |   return (
186 |     <DropdownMenuPrimitive.Separator
187 |       data-slot="dropdown-menu-separator"
188 |       className={cn("-mx-1 my-1 h-px bg-border", className)}
189 |       {...props}
190 |     />
191 |   )
192 | }
193 | 
194 | function DropdownMenuShortcut({
195 |   className,
196 |   ...props
197 | }: React.ComponentProps<"span">) {
198 |   return (
199 |     <span
200 |       data-slot="dropdown-menu-shortcut"
201 |       className={cn(
202 |         "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
203 |         className
204 |       )}
205 |       {...props}
206 |     />
207 |   )
208 | }
209 | 
210 | function DropdownMenuSub({
211 |   ...props
212 | }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
213 |   return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
214 | }
215 | 
216 | function DropdownMenuSubTrigger({
217 |   className,
218 |   inset,
219 |   children,
220 |   ...props
221 | }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
222 |   inset?: boolean
223 | }) {
224 |   return (
225 |     <DropdownMenuPrimitive.SubTrigger
226 |       data-slot="dropdown-menu-sub-trigger"
227 |       data-inset={inset}
228 |       className={cn(
229 |         "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
230 |         className
231 |       )}
232 |       {...props}
233 |     >
234 |       {children}
235 |       <ChevronRightIcon className="ml-auto" />
236 |     </DropdownMenuPrimitive.SubTrigger>
237 |   )
238 | }
239 | 
240 | function DropdownMenuSubContent({
241 |   className,
242 |   ...props
243 | }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
244 |   return (
245 |     <DropdownMenuPrimitive.SubContent
246 |       data-slot="dropdown-menu-sub-content"
247 |       className={cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
248 |       {...props}
249 |     />
250 |   )
251 | }
252 | 
253 | export {
254 |   DropdownMenu,
255 |   DropdownMenuPortal,
256 |   DropdownMenuTrigger,
257 |   DropdownMenuContent,
258 |   DropdownMenuGroup,
259 |   DropdownMenuLabel,
260 |   DropdownMenuItem,
261 |   DropdownMenuCheckboxItem,
262 |   DropdownMenuRadioGroup,
263 |   DropdownMenuRadioItem,
264 |   DropdownMenuSeparator,
265 |   DropdownMenuShortcut,
266 |   DropdownMenuSub,
267 |   DropdownMenuSubTrigger,
268 |   DropdownMenuSubContent,
269 | }
270 | 


--------------------------------------------------------------------------------
/app/(main)/upload/page.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import Image from "next/image";
  4 | import { useState } from "react";
  5 | import { UploadDropzone } from "@/app/lib/uploadthings";
  6 | import { Loader2, UploadCloud } from "lucide-react";
  7 | 
  8 | export default function UploadPage() {
  9 |   const [videoUrl, setVideoUrl] = useState("");
 10 |   const [thumbnailUrl, setThumbnailUrl] = useState("");
 11 |   const [title, setTitle] = useState("");
 12 |   const [description, setDescription] = useState("");
 13 |   const [isUploadingFile, setIsUploadingFile] = useState(false);
 14 |   const [isTranscoding, setIsTranscoding] = useState(false);
 15 | 
 16 |   return (
 17 |     <div className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
 18 |       <div className="mx-auto max-w-5xl">
 19 |         {/* Header */}
 20 |         <div className="mb-10">
 21 |           <h1 className="text-4xl font-bold">Upload Video</h1>
 22 |           <p className="mt-2 text-zinc-400">
 23 |             Share your content with the world
 24 |           </p>
 25 |         </div>
 26 | 
 27 |         <div className="grid gap-8 lg:grid-cols-2">
 28 |           {/* LEFT SIDE */}
 29 |           <div className="space-y-6">
 30 |             {/* Video Upload */}
 31 |             <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
 32 |               <h2 className="mb-4 text-xl font-semibold">Video</h2>
 33 | 
 34 |               {!videoUrl ? (
 35 |                 <div className="rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-950 p-6 transition hover:border-red-500">
 36 |                   <UploadDropzone
 37 |                     endpoint="videoUploader"
 38 |                     appearance={{
 39 |                       container: "border-none bg-transparent p-0 min-h-[250px]",
 40 |                       uploadIcon: "text-red-500",
 41 |                       label: "text-white text-lg",
 42 |                       allowedContent: "text-zinc-400",
 43 |                       button:
 44 |                         "bg-red-600 text-white ut-ready:bg-red-600 ut-uploading:bg-red-500 hover:bg-red-700",
 45 |                     }}
 46 |                     onUploadBegin={() => {
 47 |                       setIsUploadingFile(true);
 48 |                     }}
 49 |                     onClientUploadComplete={(res) => {
 50 |                       setVideoUrl(res?.[0]?.ufsUrl);
 51 |                       setIsUploadingFile(false);
 52 |                     }}
 53 |                     onUploadError={(error) => {
 54 |                       console.log(error);
 55 |                       setIsUploadingFile(false);
 56 |                     }}
 57 |                   />
 58 | 
 59 |                   {isUploadingFile && (
 60 |                     <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-400">
 61 |                       <Loader2 className="h-4 w-4 animate-spin" />
 62 |                       Uploading video to storage...
 63 |                     </div>
 64 |                   )}
 65 |                 </div>
 66 |               ) : (
 67 |                 <video
 68 |                   controls
 69 |                   className="h-[300px] w-full rounded-2xl object-cover"
 70 |                   src={videoUrl}
 71 |                 />
 72 |               )}
 73 |             </div>
 74 | 
 75 |             {/* Thumbnail Upload */}
 76 |             <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
 77 |               <h2 className="mb-4 text-xl font-semibold">Thumbnail</h2>
 78 | 
 79 |               {!thumbnailUrl ? (
 80 |                 <div className="rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-950 p-6 transition hover:border-purple-500">
 81 |                   <UploadDropzone
 82 |                     endpoint="imageUploader"
 83 |                     appearance={{
 84 |                       container: "border-none bg-transparent p-0 min-h-[220px]",
 85 |                       uploadIcon: "text-purple-500",
 86 |                       label: "text-white text-lg",
 87 |                       allowedContent: "text-zinc-400",
 88 |                       button:
 89 |                         "bg-purple-600 text-white ut-ready:bg-purple-600 ut-uploading:bg-purple-500 hover:bg-purple-700",
 90 |                     }}
 91 |                     onClientUploadComplete={(res) => {
 92 |                       setThumbnailUrl(res?.[0]?.ufsUrl);
 93 |                     }}
 94 |                   />
 95 |                 </div>
 96 |               ) : (
 97 |                 <div className="relative h-[220px] overflow-hidden rounded-2xl">
 98 |                   <Image
 99 |                     src={thumbnailUrl}
100 |                     alt="Thumbnail"
101 |                     fill
102 |                     className="object-cover"
103 |                   />
104 |                 </div>
105 |               )}
106 |             </div>
107 |           </div>
108 | 
109 |           {/* RIGHT SIDE */}
110 |           <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
111 |             <h2 className="mb-8 text-2xl font-bold">Video Details</h2>
112 | 
113 |             <div className="space-y-6">
114 |               {/* Title */}
115 |               <div>
116 |                 <label className="mb-2 block text-sm font-medium text-zinc-300">
117 |                   Title
118 |                 </label>
119 | 
120 |                 <input
121 |                   type="text"
122 |                   placeholder="Enter video title"
123 |                   value={title}
124 |                   onChange={(e) => setTitle(e.target.value)}
125 |                   className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-red-500"
126 |                 />
127 |               </div>
128 | 
129 |               {/* Description */}
130 |               <div>
131 |                 <label className="mb-2 block text-sm font-medium text-zinc-300">
132 |                   Description
133 |                 </label>
134 | 
135 |                 <textarea
136 |                   placeholder="Tell viewers about your video"
137 |                   value={description}
138 |                   onChange={(e) => setDescription(e.target.value)}
139 |                   className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition focus:border-red-500"
140 |                 />
141 |               </div>
142 | 
143 |               {/* Visibility */}
144 |               <div>
145 |                 <label className="mb-3 block text-sm font-medium text-zinc-300">
146 |                   Visibility
147 |                 </label>
148 | 
149 |                 <div className="flex gap-4">
150 |                   <button className="rounded-xl border border-red-500 bg-red-500/20 px-5 py-3 text-sm font-medium text-red-400">
151 |                     Public
152 |                   </button>
153 | 
154 |                   <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300">
155 |                     Private
156 |                   </button>
157 | 
158 |                   <button className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300">
159 |                     Unlisted
160 |                   </button>
161 |                 </div>
162 |               </div>
163 | 
164 |               {/* Publish */}
165 |               <button
166 |                 disabled={
167 |                   !videoUrl ||
168 |                   !thumbnailUrl ||
169 |                   !title.trim() ||
170 |                   isUploadingFile ||
171 |                   isTranscoding
172 |                 }
173 |                 onClick={async () => {
174 |                   try {
175 |                     setIsTranscoding(true);
176 | 
177 |                     const response = await fetch("/api/upload", {
178 |                       method: "POST",
179 |                       headers: {
180 |                         "Content-Type": "application/json",
181 |                       },
182 |                       body: JSON.stringify({
183 |                         title,
184 |                         description,
185 |                         videoUrl,
186 |                         thumbnailUrl,
187 |                       }),
188 |                     });
189 | 
190 |                     const data = await response.json().catch(() => null);
191 | 
192 |                     if (!response.ok) {
193 |                       throw new Error(
194 |                         typeof data?.error === "string"
195 |                           ? data.error
196 |                           : "Failed to publish video"
197 |                       );
198 |                     }
199 | 
200 |                     alert("Video published and transcoded successfully!");
201 | 
202 |                     setTitle("");
203 |                     setDescription("");
204 |                     setVideoUrl("");
205 |                     setThumbnailUrl("");
206 |                   } catch (error) {
207 |                     console.error(error);
208 |                     alert(
209 |                       error instanceof Error
210 |                         ? error.message
211 |                         : "Something went wrong"
212 |                     );
213 |                   } finally {
214 |                     setIsTranscoding(false);
215 |                   }
216 |                 }}
217 |                 className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 text-lg font-semibold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
218 |               >
219 |                 {isTranscoding ? (
220 |                   <>
221 |                     <Loader2 className="h-5 w-5 animate-spin" />
222 |                     Transcoding to HLS (this may take a few minutes)...
223 |                   </>
224 |                 ) : (
225 |                   <>
226 |                     <UploadCloud className="h-5 w-5" />
227 |                     Publish Video
228 |                   </>
229 |                 )}
230 |               </button>
231 |             </div>
232 |           </div>
233 |         </div>
234 |       </div>
235 |     </div>
236 |   );
237 | }
238 | 


--------------------------------------------------------------------------------
/app/components/hls-video-player.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import {
  4 |   useCallback,
  5 |   useEffect,
  6 |   useRef,
  7 |   useState,
  8 | } from "react";
  9 | import Hls from "hls.js";
 10 | import { Settings } from "lucide-react";
 11 | import { Button } from "@/components/ui/button";
 12 | import {
 13 |   DropdownMenu,
 14 |   DropdownMenuContent,
 15 |   DropdownMenuRadioGroup,
 16 |   DropdownMenuRadioItem,
 17 |   DropdownMenuTrigger,
 18 | } from "@/components/ui/dropdown-menu";
 19 | 
 20 | interface HlsVideoPlayerProps {
 21 |   src: string;
 22 |   className?: string;
 23 |   autoPlay?: boolean;
 24 |   controls?: boolean;
 25 |   onEnded?: () => void;
 26 | }
 27 | 
 28 | type QualityOption = {
 29 |   value: string;
 30 |   label: string;
 31 |   levelIndex?: number;
 32 |   playlistUrl?: string;
 33 | };
 34 | 
 35 | function isHlsSource(src: string): boolean {
 36 |   return src.endsWith(".m3u8") || src.includes(".m3u8?");
 37 | }
 38 | 
 39 | function renditionLabelFromPath(
 40 |   path: string
 41 | ): string | undefined {
 42 |   const match = path.match(/[\/]v(\d+p)(?:\/|$)/i);
 43 | 
 44 |   if (match) {
 45 |     return match[1].toLowerCase();
 46 |   }
 47 | 
 48 |   return undefined;
 49 | }
 50 | 
 51 | function renditionSortKey(label: string): number {
 52 |   const match = label.match(/^(\d+)p$/);
 53 | 
 54 |   return match
 55 |     ? Number.parseInt(match[1], 10)
 56 |     : 0;
 57 | }
 58 | 
 59 | function formatLevelLabel(
 60 |   pathOrUrl: string | undefined,
 61 |   height: number | undefined,
 62 |   name: string | undefined,
 63 |   index: number
 64 | ): string {
 65 |   if (pathOrUrl) {
 66 |     const fromPath =
 67 |       renditionLabelFromPath(pathOrUrl);
 68 | 
 69 |     if (fromPath) {
 70 |       return fromPath;
 71 |     }
 72 |   }
 73 | 
 74 |   if (name) {
 75 |     return name;
 76 |   }
 77 | 
 78 |   if (height) {
 79 |     return `${height}p`;
 80 |   }
 81 | 
 82 |   return `Quality ${index + 1}`;
 83 | }
 84 | 
 85 | function parseMasterPlaylist(
 86 |   playlistText: string,
 87 |   masterUrl: string
 88 | ): QualityOption[] {
 89 |   const baseUrl = masterUrl.replace(
 90 |     /\/[^/]*$/,
 91 |     "/"
 92 |   );
 93 |   const lines = playlistText.split("\n");
 94 |   const options: QualityOption[] = [];
 95 | 
 96 |   for (let i = 0; i < lines.length; i++) {
 97 |     const line = lines[i].trim();
 98 | 
 99 |     if (!line.startsWith("#EXT-X-STREAM-INF")) {
100 |       continue;
101 |     }
102 | 
103 |     const nameMatch = line.match(/NAME="([^"]+)"/);
104 |     const resolutionMatch = line.match(
105 |       /RESOLUTION=\d+x(\d+)/
106 |     );
107 |     const nextLine = lines[i + 1]?.trim();
108 | 
109 |     if (!nextLine || nextLine.startsWith("#")) {
110 |       continue;
111 |     }
112 | 
113 |     const playlistUrl = nextLine.startsWith("http")
114 |       ? nextLine
115 |       : new URL(nextLine, baseUrl).href;
116 | 
117 |     const height = resolutionMatch
118 |       ? Number.parseInt(resolutionMatch[1], 10)
119 |       : undefined;
120 | 
121 |     options.push({
122 |       value: playlistUrl,
123 |       label: formatLevelLabel(
124 |         nextLine,
125 |         height,
126 |         nameMatch?.[1],
127 |         options.length
128 |       ),
129 |       playlistUrl,
130 |     });
131 |   }
132 | 
133 |   return options.sort(
134 |     (a, b) =>
135 |       renditionSortKey(b.label) -
136 |       renditionSortKey(a.label)
137 |   );
138 | }
139 | 
140 | export default function HlsVideoPlayer({
141 |   src,
142 |   className,
143 |   autoPlay = false,
144 |   controls = true,
145 |   onEnded,
146 | }: HlsVideoPlayerProps) {
147 |   const videoRef =
148 |     useRef<HTMLVideoElement>(null);
149 |   const hlsRef = useRef<Hls | null>(null);
150 | 
151 |   const [qualities, setQualities] = useState<
152 |     QualityOption[]
153 |   >([]);
154 |   const [selectedQuality, setSelectedQuality] =
155 |     useState("auto");
156 |   const [showQualityMenu, setShowQualityMenu] =
157 |     useState(false);
158 | 
159 |   const selectedLabel =
160 |     selectedQuality === "auto"
161 |       ? "Auto"
162 |       : (qualities.find(
163 |           (quality) =>
164 |             quality.value === selectedQuality
165 |         )?.label ?? "Quality");
166 | 
167 |   const loadNativeQualities = useCallback(
168 |     async (masterUrl: string) => {
169 |       const response = await fetch(masterUrl);
170 | 
171 |       if (!response.ok) {
172 |         return;
173 |       }
174 | 
175 |       const text = await response.text();
176 |       const parsed = parseMasterPlaylist(
177 |         text,
178 |         masterUrl
179 |       );
180 | 
181 |       if (parsed.length > 1) {
182 |         setQualities(parsed);
183 |         setShowQualityMenu(true);
184 |       }
185 |     },
186 |     []
187 |   );
188 | 
189 |   useEffect(() => {
190 |     const video = videoRef.current;
191 | 
192 |     if (!video) {
193 |       return;
194 |     }
195 | 
196 |     setQualities([]);
197 |     setShowQualityMenu(false);
198 |     setSelectedQuality("auto");
199 | 
200 |     if (hlsRef.current) {
201 |       hlsRef.current.destroy();
202 |       hlsRef.current = null;
203 |     }
204 | 
205 |     if (!isHlsSource(src)) {
206 |       video.src = src;
207 |       return;
208 |     }
209 | 
210 |     if (Hls.isSupported()) {
211 |       const hls = new Hls({
212 |         enableWorker: true,
213 |         lowLatencyMode: false,
214 |       });
215 | 
216 |       hlsRef.current = hls;
217 | 
218 |       hls.on(
219 |         Hls.Events.MANIFEST_PARSED,
220 |         () => {
221 |           const options = hls.levels
222 |             .map((level, index) => {
223 |               const levelPath = Array.isArray(
224 |                 level.url
225 |               )
226 |                 ? level.url[0]
227 |                 : (level.url ?? "");
228 | 
229 |               return {
230 |                 value: String(index),
231 |                 label: formatLevelLabel(
232 |                   levelPath,
233 |                   level.height,
234 |                   level.name,
235 |                   index
236 |                 ),
237 |                 levelIndex: index,
238 |               };
239 |             })
240 |             .sort(
241 |               (a, b) =>
242 |                 renditionSortKey(b.label) -
243 |                 renditionSortKey(a.label)
244 |             );
245 | 
246 |           if (options.length > 1) {
247 |             setQualities(options);
248 |             setShowQualityMenu(true);
249 |           }
250 |         }
251 |       );
252 | 
253 |       hls.on(Hls.Events.LEVEL_SWITCHED, () => {
254 |         if (hls.currentLevel === -1) {
255 |           setSelectedQuality("auto");
256 |           return;
257 |         }
258 | 
259 |         setSelectedQuality(String(hls.currentLevel));
260 |       });
261 | 
262 |       hls.loadSource(src);
263 |       hls.attachMedia(video);
264 | 
265 |       return () => {
266 |         hls.destroy();
267 |         hlsRef.current = null;
268 |       };
269 |     }
270 | 
271 |     if (
272 |       video.canPlayType(
273 |         "application/vnd.apple.mpegurl"
274 |       )
275 |     ) {
276 |       video.src = src;
277 |       void loadNativeQualities(src);
278 | 
279 |       return;
280 |     }
281 | 
282 |     video.src = src;
283 |   }, [src, loadNativeQualities]);
284 | 
285 |   function handleQualityChange(value: string) {
286 |     setSelectedQuality(value);
287 | 
288 |     const video = videoRef.current;
289 |     const hls = hlsRef.current;
290 | 
291 |     if (!video) {
292 |       return;
293 |     }
294 | 
295 |     if (hls) {
296 |       hls.currentLevel =
297 |         value === "auto"
298 |           ? -1
299 |           : Number.parseInt(value, 10);
300 |       return;
301 |     }
302 | 
303 |     if (value === "auto") {
304 |       video.src = src;
305 |       void video.load();
306 |       return;
307 |     }
308 | 
309 |     const option = qualities.find(
310 |       (quality) => quality.value === value
311 |     );
312 | 
313 |     if (option?.playlistUrl) {
314 |       const currentTime = video.currentTime;
315 |       const wasPaused = video.paused;
316 | 
317 |       video.src = option.playlistUrl;
318 |       video.addEventListener(
319 |         "loadedmetadata",
320 |         () => {
321 |           video.currentTime = currentTime;
322 | 
323 |           if (!wasPaused) {
324 |             void video.play();
325 |           }
326 |         },
327 |         { once: true }
328 |       );
329 | 
330 |       void video.load();
331 |     }
332 |   }
333 | 
334 |   return (
335 |     <div className="relative">
336 |       <video
337 |         ref={videoRef}
338 |         key={src}
339 |         controls={controls}
340 |         autoPlay={autoPlay}
341 |         className={className}
342 |         onEnded={onEnded}
343 |       />
344 | 
345 |       {showQualityMenu && qualities.length > 0 && (
346 |         <div className="pointer-events-none absolute right-3 bottom-14 z-10">
347 |           <DropdownMenu>
348 |             <DropdownMenuTrigger asChild>
349 |               <Button
350 |                 type="button"
351 |                 variant="secondary"
352 |                 size="sm"
353 |                 className="pointer-events-auto gap-1.5 bg-black/75 text-white hover:bg-black/90"
354 |               >
355 |                 <Settings className="h-4 w-4" />
356 |                 {selectedLabel}
357 |               </Button>
358 |             </DropdownMenuTrigger>
359 | 
360 |             <DropdownMenuContent
361 |               align="end"
362 |               className="pointer-events-auto min-w-32"
363 |             >
364 |               <DropdownMenuRadioGroup
365 |                 value={selectedQuality}
366 |                 onValueChange={handleQualityChange}
367 |               >
368 |                 <DropdownMenuRadioItem value="auto">
369 |                   Auto
370 |                 </DropdownMenuRadioItem>
371 | 
372 |                 {qualities.map((quality) => (
373 |                   <DropdownMenuRadioItem
374 |                     key={quality.value}
375 |                     value={quality.value}
376 |                   >
377 |                     {quality.label}
378 |                   </DropdownMenuRadioItem>
379 |                 ))}
380 |               </DropdownMenuRadioGroup>
381 |             </DropdownMenuContent>
382 |           </DropdownMenu>
383 |         </div>
384 |       )}
385 |     </div>
386 |   );
387 | }
388 | 


--------------------------------------------------------------------------------
/app/(main)/history/page.tsx:
--------------------------------------------------------------------------------
  1 | import { auth } from "@/auth";
  2 | import { prisma } from "@/app/lib/prisma";
  3 | import Link from "next/link";
  4 | import Image from "next/image";
  5 | import { Clock3, Flame, History, PlayCircle, Sparkles } from "lucide-react";
  6 | import HistoryVideoMenu from "@/app/components/HistoryVideoMenu";
  7 | 
  8 | export const dynamic = "force-dynamic";
  9 | 
 10 | function timeAgo(date: Date | string): string {
 11 |   const now = new Date().getTime();
 12 | 
 13 |   const seconds = Math.floor((now - new Date(date).getTime()) / 1000);
 14 | 
 15 |   const intervals: [number, string][] = [
 16 |     [31_536_000, "year"],
 17 |     [2_592_000, "month"],
 18 |     [604_800, "week"],
 19 |     [86_400, "day"],
 20 |     [3_600, "hour"],
 21 |     [60, "minute"],
 22 |   ];
 23 | 
 24 |   for (const [secs, label] of intervals) {
 25 |     const n = Math.floor(seconds / secs);
 26 | 
 27 |     if (n >= 1) {
 28 |       return `${n} ${label}${n > 1 ? "s" : ""} ago`;
 29 |     }
 30 |   }
 31 | 
 32 |   return "Just now";
 33 | }
 34 | 
 35 | export default async function HistoryPage() {
 36 |   const session = await auth();
 37 | 
 38 |   if (!session?.user?.email) {
 39 |     return (
 40 |       <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] px-4 py-8 text-white sm:px-6 lg:px-10">
 41 |         <div className="pointer-events-none absolute inset-0">
 42 |           <div className="absolute left-[10%] top-12 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
 43 |           <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
 44 |         </div>
 45 | 
 46 |         <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/70 p-8 text-center backdrop-blur-xl">
 47 |           <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
 48 |             <History size={14} />
 49 |             Watch History
 50 |           </p>
 51 | 
 52 |           <h1 className="mt-4 text-3xl font-black tracking-tight">
 53 |             Sign in to see your history
 54 |           </h1>
 55 | 
 56 |           <p className="mx-auto mt-3 max-w-xl text-zinc-400">
 57 |             Your watched videos are tracked only for your account, so log in
 58 |             first to view and continue where you left off.
 59 |           </p>
 60 | 
 61 |           <Link
 62 |             href="/login"
 63 |             className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
 64 |           >
 65 |             Go to Login
 66 |           </Link>
 67 |         </div>
 68 |       </div>
 69 |     );
 70 |   }
 71 | 
 72 |   const currentUser = await prisma.user.findUnique({
 73 |     where: {
 74 |       email: session.user.email,
 75 |     },
 76 | 
 77 |     select: {
 78 |       id: true,
 79 |       firstName: true,
 80 |       name: true,
 81 |     },
 82 |   });
 83 | 
 84 |   if (!currentUser) {
 85 |     return (
 86 |       <div className="min-h-[calc(100vh-73px)] bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
 87 |         <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/80 p-8 text-center">
 88 |           <h1 className="text-2xl font-bold">We could not find your profile</h1>
 89 | 
 90 |           <p className="mt-2 text-zinc-400">
 91 |             Please sign out and sign in again.
 92 |           </p>
 93 |         </div>
 94 |       </div>
 95 |     );
 96 |   }
 97 | 
 98 |   const history = await prisma.watchHistory.findMany({
 99 |     where: {
100 |       userId: currentUser.id,
101 |     },
102 | 
103 |     include: {
104 |       video: {
105 |         include: {
106 |           channel: true,
107 |         },
108 |       },
109 |     },
110 | 
111 |     orderBy: {
112 |       watchedAt: "desc",
113 |     },
114 |   });
115 | 
116 |   const watchedToday = history.filter((item) => {
117 |     const watchedDate = new Date(item.watchedAt);
118 |     const today = new Date();
119 | 
120 |     return (
121 |       watchedDate.getDate() === today.getDate() &&
122 |       watchedDate.getMonth() === today.getMonth() &&
123 |       watchedDate.getFullYear() === today.getFullYear()
124 |     );
125 |   }).length;
126 | 
127 |   const uniqueChannels = new Set(history.map((item) => item.video.channelId))
128 |     .size;
129 | 
130 |   const userName =
131 |     currentUser.firstName || currentUser.name?.split(" ")[0] || "Creator";
132 | 
133 |   return (
134 |     <div className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#070707] text-white">
135 |       <div className="pointer-events-none absolute inset-0">
136 |         <div className="absolute left-[6%] top-8 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
137 |         <div className="absolute right-[12%] top-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
138 |         <div className="absolute bottom-0 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600/15 via-orange-500/10 to-amber-400/15 blur-3xl" />
139 |       </div>
140 | 
141 |       <div className="relative mx-auto w-full max-w-[1500px] px-4 pb-10 pt-7 sm:px-6 lg:px-10">
142 |         <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_18px_56px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
143 |           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
144 |             <div>
145 |               <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
146 |                 <Sparkles size={13} />
147 |                 Watch Journey
148 |               </p>
149 | 
150 |               <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
151 |                 {userName}&apos;s Watch History
152 |               </h1>
153 | 
154 |               <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
155 |                 Revisit your recent videos, pick up where you stopped, and keep
156 |                 your watch streak alive.
157 |               </p>
158 |             </div>
159 | 
160 |             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[500px]">
161 |               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
162 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
163 |                   <History size={14} />
164 |                   Total Watched
165 |                 </p>
166 |                 <p className="mt-2 text-2xl font-extrabold">{history.length}</p>
167 |               </div>
168 | 
169 |               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
170 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
171 |                   <PlayCircle size={14} />
172 |                   Channels
173 |                 </p>
174 |                 <p className="mt-2 text-2xl font-extrabold">{uniqueChannels}</p>
175 |               </div>
176 | 
177 |               <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/20 via-orange-400/10 to-transparent p-4">
178 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-300">
179 |                   <Flame size={14} />
180 |                   Watched Today
181 |                 </p>
182 |                 <p className="mt-2 text-2xl font-extrabold">{watchedToday}</p>
183 |               </div>
184 |             </div>
185 |           </div>
186 |         </header>
187 | 
188 |         {history.length === 0 ? (
189 |           <div className="mt-8 rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
190 |             <h2 className="text-2xl font-bold text-white">
191 |               No videos in your history yet
192 |             </h2>
193 | 
194 |             <p className="mx-auto mt-2 max-w-xl text-zinc-400">
195 |               Start watching videos and they will show up here automatically.
196 |             </p>
197 | 
198 |             <Link
199 |               href="/feed"
200 |               className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
201 |             >
202 |               Explore Feed
203 |             </Link>
204 |           </div>
205 |         ) : (
206 |           <section className="mt-8 space-y-4">
207 |             {history.map((item) => (
208 |               <Link
209 |                 key={item.id}
210 |                 href={`/watch/${item.video.id}`}
211 |                 className="group block rounded-2xl border border-white/10 bg-zinc-950/70 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
212 |               >
213 |                 <div className="flex flex-col gap-4 sm:flex-row">
214 |                   <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:w-[280px] sm:shrink-0">
215 |                     <Image
216 |                       src={item.video.thumbnailUrl}
217 |                       alt={item.video.title}
218 |                       fill
219 |                       sizes="(max-width: 640px) 100vw, 280px"
220 |                       className="object-cover transition-transform duration-500 group-hover:scale-105"
221 |                     />
222 | 
223 |                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
224 |                   </div>
225 | 
226 |                   <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
227 |                     <div>
228 |                       <h2 className="line-clamp-2 text-lg font-bold text-white sm:text-xl">
229 |                         {item.video.title}
230 |                       </h2>
231 | 
232 |                       <p className="mt-2 text-sm text-zinc-300">
233 |                         {item.video.channel.channelName}
234 |                       </p>
235 | 
236 |                       <p className="mt-3 line-clamp-2 text-sm text-zinc-400">
237 |                         {item.video.description}
238 |                       </p>
239 |                     </div>
240 | 
241 |                     <div className="mt-4 flex items-center justify-between gap-4">
242 |                       <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
243 |                         <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
244 |                           <Clock3 size={13} />
245 |                           {timeAgo(item.watchedAt)}
246 |                         </span>
247 | 
248 |                         <span>
249 |                           Watched on {new Date(item.watchedAt).toLocaleString()}
250 |                         </span>
251 |                       </div>
252 | 
253 |                       <HistoryVideoMenu
254 |                         historyId={item.id}
255 |                         uploadId={item.video.id}
256 |                       />
257 |                     </div>
258 |                   </div>
259 |                 </div>
260 |               </Link>
261 |             ))}
262 |           </section>
263 |         )}
264 |       </div>
265 |     </div>
266 |   );
267 | }
268 | 


--------------------------------------------------------------------------------
/prisma/schema.prisma:
--------------------------------------------------------------------------------
  1 | // This is your Prisma schema file,
  2 | // learn more about it in the docs: https://pris.ly/d/prisma-schema
  3 | 
  4 | // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
  5 | // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init
  6 | 
  7 | generator client {
  8 |   provider = "prisma-client"
  9 |   output   = "../generated/prisma"
 10 | }
 11 | 
 12 | datasource db {
 13 |   provider = "postgresql"
 14 |   url      = env("DATABASE_URL")
 15 | }
 16 | 
 17 | model User {
 18 |   id String @id @default(cuid())
 19 | 
 20 |   name  String?
 21 |   email String? @unique
 22 |   image String?
 23 | 
 24 |   firstName String?
 25 |   lastName  String?
 26 | 
 27 |   accounts Account[]
 28 |   sessions Session[]
 29 | 
 30 |   channels             Channel[]
 31 |   subscription         ChannelSubscription[]
 32 |   platformSubscription PlatformSubscription?
 33 |   streamChatMessages   StreamChatMessage[]
 34 | 
 35 |   like    Like[]
 36 |   comment Comment[]
 37 | 
 38 |   watchHistory WatchHistory[]
 39 |   watchLater   WatchLater[]
 40 |   playlists    Playlist[]
 41 | 
 42 |   createdAt DateTime @default(now())
 43 |   updatedAt DateTime @updatedAt
 44 | 
 45 |   @@index([email])
 46 | }
 47 | 
 48 | model Account {
 49 |   id                String @id @default(cuid())
 50 |   userId            String
 51 |   type              String
 52 |   provider          String
 53 |   providerAccountId String
 54 | 
 55 |   refresh_token String? @db.Text
 56 |   access_token  String? @db.Text
 57 |   expires_at    Int?
 58 |   token_type    String?
 59 |   scope         String?
 60 |   id_token      String? @db.Text
 61 |   session_state String?
 62 | 
 63 |   user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 64 | 
 65 |   createdAt DateTime @default(now())
 66 |   updatedAt DateTime @updatedAt
 67 | 
 68 |   @@unique([provider, providerAccountId])
 69 | }
 70 | 
 71 | model Session {
 72 |   id           String   @id @default(cuid())
 73 |   sessionToken String   @unique
 74 |   userId       String
 75 |   expires      DateTime
 76 | 
 77 |   user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 78 | 
 79 |   createdAt DateTime @default(now())
 80 |   updatedAt DateTime @updatedAt
 81 | }
 82 | 
 83 | model VerificationToken {
 84 |   identifier String
 85 | 
 86 |   token String
 87 | 
 88 |   expires DateTime
 89 | 
 90 |   @@unique([identifier, token])
 91 | }
 92 | 
 93 | model Channel {
 94 |   id                String                @id @default(cuid())
 95 |   channelName       String                @unique
 96 |   bannerUrl         String?
 97 |   profilePictureUrl String?
 98 |   description       String
 99 |   subscriberCount   Int                   @default(0)
100 |   userId            String
101 |   owner             User                  @relation(fields: [userId], references: [id], onDelete: Cascade)
102 |   videos            Upload[]
103 |   subscription      ChannelSubscription[]
104 | 
105 |   createdAt   DateTime     @default(now())
106 |   updatedAt   DateTime     @updatedAt
107 |   liveStreams LiveStream[]
108 | }
109 | 
110 | model ChannelSubscription {
111 |   id        String  @id @default(cuid())
112 |   userId    String
113 |   user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
114 |   channelId String
115 |   channel   Channel @relation(fields: [channelId], references: [id], onDelete: Cascade)
116 | 
117 |   createdAt DateTime @default(now())
118 |   updatedAt DateTime @updatedAt
119 | 
120 |   @@unique([userId, channelId])
121 |   @@index([userId])
122 |   @@index([channelId])
123 | }
124 | 
125 | enum PlatformPlan {
126 |   FREE
127 |   PREMIUM
128 |   FAMILY
129 |   STUDENT
130 | }
131 | 
132 | model PlatformSubscription {
133 |   id     String @id @default(cuid())
134 |   userId String @unique
135 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
136 | 
137 |   plan PlatformPlan @default(FREE)
138 | 
139 |   startedAt DateTime  @default(now())
140 |   expiresAt DateTime?
141 |   isActive  Boolean   @default(true)
142 | 
143 |   createdAt DateTime @default(now())
144 |   updatedAt DateTime @updatedAt
145 | }
146 | 
147 | enum VideoType {
148 |   PUBLIC
149 |   PRIVATE
150 |   UNLISTED
151 | }
152 | 
153 | enum UploadStatus {
154 |   PROCESSING
155 |   READY
156 |   FAILED
157 | }
158 | 
159 | model Upload {
160 |   id String @id @default(cuid())
161 | 
162 |   channelId String
163 |   channel   Channel @relation(fields: [channelId], references: [id], onDelete: Cascade)
164 | 
165 |   originalVideoUrl String?
166 |   playbackUrl      String?
167 | 
168 |   thumbnailUrl String?
169 | 
170 |   title       String @db.Text
171 |   description String @db.Text
172 | 
173 |   duration Int?
174 | 
175 |   type VideoType
176 | 
177 |   status UploadStatus @default(PROCESSING)
178 | 
179 |   viewCount Int @default(0)
180 | 
181 |   deletedAt DateTime?
182 | 
183 |   like           Like[]
184 |   comment        Comment[]
185 |   playlistVideos PlaylistVideo[]
186 |   watchHistory   WatchHistory[]
187 |   watchLater     WatchLater[]
188 | 
189 |   variants VideoVariant[]
190 | 
191 |   processingJobs VideoProcessingJob[]
192 | 
193 |   createdAt DateTime @default(now())
194 |   updatedAt DateTime @updatedAt
195 | 
196 |   @@index([channelId])
197 |   @@index([createdAt])
198 |   @@index([status])
199 | }
200 | 
201 | model Like {
202 |   id     String @id @default(cuid())
203 |   userId String
204 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
205 | 
206 |   videoId String?
207 |   video   Upload? @relation(fields: [videoId], references: [id], onDelete: Cascade)
208 | 
209 |   LiveStreamId String?
210 |   liveStream   LiveStream? @relation(fields: [LiveStreamId], references: [id], onDelete: Cascade)
211 | 
212 |   createdAt DateTime @default(now())
213 |   updatedAt DateTime @updatedAt
214 | 
215 |   @@unique([userId, videoId])
216 |   @@unique([userId, LiveStreamId])
217 | }
218 | 
219 | model Comment {
220 |   id     String @id @default(cuid())
221 |   userId String
222 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
223 | 
224 |   videoId     String?
225 |   video       Upload? @relation(fields: [videoId], references: [id], onDelete: Cascade)
226 |   commentText String
227 | 
228 |   parentId String? // NEW: For nested replies
229 |   parent   Comment?  @relation("CommentReplies", fields: [parentId], references: [id], onDelete: Cascade)
230 |   replies  Comment[] @relation("CommentReplies")
231 | 
232 |   LiveStreamId String?
233 |   liveStream   LiveStream? @relation(fields: [LiveStreamId], references: [id], onDelete: Cascade)
234 | 
235 |   deletedAt DateTime?
236 |   isEdited  Boolean   @default(false)
237 | 
238 |   createdAt DateTime @default(now())
239 |   updatedAt DateTime @updatedAt
240 | 
241 |   @@index([videoId])
242 |   @@index([LiveStreamId])
243 |   @@index([parentId])
244 | }
245 | 
246 | model Playlist {
247 |   id          String  @id @default(cuid())
248 |   title       String
249 |   description String? @db.Text
250 | 
251 |   userId String
252 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
253 | 
254 |   playlistVideos PlaylistVideo[]
255 | 
256 |   createdAt DateTime @default(now())
257 |   updatedAt DateTime @updatedAt
258 | 
259 |   @@index([userId])
260 | }
261 | 
262 | model PlaylistVideo {
263 |   id String @id @default(cuid())
264 | 
265 |   playlistId String
266 |   uploadId   String
267 | 
268 |   order Int
269 | 
270 |   playlist Playlist @relation(fields: [playlistId], references: [id], onDelete: Cascade)
271 | 
272 |   upload Upload @relation(fields: [uploadId], references: [id], onDelete: Cascade)
273 | 
274 |   createdAt DateTime @default(now())
275 |   updatedAt DateTime @updatedAt
276 | 
277 |   @@unique([playlistId, uploadId])
278 |   @@index([playlistId])
279 |   @@index([uploadId])
280 | }
281 | 
282 | enum StreamStatus {
283 |   LIVE
284 |   ENDED
285 |   SCHEDULED
286 | }
287 | 
288 | model LiveStream {
289 |   id String @id @default(cuid())
290 | 
291 |   title       String @db.Text
292 |   description String @db.Text
293 | 
294 |   thumbnailUrl String?
295 | 
296 |   ingestUrl   String?
297 |   playbackUrl String?
298 | 
299 |   streamKey String @unique
300 | 
301 |   isChatEnabled Boolean @default(true)
302 | 
303 |   concurrentViewers Int @default(0)
304 |   totalViews        Int @default(0)
305 | 
306 |   status StreamStatus @default(SCHEDULED)
307 | 
308 |   scheduledFor DateTime?
309 | 
310 |   recordingUrl String?
311 | 
312 |   startedAt DateTime?
313 |   endedAt   DateTime?
314 | 
315 |   channelId String
316 |   channel   Channel @relation(fields: [channelId], references: [id], onDelete: Cascade)
317 | 
318 |   comments     Comment[]
319 |   chatMessages StreamChatMessage[]
320 | 
321 |   like Like[]
322 | 
323 |   deletedAt DateTime?
324 | 
325 |   createdAt DateTime @default(now())
326 |   updatedAt DateTime @updatedAt
327 | 
328 |   @@index([channelId])
329 |   @@index([status])
330 |   @@index([scheduledFor])
331 | }
332 | 
333 | model WatchHistory {
334 |   id        String   @id @default(cuid())
335 |   userId    String
336 |   user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
337 |   videoId   String
338 |   video     Upload   @relation(fields: [videoId], references: [id], onDelete: Cascade)
339 |   watchedAt DateTime @default(now())
340 |   createdAt DateTime @default(now())
341 |   updatedAt DateTime @updatedAt
342 | 
343 |   @@unique([userId, videoId])
344 |   @@index([userId])
345 |   @@index([videoId])
346 |   @@index([watchedAt])
347 | }
348 | 
349 | model WatchLater {
350 |   id        String   @id @default(cuid())
351 |   userId    String
352 |   user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
353 |   uploadId  String
354 |   upload    Upload   @relation(fields: [uploadId], references: [id], onDelete: Cascade)
355 |   addedAt   DateTime @default(now())
356 |   createdAt DateTime @default(now())
357 |   updatedAt DateTime @updatedAt
358 | 
359 |   @@unique([userId, uploadId])
360 |   @@index([userId])
361 |   @@index([uploadId])
362 | }
363 | 
364 | enum ProcessingJobStatus {
365 |   QUEUED
366 |   PROCESSING
367 |   COMPLETED
368 |   FAILED
369 | }
370 | 
371 | model VideoProcessingJob {
372 |   id String @id @default(cuid())
373 | 
374 |   uploadId String
375 |   upload   Upload @relation(fields: [uploadId], references: [id], onDelete: Cascade)
376 | 
377 |   status ProcessingJobStatus @default(QUEUED)
378 | 
379 |   progress Int @default(0)
380 | 
381 |   retryCount Int @default(0)
382 | 
383 |   errorMessage String? @db.Text
384 | 
385 |   startedAt   DateTime?
386 |   completedAt DateTime?
387 | 
388 |   createdAt DateTime @default(now())
389 |   updatedAt DateTime @updatedAt
390 | 
391 |   @@index([uploadId])
392 |   @@index([status])
393 | }
394 | 
395 | model StreamChatMessage {
396 |   id String @id @default(cuid())
397 | 
398 |   streamId String
399 |   stream   LiveStream @relation(fields: [streamId], references: [id], onDelete: Cascade)
400 | 
401 |   userId String
402 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
403 | 
404 |   message String @db.Text
405 | 
406 |   createdAt DateTime @default(now())
407 | 
408 |   @@index([streamId])
409 |   @@index([createdAt])
410 | }
411 | 
412 | model VideoVariant {
413 |   id String @id @default(cuid())
414 | 
415 |   uploadId String
416 |   upload   Upload @relation(fields: [uploadId], references: [id], onDelete: Cascade)
417 | 
418 |   resolution String
419 |   bitrate    Int
420 | 
421 |   playlistUrl String
422 | 
423 |   createdAt DateTime @default(now())
424 | 
425 |   @@unique([uploadId, resolution])
426 |   @@index([uploadId])
427 | }
428 | 
429 | enum VideoResolution {
430 |   P360
431 |   P480
432 |   P720
433 |   P1080
434 |   P1440
435 |   P2160
436 | }
437 | 


--------------------------------------------------------------------------------
/app/(main)/feed/page.tsx:
--------------------------------------------------------------------------------
  1 | import { getCurrentUser } from "@/app/lib/current-user";
  2 | import { prisma } from "@/app/lib/prisma";
  3 | import Image from "next/image";
  4 | import Link from "next/link";
  5 | import { redirect } from "next/navigation";
  6 | import {
  7 |   Eye,
  8 |   Flame,
  9 |   Sparkles,
 10 |   Users,
 11 |   Video,
 12 | } from "lucide-react";
 13 | import FeedVideoActions from "@/app/components/feed-video-actions";
 14 | 
 15 | export const dynamic = "force-dynamic";
 16 | 
 17 | function formatViews(count: number): string {
 18 |   if (count >= 1_000_000_000) {
 19 |     return `${(count / 1_000_000_000).toFixed(1)}B`;
 20 |   }
 21 | 
 22 |   if (count >= 1_000_000) {
 23 |     return `${(count / 1_000_000).toFixed(1)}M`;
 24 |   }
 25 | 
 26 |   if (count >= 1_000) {
 27 |     return `${(count / 1_000).toFixed(1)}K`;
 28 |   }
 29 | 
 30 |   return count.toString();
 31 | }
 32 | 
 33 | function timeAgo(date: Date | string): string {
 34 |   const now = new Date().getTime();
 35 | 
 36 |   const seconds = Math.floor(
 37 |     (now - new Date(date).getTime()) / 1000
 38 |   );
 39 | 
 40 |   const intervals: [number, string][] = [
 41 |     [31_536_000, "year"],
 42 |     [2_592_000, "month"],
 43 |     [604_800, "week"],
 44 |     [86_400, "day"],
 45 |     [3_600, "hour"],
 46 |     [60, "minute"],
 47 |   ];
 48 | 
 49 |   for (const [secs, label] of intervals) {
 50 |     const n = Math.floor(seconds / secs);
 51 | 
 52 |     if (n >= 1) {
 53 |       return `${n} ${label}${n > 1 ? "s" : ""} ago`;
 54 |     }
 55 |   }
 56 | 
 57 |   return "Just now";
 58 | }
 59 | 
 60 | export default async function FeedPage() {
 61 |   const user = await getCurrentUser();
 62 | 
 63 |   if (!user) {
 64 |     redirect("/login");
 65 |   }
 66 | 
 67 |   if (!user.channels || user.channels.length === 0) {
 68 |     redirect("/create-channel");
 69 |   }
 70 | 
 71 |   const videos = await prisma.upload.findMany({
 72 |     where: {
 73 |       status: "READY",
 74 |       type: "PUBLIC",
 75 |       deletedAt: null,
 76 |     },
 77 | 
 78 |     include: {
 79 |       channel: true,
 80 |     },
 81 | 
 82 |     orderBy: {
 83 |       createdAt: "desc",
 84 |     },
 85 |   });
 86 | 
 87 |   const uniqueCreators = new Set(
 88 |     videos.map((video) => video.channelId)
 89 |   ).size;
 90 | 
 91 |   const totalViews = videos.reduce(
 92 |     (sum, video) => sum + video.viewCount,
 93 |     0
 94 |   );
 95 | 
 96 |   const latestUpload = videos[0]
 97 |     ? timeAgo(videos[0].createdAt)
 98 |     : "No uploads yet";
 99 | 
100 |   return (
101 |     <div className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-[#070707] text-white">
102 |       {/* BACKGROUND */}
103 |       <div className="pointer-events-none absolute inset-0">
104 |         <div className="absolute left-[8%] top-6 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
105 | 
106 |         <div className="absolute right-[10%] top-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
107 | 
108 |         <div className="absolute bottom-0 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-600/15 via-red-500/8 to-orange-400/15 blur-3xl" />
109 |       </div>
110 | 
111 |       <div className="relative mx-auto w-full max-w-[1700px] px-4 pb-10 pt-7 sm:px-6 sm:pt-8 lg:px-10">
112 |         {/* HEADER */}
113 |         <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/75 p-5 shadow-[0_18px_56px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
114 |           <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
115 |             <div>
116 |               <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
117 |                 <Sparkles size={13} />
118 |                 Today in Feed
119 |               </p>
120 | 
121 |               <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
122 |                 Fresh uploads from creators
123 |               </h1>
124 | 
125 |               <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
126 |                 Discover newly published videos,
127 |                 trending channels, and the most
128 |                 active creators on your platform.
129 |               </p>
130 | 
131 |               <div className="mt-4 flex flex-wrap gap-2">
132 |                 {[
133 |                   "Latest uploads",
134 |                   "Most watched",
135 |                   "Rising channels",
136 |                   "Editor picks",
137 |                 ].map((tag) => (
138 |                   <span
139 |                     key={tag}
140 |                     className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200"
141 |                   >
142 |                     {tag}
143 |                   </span>
144 |                 ))}
145 |               </div>
146 |             </div>
147 | 
148 |             {/* STATS */}
149 |             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[520px]">
150 |               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
151 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
152 |                   <Video size={14} />
153 |                   Videos
154 |                 </p>
155 | 
156 |                 <p className="mt-2 text-2xl font-extrabold text-white">
157 |                   {videos.length}
158 |                 </p>
159 |               </div>
160 | 
161 |               <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
162 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
163 |                   <Users size={14} />
164 |                   Creators
165 |                 </p>
166 | 
167 |                 <p className="mt-2 text-2xl font-extrabold text-white">
168 |                   {uniqueCreators}
169 |                 </p>
170 |               </div>
171 | 
172 |               <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/20 via-orange-400/10 to-transparent p-4">
173 |                 <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-300">
174 |                   <Flame size={14} />
175 |                   Latest Upload
176 |                 </p>
177 | 
178 |                 <p className="mt-2 text-sm font-bold text-white">
179 |                   {latestUpload}
180 |                 </p>
181 | 
182 |                 <p className="mt-1 text-xs text-zinc-300">
183 |                   {formatViews(totalViews)} total views
184 |                 </p>
185 |               </div>
186 |             </div>
187 |           </div>
188 |         </header>
189 | 
190 |         {/* EMPTY STATE */}
191 |         {videos.length === 0 ? (
192 |           <div className="mt-8 rounded-3xl border border-dashed border-white/20 bg-zinc-950/60 p-12 text-center">
193 |             <h2 className="text-2xl font-bold text-white">
194 |               No videos yet
195 |             </h2>
196 | 
197 |             <p className="mt-2 text-zinc-400">
198 |               Upload your first video and it will
199 |               appear here.
200 |             </p>
201 | 
202 |             <Link
203 |               href="/upload"
204 |               className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
205 |             >
206 |               Go to Upload
207 |             </Link>
208 |           </div>
209 |         ) : (
210 |           /* VIDEO GRID */
211 |           <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
212 |             {videos.map((video) => {
213 |               const watchHref = `/watch/${video.id}`;
214 | 
215 |               return (
216 |                 <article
217 |                   key={video.id}
218 |                   className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
219 |                 >
220 |                   {/* THUMBNAIL */}
221 |                   <Link
222 |                     href={watchHref}
223 |                     className="block"
224 |                   >
225 |                     <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
226 |                       <Image
227 |                         src={video.thumbnailUrl}
228 |                         alt={video.title}
229 |                         fill
230 |                         sizes="(max-width: 640px) 100vw,
231 |                         (max-width: 1280px) 50vw,
232 |                         25vw"
233 |                         className="object-cover transition-transform duration-500 group-hover:scale-105"
234 |                       />
235 | 
236 |                       <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
237 | 
238 |                       <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white">
239 |                         {timeAgo(video.createdAt)}
240 |                       </div>
241 |                     </div>
242 |                   </Link>
243 | 
244 |                   {/* CONTENT */}
245 |                   <div className="flex gap-3 px-2 pb-3 pt-3">
246 |                     {/* CHANNEL AVATAR */}
247 |                     <div className="shrink-0">
248 |                       {video.channel.profilePictureUrl ? (
249 |                         <Image
250 |                           src={
251 |                             video.channel
252 |                               .profilePictureUrl
253 |                           }
254 |                           alt={
255 |                             video.channel.channelName
256 |                           }
257 |                           width={40}
258 |                           height={40}
259 |                           className="h-10 w-10 rounded-full border border-white/10 object-cover"
260 |                         />
261 |                       ) : (
262 |                         <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-sm font-bold text-white">
263 |                           {video.channel.channelName
264 |                             .charAt(0)
265 |                             .toUpperCase()}
266 |                         </div>
267 |                       )}
268 |                     </div>
269 | 
270 |                     {/* VIDEO INFO */}
271 |                     <div className="min-w-0 flex-1">
272 |                       <Link href={watchHref}>
273 |                         <h2 className="line-clamp-2 text-[15px] font-semibold leading-5 text-white">
274 |                           {video.title}
275 |                         </h2>
276 |                       </Link>
277 | 
278 |                       <p className="mt-1 truncate text-sm text-zinc-400 transition group-hover:text-zinc-300">
279 |                         {video.channel.channelName}
280 |                       </p>
281 | 
282 |                       <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-500">
283 |                         <Eye size={13} />
284 |                         {formatViews(video.viewCount)}{" "}
285 |                         views
286 |                       </p>
287 | 
288 |                       <FeedVideoActions
289 |                         videoId={video.id}
290 |                       />
291 |                     </div>
292 |                   </div>
293 |                 </article>
294 |               );
295 |             })}
296 |           </section>
297 |         )}
298 |       </div>
299 |     </div>
300 |   );
301 | }
302 | 


--------------------------------------------------------------------------------
