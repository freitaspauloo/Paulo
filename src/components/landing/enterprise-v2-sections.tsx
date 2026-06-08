"use client";

import {
  ArrowDown,
  Check,
  Link2,
  MapPin,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import {
  LandingEyebrow,
  LandingGhostButton,
  LandingPrimaryButton,
  landing,
} from "@/components/landing/landing-primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ENTERPRISE_MAIL = "mailto:enterprise@joinaligned.ai?subject=Model%20your%20cost";

export function SplitSection({
  kicker,
  accent,
  title,
  body,
  bodyClose,
  link,
  cta,
  ctaLabel = "Talk to our team",
  subCards,
  reverse,
  visual,
}: {
  kicker: string;
  accent: string;
  title: string;
  body: string;
  bodyClose?: string;
  link?: { label: string; href: string };
  cta?: string;
  ctaLabel?: string;
  subCards?: { title: string; body: string }[];
  reverse?: boolean;
  visual: React.ReactNode;
}) {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div className={cn("space-y-5 md:max-w-md", reverse && "md:order-2")}>
        <LandingEyebrow accent={accent}>{kicker}</LandingEyebrow>
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="text-base leading-7 text-[#646464]">{body}</p>
        {subCards ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {subCards.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "space-y-1.5 border border-black/[0.06] bg-white p-4",
                  landing.cardSm,
                )}
              >
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-sm leading-6 text-[#646464]">{card.body}</p>
              </div>
            ))}
          </div>
        ) : null}
        {bodyClose ? (
          <p className="text-base leading-7 text-[#646464]">{bodyClose}</p>
        ) : null}
        {link ? (
          <a
            href={link.href}
            className="inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ) : null}
        {cta ? (
          <LandingPrimaryButton href={cta}>{ctaLabel}</LandingPrimaryButton>
        ) : null}
      </div>
      <div className={cn(reverse && "md:order-1")}>{visual}</div>
    </section>
  );
}

