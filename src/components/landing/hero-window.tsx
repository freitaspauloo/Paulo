"use client";

import { Avatar } from "@/components/aligned-avatar";
import { AlignedComposer } from "@/components/aligned-composer";
import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

function HeroUserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-end">
      <div className="w-fit max-w-[min(100%,28rem)] rounded-2xl bg-secondary px-4 py-2.5 text-left text-sm leading-6 text-foreground sm:px-5 sm:py-3">
        {children}
      </div>
    </div>
  );
}

function HeroAgentMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full gap-3 sm:gap-3.5">
      <Avatar agent="nova" size="sm" className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 space-y-2 text-sm leading-6">{children}</div>
    </div>
  );
}

export function HeroWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -top-6 bottom-0 rounded-[32px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(135,206,235,0.45),transparent_68%)] blur-2xl"
      />
      <div
        className={cn(
          "relative flex flex-col overflow-hidden border border-black/[0.08] bg-card text-left",
          landing.cardLg,
          landing.shadowHero,
        )}
      >
        <div className="flex h-11 shrink-0 items-center gap-2 border-b border-black/[0.06] px-5 sm:px-6">
          <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
          <span className="ml-1 truncate font-mono text-xs text-muted-foreground">
            AAI Terminal — supervised · policy: aligned-default
          </span>
        </div>

        <div className="border-b border-black/[0.06] px-5 py-4 font-mono text-xs leading-relaxed text-muted-foreground sm:px-6">
          <p className="text-foreground">
            <span className="text-[#22a06b]">operator@aligned</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-cyan">~/workspace</span>
            <span className="text-muted-foreground">$ </span>
            aai train --playbook ./agents/policy.yaml --dry-run
          </p>
          <p className="mt-1.5">
            → checkpoint: waiting for operator confirm (no silent deploy)
          </p>
          <p>→ dry-run complete · no writes</p>
        </div>

        <div className="flex w-full flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
          <HeroUserMessage>
            How do we migrate 12M support chats to the US-hosted lane without
            downtime?
          </HeroUserMessage>
          <HeroAgentMessage>
            <p>
              Run a 10% shadow cutover, compare hallucination and cost vs your
              current provider, then flip by policy ring.
            </p>
            <p className="text-muted-foreground">
              Est. 22x lower cost on pilot volume; all data stays inside the US
              boundary.
            </p>
          </HeroAgentMessage>
        </div>

        <div className="shrink-0 px-5 pb-5 sm:px-6 sm:pb-6">
          <AlignedComposer
            status="Live chat — migration pilot"
            className="w-full max-w-none"
            placeholder="Ask about migration, policy, or cost…"
          />
        </div>
      </div>
    </div>
  );
}
