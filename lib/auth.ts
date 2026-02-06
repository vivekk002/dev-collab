import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthConfig = {
  trustHost: true,
  basePath: "/api/v1/auth",
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,
            user.password,
          );
          if (!isPasswordValid) {
            return null;
          }
          return {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // Your callbacks
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role;
        console.log("JWT callback is created");
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as "ADMIN" | "MEMBER" | "VIEWER";
        console.log("session callback is created");
      }
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAuthPage =
        nextUrl.pathname.startsWith("/login") ||
        nextUrl.pathname.startsWith("/signup") ||
        nextUrl.pathname.startsWith("/auth");
      const isProtectedPage =
        nextUrl.pathname.startsWith("/dashboard/workspace") ||
        nextUrl.pathname.startsWith("/dashboard/documents") ||
        nextUrl.pathname.startsWith("/dashboard/tasks") ||
        nextUrl.pathname.startsWith("/dashboard/chat") ||
        nextUrl.pathname.startsWith("/dashboard/settings") ||
        nextUrl.pathname.startsWith("/dashboard");

      if (isAuthPage) {
        if (isLoggedIn)
          return Response.redirect(new URL("/dashboard", nextUrl));
        return true; // Allow access to auth pages when not logged in
      }

      if (isProtectedPage && !isLoggedIn) {
        return false; // Will redirect to sign in page
      }

      return true;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
