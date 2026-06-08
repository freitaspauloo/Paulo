/* eslint-disable @next/next/no-img-element */
import { Check, MapPin } from "lucide-react";

import {
  FloatCard,
  LayeredScene,
  PhotoPlate,
} from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

export function PrivateVisual() {
  return (
    <LayeredScene tint="bg-purple-bg">
      <PhotoPlate src="/enterprise/photo-private.png" alt="" className="opacity-95" />
      <FloatCard className="right-2 top-6 w-[min(100%,16.5rem)] sm:right-8 sm:w-[18rem]">
        <p className="text-xs font-medium text-[#646464]">Monthly spend — 5M chats</p>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-semibold">$30k</span>
          <span className="mb-1 text-sm text-[#22a06b]">↓ from $600k</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
          <div className="h-full w-[6%] rounded-full bg-gradient-to-r from-progress to-cyan" />
        </div>
        <p className="mt-2 text-xs text-[#646464]">
          95% lower than frontier APIs at the same volume.
        </p>
      </FloatCard>
      <FloatCard className="bottom-6 left-2 w-[min(100%,11rem)] sm:left-8">
        <p className="text-xs text-[#646464]">Per chat</p>
        <p className="text-xl font-semibold">$0.006</p>
      </FloatCard>
    </LayeredScene>
  );
}

export function AnswersVisual() {
  return (
    <LayeredScene tint="bg-cyan-bg">
      <PhotoPlate src="/enterprise/photo-answers.png" alt="" />
      <FloatCard className="right-4 top-10 w-[min(100%,17rem)] sm:w-[18rem]">
        <p className="text-xs font-medium text-[#646464]">GPQA Diamond</p>
        {[
          ["Aligned", "58.2%", 58, true],
          ["GPT-4o", "53.6%", 54, false],
        ].map(([label, value, pct, lead]) => (
          <div key={label as string} className="mt-3 space-y-1">
            <div className="flex justify-between text-xs">
              <span className={lead ? "font-medium" : "text-[#646464]"}>{label}</span>
              <span className="tabular-nums">{value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
              <div
                className={cn(
                  "h-full rounded-full",
                  lead ? "bg-gradient-to-r from-progress to-cyan" : "bg-black/20",
                )}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </FloatCard>
      <FloatCard className="bottom-8 left-3 w-[min(100%,10rem)] sm:left-10">
        <p className="text-xs text-[#646464]">Arena Elo</p>
        <p className="text-xl font-semibold">1268</p>
      </FloatCard>
    </LayeredScene>
  );
}

export function PowerfulVisual() {
  return (
    <LayeredScene tint="bg-mint-bg">
      <PhotoPlate src="/enterprise/photo-powerful.png" alt="" />
      <FloatCard className="right-3 top-8 w-[min(100%,18rem)] sm:right-10 sm:w-[19rem]">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-mint" />
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
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 py-1 text-xs text-[#646464]">
            <Check className="mt-0.5 size-4 shrink-0 text-[#22a06b]" />
            <span>{item}</span>
          </div>
        ))}
      </FloatCard>
    </LayeredScene>
  );
}

export function FamilyVisual() {
  return (
    <LayeredScene tint="bg-[#e9f4ec]">
      <PhotoPlate src="/enterprise/photo-safe.png" alt="" />
      <FloatCard className="left-3 top-8 w-[min(100%,20rem)] font-mono text-xs sm:left-8">
        {[
          ["input", "classify · policy gate"],
          ["inference", "route → strongest model"],
          ["output", "verify · hallucination check"],
        ].map(([key, value], i) => (
          <div key={key} className="flex items-center gap-2 py-1.5">
            <span className="flex size-5 items-center justify-center rounded bg-mint-bg text-[10px] font-medium text-mint">
              {i + 1}
            </span>
            <span className="font-medium text-foreground">{key}</span>
            <span className="text-[#646464]">→ {value}</span>
          </div>
        ))}
      </FloatCard>
    </LayeredScene>
  );
}
