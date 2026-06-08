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

/** v4 hero — below the terminal window, on the lime frame */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3",
        className,
      )}
    >
      {COMMITMENT_ITEMS.map((item) => (
        <div
          key={item.label}
          className={cn(
            "inline-flex items-center justify-center gap-2 border border-black/[0.08] bg-white px-4 py-2.5 text-[#202020] sm:px-5 sm:py-3",
            landing.capsule,
            landing.shadowDrop,
          )}
        >
          <item.icon className="size-4 shrink-0 text-[#202020]" strokeWidth={1.75} />
          <p className="text-center text-[0.8125rem] font-medium leading-5">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
