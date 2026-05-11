export { auth as proxy } from "@/auth"

export const config = {
    matcher: ["/feed/:path*", "/upload/:path*", "/live-stream/:path*", "/channel/:path*", "/playlist/:path*"],
}