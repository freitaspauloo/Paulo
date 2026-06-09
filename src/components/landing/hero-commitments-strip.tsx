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

/** v4 hero — below the API console, same width, one row of outline pills */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-nowrap items-stretch gap-2 sm:gap-2.5",
        className,
      )}
    >
      {COMMITMENT_ITEMS.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex min-w-0 flex-1 items-center justify-center gap-1.5 border border-white/70 bg-transparent px-2 py-2 sm:gap-2 sm:px-3 sm:py-2.5",
            landing.capsule,
          )}
        >
          <item.icon
            className="size-3.5 shrink-0 text-white sm:size-4"
            strokeWidth={1.75}
          />
          <p className="whitespace-nowrap text-center text-[clamp(0.5625rem,1.65vw,0.75rem)] font-medium leading-tight text-white">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
