"use client";

import { cn } from "@/lib/utils";

export function HeroGradientLimeFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Base: white top → vibrant lime bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fff2_20%,#d8ffb8_48%,#a8ff72_72%,#80ff40_90%,#7cff6b_100%)]" />

        {/* Top-center soft-box glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-6%,#ffffff_0%,#ffffff_14%,rgba(255,255,255,0.88)_28%,rgba(255,255,255,0.45)_48%,transparent_74%)] motion-safe:animate-[landing-gradient-glow_16s_ease-in-out_infinite]" />

        {/* Bottom lime saturation + corner fill */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_108%,#7cff6b_0%,rgba(124,255,107,0.65)_38%,transparent_72%)]" />
        <div className="absolute -bottom-[22%] -left-[14%] size-[58%] rounded-full bg-[#7cff6b]/50 blur-3xl motion-safe:animate-[landing-gradient-drift-b_24s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -right-[10%] size-[54%] rounded-full bg-[#80ff40]/45 blur-3xl motion-safe:animate-[landing-gradient-drift-a_20s_ease-in-out_infinite]" />

        {/* Faint warm-green tint upper-right */}
        <div className="absolute -right-[6%] -top-[8%] size-[42%] rounded-full bg-[#eaffd6]/35 blur-3xl motion-safe:animate-[landing-gradient-drift-c_22s_ease-in-out_infinite]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
