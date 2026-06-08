// 💬 Aligned AI "Prompt" / Text Composer — the chat input, rebuilt from Figma.
// Rounded box with a text area, a "+" attach button, and a dark circular send
// button. Optional status bar on top (e.g. "2/4 tasks in progress").

import { ArrowUp, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

interface AlignedComposerProps {
  /** Optional status text shown in a bar above the input. */
  status?: string;
  /** Prefilled text (turns it into the "filled" state). */
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  /** Optional footer rendered inside the composer frame (below the input). */
  footer?: React.ReactNode;
}

export function AlignedComposer({
  status,
  defaultValue,
  placeholder = "Type a prompt or press / for commands",
  className,
  footer,
}: AlignedComposerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-[16px] border bg-card shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      {status && (
        <div className="flex items-center gap-2 border-b bg-muted px-4 py-2 text-xs text-muted-foreground">
          <span className="inline-block size-1.5 animate-pulse rounded-full bg-progress" />
          {status}
        </div>
      )}
      <div className="flex flex-col gap-3 p-3">
        <textarea
          rows={2}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent px-1 pt-1 text-sm outline-none placeholder:text-muted-foreground"
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Add attachment"
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Plus className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Send"
            className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
      {footer}
    </div>
  );
}
