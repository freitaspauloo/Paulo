// 🗂️ Aligned AI "Side Bar" — a chat-app navigation panel, rebuilt from Figma.
// Header (logo + collapse), a primary menu, labeled conversation sections,
// and a user footer. Self-contained for the showcase.

import * as React from "react";
import {
  FolderClosed,
  MessageCircle,
  MoreHorizontal,
  PanelLeft,
  Search,
  SquarePen,
  StickyNote,
} from "lucide-react";

import { Avatar } from "@/components/aligned-avatar";
import { cn } from "@/lib/utils";

function SidebarItem({
  icon: Icon,
  children,
  active = false,
  showMenu = false,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  active?: boolean;
  showMenu?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
        active
          ? "bg-secondary text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {Icon && <Icon className="size-4 shrink-0" />}
      <span className="flex-1 truncate">{children}</span>
      {showMenu && (
        <MoreHorizontal className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2 pb-1 pt-3 text-xs text-muted-foreground">{children}</p>
  );
}

export function AlignedSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex h-[560px] w-[264px] flex-col rounded-[16px] border bg-card p-2",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-1 pb-2">
        <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
          λ
        </div>
        <button
          type="button"
          aria-label="Collapse sidebar"
          className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Primary menu */}
        <SidebarItem icon={SquarePen}>New chat</SidebarItem>
        <SidebarItem icon={Search}>Search chats</SidebarItem>
        <SidebarItem icon={StickyNote}>Notes</SidebarItem>
        <SidebarItem icon={FolderClosed}>Projects</SidebarItem>

        {/* Chats */}
        <SectionLabel>Chats</SectionLabel>
        <SidebarItem icon={MessageCircle} active showMenu>
          Searching latest AI news
        </SidebarItem>
        <SidebarItem icon={MessageCircle} showMenu>
          Discuss creative thinking
        </SidebarItem>
        <SidebarItem icon={MessageCircle} showMenu>
          Learn GLSL Shaders
        </SidebarItem>
        <SidebarItem icon={MessageCircle} showMenu>
          New chat
        </SidebarItem>
        <SidebarItem>More</SidebarItem>

        {/* Notes */}
        <SectionLabel>Notes</SectionLabel>
        <SidebarItem icon={StickyNote} showMenu>
          Discuss creative thinking
        </SidebarItem>
        <SidebarItem icon={StickyNote} showMenu>
          Learn GLSL Shaders
        </SidebarItem>

        {/* Projects */}
        <SectionLabel>Projects</SectionLabel>
        <SidebarItem icon={FolderClosed} showMenu>
          Discuss creative thinking
        </SidebarItem>
        <SidebarItem icon={FolderClosed} showMenu>
          Learn GLSL Shaders
        </SidebarItem>
      </div>

      {/* Footer — user */}
      <div className="mt-2 flex items-center gap-2 border-t pt-3">
        <Avatar size="sm" initials="N" palette="black" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">Nicole</span>
          <span className="text-xs text-muted-foreground">Pro subscriber</span>
        </div>
      </div>
    </aside>
  );
}
