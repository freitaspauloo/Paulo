"use client";

import { ArrowRight, Brain, Code2, MapPin, Sigma } from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ROUTES = [
  { label: "Reasoning", icon: Brain, active: true },
  { label: "Coding", icon: Code2, active: false },
  { label: "Math", icon: Sigma, active: false },
] as const;

/** v4 hero — API console with routing paths, US-hosted badge, per-chat cost focal point */
export function HeroApiConsole() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem]">
      <Card
        className={cn(
          "relative flex flex-col gap-0 overflow-hidden border border-black/[0.08] bg-white py-0 ring-0",
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

        <CardContent className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="font-mono text-[0.6875rem] text-muted-foreground">
                POST /v1/chat/completions
              </p>
              <p className="text-sm font-medium">Request routed · policy: aligned-default</p>
            </div>
            <Badge
              variant="outline"
              className="gap-1.5 border-black/[0.08] bg-white px-2.5 py-1 text-[0.6875rem] font-medium"
            >
              <MapPin className="size-3 text-[#22a06b]" strokeWidth={2} />
              US-hosted
            </Badge>
          </div>

          <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] p-4">
            <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-wide text-[#646464]">
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
            <div className="mt-3 flex items-center gap-2 text-[0.6875rem] text-muted-foreground">
              <span>Reasoning path selected</span>
              <ArrowRight className="size-3" />
              <span>Composed response</span>
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-black/[0.06] pt-4">
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
