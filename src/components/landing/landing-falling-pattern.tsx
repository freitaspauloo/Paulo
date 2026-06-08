"use client";

import { FallingPattern } from "@/components/falling-pattern";
import { cn } from "@/lib/utils";

export type LandingPatternVariant = "cyan" | "lime";

/** Tuned to match each frame palette — uses full halftone blur overlay like the 21st demo */
const FRAME_PRESETS: Record<
  LandingPatternVariant,
  { backgroundColor: string; color: string }
> = {
  cyan: {
    backgroundColor: "#f6fbfe",
    color: "rgba(16, 125, 152, 0.55)",
  },
  lime: {
    backgroundColor: "#f5faf7",
    color: "rgba(34, 160, 107, 0.5)",
  },
};

export function LandingFallingPattern({
  variant,
  className,
}: {
  variant: LandingPatternVariant;
  className?: string;
}) {
  const preset = FRAME_PRESETS[variant];

  return (
    <FallingPattern
      aria-hidden
      className={cn("absolute inset-0 z-0 size-full p-0", className)}
      backgroundColor={preset.backgroundColor}
      color={preset.color}
      duration={150}
      blurIntensity="1em"
      density={1}
      showOverlay
    />
  );
}
