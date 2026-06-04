// ⌨️ Aligned AI "Shortcuts" — keyboard key-cap (kbd), rebuilt from Figma.
// Renders modifier keys (⌘ ⇧ ⌥ ⌃), function keys (fn, ESC, Tab, F1) and
// combos (⌘⇧A) in a clean, readable cap.

import * as React from "react";

import { cn } from "@/lib/utils";

export function Kbd({
  className,
  children,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "inline-flex h-6 min-w-6 items-center justify-center gap-0.5 rounded-[6px] border-[0.5px] border-border bg-muted px-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
