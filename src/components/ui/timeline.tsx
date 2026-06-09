"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type TimelineOrientation = "vertical" | "horizontal";

const TimelineContext = React.createContext<{
  orientation: TimelineOrientation;
}>({ orientation: "vertical" });

const timelineVariants = cva("flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-col gap-10 md:flex-row md:items-start md:gap-6",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const timelineItemVariants = cva("relative flex min-w-0", {
  variants: {
    orientation: {
      vertical: "gap-4 pb-8 last:pb-0",
      horizontal: "flex-1 flex-col gap-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const timelineMarkerVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground ring-1 ring-foreground/10",
        success:
          "bg-[#22a06b] text-white shadow-[0_1px_6px_rgba(34,160,107,0.22)]",
        muted: "bg-black/[0.04] text-[#646464] ring-1 ring-black/[0.06]",
      },
      size: {
        sm: "size-6",
        default: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Timeline({
  orientation = "vertical",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: TimelineOrientation;
}) {
  return (
    <TimelineContext.Provider value={{ orientation }}>
      <div
        data-slot="timeline"
        data-orientation={orientation}
        className={cn(timelineVariants({ orientation }), className)}
        {...props}
      />
    </TimelineContext.Provider>
  );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = React.useContext(TimelineContext);

  return (
    <div
      data-slot="timeline-item"
      className={cn(timelineItemVariants({ orientation }), className)}
      {...props}
    />
  );
}

function TimelineMarker({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof timelineMarkerVariants>) {
  return (
    <span
      data-slot="timeline-marker"
      className={cn(timelineMarkerVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function TimelineHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-header"
      className={cn("min-w-0 space-y-0.5", className)}
      {...props}
    />
  );
}

function TimelineMeta({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-meta"
      className={cn(
        "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#646464]",
        className,
      )}
      {...props}
    />
  );
}

function TimelineTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="timeline-title"
      className={cn(
        "text-lg font-semibold leading-snug tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TimelineConnector({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { orientation } = React.useContext(TimelineContext);

  return (
    <div
      aria-hidden
      data-slot="timeline-connector"
      className={cn(
        "bg-black/[0.06]",
        orientation === "vertical" && "absolute top-8 bottom-0 left-4 w-px -translate-x-1/2",
        orientation === "horizontal" &&
          "hidden md:block md:h-px md:flex-1 md:self-center",
        className,
      )}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineHeader,
  TimelineItem,
  TimelineMarker,
  TimelineMeta,
  TimelineTitle,
};
