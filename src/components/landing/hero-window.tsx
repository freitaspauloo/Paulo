"use client";

import {
  ChevronDown,
  Mic,
  PanelLeft,
  Plus,
  Share2,
  UserPlus,
  Waves,
} from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

function NavItem({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[8px] px-2.5 py-1.5 text-[13px]",
        active
          ? "bg-[#f2f2f2] font-medium text-foreground"
          : "text-[#646464]",
      )}
    >
      {children}
    </div>
  );
}

export function HeroWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem]">
      {/* Ambient glow behind the window (Figma depth) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -top-6 bottom-0 rounded-[32px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(135,206,235,0.45),transparent_68%)] blur-2xl"
      />
      <div
        className={cn(
          "relative overflow-hidden border border-black/[0.08] bg-white",
          landing.cardLg,
          landing.shadowHero,
        )}
      >
        <div className="flex min-h-[26rem] sm:min-h-[30rem]">
          {/* Sidebar */}
          <aside className="hidden w-[15.5rem] shrink-0 flex-col border-r border-black/[0.06] bg-[#fafafa] p-3 sm:flex">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="flex size-7 items-center justify-center rounded-[8px] bg-[#202020] text-xs text-white">
                  λ
                </span>
                Aligned AI Workspace
              </div>
              <PanelLeft className="size-4 text-[#646464]" />
            </div>
            <div className="space-y-0.5 text-[13px] text-[#646464]">
              <NavItem>+ New Chat</NavItem>
              <NavItem>Search</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem>Notes</NavItem>
              <NavItem>Family</NavItem>
            </div>
            <p className="mb-1 mt-5 px-2.5 text-[11px] font-medium uppercase tracking-wide text-[#646464]/80">
              Chats
            </p>
            <div className="space-y-0.5">
              <NavItem active>Last Minute Trip</NavItem>
              <NavItem>Family night: Book of Mormon</NavItem>
              <NavItem>Mission prep timeline</NavItem>
            </div>
            <div className="mt-auto flex items-center gap-2 border-t border-black/[0.06] pt-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#202020] text-xs font-semibold text-white">
                JD
              </span>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-medium">John Doe</p>
                <p className="truncate text-xs text-[#646464]">john@example.com</p>
              </div>
              <ChevronDown className="ml-auto size-4 shrink-0 text-[#646464]" />
            </div>
          </aside>

          {/* Chat column */}
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="flex h-12 items-center justify-between border-b border-black/[0.06] px-4 sm:px-5">
              <span className="text-sm font-semibold">Last Minute Trip</span>
              <div className="flex items-center gap-3 text-[#646464]">
                <Share2 className="size-4" />
                <UserPlus className="size-4" />
              </div>
            </header>

            <div className="flex-1 space-y-5 overflow-hidden px-4 py-5 sm:px-6">
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-[12px] bg-[#f2f2f2] px-4 py-2.5 text-sm leading-6">
                  What are the top 10 countries every traveler should know about?
                </p>
              </div>
              <div className="space-y-2 text-sm leading-6">
                <p>
                  Here are 10 countries worth knowing — diverse regions, cultures,
                  and why they matter:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-[#646464]">
                  <li>
                    <span className="font-medium text-foreground">Japan</span> —
                    safety, transit, and cultural depth
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Italy</span> —
                    art, food, and walkable cities
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Canada</span> —
                    nature, bilingual cities
                  </li>
                </ul>
                <p className="text-xs text-[#646464]">Streaming…</p>
              </div>
            </div>

            <div className="border-t border-black/[0.06] p-3 sm:p-4">
              <div
                className={cn(
                  "flex items-center gap-2 border border-black/[0.1] bg-white px-3 py-2",
                  landing.capsule,
                )}
              >
                <button
                  type="button"
                  aria-label="Attach"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-[#646464]"
                >
                  <Plus className="size-4" />
                </button>
                <span className="flex-1 text-sm text-[#646464]">Ask anything…</span>
                <span className="hidden items-center gap-1 rounded-full bg-[#f9f9f9] px-2.5 py-1 text-xs text-[#646464] sm:inline-flex">
                  Auto <ChevronDown className="size-3" />
                </span>
                <span className="hidden rounded-full bg-[#f9f9f9] px-2.5 py-1 text-xs text-[#646464] sm:inline-block">
                  Production
                </span>
                <Mic className="size-4 shrink-0 text-[#646464]" />
                <button
                  type="button"
                  aria-label="Send"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#202020] text-white"
                >
                  <Waves className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
