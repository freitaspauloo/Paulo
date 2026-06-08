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

const FRONTIER_COST = 0.5;
const ALIGNED_COST = 0.006;
const alignedShare = (ALIGNED_COST / FRONTIER_COST) * 100;

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
            "absolute inset-0 flex flex-col justify-center gap-5 border border-black/[0.06] bg-white p-6 sm:gap-6 sm:p-8",
            landing.cardLg,
            landing.shadowDrop,
          )}
        >
          <p className="text-center text-xs font-medium uppercase tracking-wide text-[#646464]">
            Cost per chat
          </p>

          <div className="flex items-end justify-center gap-6 sm:gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-sm tabular-nums text-[#646464]">~$0.50</span>
              <div className="relative h-44 w-[4.25rem] sm:h-52 sm:w-[5rem]">
                <div className="absolute inset-x-0 bottom-0 top-0 rounded-t-2xl bg-[#d6d6d6]" />
                <div
                  className="absolute inset-x-0 border-t-2 border-dashed border-[#22a06b]"
                  style={{ bottom: `${alignedShare}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#646464]">Frontier APIs</span>
            </div>

            <div className="flex flex-col items-center justify-end gap-2 self-stretch pb-[1.375rem] sm:pb-[1.5rem]">
              <span className="rounded-full bg-[#22a06b]/10 px-2.5 py-1 text-xs font-semibold tabular-nums text-[#22a06b]">
                50×
              </span>
              <div className="h-10 w-px bg-black/10" />
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <span className="text-sm font-semibold tabular-nums text-[#22a06b]">
                $0.006
              </span>
              <div className="relative h-44 w-[4.25rem] sm:h-52 sm:w-[5rem]">
                <div
                  className="absolute inset-x-0 bottom-0 rounded-t-md bg-[#22a06b]/[0.14]"
                  style={{ height: `${alignedShare}%` }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 rounded-t-md bg-[#22a06b]"
                  style={{ height: `${alignedShare}%` }}
                />
                <div
                  className="absolute inset-x-0 border-t-2 border-dashed border-[#22a06b]"
                  style={{ bottom: `${alignedShare}%` }}
                />
              </div>
              <span className="text-xs font-semibold">Aligned</span>
            </div>
          </div>

          <p className="text-center text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight text-[#22a06b]">
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
