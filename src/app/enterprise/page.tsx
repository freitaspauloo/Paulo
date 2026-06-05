/* eslint-disable @next/next/no-img-element */
// 🏢 Aligned — landing page transferred from Figma (node 2482:1570) as real,
// responsive code. Text, buttons and layout are coded; only the genuine
// photographs / product screenshots are image assets (as in any real build).

import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Code2,
  FileText,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── Brand glyphs (lucide dropped brand icons in this version) ───────────────
const social = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn", path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" },
  { label: "GitHub", path: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" },
  { label: "Instagram", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.84a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm5.11-6.76a.93.93 0 1 1-1.87 0 .93.93 0 0 1 1.87 0z" },
];

// ── Data ─────────────────────────────────────────────────────────────────────
const features = [
  { title: "Collaborate", body: "Work together in real time. Same chat, same project.", icon: Users, color: "text-cyan" },
  { title: "Research", body: "Hours of digging, minutes of yours. Every claim cited.", icon: FileText, color: "text-pink" },
  { title: "Code", body: "Write, debug, and ship faster, with errors caught early.", icon: Code2, color: "text-orange" },
  { title: "Create", body: "Turn an idea into actions instantly.", icon: CircleCheck, color: "text-brown" },
  { title: "Notes", body: "Cited reports pulled across dozens of trusted sources.", icon: Search, color: "text-purple" },
  { title: "Projects", body: "Remembers what matters, so you don't repeat yourself.", icon: CalendarDays, color: "text-progress" },
];

const charts = [
  {
    title: "Cost Per Chat",
    bars: [
      { label: "Aligned", value: "$0.005", pct: 4, lead: true },
      { label: "Top 3", value: "$0.25", pct: 100, lead: false },
      { label: "Other", value: "$0.17", pct: 68, lead: false },
    ],
  },
  {
    title: "General Accuracy",
    bars: [
      { label: "Aligned", value: "4.35", pct: 87, lead: true },
      { label: "Top 3", value: "4.49", pct: 90, lead: false },
      { label: "Other", value: "3.63", pct: 73, lead: false },
    ],
  },
  {
    title: "Faith Representation",
    bars: [
      { label: "Aligned", value: "61%", pct: 100, lead: true },
      { label: "Top 3", value: "13%", pct: 21, lead: false },
      { label: "Other", value: "14%", pct: 23, lead: false },
    ],
  },
];

// ── Reusable bits ────────────────────────────────────────────────────────────
function Eyebrow({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex w-fit items-center rounded-full bg-card px-3 py-1 text-xs font-semibold ring-1 ring-foreground/10", accent)}>
      {children}
    </span>
  );
}

function Tinted({
  tint,
  accent,
  eyebrow,
  title,
  body,
  photo,
  alt,
  reverse,
}: {
  tint: string;
  accent: string;
  eyebrow: string;
  title: string;
  body: string;
  photo: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className={cn("rounded-[2.5rem] px-6 py-12 sm:px-14 sm:py-16", tint)}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className={cn("space-y-5", reverse && "md:order-2")}>
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em]">{title}</h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{body}</p>
          <Button size="lg">Try it for free</Button>
        </div>
        <div className={cn(reverse && "md:order-1")}>
          <img src={photo} alt={alt} className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default function EnterprisePage() {
  return (
    <main className="w-full bg-[#fafbfc]">
      {/* ─── Hero + nav ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#d0e8f8_0%,#f8fdfe_39%,#e5f9fc_72%,#f0fcfe_100%)] px-6 pb-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-5">
          <span className="flex items-center gap-2 font-semibold">
            <span className="flex size-6 items-center justify-center rounded-md bg-foreground text-background text-xs">A</span>
            Aligned AI
          </span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Start for free</Button>
          </div>
        </nav>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Frontier-class AI, hosted in the US, at a fraction of the cost.
          </h1>
          <p className="mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A powerful AI assistant for work, learning, family life, research,
            coding, and everyday questions — built with safety, privacy, and
            aligned with your values in mind.
          </p>
          <Button size="lg" className="mx-auto">Try Aligned AI free</Button>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-foreground/10">
          <img src="/enterprise/photo-hero.png" alt="Aligned AI chat interface" className="w-full" />
        </div>
      </section>

      {/* ─── Feature cards ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl space-y-3 px-6 text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Whatever you bring to it, Aligned AI is ready
          </h2>
          <p className="text-muted-foreground">
            Ask anything, keep what matters, and know it&apos;s right — wherever you are.
          </p>
        </div>

        <div className="mt-12 flex snap-x gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {features.map((f) => (
            <div key={f.title} className="flex h-52 w-[17rem] shrink-0 snap-start flex-col gap-6 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
              <f.icon className={cn("size-7", f.color)} />
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Previous"><ChevronLeft /></Button>
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Next"><ChevronRight /></Button>
        </div>
      </section>

      {/* ─── Private by design / Answers you can trust ────────────────── */}
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Tinted
          tint="bg-purple-bg"
          accent="text-purple"
          eyebrow="Do more"
          title="Private by design"
          body="Give everyone on your account their own limits — full access for you, the right boundaries for your kids. No workarounds, no loopholes, no exceptions."
          photo="/enterprise/photo-private.png"
          alt="Private conversation controls"
        />
        <Tinted
          tint="bg-cyan-bg"
          accent="text-cyan"
          eyebrow="Accuracy"
          title="Answers you can trust."
          body="Designed to check important facts against reliable sources, helping you get clearer answers with fewer mistakes."
          photo="/enterprise/photo-answers.png"
          alt="Answer verification with cited sources"
          reverse
        />
      </div>

      {/* ─── Just as good, a fraction of the cost ─────────────────────── */}
      <section className="my-24 bg-[#eef2fe] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Just as good, a fraction of the cost.
            </h2>
            <p className="text-muted-foreground">
              Most competitive pricing, comparatively accurate, and faith-specific alignment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {charts.map((chart) => (
              <div key={chart.title} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10">
                <h3 className="text-sm font-semibold">{chart.title}</h3>
                <div className="mt-6 flex h-44 items-end justify-around gap-3">
                  {chart.bars.map((b) => (
                    <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <span className={cn("text-xs tabular-nums", b.lead ? "font-semibold text-foreground" : "text-muted-foreground")}>{b.value}</span>
                      <div className={cn("w-full rounded-t-md", b.lead ? "bg-gradient-to-t from-progress to-cyan" : "bg-foreground/10")} style={{ height: `${Math.max(b.pct, 4)}%` }} />
                      <span className="text-[0.7rem] text-muted-foreground">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-progress" /> Aligned AI</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground"><span className="size-2 rounded-full bg-foreground/30" /> Top 3 frontier</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground"><span className="size-2 rounded-full bg-foreground/15" /> Other frontier</span>
          </div>
          <div className="mt-4 text-center">
            <Button variant="link">View Benchmarks <ArrowRight /></Button>
          </div>
        </div>
      </section>

      {/* ─── Powerful AI / Safe for teens ─────────────────────────────── */}
      <div className="mx-auto max-w-6xl space-y-6 px-6 pb-24">
        <Tinted
          tint="bg-mint-bg"
          accent="text-mint"
          eyebrow="Alignment"
          title="Powerful AI, tailored to you"
          body="Adapts to your preferences, priorities, and values, giving you a better assistant for everyday life and work."
          photo="/enterprise/photo-powerful.png"
          alt="Personalized assistant planning a day"
        />
        <Tinted
          tint="bg-[#e9f4ec]"
          accent="text-mint"
          eyebrow="Family"
          title="Safe for teens, in your control"
          body="A powerful AI for your kids — explicit content blocked, answers built for their age. Stay in control with a parent dashboard, time limits, quiet hours, and alerts when something needs you."
          photo="/enterprise/photo-safe.png"
          alt="Family account controls"
          reverse
        />
      </div>

      {/* ─── Footer ───────────────────────────────────────────────────── */}
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
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden><path d={s.path} /></svg>
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