export function TrustStripSection() {
  const items = [
    { icon: Sparkles, label: "Frontier-class capability" },
    { icon: MapPin, label: "US-hosted inference" },
    { icon: Shield, label: "Your data is never used for training" },
  ];

  return (
    <section className="space-y-8 text-center">
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
        Built on three commitments.
      </h2>
      <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <item.icon className="size-5 text-[#646464]" strokeWidth={1.75} />
            <p className="max-w-[14rem] text-sm font-medium leading-6">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BenefitBlurbsSection() {
  const blurbs = [
    {
      icon: ArrowDown,
      title: "More work within the same budget.",
      body: "At a fraction of frontier pricing, the same budget covers far more usage, so you can run workloads that were too expensive to justify before.",
      emphasis: true,
    },
    {
      icon: Link2,
      title: "One model, no lock-in.",
      body: "Every team works through one set of OpenAI-compatible endpoints, so you are not tied to a single lab's pricing, release schedule, or deprecations.",
    },
    {
      icon: ShieldCheck,
      title: "Built for regulated work.",
      body: "The safety and data controls are part of the platform, not added afterward, so AI can go into workflows that compliance would otherwise rule out.",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-3 sm:gap-6">
      {blurbs.map((blurb) => (
        <article
          key={blurb.title}
          className={cn(
            "flex flex-col gap-3 border border-black/[0.06] bg-white p-6",
            landing.cardMd,
            landing.shadowCard,
            blurb.emphasis && "ring-1 ring-black/[0.04]",
          )}
        >
          <blurb.icon className="size-5 text-[#646464]" strokeWidth={1.75} />
          <h3 className="text-base font-semibold leading-snug">{blurb.title}</h3>
          <p className="text-sm leading-6 text-[#646464]">{blurb.body}</p>
        </article>
      ))}
    </section>
  );
}

const matrixGroups = [
  {
    title: "Privacy",
    items: [
      {
        label: "Never trained on",
        body: "Your conversations never train our models unless you explicitly opt in, on any tier.",
      },
      {
        label: "Never sold or shared",
        body: "Your prompts and outputs are never sold, rented, or handed to a third party.",
      },
      {
        label: "No ads, ever",
        body: "We earn from subscriptions, not your attention, with no ad model on any plan.",
      },
    ],
  },
  {
    title: "Encryption",
    items: [
      {
        label: "Encrypted in transit",
        body: "Every request and response is encrypted on the wire, by default, with no exceptions.",
      },
      {
        label: "Encrypted at rest",
        body: "Stored data is encrypted, with keys we can scope to your own environment.",
      },
      {
        label: "US-hosted",
        body: "Inference runs on US infrastructure, inside a boundary you can name in a contract.",
      },
    ],
  },
  {
    title: "Control",
    items: [
      {
        label: "No third-party leakage",
        body: "Requests never reach an outside model that you have not explicitly approved.",
      },
      {
        label: "You control retention",
        body: "Set how long your data is kept, and delete any of it on demand.",
      },
      {
        label: "Audited access",
        body: "Every access to your data is logged, queryable, and exportable for your own review.",
      },
    ],
  },
] as const;

export function DataProtectionMatrixSection() {
  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-[40rem] space-y-3 text-center">
        <LandingEyebrow accent="text-[#646464]">Data protection</LandingEyebrow>
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          Only you can see your data.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          Every layer below exists to keep that true.
        </p>
      </div>

      <div
        className={cn(
          "overflow-hidden border border-black/[0.06] bg-white",
          landing.cardMd,
          landing.shadowCard,
        )}
      >
        <div className="grid divide-y divide-black/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0">
          {matrixGroups.map((group) => (
            <div key={group.title} className="space-y-5 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#646464]">
                {group.title}
              </p>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.label} className="space-y-1.5">
                    <p className="text-sm font-semibold leading-snug">{item.label}</p>
                    <p className="text-sm leading-6 text-[#646464]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const weekStages = [
  {
    title: "Evaluate",
    items: [
      "Get a capability comparison against what you run today, plus a cost model built on your real volume",
    ],
  },
  {
    title: "Integrate",
    items: [
      "Point your existing OpenAI-compatible integration at Aligned with a base-URL and key change, no application rewrite",
      "Issue per-environment API keys with self-serve revocation",
    ],
  },
  {
    title: "Deploy with confidence",
    items: [
      "Configure SSO, role-based access, and audit logging in the admin console [PLANNED: confirm SSO/RBAC availability]",
      "Move a first production workload over and review the side-by-side cost report",
    ],
  },
] as const;

export function FirstWeekSection() {
  return (
    <section className="space-y-10">
      <h2 className="mx-auto max-w-[40rem] text-center text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
        Here is what you can stand up with Aligned in your first week.
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {weekStages.map((stage, i) => (
          <article
            key={stage.title}
            className={cn(
              "space-y-4 border border-black/[0.06] bg-white p-6",
              landing.cardMd,
              landing.shadowCard,
            )}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#202020] text-xs font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="font-semibold">{stage.title}</h3>
            </div>
            <ul className="space-y-3">
              {stage.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#646464]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#22a06b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

const platformTabs = {
  Engineering: {
    tasks: [
      "Convert product requirements into technical specifications",
      "Design system architecture and component interactions",
      "Diagnose runtime errors and failing tests",
      "Identify code optimizations and performance gains",
    ],
    prompt:
      "Convert these product requirements into a technical spec with acceptance criteria.",
    output:
      "Drafted a three-layer architecture, API contracts, and a test plan mapped to each requirement.",
  },
  Marketing: {
    tasks: [
      "Interpret market trends and customer behavior",
      "Draft multi-channel campaigns from one brief",
      "Develop messaging frameworks and positioning",
      "Build post-campaign performance reports",
    ],
    prompt: "Draft a multi-channel campaign from this single product brief.",
    output:
      "Generated email, paid social, and landing copy variants aligned to one positioning line.",
  },
  Sales: {
    tasks: [
      "Analyze call transcripts into account plans",
      "Develop objection-handling strategies by persona",
      "Draft customized pitches and follow-ups",
      "Interpret pipeline metrics and forecast accuracy",
    ],
    prompt:
      "Analyze this call transcript and draft a follow-up for the economic buyer.",
    output:
      "Summarized objections, mapped stakeholders, and proposed next steps with tailored talk tracks.",
  },
  Finance: {
    tasks: [
      "Build forecasts and multi-scenario financial models",
      "Run variance analysis against budget",
      "Draft board and investor reporting packages",
      "Review contracts and spend for exposure",
    ],
    prompt: "Build a variance analysis against Q2 budget with two downside scenarios.",
    output:
      "Produced driver-level variance, scenario tables, and board-ready commentary.",
  },
  Operations: {
    tasks: [
      "Document processes and standard operating procedures",
      "Triage and route inbound support tickets",
      "Build and maintain internal knowledge bases",
      "Analyze vendor terms and renewal options",
    ],
    prompt: "Document this support triage process as an SOP with escalation paths.",
    output:
      "Structured intake, routing rules, SLAs, and knowledge-base links in a publishable SOP.",
  },
  Legal: {
    tasks: [
      "Summarize complex contracts and agreements",
      "Draft clause templates and standard terms",
      "Track regulatory changes across jurisdictions",
      "Automate routine review and intake workflows",
    ],
    prompt: "Summarize this MSA and flag non-standard clauses against our playbook.",
    output:
      "Highlighted liability, data-use, and termination deviations with suggested fallback language.",
  },
  "Human Resources": {
    tasks: [
      "Draft job descriptions and role postings",
      "Build onboarding and training documentation",
      "Create structured employee development plans",
      "Interpret engagement and retention survey results",
    ],
    prompt:
      "Draft a role posting and onboarding checklist for this new team lead opening.",
    output:
      "Created a competency-based job description and a 30/60/90 onboarding plan.",
  },
} as const;

type TabKey = keyof typeof platformTabs;

export function PlatformTabsSection() {
  const keys = Object.keys(platformTabs) as TabKey[];
  const [active, setActive] = useState<TabKey>("Engineering");
  const panel = platformTabs[active];

  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-[40rem] space-y-3 text-center">
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          One platform, every team.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          Aligned adapts to each team&apos;s work through one set of endpoints. Pick a
          function to see what it does.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {keys.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "bg-[#202020] text-white"
                : "bg-black/[0.04] text-[#646464] hover:bg-black/[0.06]",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "mx-auto max-w-[42rem] space-y-5 border border-black/[0.06] bg-white p-6 sm:p-8",
          landing.cardMd,
          landing.shadowCard,
        )}
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {panel.tasks.map((task) => (
            <li
              key={task}
              className="flex gap-2 text-sm leading-6 text-[#646464]"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-[#22a06b]" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-black/[0.06] pt-4" />
        <p className="text-xs font-medium uppercase tracking-wide text-[#646464]">
          Example prompt
        </p>
        <p className="text-sm leading-6">{panel.prompt}</p>
        <div className="border-t border-black/[0.06] pt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#646464]">
            Output
          </p>
          <p className="text-sm leading-6 text-[#646464]">{panel.output}</p>
        </div>
      </div>

      <p className="mx-auto max-w-[36rem] text-center text-sm leading-6 text-[#646464]">
        Regulated functions like Finance, Legal, and HR can adopt Aligned at all
        because of the data policy above.
      </p>
    </section>
  );
}

const controlTiles = [
  ["Single sign-on (SSO)", "[PLANNED: confirm availability]"],
  ["Role-based access", "fine-grained permissioning [PLANNED: confirm]"],
  ["Per-environment API keys", "self-serve issuance and revocation"],
  ["Audit logging", "[PLACEHOLDER: scope, retention, export]"],
  ["Usage and spend analytics", "billed in messages"],
  ["Dedicated and private deployment", "for strict residency and scale needs"],
  ["SCIM provisioning", "automated user lifecycle management [PLANNED: confirm]"],
  [
    "SOC 2",
    "running on SOC 2-compliant infrastructure, certification in process",
  ],
] as const;

export function EnterpriseControlsGridSection() {
  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-[40rem] space-y-3 text-center">
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          Built for enterprise control.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          The data guarantees are in the matrix above. These are the operational
          controls your admins manage.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {controlTiles.map(([title, body]) => (
          <article
            key={title}
            className={cn(
              "flex flex-col gap-2 border border-black/[0.06] bg-white p-5",
              landing.cardMd,
              landing.shadowCard,
            )}
          >
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-sm leading-6 text-[#646464]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClosingContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14"
    >
      <div className="space-y-5 md:max-w-md">
        <LandingEyebrow accent="text-[#646464]">Early access</LandingEyebrow>
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          Let&apos;s find out together.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          We are opening Aligned to a small group of enterprises in private preview.
          Tell us what you run today, and we will model your cost and run a capability
          comparison on your own data, so we can both see whether this is a fit.
        </p>
        <p className="text-sm leading-6 text-[#646464]">
          Same caliber of output, a fraction of the cost, hosted in the US.
        </p>
      </div>

      <form
        className={cn(
          "space-y-4 border border-black/[0.06] bg-white p-6 sm:p-8",
          landing.cardMd,
          landing.shadowCard,
        )}
        action={ENTERPRISE_MAIL}
        method="get"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="first-name" className="text-xs text-[#646464]">
              First name
            </label>
            <Input id="first-name" name="first_name" className="bg-white" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="last-name" className="text-xs text-[#646464]">
              Last name
            </label>
            <Input id="last-name" name="last_name" className="bg-white" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs text-[#646464]">
            Company email
          </label>
          <Input id="email" name="email" type="email" className="bg-white" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-xs text-[#646464]">
            Company
          </label>
          <Input id="company" name="company" className="bg-white" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs text-[#646464]">
            What do you run today, and what would you want to move?
          </label>
          <Textarea id="message" name="body" rows={4} className="bg-white" />
        </div>
        <LandingPrimaryButton type="submit" className="w-full sm:w-auto">
          Start the conversation
        </LandingPrimaryButton>
        <p className="text-xs leading-5 text-[#646464]">
          By submitting this form you agree to our privacy policy and consent to
          receive communications from Aligned AI. You can unsubscribe at any time.
        </p>
      </form>
    </section>
  );
}

export { ENTERPRISE_MAIL };
