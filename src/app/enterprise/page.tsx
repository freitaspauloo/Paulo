// 🏢 Aligned for Enterprise — rebuilt to match the Aligned AI landing-page
// design system: soft gradient hero + floating product window, white bordered
// feature cards with colored icons, big pastel-tinted alternating sections
// (purple/cyan/mint/orange bg tokens), bar-chart comparison cards, dark footer.

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
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

// — Capability cards (the "Whatever you bring to it" row) -------------------
const capabilities = [
  { title: "Reasoning", body: "Frontier-level on GPQA, DROP, and BIG-Bench Hard.", icon: Sparkles, color: "text-purple" },
  { title: "Coding", body: "89.3% HumanEval pass@1 — ship faster, catch errors early.", icon: Code2, color: "text-cyan" },
  { title: "Math", body: "91.2% MGSM, multilingual, reproducible on public sets.", icon: Sigma, color: "text-mint" },
  { title: "Migration", body: "OpenAI-compatible — swap a base URL, keep your stack.", icon: GitBranch, color: "text-orange" },
  { title: "Routing", body: "A compound system that swaps in the strongest model per task.", icon: Layers, color: "text-pink" },
  { title: "Controls", body: "SOC 2-grade controls and audit logging, built in.", icon: ShieldCheck, color: "text-brown" },
];

const stats = [
  { value: "Top 3", label: "accuracy across 13 deployed models, and #1 on accuracy per dollar", icon: Gauge },
  { value: "20–80x", label: "lower cost per chat than frontier APIs, at comparable accuracy", icon: DollarSign },
  { value: "100% US", label: "hosted inference, inside a boundary you can name in a contract", icon: MapPin },
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

// — Reusable bits -----------------------------------------------------------

function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("text-sm font-medium", className)}>{children}</span>
  );
}

// A horizontal mini bar used inside the comparison chart cards.
function Bar({ label, value, pct, lead }: { label: string; value: string; pct: number; lead?: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between text-xs">
        <span className={cn(lead ? "font-medium text-foreground" : "text-muted-foreground")}>{label}</span>
        <span className={cn("tabular-nums", lead ? "font-medium" : "text-muted-foreground")}>{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full", lead ? "bg-progress" : "bg-foreground/20")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// A big pastel-tinted section: text on one side, a product mockup on the other.
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
  accent: string;
  eyebrow: string;
  title: string;
  body: string;
  reverse?: boolean;
  visual: React.ReactNode;
}) {
  return (
    <section className={cn("rounded-4xl px-6 py-10 sm:px-12 sm:py-14", tint)}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className={cn("space-y-5", reverse && "md:order-2")}>
          <Eyebrow className={accent}>{eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="text-pretty text-muted-foreground">{body}</p>
          <Button variant="default" render={<a href="mailto:enterprise@joinaligned.ai" />}>
            Talk to our team
          </Button>
        </div>
        <div className={cn(reverse && "md:order-1")}>{visual}</div>
      </div>
    </section>
  );
}

// A little white "product window" card to float inside tinted sections.
function MockCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl bg-card p-5 shadow-xl ring-1 ring-foreground/10", className)}>
      {children}
    </div>
  );
}

