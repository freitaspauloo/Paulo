import type { CaseStudy } from "../types";

export const alignedAi: CaseStudy = {
  slug: "aligned-ai",
  title: "Aligned AI",
  client: "Aligned",
  subtitle:
    "Designing a personal AI workspace where trust, clarity, and benchmark content had to ship together — not as a deck, but as product.",
  tags: ["AI workspace", "Trust UX", "Shipped in code"],
  skillsProven: [
    "AI and agent UX design",
    "Accessibility and trust UX",
    "End-to-end product design",
    "Cross-functional leadership",
  ],
  role: {
    owned: [
      "Product UX for the personal AI workspace concept",
      "Information architecture for benchmark and docs surfaces",
      "Visual system and interaction patterns for AI-assisted flows",
      "Production UI implementation in code",
    ],
    notOwned: [
      "Core AI model training and inference",
      "Backend infrastructure and auth",
      "Go-to-market and sales motion",
    ],
  },
  decisions: [
    {
      title: "Workspace-first vs. docs-first",
      chosen:
        "Lead with a workspace metaphor — users need a place to work, not another docs site. Benchmark content supports the product story instead of replacing it.",
      rejected:
        "A standalone Mintlify docs site with no product shell. It would read like marketing, not something you'd use daily.",
    },
    {
      title: "Trust patterns for AI output",
      chosen:
        "Explicit provenance, editable drafts, and clear human-in-the-loop states — so users always know what the system suggested vs. what they committed.",
      rejected:
        "Magic auto-complete with no audit trail. Fast to demo, impossible to trust in a professional workflow.",
    },
    {
      title: "Prototype fidelity",
      chosen:
        "Ship working UI in code early — enough to test navigation, density, and agent handoffs with real stakeholders.",
      rejected:
        "High-fidelity Figma only. The team needed to feel latency, scroll, and state — not a slideshow.",
    },
  ],
  collaborators: ["Aligned product team", "Engineering partners"],
  links: [
    {
      label: "Benchmarks repo",
      url: "https://github.com/freitaspauloo/benchmarks",
    },
  ],
  prototype: {
    label: "Open benchmarks repo (Mintlify source)",
    url: "https://github.com/freitaspauloo/benchmarks",
    embed: false,
  },
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: [
        "Aligned is building in the personal AI workspace category — a space where generic chat UIs fail because professionals need persistent context, trustworthy outputs, and workflows that fit how they already work.",
        "The design challenge wasn't a landing page. It was making AI feel like a workspace you can rely on: clear ownership of suggestions, readable benchmark content, and surfaces that don't collapse under real data density.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "I mapped the core jobs: orient in the workspace, run an AI-assisted task, review output, and commit a result. Each step needed explicit trust UX — not bolted-on disclaimers, but structural clarity in the UI.",
        "Benchmark content (Mintlify) was treated as product evidence, not a side project. The docs structure mirrors how users evaluate AI tools: capability, limits, and comparison points.",
        "I prototyped key flows in code so PM and Eng could react to real interaction — scroll, focus, loading, and error states included.",
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      body: [
        "Delivered a coherent workspace direction with benchmark content wired into the product narrative — ready for stakeholder review and engineering iteration.",
        "Established reusable patterns for AI trust UX (provenance, draft vs. committed, human override) that scale across future features.",
      ],
    },
    {
      id: "reflection",
      title: "What I'd do differently",
      body: [
        "Instrument earlier usability sessions on the commit/review step — that's where trust breaks or holds, and we relied too much on internal review at first.",
      ],
    },
  ],
  cover: {
    src: "/work/cases/aligned.png",
    alt: "Aligned AI personal workspace interface",
  },
  logos: [{ src: "/work/logos/aligned.svg", alt: "Aligned AI" }],
  featured: true,
  published: true,
  order: 1,
};
