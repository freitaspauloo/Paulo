// 🏢 Aligned for Enterprise — the enterprise landing page, rebuilt in the
// Aligned AI "boxing style" (bordered surfaces / ring-1 cards, rounded-xl) using
// our design-system tokens. Content mirrors the live enterprise page.

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  DollarSign,
  Gauge,
  Layers,
  Lock,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// — Small building blocks ---------------------------------------------------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </span>
  );
}

const reasons = [
  {
    n: "1",
    label: "Capability without the trade-offs",
    title: "You will not trade capability for everything else on this page.",
    body: "Aligned performs at the level of the pioneer models on the evaluations enterprises actually run: reasoning, coding, math, and instruction-following.",
    detail:
      "GPQA Diamond 58.2% vs GPT-4o 53.6%. MGSM 91.2% vs GPT-4o 85.5%. HumanEval 89.3%. MMLU CoT 88.4%. LMSYS Arena Elo 1268. All reproducible on public Hugging Face datasets and independent leaderboards.",
    icon: TrendingUp,
  },
  {
    n: "2",
    label: "No single-vendor bet",
    title: "You no longer have to bet your roadmap on one lab.",
    body: "Standardizing on a single frontier vendor makes their pricing changes, deprecations, and outages yours. Aligned removes the bet.",
    detail:
      "OpenAI-compatible endpoints drop into existing integrations with a base URL and key change. Teams migrate production volumes in days, not quarters.",
    icon: Network,
  },
  {
    n: "3",
    label: "Built to stay on top",
    title: "We are built to stay at the top of the leaderboard, every cycle.",
    body: "The leaderboard reorders every few months. Aligned is a compound system: it routes across the best models and swaps in the strongest one per task.",
    detail:
      "Across 13 deployed models, Aligned ranks 3rd on raw accuracy and 1st on accuracy per dollar. Seven routing paths keep that position as new models ship.",
    icon: Layers,
  },
  {
    n: "4",
    label: "Safety as architecture",
    title: "Safety is the architecture, not a filter on top of it.",
    body: "At Aligned, classification and verification wrap every call before and after inference.",
    detail:
      "Independent red-team coverage and hallucination reduction built into the stack; data never trains our models unless you explicitly opt in.",
    icon: ShieldCheck,
  },
  {
    n: "5",
    label: "Data stays in the US",
    title: "Your data stays in the United States, inside a boundary you can name.",
    body: "Aligned runs inference on US infrastructure with encrypted data in transit and at rest.",
    detail:
      "Dedicated capacity and private deployment options available; SOC 2-compliant infrastructure with full audit logging and data-flow diagrams under NDA.",
    icon: MapPin,
  },
  {
    n: "6",
    label: "10–50x lower cost",
    title: "The same caliber of output, at 10 to 50x lower cost.",
    body: "Architected to spend compute only where it changes the answer, then route to the most efficient path that meets the bar.",
    detail:
      "Aligned AI Fast averages $0.003 per chat and Research $0.006 vs $0.12 Claude Opus 4.7, $0.29 Gemini 3.1 Pro, $0.50 GPT-5.2 — while sitting in the top 3 on accuracy.",
    icon: DollarSign,
  },
];

const benchmarks = [
  ["GPQA Diamond (graduate science)", "58.2%", "53.6%", "n/r", "n/r"],
  ["MMLU 5-shot (knowledge breadth)", "87.3%", "n/r", "n/r", "n/r"],
  ["HumanEval (coding, pass@1)", "89.3%", "90.2%", "84.1%", "84.1%"],
  ["MGSM (multilingual math)", "91.2%", "85.5%", "87.5%", "n/r"],
  ["DROP F1 (discrete reasoning)", "84.9%", "83.4%", "74.0%", "83.5%"],
  ["BIG-Bench Hard (3-shot CoT)", "88.5%", "n/r", "89.2%", "85.3%"],
  ["MATH (competition math)", "75.2%", "76.6%", "n/r", "67.0%"],
  ["Avg. cost per chat", "$0.006", "$0.045", "$0.29", "n/a"],
  ["US-hosted", "Yes", "No", "No", "self-host"],
  ["Trains on your data by default", "Never", "Varies", "Varies", "n/a"],
];

