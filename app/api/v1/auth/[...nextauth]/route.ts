import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;

export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
