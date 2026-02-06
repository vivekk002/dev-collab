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
import { useState } from "react";
import { useRouter } from "next/navigation";

const navigation = [
  {
    name: "Workspace",
    href: "/dashboard/workspace",
    icon: Home,
    id: "workspace",
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
    id: "documents",
  },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare, id: "tasks" },
  { name: "Chat", href: "/dashboard/chat", icon: MessageSquare, id: "chat" },
  { name: "Team", href: "/dashboard/team", icon: Users, id: "team" },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("");
  const router = useRouter();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Green Logo with Leaf Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/50">
            <Leaf className="h-5 w-5" />
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => {
              setActiveItem("");
              router.push("/dashboard");
            }}
          >
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
                <SidebarMenuItem
                  key={item.name}
                  className={`${
                    activeItem === item.id
                      ? "bg-primary/10 text-primary rounded-lg"
                      : ""
                  } `}
                >
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={`group hover:bg-primary/10 hover:text-primary transition-all duration-200 `}
                      onClick={() => {
                        setActiveItem(item.id);
                      }}
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
