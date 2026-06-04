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

// A few "agent" gradient presets — soft, layered radial orbs (blurred blend
// of palette colors) to match the Figma agent avatars.
const agentGradients: Record<string, string> = {
  nova: "bg-[radial-gradient(circle_at_30%_25%,#fd177f_0%,transparent_55%),radial-gradient(circle_at_75%_70%,#0088f1_0%,transparent_55%),radial-gradient(circle_at_60%_30%,#6550b9_0%,transparent_60%)] bg-[#6550b9]",
  gold: "bg-[radial-gradient(circle_at_30%_30%,#ffe629_0%,transparent_55%),radial-gradient(circle_at_70%_70%,#ff6202_0%,transparent_60%)] bg-[#ff8a3d]",
  jade: "bg-[radial-gradient(circle_at_35%_30%,#03dba5_0%,transparent_55%),radial-gradient(circle_at_70%_75%,#0088f1_0%,transparent_60%)] bg-[#16b8a6]",
  bloom: "bg-[radial-gradient(circle_at_30%_30%,#fee9f5_0%,transparent_50%),radial-gradient(circle_at_70%_65%,#fd177f_0%,transparent_60%)] bg-[#fd5fa3]",
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
