"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { ReactNode } from "react";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DashboardShellProps {
  children: ReactNode;
  username: string;
}

export function DashboardShell({ children, username }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center  gap-4 border-b bg-background/95 backdrop-blur px-6">
            <SidebarTrigger className="hover:text-primary transition-colors" />

            <div className="justify-between items-center flex flex-1 p-10">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents, tasks..."
                    className="pl-10 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center gap-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    3
                  </span>
                </Button>

                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shadow-md shadow-primary/30 ring-2 ring-primary/20">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden md:block text-sm">
                    <div className="font-medium text-foreground">
                      {username.split(" ")[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 overflow-auto bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