export default function EnterprisePage() {
  return (
    <main className="w-full">
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-bg via-cyan-bg/30 to-background px-6 pb-20 pt-16 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <Badge variant="secondary" className="mx-auto gap-1.5 bg-card">
            <Building2 className="size-3" />
            Aligned for Enterprise
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
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
            <Button size="lg" variant="outline" className="bg-card">
              Start for free
            </Button>
          </div>
        </div>

        {/* Floating product window */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-card text-left shadow-2xl ring-1 ring-foreground/10">
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
            <Eyebrow className="text-cyan">Live chat — migration pilot</Eyebrow>
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

      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        {/* ─── Stats ──────────────────────────────────────────────────── */}
        <section className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="space-y-3 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
              <s.icon className="size-5 text-muted-foreground" />
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>

        {/* ─── Capability cards row ───────────────────────────────────── */}
        <section className="space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Put a frontier-class model to work, without the trade-offs
            </h2>
            <p className="text-muted-foreground">
              The same caliber of output the pioneer models give you — on the
              evaluations enterprises actually run.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="space-y-2 rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
                <c.icon className={cn("size-5", c.color)} />
                <h3 className="font-medium">{c.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ─── Tinted alternating sections ──────────────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-6 px-6 pb-24">
        <TintedSection
          tint="bg-purple-bg"
          accent="text-purple"
          eyebrow="Cost"
          title="Do more, for less."
          body="Run the workloads you have been rationing because of cost. At $0.006 per chat against $0.12–$0.50 for frontier APIs, the budget that bought one workload now buys ten."
          visual={
            <MockCard>
              <p className="mb-4 text-xs font-medium text-muted-foreground">Avg. cost per chat</p>
              <div className="space-y-3">
                <Bar label="Aligned AI" value="$0.006" pct={4} lead />
                <Bar label="GPT-4o mini" value="$0.045" pct={28} />
                <Bar label="Gemini 3.1 Pro" value="$0.29" pct={70} />
                <Bar label="GPT-5.2" value="$0.50" pct={100} />
              </div>
            </MockCard>
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
            <MockCard>
              <p className="mb-4 text-xs font-medium text-muted-foreground">Aligned vs GPT-4o</p>
              <div className="space-y-3">
                <Bar label="GPQA Diamond — Aligned" value="58.2%" pct={58} lead />
                <Bar label="GPQA Diamond — GPT-4o" value="53.6%" pct={54} />
                <Bar label="MGSM — Aligned" value="91.2%" pct={91} lead />
                <Bar label="MGSM — GPT-4o" value="85.5%" pct={86} />
              </div>
            </MockCard>
          }
        />

        <TintedSection
          tint="bg-mint-bg"
          accent="text-mint"
          eyebrow="Residency"
          title="Your data stays in the United States."
          body="Inference runs on US infrastructure with encrypted data in transit and at rest. Dedicated capacity and private deployment available, with data-flow diagrams under NDA."
          visual={
            <MockCard className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-mint" />
                <span className="font-medium">US boundary</span>
                <Badge variant="secondary" className="ml-auto bg-mint-bg text-mint">SOC 2</Badge>
              </div>
              <Separator />
              {["Encrypted in transit & at rest", "No training on your data by default", "Full audit logging with export"].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{t}</span>
                </div>
              ))}
            </MockCard>
          }
        />

        <TintedSection
          tint="bg-orange-bg"
          accent="text-orange"
          eyebrow="Safety"
          title="Safety is the architecture, not a filter on top."
          body="Classification and verification wrap every call before and after inference. Independent red-team coverage and hallucination reduction are built into the stack — not promised around it."
          reverse
          visual={
            <MockCard className="space-y-2 font-mono text-xs">
              {[
                ["input", "classify · policy gate"],
                ["inference", "route → strongest model"],
                ["output", "verify · hallucination check"],
              ].map(([k, v], i) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="flex size-5 items-center justify-center rounded bg-orange-bg text-orange">{i + 1}</span>
                  <span className="font-medium text-foreground">{k}</span>
                  <span className="text-muted-foreground">→ {v}</span>
                </div>
              ))}
            </MockCard>
          }
        />
      </div>

      {/* ─── Benchmark comparison ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
        <section className="space-y-8">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <Eyebrow className="text-progress">Benchmarks</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
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
          <p className="text-center text-xs text-muted-foreground">
            Benchmarks current as of May 2026, report v0.1. Datasets public on
            Hugging Face; results tracked by the Open LLM Leaderboard, Artificial
            Analysis, LMSYS Arena, and Stanford HELM.
          </p>
        </section>

        {/* ─── Deploy with confidence ─────────────────────────────────── */}
        <section className="grid gap-8 rounded-4xl bg-secondary p-8 ring-1 ring-foreground/10 sm:p-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Lock className="size-6 text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight">Deploy with confidence.</h2>
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

        {/* ─── Engagement plans ───────────────────────────────────────── */}
        <section className="space-y-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Choose how you engage.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
              <Sparkles className="size-5 text-cyan" />
              <h3 className="text-lg font-medium">Enterprise API</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Frontier-class output through OpenAI-compatible endpoints. Billed
                in messages with volume pricing. Custom terms available; minimums
                set per deployment.
              </p>
              <Button className="mt-auto w-fit" render={<a href="mailto:enterprise@joinaligned.ai" />}>
                Talk to our team
              </Button>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
              <Network className="size-5 text-purple" />
              <h3 className="text-lg font-medium">Dedicated &amp; private deployment</h3>
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
      <footer className="bg-foreground px-6 py-12 text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <Building2 className="size-4" />
              Aligned AI
            </span>
            <a href="#" className="text-background/70 hover:text-background">Enterprise</a>
            <a href="#" className="text-background/70 hover:text-background">Benchmarks</a>
            <a href="#" className="text-background/70 hover:text-background">Pricing</a>
            <a href="#" className="text-background/70 hover:text-background">FAQ</a>
          </div>
          <Separator className="bg-background/15" />
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 Aligned AI Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background">Privacy Policy</a>
              <a href="#" className="hover:text-background">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
