import { ArrowRight, DollarSign, Gauge, MapPin } from "lucide-react";

import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { ChartsSection } from "@/components/landing/charts-section";
import {
  BenchmarksSection,
  ControlsSection,
  PlansSection,
} from "@/components/landing/enterprise-sections";
import { LandingFooterSocial } from "@/components/landing/landing-footer-social";
import { HeroGradientCyanFrame } from "@/components/landing/hero-gradient-cyan";
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

const stats = [
  { value: "Top 3", label: "accuracy across 13 deployed models, and #1 on accuracy per dollar", icon: Gauge },
  { value: "20–80x", label: "lower cost per chat than frontier APIs, at comparable accuracy", icon: DollarSign },
  { value: "100% US", label: "hosted inference, inside a boundary you can name in a contract", icon: MapPin },
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
  return (
    <main className="w-full bg-white text-foreground">
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55">
        <nav
          className={cn(
            landing.heroMargin,
            "flex h-[4.25rem] items-center justify-between",
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
      </header>

      {/* Hero — gradient frame below nav */}
      <section className="bg-white pb-8 sm:pb-10">
        <HeroGradientCyanFrame
          className={cn(
            landing.heroMargin,
            landing.heroFrame,
            "px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14",
          )}
        >
          <div className="mx-auto max-w-[44rem] space-y-6 text-center">
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

          <div className="mx-auto mt-12 w-full max-w-[58rem] px-1 sm:mt-14">
            <HeroWindow />
            <div
              className={cn(
                "mt-4 flex flex-col divide-y divide-black/[0.06] border border-black/[0.06] bg-white sm:mt-5 sm:flex-row sm:divide-x sm:divide-y-0",
                landing.cardSm,
                landing.shadowDrop,
              )}
            >
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex flex-1 flex-col gap-2.5 px-5 py-4 sm:gap-3 sm:px-6 sm:py-5"
                >
                  <s.icon
                    className="size-4 shrink-0 text-[#646464]"
                    strokeWidth={1.75}
                  />
                  <div className="min-w-0 space-y-1">
                    <div className="text-base font-semibold tracking-tight sm:text-lg">
                      {s.value}
                    </div>
                    <p className="text-xs leading-5 text-[#646464]">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </HeroGradientCyanFrame>
      </section>

      <CapabilitiesSection />

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

      <ChartsSection />

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
            <LandingFooterSocial />
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
