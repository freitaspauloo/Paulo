// 🏢 Aligned for Enterprise — built to match the Aligned AI landing page's
// design language (sampled from the source PDF): strong cyan gradient hero with
// a floating product window, tall feature cards with colored icons in a
// carousel, big pastel-tinted alternating sections with floating UI mockups, a
// full-width "fraction of the cost" section with vertical bar charts, and a
// dark footer.

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  DollarSign,
  Gauge,
  GitBranch,
  Layers,
  Lock,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sigma,
  Sparkles,
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
import { cn } from "@/lib/utils";

// ── Brand glyphs (lucide dropped its brand icons, so inline these) ──────────
const social = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn", path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" },
  { label: "GitHub", path: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" },
  { label: "Instagram", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.84a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm5.11-6.76a.93.93 0 1 1-1.87 0 .93.93 0 0 1 1.87 0z" },
];

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
      <path d={path} />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const capabilities = [
  { title: "Reasoning", body: "Frontier-level on GPQA, DROP, and BIG-Bench Hard — the evals that decide real work.", icon: Sparkles, color: "text-purple" },
  { title: "Coding", body: "89.3% HumanEval pass@1. Write, debug, and ship faster with errors caught early.", icon: Code2, color: "text-cyan" },
  { title: "Math", body: "91.2% MGSM, multilingual, every result reproducible on public datasets.", icon: Sigma, color: "text-mint" },
  { title: "Migration", body: "OpenAI-compatible endpoints — swap a base URL and keep your whole stack.", icon: GitBranch, color: "text-orange" },
  { title: "Routing", body: "A compound system that swaps in the strongest model for each task.", icon: Layers, color: "text-pink" },
  { title: "Controls", body: "SOC 2-grade access controls and audit logging, built into the platform.", icon: ShieldCheck, color: "text-brown" },
];

// Vertical bar-chart cards for the "fraction of the cost" section.
// `lowerBetter` just flips the framing in the caption.
const charts = [
  {
    title: "Cost per chat",
    caption: "Lower is better",
    unit: "$",
    bars: [
      { label: "Aligned", value: "$0.006", pct: 6, lead: true },
      { label: "Top 3", value: "$0.12", pct: 40, lead: false },
      { label: "Other", value: "$0.50", pct: 100, lead: false },
    ],
  },
  {
    title: "General accuracy",
    caption: "Higher is better",
    unit: "%",
    bars: [
      { label: "Aligned", value: "88.4%", pct: 96, lead: true },
      { label: "Top 3", value: "85.5%", pct: 90, lead: false },
      { label: "Other", value: "83.0%", pct: 84, lead: false },
    ],
  },
  {
    title: "Accuracy per $",
    caption: "Higher is better",
    unit: "×",
    bars: [
      { label: "Aligned", value: "#1", pct: 100, lead: true },
      { label: "Top 3", value: "0.4×", pct: 40, lead: false },
      { label: "Other", value: "0.1×", pct: 12, lead: false },
    ],
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
  "US-hosted inference, encrypted in transit and at rest",
  "No training on your data by default, on any tier, in writing",
  "No ads, on any plan, ever",
  "Single sign-on (roadmap; confirm for your org)",
  "Role-based access with fine-grained permissioning",
  "Per-environment API keys, self-serve issue & revoke",
  "Audit logging with export",
  "Data retention and deletion controls",
  "Usage and spend analytics, billed in messages",
  "Dedicated capacity and private deployment options",
  "Built on SOC 2-compliant infrastructure",
];

const stats = [
  { value: "Top 3", label: "accuracy across 13 deployed models, and #1 on accuracy per dollar", icon: Gauge },
  { value: "20–80x", label: "lower cost per chat than frontier APIs, at comparable accuracy", icon: DollarSign },
  { value: "100% US", label: "hosted inference, inside a boundary you can name in a contract", icon: MapPin },
];

// ── Reusable bits ────────────────────────────────────────────────────────────

// Subtle light chip used as a section eyebrow (matches "Alignment" / "Family").
function Eyebrow({ accent, children }: { accent?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-card px-3 py-1 text-xs font-medium ring-1 ring-foreground/10",
        accent ?? "text-muted-foreground"
      )}
    >
      {children}
    </span>
  );
}

