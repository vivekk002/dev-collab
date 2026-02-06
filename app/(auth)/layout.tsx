import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Logo/Header */}
        <div className="flex items-center justify-center pt-8 pb-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/50">
              <span className="text-xl font-bold">C</span>
            </div>
            <span className="text-2xl font-bold text-primary">CollabSpace</span>
          </Link>
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
