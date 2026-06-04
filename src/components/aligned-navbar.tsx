"use client";

// 🧭 Aligned AI "Nav Bar" — rebuilt from Figma.
// Two pieces: TopNavBar (site nav: logo + links + actions) and
// ConversationHeader (slim header with a title + overflow menu).

import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Studio", active: true },
  { label: "Templates", active: false },
  { label: "Pricing", active: false },
];

export function TopNavBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[72px] w-full items-center gap-6 rounded-[var(--radius)] border bg-card px-6",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex flex-1 items-center gap-1.5">
        <div className="flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
          λ
        </div>
        <span className="text-[17px] font-semibold">Aligned</span>
      </div>

      {/* Center nav links */}
      <nav className="hidden items-center gap-9 text-sm sm:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "transition-colors hover:text-foreground",
              item.active ? "font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex flex-1 items-center justify-end gap-3">
        <Button variant="outline" size="sm">
          English
          <ChevronDown />
        </Button>
        <Button size="sm">Sign in</Button>
      </div>
    </div>
  );
}

export function ConversationHeader({
  title = "The meaning of AI",
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-full items-center justify-between rounded-[var(--radius)] border bg-card px-4",
        className,
      )}
    >
      <span className="truncate text-sm">{title}</span>
      <Button variant="ghost" size="icon-sm" aria-label="More options">
        <MoreHorizontal />
      </Button>
    </div>
  );
}
