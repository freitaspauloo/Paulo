"use client";

// ✦ Aligned AI "Chip" — a compact, tappable suggestion pill (icon + label),
// rebuilt from Figma. States: default, hover, selected, disabled.

import * as React from "react";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

interface ChipProps extends React.ComponentProps<"button"> {
  selected?: boolean;
  /** Pass `null` to hide the icon, or a node to replace the default sparkle. */
  icon?: React.ReactNode;
}

export function Chip({
  selected = false,
  icon,
  className,
  children,
  disabled,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[8px] border-[0.5px] border-border bg-card px-3 py-2 text-sm leading-5 text-muted-foreground transition-colors",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        "hover:bg-muted hover:text-foreground",
        "active:bg-secondary",
        "disabled:pointer-events-none disabled:opacity-50",
        selected && "border-foreground text-foreground",
        className,
      )}
      {...props}
    >
      {icon === undefined ? <Sparkles /> : icon}
      {children}
    </button>
  );
}
