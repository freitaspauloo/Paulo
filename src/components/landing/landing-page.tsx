"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Code2,
  DollarSign,
  Gauge,
  GitBranch,
  Layers,
  MapPin,
  ShieldCheck,
  Sigma,
  Sparkles,
} from "lucide-react";

import {
  BenchmarksSection,
  ControlsSection,
  PlansSection,
} from "@/components/landing/enterprise-sections";
import { HeroWindow } from "@/components/landing/hero-window";
import {
  LandingEyebrow,
  LandingGhostButton,
  LandingPrimaryButton,
  landing,
} from "@/components/landing/landing-primitives";
import {
  AnswersVisual,
  FamilyVisual,
  PowerfulVisual,
  PrivateVisual,
} from "@/components/landing/section-visuals";
import { cn } from "@/lib/utils";

const capabilities = [
  { title: "Reasoning", body: "Frontier-level on GPQA, DROP, and BIG-Bench Hard — the evals that decide real work.", icon: Sparkles, color: "text-purple" },
  { title: "Coding", body: "89.3% HumanEval pass@1. Write, debug, and ship faster with errors caught early.", icon: Code2, color: "text-cyan" },
  { title: "Math", body: "91.2% MGSM, multilingual, every result reproducible on public datasets.", icon: Sigma, color: "text-mint" },
  { title: "Migration", body: "OpenAI-compatible endpoints — swap a base URL and keep your whole stack.", icon: GitBranch, color: "text-orange" },
  { title: "Routing", body: "A compound system that swaps in the strongest model for each task.", icon: Layers, color: "text-pink" },
  { title: "Controls", body: "SOC 2-grade access controls and audit logging, built into the platform.", icon: ShieldCheck, color: "text-brown" },
];

const stats = [
  { value: "Top 3", label: "accuracy across 13 deployed models, and #1 on accuracy per dollar", icon: Gauge },
  { value: "20–80x", label: "lower cost per chat than frontier APIs, at comparable accuracy", icon: DollarSign },
  { value: "100% US", label: "hosted inference, inside a boundary you can name in a contract", icon: MapPin },
];

const charts = [
  {
    title: "Cost per chat",
    caption: "Lower is better",
    bars: [
      { label: "Aligned", value: "$0.006", pct: 6, lead: true },
      { label: "Top 3", value: "$0.12", pct: 40, lead: false },
      { label: "Other", value: "$0.50", pct: 100, lead: false },
    ],
  },
  {
    title: "General accuracy",
    caption: "Higher is better",
    bars: [
      { label: "Aligned", value: "88.4%", pct: 96, lead: true },
      { label: "Top 3", value: "85.5%", pct: 90, lead: false },
      { label: "Other", value: "83.0%", pct: 84, lead: false },
    ],
  },
  {
    title: "Accuracy per $",
    caption: "Higher is better",
    bars: [
      { label: "Aligned", value: "#1", pct: 100, lead: true },
      { label: "Top 3", value: "0.4×", pct: 40, lead: false },
      { label: "Other", value: "0.1×", pct: 12, lead: false },
    ],
  },
];

const social = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn", path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" },
  { label: "GitHub", path: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" },
  { label: "Instagram", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.84a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm5.11-6.76a.93.93 0 1 1-1.87 0 .93.93 0 0 1 1.87 0z" },
];

function StorySection({
  eyebrow,
  accent,
  title,
  body,
  cta = "Talk to our team",
  reverse,
  visual,
}: {
  eyebrow: string;
  accent: string;
  title: string;
  body: string;
  cta?: string;
  reverse?: boolean;
  visual: React.ReactNode;
}) {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div className={cn("space-y-5 md:max-w-md", reverse && "md:order-2")}>
        <LandingEyebrow accent={accent}>{eyebrow}</LandingEyebrow>
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="text-base leading-7 text-[#646464]">{body}</p>
        <LandingPrimaryButton href="mailto:enterprise@joinaligned.ai">
          {cta}
        </LandingPrimaryButton>
      </div>
      <div className={cn(reverse && "md:order-1")}>{visual}</div>
    </section>
  );
}

