import {
  BadgeCheck,
  Check,
  Lock,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";

import {
  LandingEyebrow,
  LandingGhostButton,
  LandingPrimaryButton,
  landing,
} from "@/components/landing/landing-primitives";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export const benchmarks = [
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
] as const;

export const controls = [
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
] as const;

const ENTERPRISE_MAIL = "mailto:enterprise@joinaligned.ai";

export function BenchmarksSection() {
  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-[40rem] space-y-3 text-center">
        <LandingEyebrow accent="text-[#646464]">Benchmarks</LandingEyebrow>
        <h2 className="text-balance text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          Compare us to the models you are already evaluating.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          We publish our numbers next to theirs, with the benchmark named and the
          source public. &ldquo;n/r&rdquo; means a provider has no official score.
        </p>
      </div>

      <div
        className={cn(
          "overflow-x-auto border border-black/[0.06] bg-white",
          landing.cardMd,
          landing.shadowCard,
        )}
      >
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
                <TableCell className="text-right tabular-nums text-[#646464]">
                  {row[2]}
                </TableCell>
                <TableCell className="text-right tabular-nums text-[#646464]">
                  {row[3]}
                </TableCell>
                <TableCell className="text-right tabular-nums text-[#646464]">
                  {row[4]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export function ControlsSection() {
  return (
    <section
      className={cn(
        "grid gap-8 border border-black/[0.06] bg-[#f9f9f9] p-8 sm:p-12 md:grid-cols-[1fr_1.2fr]",
        landing.container,
      )}
    >
      <div className="space-y-4">
        <Lock className="size-6 text-[#646464]" strokeWidth={1.75} />
        <h2 className="text-[clamp(1.75rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
          Deploy with confidence.
        </h2>
        <p className="text-base leading-7 text-[#646464]">
          Enterprise-grade access controls, and we never train our models on your
          data unless you opt in.
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 bg-white px-3 py-1 text-xs font-medium text-[#646464] ring-1 ring-black/[0.08]",
            landing.capsule,
          )}
        >
          <BadgeCheck className="size-3.5" />
          Architected to SOC 2 standards
        </span>
      </div>
      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {controls.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-[#22a06b]" />
            <span className="text-[#646464]">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PlansSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-center text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em]">
        Choose how you engage.
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <article
          className={cn(
            "flex flex-col gap-4 border border-black/[0.06] bg-white p-6 sm:p-7",
            landing.cardMd,
            landing.shadowCard,
          )}
        >
          <Sparkles className="size-5 text-cyan" strokeWidth={1.75} />
          <h3 className="text-lg font-semibold">Enterprise API</h3>
          <p className="text-sm leading-6 text-[#646464]">
            Frontier-class output through OpenAI-compatible endpoints. Billed in
            messages with volume pricing. Custom terms available; minimums set per
            deployment.
          </p>
          <LandingPrimaryButton href={ENTERPRISE_MAIL} className="mt-auto w-fit">
            Talk to our team
          </LandingPrimaryButton>
        </article>
        <article
          className={cn(
            "flex flex-col gap-4 border border-black/[0.06] bg-white p-6 sm:p-7",
            landing.cardMd,
            landing.shadowCard,
          )}
        >
          <Network className="size-5 text-purple" strokeWidth={1.75} />
          <h3 className="text-lg font-semibold">Dedicated &amp; private deployment</h3>
          <p className="text-sm leading-6 text-[#646464]">
            For strict residency, security, or scale needs. Dedicated capacity,
            custom data-flow, a named account team, and tailored terms. Pricing on
            request.
          </p>
          <LandingGhostButton
            href={ENTERPRISE_MAIL}
            className="mt-auto inline-flex h-10 w-fit items-center gap-2 border border-black/[0.1] px-5"
          >
            <Mail className="size-4" />
            enterprise@joinaligned.ai
          </LandingGhostButton>
        </article>
      </div>
    </section>
  );
}
