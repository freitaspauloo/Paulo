"use client";

import { FallingPattern } from "@/components/falling-pattern";
import { cn } from "@/lib/utils";

export type LandingPatternVariant = "cyan" | "lime";

/** Tuned to match each frame palette — uses full halftone blur overlay like the 21st demo */
const FRAME_PRESETS: Record<
  LandingPatternVariant,
  { backgroundColor: string; color: string; blurIntensity?: string }
> = {
  cyan: {
    backgroundColor: "#f6fbfe",
    color: "rgba(16, 125, 152, 0.55)",
  },
  lime: {
    backgroundColor: "#d6ebde",
    color: "rgba(16, 120, 68, 0.9)",
    blurIntensity: "0.75em",
  },
};

export function LandingFallingPattern({
  variant,
  className,
  color,
  backgroundColor,
  blurIntensity,
  opacity,
  density,
  showOverlay = true,
}: {
  variant: LandingPatternVariant;
  className?: string;
  /** Optional dot color override (e.g. v4 white dots). */
  color?: string;
  backgroundColor?: string;
  blurIntensity?: string;
  /** Layer opacity multiplier (v4 white dots need a boost). */
  opacity?: number;
  density?: number;
  showOverlay?: boolean;
}) {
  const preset = FRAME_PRESETS[variant];

  return (
    <FallingPattern
      aria-hidden
      className={cn("absolute inset-0 z-0 size-full p-0", className)}
      style={opacity !== undefined ? { opacity } : undefined}
      backgroundColor={backgroundColor ?? preset.backgroundColor}
      color={color ?? preset.color}
      duration={150}
      blurIntensity={blurIntensity ?? preset.blurIntensity ?? "1em"}
      density={density ?? 1}
      showOverlay={showOverlay}
    />
  );
}