const controls = [
  "US-hosted inference, with data encrypted in transit and at rest",
  "No training on your data by default, on any tier, in writing",
  "No ads, on any plan, ever",
  "Single sign-on (roadmap; confirm for your org)",
  "Role-based access with fine-grained permissioning (roadmap)",
  "Per-environment API keys with self-serve issuance and revocation",
  "Audit logging with export",
  "Data retention and deletion controls",
  "Usage and spend analytics, billed in messages",
  "Dedicated capacity and private deployment options",
  "Built on SOC 2-compliant infrastructure",
];

const stats = [
  {
    value: "Top 3",
    label: "accuracy across 13 deployed models, and #1 on accuracy per dollar",
    icon: Gauge,
  },
  {
    value: "20–80x",
    label: "lower cost per chat than frontier APIs, at comparable accuracy",
    icon: DollarSign,
  },
  {
    value: "100% US",
    label: "hosted inference, inside a boundary you can name in a contract",
    icon: MapPin,
  },
];

export default function EnterprisePage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-24 px-6 py-12 sm:py-16">
      {/* Support banner */}
      <div className="-mb-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-lg bg-muted px-4 py-2 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">
        <span>Enterprise support: talk to our team or email</span>
        <a
          href="mailto:enterprise@joinaligned.ai"
          className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
        >
          <Mail className="size-3.5" />
          enterprise@joinaligned.ai
        </a>
      </div>

      {/* Hero */}
      <section className="space-y-8 pt-8 text-center">
        <Badge variant="secondary" className="mx-auto gap-1.5">
          <Building2 className="size-3" />
          Aligned for Enterprise
        </Badge>
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Frontier-class AI, hosted in the US, at a fraction of the cost.
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Aligned matches the pioneer models on the benchmarks that decide real
          work — and adds what they will not: US-hosted inference, 10–50x lower
          costs, and safety built into the architecture.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<a href="mailto:enterprise@joinaligned.ai" />}>
            Talk to our team
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            Start for free
          </Button>
        </div>

        {/* Terminal / migration-pilot preview */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-card text-left ring-1 ring-foreground/10">
          <div className="flex items-center gap-2 border-b px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-warning/70" />
            <span className="size-2.5 rounded-full bg-success/70" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              AAI Terminal — supervised · policy: aligned-default
            </span>
          </div>
          <div className="space-y-1.5 px-4 py-4 font-mono text-xs leading-relaxed text-muted-foreground">
            <p>
              <span className="text-success">operator@aligned</span>:
              <span className="text-progress">~/workspace</span>${" "}
              <span className="text-foreground">
                aai train --playbook ./agents/policy.yaml --dry-run
              </span>
            </p>
            <p className="pl-4">→ checkpoint: waiting for operator confirm (no silent deploy)</p>
            <p className="pl-4">→ dry-run complete · no writes</p>
          </div>
          <Separator />
          <div className="space-y-3 px-4 py-4 text-sm">
            <Eyebrow>Live chat — migration pilot</Eyebrow>
            <div className="max-w-[85%] rounded-2xl bg-secondary px-4 py-2.5">
              How do we migrate 12M support chats to the US-hosted lane without
              downtime?
            </div>
            <div className="ml-auto max-w-[85%] space-y-2 rounded-2xl bg-muted px-4 py-2.5 ring-1 ring-foreground/10">
              <p>
                Run a 10% shadow cutover, compare hallucination and cost vs your
                current provider, then flip by policy ring.
              </p>
              <p className="text-muted-foreground">
                Est. 22x lower cost on pilot volume; all data stays inside the US
                boundary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.value}
            className="space-y-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
          >
            <s.icon className="size-5 text-muted-foreground" />
            <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Value props */}
      <section className="space-y-8">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight">
          Put a frontier-class model to work, without the frontier trade-offs.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Do more, for less.",
              body: "Run the workloads you have been rationing because of cost. At $0.006 per chat against $0.12–$0.50 for frontier APIs, the budget that bought one workload now buys ten.",
              icon: DollarSign,
            },
            {
              title: "Standardize without locking in.",
              body: "Give every team one capable model through OpenAI-compatible endpoints, without betting your roadmap on a single lab’s schedule, pricing, or deprecations.",
              icon: Network,
            },
            {
              title: "Deploy where compliance says yes.",
              body: "Put AI into regulated workflows because the controls procurement asks about are built into the platform rather than promised around it.",
              icon: ShieldCheck,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="space-y-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <c.icon className="size-5 text-muted-foreground" />
              <h3 className="font-medium">{c.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Six reasons */}
      <section className="space-y-8">
        <div className="space-y-2">
          <Eyebrow>Why Aligned</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight">
            The six reasons enterprises choose Aligned
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-semibold">
                  {r.n}
                </span>
                <Eyebrow>{r.label}</Eyebrow>
              </div>
              <h3 className="text-lg font-medium leading-snug">{r.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{r.body}</p>
              <p className="mt-auto border-t pt-3 text-sm leading-6 text-muted-foreground">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmark comparison */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <Eyebrow>Benchmarks</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight">
            Compare us to the models you are already evaluating.
          </h2>
          <p className="text-muted-foreground">
            We publish our numbers next to theirs, with the benchmark named and
            the source public. “n/r” means a provider has no official score.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[14rem]">Benchmark</TableHead>
                <TableHead className="text-right font-medium text-foreground">
                  Aligned
                </TableHead>
                <TableHead className="text-right">GPT-4o</TableHead>
                <TableHead className="text-right">Gemini 1.5 Pro</TableHead>
                <TableHead className="text-right">Llama 3 405B</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {benchmarks.map((row) => (
                <TableRow key={row[0]}>
                  <TableCell className="font-medium">{row[0]}</TableCell>
                  <TableCell className="text-right font-medium tabular-nums">
                    {row[1]}
                  </TableCell>
                  <TableCell className="text-right tabular-nums text-muted-foreground">
                    {row[2]}
                  </TableCell>
                  <TableCell className="text-right tabular-nums text-muted-foreground">
                    {row[3]}
                  </TableCell>
                  <TableCell className="text-right tabular-nums text-muted-foreground">
                    {row[4]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground">
          Benchmarks current as of May 2026, report v0.1. Datasets are public on
          Hugging Face; results tracked by the Open LLM Leaderboard, Artificial
          Analysis, LMSYS Arena, and Stanford HELM. Costs averaged over the
          benchmark conversation set; model your own traffic for a precise number.
        </p>
        <Button render={<a href="mailto:enterprise@joinaligned.ai" />}>
          Talk to our team
          <ArrowRight />
        </Button>
      </section>

      {/* Deploy with confidence */}
      <section className="grid gap-8 rounded-xl bg-card p-8 ring-1 ring-foreground/10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <Lock className="size-6 text-muted-foreground" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Deploy with confidence.
          </h2>
          <p className="text-muted-foreground">
            Manage access with enterprise-grade controls, and know that we never
            train our models on your data unless you opt in.
          </p>
          <Badge variant="secondary" className="gap-1.5">
            <BadgeCheck className="size-3" />
            Architected to SOC 2 standards
          </Badge>
        </div>
        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {controls.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-success" />
              <span className="text-muted-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Engagement plans */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Choose how you engage.
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <Sparkles className="size-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Enterprise API</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Frontier-class output through OpenAI-compatible endpoints. Billed in
              messages with volume pricing. Custom terms available; minimums set
              per deployment.
            </p>
            <Button className="mt-auto w-fit" render={<a href="mailto:enterprise@joinaligned.ai" />}>
              Talk to our team
            </Button>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <Building2 className="size-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Dedicated &amp; private deployment</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              For strict residency, security, or scale needs. Dedicated capacity,
              custom data-flow, a named account team, and tailored terms. Pricing
              on request.
            </p>
            <Button
              variant="outline"
              className="mt-auto w-fit"
              render={<a href="mailto:enterprise@joinaligned.ai" />}
            >
              <Mail />
              enterprise@joinaligned.ai
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-6 border-t pt-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/enterprise" className="font-medium hover:underline">
            Enterprise
          </Link>
          <a href="#" className="text-muted-foreground hover:underline">
            Benchmarks
          </a>
          <a href="#" className="text-muted-foreground hover:underline">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:underline">
            FAQ
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Aligned AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
