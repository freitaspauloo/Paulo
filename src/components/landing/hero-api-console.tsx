"use client";

import { ArrowRight, Brain, Code2, MapPin, Sigma } from "lucide-react";

import { AlignedComposer } from "@/components/aligned-composer";
import { AlignedSidebar } from "@/components/aligned-sidebar";
import { Avatar } from "@/components/aligned-avatar";
import { Tag } from "@/components/aligned-tag";
import { landing } from "@/components/landing/landing-primitives";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ROUTES = [
  { label: "Reasoning", icon: Brain, active: true },
  { label: "Coding", icon: Code2, active: false },
  { label: "Math", icon: Sigma, active: false },
] as const;

function HeroUserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[88%] rounded-2xl bg-secondary px-3 py-1.5 text-[0.8125rem] leading-5 text-foreground">
        {children}
      </div>
    </div>
  );
}

function HeroAgentMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <Avatar agent="nova" size="sm" className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 space-y-1.5 text-[0.8125rem] leading-5">{children}</div>
    </div>
  );
}

function ActivePathsStrip() {
  return (
    <div className="rounded-lg border border-black/[0.06] bg-[#fafafa] px-3 py-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <p className="text-[0.625rem] font-medium uppercase tracking-wide text-[#646464]">
          Active paths
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ROUTES.map((route) => {
            const Icon = route.icon;
            return (
              <div
                key={route.label}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.6875rem] font-medium",
                  route.active
                    ? "border-[#22a06b]/35 bg-[#22a06b]/[0.08] text-foreground"
                    : "border-transparent bg-white text-muted-foreground opacity-60",
                )}
              >
                <Icon className="size-3" strokeWidth={2} />
                {route.label}
                {route.active ? (
                  <span className="text-[0.5625rem] text-[#22a06b]">· lit</span>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="ml-auto hidden items-center gap-1.5 text-[0.625rem] text-muted-foreground sm:flex">
          <span>Reasoning path selected</span>
          <ArrowRight className="size-2.5" />
          <span>Composed response</span>
        </div>
      </div>
    </div>
  );
}

/** v4 hero — live API routing layered on the real Aligned chat shell */
export function HeroApiConsole() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem] select-none">
      <Card
        className={cn(
          "pointer-events-none relative flex flex-col gap-0 overflow-hidden border border-black/[0.08] bg-white py-0 ring-0",
          landing.cardLg,
          landing.shadowHero,
        )}
      >
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-black/[0.06] px-4 sm:px-5">
          <span className="size-2 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="size-2 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="size-2 shrink-0 rounded-full bg-[#28c840]" />
          <span className="ml-1 truncate font-mono text-[0.6875rem] text-muted-foreground">
            Aligned API console — live routing
          </span>
        </div>

        <CardContent className="space-y-0 p-0">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] px-4 py-2.5 sm:px-5">
            <div className="min-w-0 space-y-0.5">
              <p className="font-mono text-[0.625rem] text-muted-foreground">
                POST /v1/chat/completions
              </p>
              <p className="text-xs font-medium sm:text-[0.8125rem]">
                Request routed · policy: aligned-default
              </p>
            </div>
            <Badge
              variant="outline"
              className="gap-1 border-black/[0.08] bg-white px-2 py-0.5 text-[0.625rem] font-medium"
            >
              <MapPin className="size-2.5 text-[#22a06b]" strokeWidth={2} />
              US-hosted
            </Badge>
          </div>

          <div className="flex">
            <AlignedSidebar className="hidden h-auto w-48 shrink-0 self-stretch rounded-none border-0 border-r md:flex" />

            <div className="flex min-w-0 flex-1 flex-col bg-white">
              <header className="flex h-9 shrink-0 items-center gap-3 border-b border-black/[0.06] px-3 sm:px-4">
                <span className="truncate text-[0.8125rem] font-medium">
                  SOC 2 readiness review
                </span>
                <Avatar
                  initials="E"
                  palette="black"
                  size="sm"
                  className="ml-auto shrink-0"
                />
              </header>

              <div className="px-3 py-3 sm:px-4">
                <div className="mx-auto flex max-w-xl flex-col gap-3">
                  <HeroUserMessage>
                    Summarize these access controls into a SOC 2 evidence checklist.
                  </HeroUserMessage>

                  <HeroAgentMessage>
                    <p>
                      Mapped your controls to CC6.1 and CC6.2 — draft checklist
                      ready with policy citations.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Tag palette="mint">#&nbsp;CC6.1</Tag>
                      <Tag palette="purple">#&nbsp;access-controls</Tag>
                      <Tag palette="orange">#&nbsp;evidence</Tag>
                    </div>
                  </HeroAgentMessage>
                </div>
              </div>

              <div className="mt-auto shrink-0 space-y-2 border-t border-black/[0.06] px-3 py-2.5 sm:px-4">
                <ActivePathsStrip />
                <AlignedComposer
                  rows={1}
                  className="mx-auto max-w-xl shadow-none [&>div]:gap-2 [&>div]:p-2.5"
                  placeholder="Follow up on the SOC 2 checklist…"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] px-4 py-2.5 sm:px-5">
            <div className="flex items-baseline gap-2">
              <p className="text-[0.6875rem] text-[#646464]">Status</p>
              <p className="text-xs font-medium text-[#22a06b]">200 · delivered</p>
            </div>
            <div className="flex items-baseline gap-2 text-right">
              <p className="text-[0.6875rem] text-[#646464]">Cost this request</p>
              <p className="text-2xl font-semibold tracking-tight text-[#22a06b] tabular-nums">
                $0.006
              </p>
              <p className="text-[0.625rem] text-muted-foreground">per chat</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
