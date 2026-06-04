// ⏳ Aligned AI "Loading" — animated activity indicators, rebuilt from Figma.
// Variants: spinner (ring), sparkle (spinning star), pulse (single dot),
// and dots (three-dot typing indicator).

import { Loader2, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type LoadingVariant = "spinner" | "sparkle" | "pulse" | "dots";

interface LoadingProps {
  variant?: LoadingVariant;
  className?: string;
}

export function Loading({ variant = "spinner", className }: LoadingProps) {
  if (variant === "spinner") {
    return (
      <Loader2
        className={cn("size-5 animate-spin text-muted-foreground", className)}
      />
    );
  }

  if (variant === "sparkle") {
    return (
      <Sparkles className={cn("size-5 animate-spin text-foreground", className)} />
    );
  }

  if (variant === "pulse") {
    return (
      <span
        className={cn(
          "inline-block size-2.5 animate-pulse rounded-full bg-foreground",
          className,
        )}
      />
    );
  }

  // Three-dot typing indicator with staggered bounce.
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="size-1.5 animate-bounce rounded-full bg-foreground"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  );
}
