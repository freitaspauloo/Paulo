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
} from "@/components/landing/enterprise-v2-sections";
import {
  CompoundVisual,
  CostSplitVisual,
} from "@/components/landing/enterprise-v2-visuals";
import { AlignedNavBrand } from "@/components/landing/aligned-nav-brand";
import { HeroGradientLimeFrame } from "@/components/landing/hero-gradient-lime";
import { LandingFooter } from "@/components/landing/landing-footer";
import { HeroCommitmentsStrip } from "@/components/landing/hero-commitments-strip";
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

const sectionTagAccent = "text-[#646464]";

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
          <AlignedNavBrand />
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
      <section className="bg-white pb-12 sm:pb-[3.75rem]">
        <HeroGradientLimeFrame
          faintWhiteDots
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
            <HeroCommitmentsStrip className="mt-8 sm:mt-9" />
          </div>
        </HeroGradientLimeFrame>
      </section>

      <div
        className={cn(
          landing.page,
          "space-y-[7.5rem] px-6 py-[6rem] sm:space-y-[9rem] sm:py-[7.5rem]",
        )}
      >
        <BenefitBlurbsSection />

        <SplitSection
          kicker="Capability"
          accent={sectionTagAccent}
          title="As capable as the models you already use."
          body="Aligned performs at the level of ChatGPT, Claude, and Gemini on the work enterprises actually run: reasoning, coding, math, and instruction-following. Under the hood it composes across the best available models and routes each task to the strongest one, so as the field advances, Aligned advances with it instead of aging out. You are not trading capability for the savings."
          link={{
            label: "Read how the compound system works",
            href: "#",
          }}
          visual={<CompoundVisual frame="lime" />}
        />

        <SplitSection
          kicker="Cost"
          accent={sectionTagAccent}
          title="10 to 50x lower cost per chat."
          body="This is not a discount and it is not a smaller model. It is an architecture that spends compute only where it changes the answer, routing each request to the most efficient path that still meets the bar. Aligned runs from $0.006 per chat against $0.12 to $0.50 for the frontier APIs. Send us one month of your real volume and we will model the difference."
          cta={ENTERPRISE_MAIL}
          ctaLabel="Model your cost"
          reverse
          visual={<CostSplitVisual frame="lime" />}
        />

        <SplitSection
          kicker="Security"
          accent={sectionTagAccent}
          title="Safety is the architecture, not a filter on top of it."
          body="In most AI products, safety is a layer applied after the model is built. At Aligned it is part of the structure—built in, not bolted on, so controls cannot be disabled or bypassed."
          subCardsVariant="inline"
          subCards={[
            {
              title: "Classify before inference.",
              body: "Every prompt is checked against your policy before any model processes it.",
            },
            {
              title: "Verify before delivery.",
              body: "Every response is verified against your configuration before it reaches a user.",
            },
          ]}
          bodyClose="Built for regulated, data-sensitive, and customer-facing work."
          visual={<FamilyVisual frame="lime" />}
        />

        <SplitSection
          kicker="Data residency and compliance"
          accent={sectionTagAccent}
          title="Your data stays in the United States, inside a boundary you can name."
          body="Inference runs inside a perimeter you can contract and audit. Nothing goes offshore or to unapproved third-party models, so you can name exactly where your data goes—unlike most providers. SOC 2-compliant infrastructure with certification underway; dedicated and private deployment for strict residency. Data-flow diagram available under NDA."
          reverse
          visual={<PowerfulVisual frame="lime" />}
        />

        <DataProtectionMatrixSection />
        <FirstWeekSection />
        <PlatformTabsSection />
        <EnterpriseControlsGridSection />
        <ClosingContactSection />
      </div>

      <LandingFooter />
    </main>
  );
}
