import { MapPin, Shield, Sparkles } from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

const COMMITMENT_ITEMS = [
  { icon: Sparkles, label: "Frontier-class capability" },
  { icon: MapPin, label: "US-hosted inference" },
  { icon: Shield, label: "Your data is never used for training" },
] as const;

/** v4 hero — below the terminal window, on the lime frame */
export function HeroCommitmentsStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-black/[0.08] bg-white text-[#202020]",
        landing.cardMd,
        landing.shadowDrop,
        className,
      )}
    >
      <div className="grid divide-y divide-black/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {COMMITMENT_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 px-5 py-6 text-center sm:px-6 sm:py-7"
          >
            <item.icon className="size-5 text-[#202020]" strokeWidth={1.75} />
            <p className="max-w-[14rem] text-sm font-medium leading-6 text-[#202020]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