export function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: -1 | 1) => {
    carouselRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <main className="w-full overflow-x-hidden bg-white text-foreground">
      {/* Hero — nav on white; gradient frame below (no border) */}
      <section className="bg-white pb-8 pt-3 sm:pb-10 sm:pt-4">
        <nav
          className={cn(
            landing.heroMargin,
            "mb-3 flex h-[4.25rem] items-center justify-between sm:mb-4",
          )}
        >
          <span className="flex items-center gap-2.5 text-[0.95rem] font-semibold">
            <span className="flex size-7 items-center justify-center rounded-[8px] bg-[#202020] text-[0.7rem] font-bold text-white">
              λ
            </span>
            Aligned AI
          </span>
          <div className="flex items-center gap-1">
            <LandingGhostButton>Log in</LandingGhostButton>
            <LandingPrimaryButton
              href="mailto:enterprise@joinaligned.ai"
              className="h-9 px-5 text-[0.8125rem]"
            >
              Start for free
            </LandingPrimaryButton>
          </div>
        </nav>

        <div
          className={cn(
            landing.heroMargin,
            landing.heroFrame,
            "overflow-hidden bg-[linear-gradient(180deg,#bfeaf6_0%,#d4f0f8_28%,#e8f7fc_55%,#f6fbfe_100%)] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14",
          )}
        >
          <div className="mx-auto max-w-[44rem] space-y-6 text-center">
            <span
              className={cn(
                "mx-auto inline-flex items-center gap-1.5 bg-white px-3 py-1 text-xs font-medium text-[#646464] ring-1 ring-black/[0.08]",
                landing.capsule,
              )}
            >
              <Building2 className="size-3.5" />
              Aligned for Enterprise
            </span>
            <h1 className="text-balance text-[clamp(2.5rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Frontier-class AI, hosted in the US, at a fraction of the cost.
            </h1>
            <p className="mx-auto max-w-[36rem] text-pretty text-base leading-7 text-[#646464] sm:text-[1.0625rem]">
              Aligned matches the pioneer models on the benchmarks that decide real
              work — and adds what they will not: US-hosted inference, 10–50x lower
              costs, and safety built into the architecture.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <LandingPrimaryButton href="mailto:enterprise@joinaligned.ai">
                Talk to our team <ArrowRight className="ml-1 size-4" />
              </LandingPrimaryButton>
              <LandingGhostButton>Start for free</LandingGhostButton>
            </div>
          </div>

          <div className="mt-12 px-1 sm:mt-14">
            <HeroWindow />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={cn(landing.page, "px-6 pt-16 sm:pt-20")}>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className={cn(
                "space-y-3 border border-black/[0.06] bg-white p-6",
                landing.cardMd,
                landing.shadowCard,
              )}
            >
              <s.icon className="size-5 text-[#646464]" strokeWidth={1.75} />
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <p className="text-sm leading-6 text-[#646464]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[40rem] space-y-3 px-6 text-center">
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
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:gap-5 sm:px-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        >
          {capabilities.map((c) => (
            <article
              key={c.title}
              className={cn(
                "flex min-h-[19rem] w-[18.5rem] shrink-0 snap-start flex-col justify-between border border-black/[0.06] bg-white p-7",
                landing.cardMd,
                landing.shadowCard,
              )}
            >
              <c.icon className={cn("size-8", c.color)} strokeWidth={1.75} />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-[-0.01em]">{c.title}</h3>
                <p className="text-sm leading-6 text-[#646464]">{c.body}</p>
              </div>
            </article>
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

      {/* Story sections with layered visuals */}
      <div className={cn(landing.page, "space-y-20 px-6 pb-8 sm:space-y-24")}>
        <StorySection
          eyebrow="Do more"
          accent="text-purple"
          title="Do more, for less."
          body="Run the workloads you have been rationing because of cost. At $0.006 per chat against $0.12–$0.50 for frontier APIs, the budget that bought one workload now buys ten."
          visual={<PrivateVisual />}
        />
        <StorySection
          eyebrow="Accuracy"
          accent="text-cyan"
          title="Capability without the trade-offs."
          body="Aligned performs at the level of the pioneer models on reasoning, coding, math, and instruction-following — all reproducible on public Hugging Face datasets and independent leaderboards."
          reverse
          visual={<AnswersVisual />}
        />
      </div>

      {/* Charts */}
      <section className="my-20 bg-[#eef2fe] py-20 sm:my-28 sm:py-24">
        <div className={cn(landing.page, "px-6")}>
          <div className="mx-auto max-w-[40rem] space-y-3 text-center">
            <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
              Just as good, a fraction of the cost.
            </h2>
            <p className="text-base text-[#646464]">
              Top-3 accuracy across 13 deployed models, and #1 on accuracy per
              dollar — with the benchmark named and the source public.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {charts.map((chart) => (
              <div
                key={chart.title}
                className={cn(
                  "border border-black/[0.06] bg-white p-6 sm:p-7",
                  landing.cardMd,
                  landing.shadowCard,
                )}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold">{chart.title}</h3>
                  <span className="text-xs text-[#646464]">{chart.caption}</span>
                </div>
                <div className="mt-8 flex h-48 items-end justify-around gap-3">
                  {chart.bars.map((b) => (
                    <div
                      key={b.label}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >
                      <span
                        className={cn(
                          "text-xs tabular-nums",
                          b.lead ? "font-semibold" : "text-[#646464]",
                        )}
                      >
                        {b.value}
                      </span>
                      <div
                        className={cn(
                          "w-full max-w-[3.5rem] rounded-t-[8px]",
                          b.lead
                            ? "bg-gradient-to-t from-progress to-cyan"
                            : "bg-black/[0.08]",
                        )}
                        style={{ height: `${Math.max(b.pct, 6)}%` }}
                      />
                      <span className="text-center text-[0.7rem] text-[#646464]">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-progress" /> Aligned AI
            </span>
            <span className="inline-flex items-center gap-2 text-[#646464]">
              <span className="size-2 rounded-full bg-black/30" /> Top 3 frontier
            </span>
            <span className="inline-flex items-center gap-2 text-[#646464]">
              <span className="size-2 rounded-full bg-black/15" /> Other frontier
            </span>
          </div>
          <div className="mt-3 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              View Benchmarks <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <div className={cn(landing.page, "space-y-20 px-6 pb-24 sm:space-y-24 sm:pb-28")}>
        <StorySection
          eyebrow="Residency"
          accent="text-mint"
          title="Your data stays in the United States."
          body="Inference runs on US infrastructure with encrypted data in transit and at rest. Dedicated capacity and private deployment are available, with data-flow diagrams under NDA."
          visual={<PowerfulVisual />}
        />
        <StorySection
          eyebrow="Safety"
          accent="text-mint"
          title="Safety is the architecture, not a filter on top."
          body="Classification and verification wrap every call before and after inference. Independent red-team coverage and hallucination reduction are built into the stack — not promised around it."
          reverse
          visual={<FamilyVisual />}
        />
      </div>

      <div className={cn(landing.page, "space-y-20 px-6 py-20 sm:space-y-24 sm:py-24")}>
        <BenchmarksSection />
        <ControlsSection />
        <PlansSection />
      </div>

      <footer className="bg-[#202020] px-6 py-14 text-white">
        <div className={cn(landing.page, "flex flex-col gap-10")}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              {["Enterprise", "Benchmarks", "Pricing", "FAQ"].map((link) => (
                <a key={link} href="#" className="text-white/70 hover:text-white">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-white/70">
              {social.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="hover:text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2026 Aligned AI Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
