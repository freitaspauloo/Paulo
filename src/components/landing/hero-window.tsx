"use client";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

export function HeroWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -top-6 bottom-0 rounded-[32px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(135,206,235,0.45),transparent_68%)] blur-2xl"
      />
      <div
        className={cn(
          "relative overflow-hidden border border-black/[0.08] bg-white text-left",
          landing.cardLg,
          landing.shadowHero,
        )}
      >
        <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-[#646464]">
            AAI Terminal — supervised · policy: aligned-default
          </span>
        </div>

        <div className="space-y-1.5 px-4 py-4 font-mono text-xs leading-relaxed text-[#646464]">
          <p>
            <span className="text-[#22a06b]">operator@aligned</span>:
            <span className="text-cyan">~/workspace</span>${" "}
            <span className="text-foreground">
              aai train --playbook ./agents/policy.yaml --dry-run
            </span>
          </p>
          <p className="pl-4">→ checkpoint: waiting for operator confirm (no silent deploy)</p>
          <p className="pl-4">→ dry-run complete · no writes</p>
        </div>

        <div className="border-t border-black/[0.06]" />

        <div className="space-y-3 px-4 py-4 text-sm">
          <span className="text-xs font-medium text-cyan">Live chat — migration pilot</span>
          <div className="max-w-[85%] rounded-[16px] bg-[#f2f2f2] px-4 py-2.5 leading-6">
            How do we migrate 12M support chats to the US-hosted lane without downtime?
          </div>
          <div className="ml-auto max-w-[85%] space-y-2 rounded-[16px] border border-black/[0.06] bg-[#fafafa] px-4 py-2.5 leading-6">
            <p>
              Run a 10% shadow cutover, compare hallucination and cost vs your current
              provider, then flip by policy ring.
            </p>
            <p className="text-[#646464]">
              Est. 22x lower cost on pilot volume; all data stays inside the US boundary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
