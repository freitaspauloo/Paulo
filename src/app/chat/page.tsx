"use client";

// 💬 Chat interface — the Aligned AI components assembled into a full chat app.
// Sidebar + header + message thread + composer, framed as one product window.

import * as React from "react";

import { AlignedSidebar } from "@/components/aligned-sidebar";
import { AlignedComposer } from "@/components/aligned-composer";
import { Avatar } from "@/components/aligned-avatar";
import { Chip } from "@/components/aligned-chip";
import { ImageGrid } from "@/components/aligned-image-grid";
import { Loading } from "@/components/aligned-loading";
import { Tag } from "@/components/aligned-tag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User } from "lucide-react";

function AgentMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <Avatar agent="nova" size="sm" className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 space-y-3 text-sm leading-6">{children}</div>
    </div>
  );
}

function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl bg-secondary px-4 py-2.5 text-sm leading-6">
        {children}
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="p-4 sm:p-6">
      {/* App window frame */}
      <div className="mx-auto flex h-[82vh] min-h-[640px] w-full max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-sm">
        {/* Chat sidebar */}
        <AlignedSidebar className="hidden h-full w-64 shrink-0 rounded-none border-0 border-r md:flex" />

        {/* Main column */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
            <span className="truncate text-sm font-medium">
              Homepage hero exploration
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Avatar initials="N" palette="black" size="sm" />
                  </button>
                }
              />
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-1.5 py-1.5">
                  <p className="text-sm font-medium text-foreground">Nicole</p>
                  <p className="text-xs text-muted-foreground">
                    nicole@aligned.ai
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User />
                  Profile
                  <DropdownMenuShortcut>⌘⇧P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  Log out
                  <DropdownMenuShortcut>⌘⇧Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          {/* Message thread */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="mx-auto flex max-w-2xl flex-col gap-6">
              <UserMessage>
                Show me some landscape ideas for the homepage hero.
              </UserMessage>

              <AgentMessage>
                <p>Here are a few directions I&apos;d explore:</p>
                <ImageGrid count={4} className="max-w-sm" />
                <p className="text-muted-foreground">
                  Each leans into natural light and soft gradients — calm, but
                  with enough contrast to hold a headline.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Chip icon={null} onClick={() => {}}>
                    More like these
                  </Chip>
                  <Chip icon={null} onClick={() => {}}>
                    Warmer tones
                  </Chip>
                  <Chip icon={null} onClick={() => {}}>
                    Try portrait
                  </Chip>
                </div>
              </AgentMessage>

              <UserMessage>
                Love the third one. Tag it and schedule a review.
              </UserMessage>

              <AgentMessage>
                <p>Done — I&apos;ve tagged the image and noted a review:</p>
                <div className="flex flex-wrap gap-2">
                  <Tag palette="purple">#&nbsp;homepage</Tag>
                  <Tag palette="mint">#&nbsp;hero</Tag>
                  <Tag palette="orange">#&nbsp;review</Tag>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loading variant="dots" />
                  <span>Setting a reminder for Friday…</span>
                </div>
              </AgentMessage>
            </div>
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t p-4">
            <AlignedComposer className="mx-auto max-w-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
