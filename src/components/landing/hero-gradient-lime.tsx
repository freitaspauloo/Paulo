"use client";

import { LandingFallingPattern } from "@/components/landing/landing-falling-pattern";
import { cn } from "@/lib/utils";

/** v4 — soft white halftone on the default faint-lime pattern base (gradient untouched) */
const V4_FAINT_WHITE_DOTS = {
  color: "rgba(255, 255, 255, 0.58)",
  blurIntensity: "0.75em",
} as const;

/** Shared lime gradient layers — hero frame + split-section visual shells */
export function LimeGradientBackdrop({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 opacity-[0.42]", className)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e4f3e8_0%,#cfe8d4_18%,#b0ddb9_38%,#8ecf9e_58%,#58c97a_78%,#3dba63_100%)]" />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_118%_78%_at_50%_-6%,#e8f2ec_0%,#dce9e0_16%,rgba(210,230,216,0.78)_30%,rgba(186,218,194,0.4)_52%,transparent_76%)]",
          animated &&
            "motion-safe:animate-[landing-gradient-glow_16s_ease-in-out_infinite]",
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_50%_112%,#38b85f_0%,rgba(56,184,95,0.78)_32%,transparent_68%)]" />
      {animated ? (
        <>
          <div className="absolute -bottom-[22%] -left-[14%] size-[58%] rounded-full bg-[#3dbd6a]/48 blur-3xl motion-safe:animate-[landing-gradient-drift-b_24s_ease-in-out_infinite]" />
          <div className="absolute -bottom-[20%] -right-[10%] size-[54%] rounded-full bg-[#36b862]/44 blur-3xl motion-safe:animate-[landing-gradient-drift-a_20s_ease-in-out_infinite]" />
          <div className="absolute -right-[6%] -top-[8%] size-[42%] rounded-full bg-[#d8ebe2]/32 blur-3xl motion-safe:animate-[landing-gradient-drift-c_22s_ease-in-out_infinite]" />
        </>
      ) : null}
    </div>
  );
}

export function HeroGradientLimeFrame({
  className,
  children,
  faintWhiteDots = false,
}: {
  className?: string;
  children: React.ReactNode;
  /** v4: white halftone dots — same faint lime base + gradient as v3 */
  faintWhiteDots?: boolean;
}) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <LandingFallingPattern
        variant="lime"
        color={faintWhiteDots ? V4_FAINT_WHITE_DOTS.color : undefined}
        blurIntensity={
          faintWhiteDots ? V4_FAINT_WHITE_DOTS.blurIntensity : undefined
        }
      />
      <LimeGradientBackdrop className="z-[1]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
