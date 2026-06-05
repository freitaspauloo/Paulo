"use client";

// 🧭 The left navigation sidebar. To add a new page to the nav, add an item to
// the `navItems` array below (label, href, and a lucide icon).

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Building2,
  Component,
  Home,
  LayoutGrid,
  MessagesSquare,
  Palette,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Design tokens", href: "/tokens", icon: Palette },
  { title: "Components", href: "/components", icon: Component },
  { title: "Library", href: "/library", icon: LayoutGrid },
  { title: "Chat interface", href: "/chat", icon: MessagesSquare },
  { title: "Agent", href: "/agent", icon: Bot },
  { title: "Enterprise", href: "/enterprise", icon: Building2 },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 py-1.5 text-sm font-semibold">Aligned AI</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    render={<Link href={item.href} />}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
