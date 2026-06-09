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

/** v4 hero — one row of hug pills, same width as API console above */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-nowrap items-center justify-between gap-1.5 sm:justify-center sm:gap-2.5",
        className,
      )}
    >
      {COMMITMENT_ITEMS.map((item) => (
        <div
          key={item.label}
          className={cn(
            "inline-flex w-fit max-w-full shrink-0 items-center gap-1.5 border border-white/85 bg-transparent px-2 py-1.5 sm:gap-2 sm:px-3.5 sm:py-2",
            landing.capsule,
          )}
        >
          <item.icon
            className="size-3 shrink-0 text-white sm:size-3.5"
            strokeWidth={1.75}
          />
          <p className="whitespace-nowrap text-[clamp(0.5625rem,1.05vw,0.8125rem)] font-medium leading-tight text-white">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
