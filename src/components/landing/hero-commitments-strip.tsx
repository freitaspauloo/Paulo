import { MapPin, Shield, Sparkles } from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

const COMMITMENT_ITEMS = [
  { icon: Sparkles, label: "Frontier-class capability" },
  {
    icon: MapPin,
    label: "Sovereign by design: US-hosted, inside your boundary",
  },
  { icon: Shield, label: "Your data is never used for training" },
] as const;

/** v4 hero — below the API console, hug-content outline pills on richer green */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-[linear-gradient(180deg,rgba(62,184,99,0.55)_0%,rgba(46,168,82,0.62)_100%)] px-3 py-3 sm:px-4 sm:py-3.5",
        className,
      )}
    >
      <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {COMMITMENT_ITEMS.map((item) => (
          <div
            key={item.label}
            className={cn(
              "inline-flex w-fit shrink-0 items-center gap-2 border border-white/90 bg-white/[0.06] px-3.5 py-2 text-white sm:px-4 sm:py-2.5",
              landing.capsule,
            )}
          >
            <item.icon
              className="size-3.5 shrink-0 text-white sm:size-4"
              strokeWidth={1.75}
            />
            <p className="whitespace-nowrap text-[0.6875rem] font-medium leading-tight text-white sm:text-[0.8125rem]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
