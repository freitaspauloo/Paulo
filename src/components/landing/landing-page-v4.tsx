import { ArrowRight } from "lucide-react";

import {
  BenefitBlurbsSection,
  ClosingContactSection,
  DataProtectionMatrixSection,
  ENTERPRISE_MAIL,
  EnterpriseControlsGridSection,
  FirstWeekSection,
  PlatformTabsSection,
  SplitSection,
  TrustStripSection,
} from "@/components/landing/enterprise-v2-sections";
import {
  CompoundVisual,
  CostSplitVisual,
} from "@/components/landing/enterprise-v2-visuals";
import { HeroGradientLimeFrame } from "@/components/landing/hero-gradient-lime";
import { LandingFooterSocial } from "@/components/landing/landing-footer-social";
import { HeroWindow } from "@/components/landing/hero-window";
import {
  LandingGhostButton,
  LandingPrimaryButton,
  landing,
} from "@/components/landing/landing-primitives";
import {
  FamilyVisual,
  PowerfulVisual,
} from "@/components/landing/section-visuals";
import { cn } from "@/lib/utils";

export function LandingPageV4() {
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
              href={ENTERPRISE_MAIL}
              className="h-9 px-5 text-[0.8125rem]"
            >
              Start for free
            </LandingPrimaryButton>
          </div>
        </nav>
      </header>

      {/* Section 1 — Hero (lime + falling dots) */}
      <section className="bg-white pb-8 sm:pb-10">
        <HeroGradientLimeFrame
          className={cn(
            landing.heroMargin,
            landing.heroFrame,
            "px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14",
          )}
        >
          <div className="mx-auto max-w-[44rem] space-y-6 text-center">
            <h1 className="text-balance text-[clamp(2.5rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Frontier-class AI, at a fraction of the cost.
            </h1>
            <p className="mx-auto max-w-[36rem] text-pretty text-base leading-7 text-[#646464] sm:text-[1.0625rem]">
              Aligned matches the leading models on the work that matters, at 10 to
              50x lower cost, hosted in the US with safety built into the
              architecture. The capability is what you expect. The cost is the reason
              to move.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <LandingPrimaryButton href={ENTERPRISE_MAIL}>
                Model your cost <ArrowRight className="ml-1 size-4" />
              </LandingPrimaryButton>
              <LandingGhostButton href="mailto:enterprise@joinaligned.ai">
                Talk to our team
              </LandingGhostButton>
            </div>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[58rem] px-1 sm:mt-14">
            <HeroWindow />
          </div>
        </HeroGradientLimeFrame>
      </section>

      <div
        className={cn(
          landing.page,
          "space-y-20 px-6 py-16 sm:space-y-24 sm:py-20",
        )}
      >
        <TrustStripSection />
        <BenefitBlurbsSection />

        <SplitSection
          kicker="Capability"
          accent="text-cyan"
          title="As capable as the models you already use."
          body="Aligned performs at the level of ChatGPT, Claude, and Gemini on the work enterprises actually run: reasoning, coding, math, and instruction-following. Under the hood it composes across the best available models and routes each task to the strongest one, so as the field advances, Aligned advances with it instead of aging out. You are not trading capability for the savings."
          link={{
            label: "Read how the compound system works",
            href: "#",
          }}
          visual={<CompoundVisual />}
        />

        <SplitSection
          kicker="Cost"
          accent="text-purple"
          title="10 to 50x lower cost per chat."
          body="This is not a discount and it is not a smaller model. It is an architecture that spends compute only where it changes the answer, routing each request to the most efficient path that still meets the bar. Aligned runs from $0.006 per chat against $0.12 to $0.50 for the frontier APIs. Send us one month of your real volume and we will model the difference."
          cta={ENTERPRISE_MAIL}
          ctaLabel="Model your cost"
          reverse
          visual={<CostSplitVisual />}
        />

        <SplitSection
          kicker="Security"
          accent="text-mint"
          title="Safety is the architecture, not a filter on top of it."
          body="In most AI products, safety is a layer applied after the model is built. At Aligned it is part of the structure. Every prompt is classified before any model sees it, and every response is verified against your configuration before it is returned. Because the controls are built in rather than added on top, they cannot be disabled or bypassed."
          subCards={[
            {
              title: "Classify before inference.",
              body: "Every prompt is checked against your policy before any model is allowed to process it.",
            },
            {
              title: "Verify before delivery.",
              body: "Every response is checked against your configuration before it reaches a user, so nothing leaves unchecked.",
            },
          ]}
          bodyClose="This is what lets teams use Aligned for regulated, data-sensitive, and customer-facing work."
          visual={<FamilyVisual />}
        />

        <SplitSection
          kicker="Data residency and compliance"
          accent="text-mint"
          title="Your data stays in the United States, inside a boundary you can name."
          body="Inference runs inside a perimeter you can write into a contract and point to in an audit. Nothing is sent offshore, and nothing reaches a third-party model you did not approve, so you can say exactly where your data goes, which most providers cannot. The platform runs on SOC 2-compliant infrastructure with certification underway, and for strict residency needs, dedicated and private deployment are available. A complete data-flow diagram is available under NDA."
          reverse
          visual={<PowerfulVisual />}
        />

        <DataProtectionMatrixSection />
        <FirstWeekSection />
        <PlatformTabsSection />
        <EnterpriseControlsGridSection />
        <ClosingContactSection />
      </div>

      <footer className="bg-[#202020] px-6 py-14 text-white">
        <div className={cn(landing.page, "flex flex-col gap-10")}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              {["Enterprise", "Pricing", "FAQ"].map((link) => (
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
