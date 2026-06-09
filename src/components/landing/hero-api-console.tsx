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
      <div className="max-w-[88%] rounded-2xl bg-secondary px-3.5 py-2 text-[0.8125rem] leading-5 text-foreground">
        {children}
      </div>
    </div>
  );
}

function HeroAgentMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5">
      <Avatar agent="nova" size="sm" className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 space-y-2 text-[0.8125rem] leading-5">{children}</div>
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
        <div className="flex h-11 shrink-0 items-center gap-2 border-b border-black/[0.06] px-5 sm:px-6">
          <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
          <span className="ml-1 truncate font-mono text-xs text-muted-foreground">
            Aligned API console — live routing
          </span>
        </div>

        <CardContent className="space-y-0 p-0">
          <div className="space-y-4 border-b border-black/[0.06] px-5 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="font-mono text-[0.6875rem] text-muted-foreground">
                  POST /v1/chat/completions
                </p>
                <p className="text-sm font-medium">
                  Request routed · policy: aligned-default
                </p>
              </div>
              <Badge
                variant="outline"
                className="gap-1.5 border-black/[0.08] bg-white px-2.5 py-1 text-[0.6875rem] font-medium"
              >
                <MapPin className="size-3 text-[#22a06b]" strokeWidth={2} />
                US-hosted
              </Badge>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-3.5 sm:p-4">
              <p className="mb-2.5 text-[0.6875rem] font-medium uppercase tracking-wide text-[#646464]">
                Active paths
              </p>
              <div className="flex flex-wrap gap-2">
                {ROUTES.map((route) => {
                  const Icon = route.icon;
                  return (
                    <div
                      key={route.label}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium",
                        route.active
                          ? "border-[#22a06b]/35 bg-[#22a06b]/[0.08] text-foreground"
                          : "border-transparent bg-white text-muted-foreground opacity-60",
                      )}
                    >
                      <Icon className="size-3.5" strokeWidth={2} />
                      {route.label}
                      {route.active ? (
                        <span className="text-[0.625rem] text-[#22a06b]">· lit</span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className="mt-2.5 flex items-center gap-2 text-[0.6875rem] text-muted-foreground">
                <span>Reasoning path selected</span>
                <ArrowRight className="size-3" />
                <span>Composed response</span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[20rem] sm:min-h-[22rem]">
            <AlignedSidebar className="hidden h-auto min-h-full w-[13.5rem] shrink-0 self-stretch rounded-none border-0 border-r md:flex" />

            <div className="flex min-w-0 flex-1 flex-col bg-white">
              <header className="flex h-11 shrink-0 items-center gap-3 border-b border-black/[0.06] px-4">
                <span className="truncate text-sm font-medium">
                  SOC 2 readiness review
                </span>
                <Avatar
                  initials="E"
                  palette="black"
                  size="sm"
                  className="ml-auto shrink-0"
                />
              </header>

              <div className="flex-1 overflow-hidden px-4 py-4 sm:px-5">
                <div className="mx-auto flex max-w-xl flex-col gap-4">
                  <HeroUserMessage>
                    Summarize these access controls into a SOC 2 evidence checklist.
                  </HeroUserMessage>

                  <HeroAgentMessage>
                    <p>
                      Mapped your controls to CC6.1 and CC6.2. Draft checklist
                      below — each item cites the policy section it satisfies.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Tag palette="mint">#&nbsp;CC6.1</Tag>
                      <Tag palette="purple">#&nbsp;access-controls</Tag>
                      <Tag palette="orange">#&nbsp;evidence</Tag>
                    </div>
                    <p className="text-muted-foreground">
                      12 items ready for export. Want me to format this for your
                      auditor?
                    </p>
                  </HeroAgentMessage>
                </div>
              </div>

              <div className="shrink-0 border-t border-black/[0.06] p-3 sm:p-4">
                <AlignedComposer
                  className="mx-auto max-w-xl shadow-none"
                  placeholder="Follow up on the SOC 2 checklist…"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-black/[0.06] px-5 py-4 sm:px-6">
            <div className="space-y-0.5">
              <p className="text-xs text-[#646464]">Status</p>
              <p className="text-sm font-medium text-[#22a06b]">200 · delivered</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#646464]">Cost this request</p>
              <p className="text-3xl font-semibold tracking-tight text-[#22a06b] tabular-nums sm:text-4xl">
                $0.006
              </p>
              <p className="text-[0.6875rem] text-muted-foreground">per chat</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
