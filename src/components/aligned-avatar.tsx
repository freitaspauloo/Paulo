// 👤 Aligned AI "Avatar" — a flexible identity element, rebuilt from Figma.
// Supports: portrait (image), alphabet (initials), agent (gradient orb), and
// empty (placeholder) — plus an AvatarGroup with overlap + "+N" overflow.

import * as React from "react";

import { cn } from "@/lib/utils";

type AvatarSize = "sm" | "md" | "lg";

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-6 text-[11px]",
  md: "size-8 text-[13px]",
  lg: "size-10 text-[15px]",
};

export type AvatarPalette =
  | "black"
  | "white"
  | "purple"
  | "pink"
  | "cyan"
  | "mint"
  | "orange"
  | "brown";

const paletteClasses: Record<AvatarPalette, string> = {
  black: "bg-foreground text-background",
  white: "border border-border bg-card text-foreground",
  purple: "bg-purple-bg text-purple",
  pink: "bg-pink-bg text-pink",
  cyan: "bg-cyan-bg text-cyan",
  mint: "bg-mint-bg text-mint",
  orange: "bg-orange-bg text-orange",
  brown: "bg-brown-bg text-brown",
};

// A few "agent" gradient presets (soft conic/linear orbs).
const agentGradients: Record<string, string> = {
  nova: "bg-[conic-gradient(from_180deg,#fd177f,#6550b9,#0088f1,#fd177f)]",
  gold: "bg-[conic-gradient(from_120deg,#ffefd6,#ff6202,#cc4e00,#ffefd6)]",
  jade: "bg-[conic-gradient(from_220deg,#03dba5,#0088f1,#6550b9,#03dba5)]",
  bloom: "bg-[conic-gradient(from_90deg,#fee9f5,#fd177f,#6550b9,#fee9f5)]",
};

interface AvatarProps extends React.ComponentProps<"span"> {
  size?: AvatarSize;
  /** Portrait image src. */
  src?: string;
  alt?: string;
  /** Initials for the "alphabet" variant. */
  initials?: string;
  palette?: AvatarPalette;
  /** Renders an "agent" gradient orb when set. */
  agent?: keyof typeof agentGradients;
}

export function Avatar({
  size = "md",
  src,
  alt,
  initials,
  palette = "black",
  agent,
  className,
  ...props
}: AvatarProps) {
  const base = cn(
    "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold",
    sizeClasses[size],
    className,
  );

  if (src) {
    return (
      <span className={base} {...props}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt ?? ""} className="size-full object-cover" />
      </span>
    );
  }

  if (agent) {
    return <span className={cn(base, agentGradients[agent])} {...props} />;
  }

  if (initials) {
    return (
      <span className={cn(base, paletteClasses[palette])} {...props}>
        {initials}
      </span>
    );
  }

  // Empty placeholder
  return <span className={cn(base, "bg-muted")} {...props} />;
}

interface AvatarGroupProps extends React.ComponentProps<"div"> {
  /** Show a trailing "+N" bubble. */
  overflowCount?: number;
  size?: AvatarSize;
}

export function AvatarGroup({
  overflowCount,
  size = "md",
  className,
  children,
  ...props
}: AvatarGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        "[&>*]:ring-2 [&>*]:ring-background [&>*:not(:first-child)]:-ml-2",
        className,
      )}
      {...props}
    >
      {children}
      {overflowCount ? (
        <span
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-muted-foreground ring-2 ring-background",
            sizeClasses[size],
          )}
        >
          +{overflowCount}
        </span>
      ) : null}
    </div>
  );
}
