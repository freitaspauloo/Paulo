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
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#7ec8a8_0%,#8ed4b8_22%,#6dbb96_45%,#9dd9bf_68%,#5aad8a_100%)] motion-safe:animate-[landing-gradient-shift_18s_ease-in-out_infinite] motion-safe:bg-[length:220%_220%]" />
        <div className="absolute -left-[12%] -top-[18%] size-[58%] rounded-full bg-[#3d9a72]/55 blur-3xl motion-safe:animate-[landing-gradient-drift-a_20s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[14%] -right-[8%] size-[52%] rounded-full bg-[#4aaf85]/50 blur-3xl motion-safe:animate-[landing-gradient-drift-b_24s_ease-in-out_infinite]" />
        <div className="absolute left-[28%] top-[38%] size-[42%] rounded-full bg-[#22a06b]/25 blur-3xl motion-safe:animate-[landing-gradient-drift-c_22s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7ec8a8]/25 via-[#b8e6cf]/15 to-[#f0faf6]/88" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
