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
        {/* Base: mint-tinted top → soft sage bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5faf7_0%,#eef7f2_22%,#dfece6_46%,#cfe3d8_68%,#c2dbc8_86%,#b8d4c0_100%)]" />

        {/* Top-center glow — green-tinted, not pure white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_118%_78%_at_50%_-6%,#f3f9f6_0%,#ebf5f0_16%,rgba(235,245,238,0.82)_30%,rgba(214,234,222,0.42)_52%,transparent_76%)] motion-safe:animate-[landing-gradient-glow_16s_ease-in-out_infinite]" />

        {/* Bottom fill — muted, not neon */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_108%,#b8d8c4_0%,rgba(184,216,196,0.42)_38%,transparent_72%)]" />
        <div className="absolute -bottom-[22%] -left-[14%] size-[58%] rounded-full bg-[#a8d0b8]/28 blur-3xl motion-safe:animate-[landing-gradient-drift-b_24s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -right-[10%] size-[54%] rounded-full bg-[#9ec8b0]/24 blur-3xl motion-safe:animate-[landing-gradient-drift-a_20s_ease-in-out_infinite]" />

        {/* Faint green wash across upper area */}
        <div className="absolute -right-[6%] -top-[8%] size-[42%] rounded-full bg-[#d8ebe2]/32 blur-3xl motion-safe:animate-[landing-gradient-drift-c_22s_ease-in-out_infinite]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
