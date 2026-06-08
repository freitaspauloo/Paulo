"use client";

import { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const photos = {
  cost: "/landing/photo-cost.jpg",
  accuracy: "/landing/photo-accuracy.jpg",
  residency: "/landing/photo-residency.jpg",
  safety: "/landing/photo-safety.jpg",
} as const;

function PhotoScene({
  image,
  alt,
  tint,
  overlayClassName = "from-black/30 via-black/5 to-transparent",
  children,
}: {
  image: string;
  alt: string;
  tint: string;
  overlayClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[24px] p-4 sm:p-6", tint)}>
      <div className="relative mx-auto min-h-[22rem] w-full sm:min-h-[26rem]">
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            landing.cardLg,
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={alt}
            className="size-full object-cover motion-safe:scale-100 motion-safe:transition-transform motion-safe:duration-[2s] motion-safe:ease-out hover:motion-safe:scale-[1.02]"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t",
              overlayClassName,
            )}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

function OverlayCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        "absolute z-20 gap-0 border border-black/[0.06] bg-white py-0 ring-0",
        landing.shadowFloat,
        "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-700",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  );
}

function AnimatedBar({
  target,
  delay = 0,
  lead = false,
}: {
  target: number;
  delay?: number;
  lead?: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setWidth(target), delay + 120);
    return () => window.clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-1000 ease-out",
          lead ? "bg-[#202020]" : "bg-black/20",
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export function PrivateVisual() {
  const [spend, setSpend] = useState(600);

  useEffect(() => {
    const timer = window.setTimeout(() => setSpend(30), 400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PhotoScene
      image={photos.cost}
      alt="Enterprise team collaborating at computers"
      tint="bg-[#eef1f4]"
      overlayClassName="from-black/40 via-black/15 to-transparent"
    >
      <OverlayCard
        className="right-2 top-6 w-[min(100%,16.5rem)] sm:right-8 sm:w-[18rem]"
        delay={100}
      >
        <p className="text-xs font-medium text-[#646464]">Monthly spend — 5M chats</p>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-semibold tabular-nums motion-safe:transition-all motion-safe:duration-700">
            ${spend}k
          </span>
          <span className="mb-1 text-sm text-[#22a06b]">↓ from $600k</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
          <div
            className="h-full rounded-full bg-[#202020] transition-[width] duration-[1.4s] ease-out"
            style={{ width: spend === 30 ? "6%" : "100%" }}
          />
        </div>
        <p className="mt-2 text-xs text-[#646464]">
          95% lower than frontier APIs at the same volume.
        </p>
      </OverlayCard>
      <OverlayCard
        className="bottom-6 left-2 w-[min(100%,11rem)] sm:left-8"
        delay={280}
      >
        <p className="text-xs text-[#646464]">Per chat</p>
        <p className="text-xl font-semibold tabular-nums">$0.006</p>
      </OverlayCard>
    </PhotoScene>
  );
}

export function AnswersVisual() {
  return (
    <PhotoScene
      image={photos.accuracy}
      alt="Analytics dashboard showing model benchmarks"
      tint="bg-cyan-bg"
    >
      <OverlayCard
        className="right-4 top-10 w-[min(100%,17rem)] sm:w-[18rem]"
        delay={120}
      >
        <p className="text-xs font-medium text-[#646464]">GPQA Diamond</p>
        {[
          ["Aligned", "58.2%", 58, true, 0],
          ["GPT-4o", "53.6%", 54, false, 180],
        ].map(([label, value, pct, lead, barDelay]) => (
          <div key={label as string} className="mt-3 space-y-1">
            <div className="flex justify-between text-xs">
              <span className={lead ? "font-medium" : "text-[#646464]"}>{label}</span>
              <span className="tabular-nums">{value}</span>
            </div>
            <AnimatedBar
              target={pct as number}
              delay={barDelay as number}
              lead={lead as boolean}
            />
          </div>
        ))}
      </OverlayCard>
      <OverlayCard
        className="bottom-8 left-3 w-[min(100%,10rem)] sm:left-10"
        delay={320}
      >
        <p className="text-xs text-[#646464]">Arena Elo</p>
        <p className="text-xl font-semibold tabular-nums">1268</p>
      </OverlayCard>
    </PhotoScene>
  );
}

export function PowerfulVisual() {
  return (
    <PhotoScene
      image={photos.residency}
      alt="US data center infrastructure"
      tint="bg-mint-bg"
    >
      <OverlayCard
        className="right-3 top-8 w-[min(100%,18rem)] sm:right-10 sm:w-[19rem]"
        delay={100}
      >
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-mint motion-safe:animate-pulse" />
          <span className="font-medium">US boundary</span>
          <span className="ml-auto rounded-full bg-mint-bg px-2 py-0.5 text-[10px] font-medium text-mint">
            SOC 2
          </span>
        </div>
        <div className="my-3 border-t border-black/[0.06]" />
        {[
          "Encrypted in transit & at rest",
          "No training on your data by default",
          "Full audit logging with export",
        ].map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-2 py-1 text-xs text-[#646464]",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-2 motion-safe:fill-mode-both motion-safe:duration-500",
            )}
            style={{ animationDelay: `${240 + i * 120}ms` }}
          >
            <Check className="mt-0.5 size-4 shrink-0 text-[#22a06b]" />
            <span>{item}</span>
          </div>
        ))}
      </OverlayCard>
    </PhotoScene>
  );
}

export function FamilyVisual() {
  return (
    <PhotoScene
      image={photos.safety}
      alt="Security and safety architecture review"
      tint="bg-[#e9f4ec]"
    >
      <OverlayCard
        className="left-3 top-8 w-[min(100%,20rem)] font-mono text-xs sm:left-8"
        delay={140}
      >
        {[
          ["input", "classify · policy gate"],
          ["inference", "route → strongest model"],
          ["output", "verify · hallucination check"],
        ].map(([key, value], i) => (
          <div
            key={key}
            className={cn(
              "flex items-center gap-2 py-1.5",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-500",
            )}
            style={{ animationDelay: `${200 + i * 150}ms` }}
          >
            <span className="flex size-5 items-center justify-center rounded bg-mint-bg text-[10px] font-medium text-mint">
              {i + 1}
            </span>
            <span className="font-medium text-foreground">{key}</span>
            <span className="text-[#646464]">→ {value}</span>
          </div>
        ))}
      </OverlayCard>
    </PhotoScene>
  );
}
