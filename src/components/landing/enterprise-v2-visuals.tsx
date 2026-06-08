"use client";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

export function CompoundVisual() {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] p-4 sm:p-6",
        landing.sectionVisualFrame,
      )}
    >
      <div className="relative mx-auto min-h-[22rem] w-full sm:min-h-[26rem]">
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-4 border border-black/[0.06] bg-white p-6 sm:p-8",
            landing.cardLg,
            landing.shadowDrop,
          )}
        >
          <p className="text-xs font-medium text-[#646464]">Compound routing</p>
          {[
            ["Reasoning path", true],
            ["Coding path", false],
            ["Math path", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={cn(
                "flex items-center justify-between rounded-[10px] border px-4 py-3 text-sm",
                active
                  ? "border-[#22a06b]/30 bg-[#22a06b]/[0.06] font-medium"
                  : "border-black/[0.06] text-[#646464]",
              )}
            >
              <span>{label}</span>
              {active ? (
                <span className="text-xs text-[#22a06b]">Strongest match</span>
              ) : null}
            </div>
          ))}
          <div className="mt-2 rounded-[10px] border border-black/[0.06] bg-[#f9f9f9] px-4 py-3 text-sm font-medium">
            One composed output → your application
          </div>
        </div>
      </div>
    </div>
  );
}

export function CostSplitVisual() {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] p-4 sm:p-6",
        landing.sectionVisualFrame,
      )}
    >
      <div className="relative mx-auto min-h-[22rem] w-full sm:min-h-[26rem]">
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-6 border border-black/[0.06] bg-white p-6 sm:p-8",
            landing.cardLg,
            landing.shadowDrop,
          )}
        >
          <p className="text-center text-xs font-medium uppercase tracking-wide text-[#646464]">
            Cost per chat
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#646464]">Frontier APIs</span>
                <span className="tabular-nums text-[#646464]">~$0.50</span>
              </div>
              <div className="h-10 overflow-hidden rounded-full bg-[#e8e8e8]">
                <div className="h-full w-full rounded-full bg-black/15" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Aligned</span>
                <span className="tabular-nums text-[#22a06b]">$0.006</span>
              </div>
              <div className="h-10 overflow-hidden rounded-full bg-[#e8e8e8]">
                <div className="h-full w-[6%] rounded-full bg-[#202020]" />
              </div>
            </div>
          </div>
          <p className="text-center text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-tight text-[#22a06b]">
            Up to 50× less
          </p>
          <p className="text-center text-xs text-[#646464]">
            Same traffic · sample annual bill modeled on request
          </p>
        </div>
      </div>
    </div>
  );
}
