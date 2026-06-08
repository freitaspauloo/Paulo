"use client";

import { landing } from "@/components/landing/landing-primitives";
import { LandingFallingPattern } from "@/components/landing/landing-falling-pattern";
import { cn } from "@/lib/utils";

export function HeroGradientCyanFrame({
  className,
  gradientClassName = landing.heroGradient,
  children,
}: {
  className?: string;
  gradientClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <LandingFallingPattern variant="cyan" />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-[1] opacity-45",
          gradientClassName,
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
