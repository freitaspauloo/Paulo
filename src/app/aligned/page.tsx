import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CircleCheck,
  FileText,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Brand glyphs for the footer. lucide no longer ships social icons, so these
// are minimal inline SVGs sized to match the rest of the footer.
const socials = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
  { label: "GitHub", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
];

// 🛬 The Aligned AI marketing landing page, rebuilt from Figma.
// Layout, copy, and the category cards are real, editable code that uses the
// project's design tokens. The five complex product mockups (private / answers
// / cost / powerful / safe) are exported as flattened images in /public/aligned
// because in Figma they are composed visuals rather than live UI.

// The six capability cards shown in the "Whatever you bring to it" section.
// Each colour comes straight from the Aligned palette tokens in globals.css.
const categories = [
  {
    icon: Search,
    title: "Collaborate",
    body: "Work together in real time. Same chat, same project.",
    fg: "var(--palette-cyan)",
    bg: "var(--palette-cyan-bg)",
  },
  {
    icon: FileText,
    title: "Research",
    body: "Hours of digging, minutes of yours. Every claim cited.",
    fg: "var(--palette-pink)",
    bg: "var(--palette-pink-bg)",
  },
  {
    icon: BookOpen,
    title: "Code",
    body: "Write, debug, and ship faster, with errors caught early.",
    fg: "var(--palette-orange)",
    bg: "var(--palette-orange-bg)",
  },
  {
    icon: CircleCheck,
    title: "Create",
    body: "Turn an idea into actions instantly.",
    fg: "var(--palette-brown)",
    bg: "var(--palette-brown-bg)",
  },
  {
    icon: Search,
    title: "Notes",
    body: "Cited reports pulled across dozens of trusted sources.",
    fg: "var(--palette-purple)",
    bg: "var(--palette-purple-bg)",
  },
  {
    icon: Calendar,
    title: "Projects",
    body: "Remembers what matters, so you don't repeat yourself.",
    fg: "var(--progress)",
    bg: "var(--progress-subtle)",
  },
];

// The five product mockups, rendered as full-width images further down.
const mockups = [
  { src: "/aligned/private.png", alt: "Private by design", w: 1920, h: 1200 },
  { src: "/aligned/answers.png", alt: "Answers you can trust", w: 1920, h: 1200 },
  { src: "/aligned/cost.png", alt: "Just as good, a fraction of the cost", w: 1920, h: 725 },
  { src: "/aligned/powerful.png", alt: "Powerful AI, tailored to you", w: 1920, h: 1200 },
  { src: "/aligned/safe.png", alt: "Safe for teens, in your control", w: 1920, h: 1200 },
];

export default function AlignedLanding() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden bg-background text-foreground">
      {/* ── Top navigation ─────────────────────────────────────────────── */}
      <nav className="flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-base font-semibold tracking-tight">Aligned AI</span>
        <Button size="sm">Try it for free</Button>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative flex w-full flex-col items-center px-6 pt-10 text-center">
        {/* Soft blue gradient glow behind the hero, matching the Figma blur. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px]"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 0%, #d8f2fb 0%, #eaf6fd 30%, rgba(255,255,255,0) 70%)",
          }}
        />
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          One AI for everything.
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          A powerful AI assistant for work, learning, family life, research,
          coding, and everyday questions — built with safety, privacy, and
          aligned with your values in mind.
        </p>
        <Button className="mt-7" size="lg">
          Try Aligned AI free
        </Button>

        {/* Hero product window. */}
        <div className="mt-12 w-full max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-2xl">
          <Image
            src="/aligned/hero-chat.png"
            alt="Aligned AI chat interface"
            width={1092}
            height={721}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* ── Capabilities ───────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl px-6 py-24 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Whatever you bring to it,
            <br />
            Aligned AI is ready
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ask anything, keep what matters, and know it&apos;s right — wherever
            you are.
          </p>
        </div>

        {/* Horizontally scrollable card row (carousel-style, like the design). */}
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <div
              key={c.title}
              className="flex w-64 shrink-0 snap-start flex-col gap-3 rounded-2xl border bg-card p-6"
            >
              <span
                className="flex size-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: c.bg, color: c.fg }}
              >
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Decorative carousel controls. */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            className="flex size-10 items-center justify-center rounded-full border text-muted-foreground transition hover:bg-accent"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex size-10 items-center justify-center rounded-full border text-muted-foreground transition hover:bg-accent"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      {/* ── Product mockup sections ────────────────────────────────────── */}
      <div className="flex w-full max-w-6xl flex-col gap-16 px-6 pb-24">
        {mockups.map((m) => (
          <Image
            key={m.src}
            src={m.src}
            alt={m.alt}
            width={m.w}
            height={m.h}
            className="h-auto w-full rounded-2xl"
          />
        ))}
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="w-full bg-[#1a1a1a] text-neutral-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="transition hover:text-white">Enterprise</a>
              <a href="#" className="transition hover:text-white">Benchmarks</a>
              <a href="#" className="transition hover:text-white">Pricing</a>
              <a href="#" className="transition hover:text-white">FAQ</a>
            </nav>
            <div className="flex gap-4 text-neutral-400">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="transition hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
            <span>© 2026 Aligned AI Inc. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="underline transition hover:text-white">Privacy Policy</a>
              <a href="#" className="underline transition hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
