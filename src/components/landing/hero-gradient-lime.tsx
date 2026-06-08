"use client";

import { LandingFallingPattern } from "@/components/landing/landing-falling-pattern";
import { cn } from "@/lib/utils";

export function HeroGradientLimeFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <LandingFallingPattern variant="lime" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.34]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f0faf4_0%,#dff5e6_18%,#c4edc8_38%,#9ee0ad_58%,#6ed98a_78%,#4ecf72_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_118%_78%_at_50%_-6%,#f3f9f6_0%,#ebf5f0_16%,rgba(235,245,238,0.82)_30%,rgba(214,234,222,0.42)_52%,transparent_76%)] motion-safe:animate-[landing-gradient-glow_16s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_50%_112%,#42c96a_0%,rgba(66,201,106,0.7)_32%,transparent_68%)]" />
        <div className="absolute -bottom-[22%] -left-[14%] size-[58%] rounded-full bg-[#3dbd6a]/48 blur-3xl motion-safe:animate-[landing-gradient-drift-b_24s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -right-[10%] size-[54%] rounded-full bg-[#36b862]/44 blur-3xl motion-safe:animate-[landing-gradient-drift-a_20s_ease-in-out_infinite]" />
        <div className="absolute -right-[6%] -top-[8%] size-[42%] rounded-full bg-[#d8ebe2]/32 blur-3xl motion-safe:animate-[landing-gradient-drift-c_22s_ease-in-out_infinite]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