// A floating white "product window" card to sit on the tinted sections.
function MockCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl bg-card p-5 text-sm shadow-2xl ring-1 ring-foreground/10", className)}>
      {children}
    </div>
  );
}

// Big pastel-tinted section: text on one side, a floating mockup on the other.
function TintedSection({
  tint,
  accent,
  eyebrow,
  title,
  body,
  reverse,
  visual,
}: {
  tint: string;
  accent?: string;
  eyebrow: string;
  title: string;
  body: string;
  reverse?: boolean;
  visual: React.ReactNode;
}) {
  return (
    <section className={cn("rounded-[2.5rem] px-6 py-12 sm:px-14 sm:py-16", tint)}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className={cn("space-y-5", reverse && "md:order-2")}>
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em]">{title}</h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{body}</p>
          <Button size="lg" render={<a href="mailto:enterprise@joinaligned.ai" />}>
            Talk to our team
          </Button>
        </div>
        <div className={cn("relative", reverse && "md:order-1")}>{visual}</div>
      </div>
    </section>
  );
}

export default function EnterprisePage() {
  return (
    <main className="w-full">
      {/* ─── Hero (with top nav) ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#bfeaf6_0%,#d8f2fa_30%,var(--background)_75%)] px-6 pb-24 text-center">
        {/* Top nav */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-5 text-left">
          <span className="flex items-center gap-2 font-semibold">
            <span className="flex size-6 items-center justify-center rounded-md bg-foreground text-background">
              <Building2 className="size-3.5" />
            </span>
            Aligned AI
          </span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm" render={<a href="mailto:enterprise@joinaligned.ai" />}>
              Start for free
            </Button>
          </div>
        </nav>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <Badge variant="secondary" className="mx-auto gap-1.5 bg-card">
            <Building2 className="size-3" />
            Aligned for Enterprise
          </Badge>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">
            Frontier-class AI, hosted in the US, at a fraction of the cost.
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Aligned matches the pioneer models on the benchmarks that decide real
            work — and adds what they will not: US-hosted inference, 10–50x lower
            costs, and safety built into the architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" render={<a href="mailto:enterprise@joinaligned.ai" />}>
              Talk to our team
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" className="bg-card">
              Start for free
            </Button>
          </div>
        </div>

        {/* Floating product window */}
        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl bg-card text-left shadow-2xl ring-1 ring-foreground/10">
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
              <span className="text-foreground">aai train --playbook ./agents/policy.yaml --dry-run</span>
            </p>
            <p className="pl-4">→ checkpoint: waiting for operator confirm (no silent deploy)</p>
            <p className="pl-4">→ dry-run complete · no writes</p>
          </div>
          <Separator />
          <div className="space-y-3 px-4 py-4 text-sm">
            <span className="text-xs font-medium text-cyan">Live chat — migration pilot</span>
            <div className="max-w-[85%] rounded-2xl bg-secondary px-4 py-2.5">
              How do we migrate 12M support chats to the US-hosted lane without downtime?
            </div>
            <div className="ml-auto max-w-[85%] space-y-2 rounded-2xl bg-muted px-4 py-2.5 ring-1 ring-foreground/10">
              <p>Run a 10% shadow cutover, compare hallucination and cost vs your current provider, then flip by policy ring.</p>
              <p className="text-muted-foreground">Est. 22x lower cost on pilot volume; all data stays inside the US boundary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <section className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="space-y-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
              <s.icon className="size-5 text-muted-foreground" />
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>
      </div>

      {/* ─── Capability cards (carousel) ──────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl space-y-3 px-6 text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Put a frontier-class model to work, without the trade-offs
          </h2>
          <p className="text-muted-foreground">
            The same caliber of output the pioneer models give you — on the
            evaluations enterprises actually run.
          </p>
        </div>

        <div className="mt-12 flex snap-x gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="flex h-52 w-[17rem] shrink-0 snap-start flex-col gap-6 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10"
            >
              <c.icon className={cn("size-7", c.color)} />
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Previous">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Next">
            <ChevronRight />
          </Button>
        </div>
      </section>

      {/* ─── Tinted sections A & B ────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <TintedSection
          tint="bg-purple-bg"
          accent="text-purple"
          eyebrow="Do more"
          title="Do more, for less."
          body="Run the workloads you have been rationing because of cost. At $0.006 per chat against $0.12–$0.50 for frontier APIs, the budget that bought one workload now buys ten."
          visual={
            <div className="relative mx-auto max-w-sm">
              <MockCard className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground">Monthly spend — 5M chats</p>
                <div className="flex items-end gap-2 text-foreground">
                  <span className="text-3xl font-semibold">$30k</span>
                  <span className="mb-1 text-sm text-success">↓ from $600k</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[6%] rounded-full bg-progress" />
                </div>
                <p className="text-xs text-muted-foreground">95% lower than frontier APIs at the same volume.</p>
              </MockCard>
              <MockCard className="absolute -bottom-8 -right-2 w-44">
                <p className="text-xs text-muted-foreground">Per chat</p>
                <p className="text-xl font-semibold">$0.006</p>
              </MockCard>
            </div>
          }
        />

        <TintedSection
          tint="bg-cyan-bg"
          accent="text-cyan"
          eyebrow="Accuracy"
          title="Capability without the trade-offs."
          body="Aligned performs at the level of the pioneer models on reasoning, coding, math, and instruction-following — all reproducible on public Hugging Face datasets and independent leaderboards."
          reverse
          visual={
            <div className="relative mx-auto max-w-sm">
              <MockCard className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground">GPQA Diamond</p>
                {[["Aligned", "58.2%", 58, true], ["GPT-4o", "53.6%", 54, false]].map(([l, v, p, lead]) => (
                  <div key={l as string} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className={cn(lead ? "font-medium" : "text-muted-foreground")}>{l}</span>
                      <span className="tabular-nums">{v}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className={cn("h-full rounded-full", lead ? "bg-progress" : "bg-foreground/20")} style={{ width: `${p}%` }} />
                    </div>
                  </div>
                ))}
              </MockCard>
              <MockCard className="absolute -bottom-8 -left-2 w-40">
                <p className="text-xs text-muted-foreground">Arena Elo</p>
                <p className="text-xl font-semibold">1268</p>
              </MockCard>
            </div>
          }
        />
      </div>

      {/* ─── "Fraction of the cost" — vertical bar charts ─────────────── */}
      <section className="my-24 bg-[#f7fafd] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Just as good, a fraction of the cost.
            </h2>
            <p className="text-muted-foreground">
              Top-3 accuracy across 13 deployed models, and #1 on accuracy per
              dollar — with the benchmark named and the source public.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {charts.map((chart) => (
              <div key={chart.title} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold">{chart.title}</h3>
                  <span className="text-xs text-muted-foreground">{chart.caption}</span>
                </div>
                <div className="mt-6 flex h-44 items-end justify-around gap-3">
                  {chart.bars.map((b) => (
                    <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <span className={cn("text-xs tabular-nums", b.lead ? "font-semibold text-foreground" : "text-muted-foreground")}>
                        {b.value}
                      </span>
                      <div
                        className={cn(
                          "w-full rounded-t-md",
                          b.lead ? "bg-gradient-to-t from-progress to-cyan" : "bg-foreground/10"
                        )}
                        style={{ height: `${Math.max(b.pct, 4)}%` }}
                      />
                      <span className="text-[0.7rem] text-muted-foreground">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend + link */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="gap-1.5 bg-card">
              <span className="size-2 rounded-full bg-progress" /> Aligned AI
            </Badge>
            <Badge variant="secondary" className="gap-1.5 bg-card">
              <span className="size-2 rounded-full bg-foreground/30" /> Top 3 frontier
            </Badge>
            <Badge variant="secondary" className="gap-1.5 bg-card">
              <span className="size-2 rounded-full bg-foreground/15" /> Other frontier
            </Badge>
          </div>
          <div className="mt-4 text-center">
            <Button variant="link">
              View Benchmarks <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Tinted sections C & D ────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <TintedSection
          tint="bg-mint-bg"
          accent="text-mint"
          eyebrow="Residency"
          title="Your data stays in the United States."
          body="Inference runs on US infrastructure with encrypted data in transit and at rest. Dedicated capacity and private deployment are available, with data-flow diagrams under NDA."
          visual={
            <div className="relative mx-auto max-w-sm">
              <MockCard className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-mint" />
                  <span className="font-medium">US boundary</span>
                  <Badge variant="secondary" className="ml-auto bg-mint-bg text-mint">SOC 2</Badge>
                </div>
                <Separator />
                {["Encrypted in transit & at rest", "No training on your data by default", "Full audit logging with export"].map((t) => (
                  <div key={t} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <span>{t}</span>
                  </div>
                ))}
              </MockCard>
            </div>
          }
        />

        <TintedSection
          tint="bg-[#e9f4ec]"
          accent="text-mint"
          eyebrow="Safety"
          title="Safety is the architecture, not a filter on top."
          body="Classification and verification wrap every call before and after inference. Independent red-team coverage and hallucination reduction are built into the stack — not promised around it."
          reverse
          visual={
            <div className="relative mx-auto max-w-sm">
              <MockCard className="space-y-2 font-mono text-xs">
                {[
                  ["input", "classify · policy gate"],
                  ["inference", "route → strongest model"],
                  ["output", "verify · hallucination check"],
                ].map(([k, v], i) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded bg-mint-bg text-mint">{i + 1}</span>
                    <span className="font-medium text-foreground">{k}</span>
                    <span className="text-muted-foreground">→ {v}</span>
                  </div>
                ))}
              </MockCard>
            </div>
          }
        />
      </div>

      {/* ─── Benchmark table · controls · plans ───────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        <section className="space-y-8">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <Eyebrow>Benchmarks</Eyebrow>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em]">
              Compare us to the models you are already evaluating.
            </h2>
            <p className="text-muted-foreground">
              We publish our numbers next to theirs, with the benchmark named and
              the source public. “n/r” means a provider has no official score.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[14rem]">Benchmark</TableHead>
                  <TableHead className="text-right font-medium text-foreground">Aligned</TableHead>
                  <TableHead className="text-right">GPT-4o</TableHead>
                  <TableHead className="text-right">Gemini 1.5 Pro</TableHead>
                  <TableHead className="text-right">Llama 3 405B</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {benchmarks.map((row) => (
                  <TableRow key={row[0]}>
                    <TableCell className="font-medium">{row[0]}</TableCell>
                    <TableCell className="text-right font-medium tabular-nums">{row[1]}</TableCell>
                    <TableCell className="text-right tabular-nums text-muted-foreground">{row[2]}</TableCell>
                    <TableCell className="text-right tabular-nums text-muted-foreground">{row[3]}</TableCell>
                    <TableCell className="text-right tabular-nums text-muted-foreground">{row[4]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.5rem] bg-secondary p-8 ring-1 ring-foreground/10 sm:p-14 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Lock className="size-6 text-muted-foreground" />
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">Deploy with confidence.</h2>
            <p className="text-muted-foreground">
              Enterprise-grade access controls, and we never train our models on
              your data unless you opt in.
            </p>
            <Badge variant="secondary" className="gap-1.5 bg-card">
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

        <section className="space-y-8">
          <h2 className="text-center text-4xl font-semibold tracking-[-0.02em]">Choose how you engage.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
              <Sparkles className="size-5 text-cyan" />
              <h3 className="text-lg font-semibold">Enterprise API</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Frontier-class output through OpenAI-compatible endpoints. Billed
                in messages with volume pricing. Custom terms available; minimums
                set per deployment.
              </p>
              <Button className="mt-auto w-fit" render={<a href="mailto:enterprise@joinaligned.ai" />}>
                Talk to our team
              </Button>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
              <Network className="size-5 text-purple" />
              <h3 className="text-lg font-semibold">Dedicated &amp; private deployment</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                For strict residency, security, or scale needs. Dedicated
                capacity, custom data-flow, a named account team, and tailored
                terms. Pricing on request.
              </p>
              <Button variant="outline" className="mt-auto w-fit" render={<a href="mailto:enterprise@joinaligned.ai" />}>
                <Mail />
                enterprise@joinaligned.ai
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* ─── Dark footer ──────────────────────────────────────────────── */}
      <footer className="bg-foreground px-6 py-14 text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a href="#" className="text-background/70 hover:text-background">Enterprise</a>
              <a href="#" className="text-background/70 hover:text-background">Benchmarks</a>
              <a href="#" className="text-background/70 hover:text-background">Pricing</a>
              <a href="#" className="text-background/70 hover:text-background">FAQ</a>
            </div>
            <div className="flex items-center gap-5 text-background/70">
              {social.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="hover:text-background">
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 Aligned AI Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="underline-offset-4 hover:text-background hover:underline">Privacy Policy</a>
              <a href="#" className="underline-offset-4 hover:text-background hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
