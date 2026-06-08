"use client";

import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  GitBranch,
  Layers,
  ShieldCheck,
  Sigma,
  Sparkles,
} from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Reasoning",
    body: "Frontier-level on GPQA, DROP, and BIG-Bench Hard — the evals that decide real work.",
    icon: Sparkles,
    color: "text-purple",
  },
  {
    title: "Coding",
    body: "89.3% HumanEval pass@1. Write, debug, and ship faster with errors caught early.",
    icon: Code2,
    color: "text-cyan",
  },
  {
    title: "Math",
    body: "91.2% MGSM, multilingual, every result reproducible on public datasets.",
    icon: Sigma,
    color: "text-mint",
  },
  {
    title: "Migration",
    body: "OpenAI-compatible endpoints — swap a base URL and keep your whole stack.",
    icon: GitBranch,
    color: "text-orange",
  },
  {
    title: "Routing",
    body: "A compound system that swaps in the strongest model for each task.",
    icon: Layers,
    color: "text-pink",
  },
  {
    title: "Controls",
    body: "SOC 2-grade access controls and audit logging, built into the platform.",
    icon: ShieldCheck,
    color: "text-brown",
  },
] as const;

type Capability = (typeof capabilities)[number];

function CapabilityCard({ capability: c }: { capability: Capability }) {
  return (
    <article
      className={cn(
        "flex min-h-[17.5rem] w-[17.5rem] shrink-0 snap-start flex-col justify-between border border-black/[0.06] bg-white p-7 sm:min-h-[18.5rem] sm:w-[18.5rem]",
        landing.cardMd,
        landing.shadowDrop,
      )}
    >
      <c.icon className={cn("size-8", c.color)} strokeWidth={1.75} />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-[-0.01em]">{c.title}</h3>
        <p className="text-sm leading-6 text-[#646464]">{c.body}</p>
      </div>
    </article>
  );
}

export function CapabilitiesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: -1 | 1) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className={cn(landing.page, "space-y-3 px-6 text-center")}>
        <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
          Put a frontier-class model to work, without the trade-offs
        </h2>
        <p className="text-base text-[#646464]">
          The same caliber of output the pioneer models give you — on the
          evaluations enterprises actually run.
        </p>
      </div>

      <div
        ref={carouselRef}
        className="mt-12 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:gap-5 sm:px-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {capabilities.map((c) => (
          <CapabilityCard key={c.title} capability={c} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollCarousel(-1)}
          className={cn(
            "flex size-9 items-center justify-center border border-black/[0.1] bg-white text-foreground transition-colors hover:bg-black/[0.03]",
            landing.capsule,
          )}
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollCarousel(1)}
          className={cn(
            "flex size-9 items-center justify-center border border-black/[0.1] bg-white text-foreground transition-colors hover:bg-black/[0.03]",
            landing.capsule,
          )}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
