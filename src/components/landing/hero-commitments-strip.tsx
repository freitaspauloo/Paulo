import { MapPin, Shield, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const COMMITMENT_ITEMS = [
  { icon: Sparkles, label: "Frontier-class capability" },
  { icon: MapPin, label: "US-hosted inference" },
  { icon: Shield, label: "Your data is never used for training" },
] as const;

/** v4 hero — below the terminal window, on the lime frame */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6 text-center text-white sm:space-y-8", className)}>
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
        Built on three commitments.
      </h2>
      <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
        {COMMITMENT_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <item.icon className="size-5 text-white" strokeWidth={1.75} />
            <p className="max-w-[14rem] text-sm font-medium leading-6 text-white/95">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
