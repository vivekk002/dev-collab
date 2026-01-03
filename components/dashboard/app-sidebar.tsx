"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  FileText,
  CheckSquare,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const navigation = [
  { name: "Workspace", href: "/workspace", icon: Home },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Team", href: "/team", icon: Users },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Green Logo with Leaf Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/50">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary">CollabSpace</span>
            <span className="text-xs text-muted-foreground">
              Green Workspace
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/70 font-semibold">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className="group hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/settings"
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
