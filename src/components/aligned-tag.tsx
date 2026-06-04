"use client";

// 🏷️ Aligned AI "Tag" — a labeled pill for metadata, filters, or categories.
// Rebuilt from Figma. Supports palette colors + optional icon + optional remove.

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

export type TagPalette =
  | "default"
  | "purple"
  | "pink"
  | "cyan"
  | "mint"
  | "orange"
  | "brown";

const paletteClasses: Record<TagPalette, string> = {
  default: "bg-secondary text-muted-foreground",
  purple: "bg-purple-bg text-purple",
  pink: "bg-pink-bg text-pink",
  cyan: "bg-cyan-bg text-cyan",
  mint: "bg-mint-bg text-mint",
  orange: "bg-orange-bg text-orange",
  brown: "bg-brown-bg text-brown",
};

interface TagProps extends React.ComponentProps<"span"> {
  palette?: TagPalette;
  icon?: React.ReactNode;
  /** When provided, renders a small ✕ that calls this on click. */
  onRemove?: () => void;
}

export function Tag({
  palette = "default",
  icon,
  onRemove,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 min-w-6 items-center justify-center gap-0.5 rounded-[8px] px-1.5 py-0.5 text-xs font-semibold leading-4",
        "[&_svg]:size-3.5 [&_svg]:shrink-0",
        paletteClasses[palette],
        className,
      )}
      {...props}
    >
      {icon}
      <span className="px-0.5">{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="flex size-3.5 items-center justify-center rounded-full opacity-50 transition-opacity hover:opacity-100 [&_svg]:size-2.5"
        >
          <X />
        </button>
      )}
    </span>
  );
}
