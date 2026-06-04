// 🖼️ Aligned AI "Image Grid" — an adaptive gallery, rebuilt from Figma.
// Lays out 1–N images with rounded corners + gaps, switching layout by count,
// and shows a "+N" overlay when there are more than `max` images.

import * as React from "react";

import { cn } from "@/lib/utils";

// Soft gradient placeholders used when no real image is supplied.
const placeholderGradients = [
  "bg-gradient-to-br from-mint-bg to-cyan-bg",
  "bg-gradient-to-br from-orange-bg to-pink-bg",
  "bg-gradient-to-br from-purple-bg to-cyan-bg",
  "bg-gradient-to-br from-pink-bg to-purple-bg",
  "bg-gradient-to-br from-cyan-bg to-mint-bg",
  "bg-gradient-to-br from-brown-bg to-orange-bg",
];

function colsForCount(count: number): string {
  if (count <= 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-2";
  if (count === 4) return "grid-cols-2";
  return "grid-cols-3";
}

interface ImageGridProps {
  /** Real image srcs. */
  images?: string[];
  /** Number of placeholder tiles when no `images` are passed. */
  count?: number;
  /** Max tiles to show before collapsing the rest into a "+N" overlay. */
  max?: number;
  className?: string;
}

export function ImageGrid({
  images,
  count = 6,
  max = 6,
  className,
}: ImageGridProps) {
  const items: (string | null)[] = images ?? Array(count).fill(null);
  const shown = items.slice(0, max);
  const remaining = items.length - shown.length;

  return (
    <div
      className={cn("grid w-full max-w-md gap-2", colsForCount(shown.length), className)}
    >
      {shown.map((src, i) => {
        const isLast = i === shown.length - 1;
        return (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-[12px]"
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt="" className="size-full object-cover" />
            ) : (
              <div
                className={cn(
                  "size-full",
                  placeholderGradients[i % placeholderGradients.length],
                )}
              />
            )}
            {isLast && remaining > 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white">
                +{remaining}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
