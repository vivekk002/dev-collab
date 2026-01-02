import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function WorkspacePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to CollabSpace</h1>
      <p className="mt-4">Hello, {session.user.name}!</p>
      <p className="text-sm text-muted-foreground">
        Email: {session.user.email}
      </p>
      <p className="text-sm text-muted-foreground">Role: {session.user.role}</p>
    </div>
  );
}
