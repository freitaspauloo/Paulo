"use client";

import { FallingPattern } from "@/components/falling-pattern";
import { cn } from "@/lib/utils";

/** Falling lines over gradient frames — no overlay blur, gradient colors unchanged */
export function LandingFallingPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[2] overflow-hidden",
        className,
      )}
    >
      <FallingPattern
        className="absolute inset-0 size-full p-0"
        backgroundColor="transparent"
        color="rgba(15, 23, 42, 0.16)"
        duration={75}
        showOverlay={false}
        density={1}
      />
    </div>
  );
}
