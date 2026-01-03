import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/signup");

  const isProtectedRoute =
    pathname.startsWith("/workspace") ||
    pathname.startsWith("/documents") ||
    pathname.startsWith("/tasks") ||
    pathname.startsWith("/chat") ||
    pathname.startsWith("/settings");

  if (isLoggedIn && isAuthRoute) {
    console.log(
      "🔒 Logged in user trying to access auth page, redirecting to /workspace"
    );
    return NextResponse.redirect(new URL("/workspace", req.nextUrl));
  }

  if (!isLoggedIn && isProtectedRoute) {
    console.log(
      "🔒 Non-logged-in user trying to access protected route, redirecting to /login"
    );
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  console.log("✅ Access allowed:", pathname);
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api).*)",
  ],
};
