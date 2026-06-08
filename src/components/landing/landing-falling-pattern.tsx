"use client";

import { FallingPattern } from "@/components/falling-pattern";
import { cn } from "@/lib/utils";

/** Subtle falling lines over gradient frames — transparent base, no color shift */
export function LandingFallingPattern({ className }: { className?: string }) {
  return (
    <FallingPattern
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] h-full w-full p-0",
        className,
      )}
      backgroundColor="transparent"
      color="rgba(15, 23, 42, 0.07)"
      duration={120}
      blurIntensity="0.65em"
      density={1}
    />
  );
}
