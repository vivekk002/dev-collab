import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center bg-background justify-center">
      <div className=" absolute top-4 right-4 flex items-center gap-2 p-2">
        <ThemeToggle />
        <Link href="/login">
          <Button>Login ...</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-primary text-3xl font-bold">Hello... </h1>
        <p className="text-muted-foreground text-2xl">welcome to dev-collab</p>
        <div className="flex items-center gap-2 border border-primary rounded-md p-2">
          <h3 className="text-primary text-xl">New here...?</h3>
          <Link href="/signup">
            <Button>Get Started... </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
