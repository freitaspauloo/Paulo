import type { CaseStudy } from "../types";

export const frameline: CaseStudy = {
  slug: "frameline",
  title: "Frameline",
  client: "Frameline (own product)",
  subtitle:
    "A design-engineering surface library — because taste doesn't ship as code unless someone builds the install path.",
  tags: ["Design system", "Dev-facing", "Built with Cursor"],
  skillsProven: [
    "Systems thinking and design systems",
    "Prototyping in code",
    "Developer tools aesthetic",
    "Interaction and visual craft",
  ],
  role: {
    owned: [
      "Product definition, discovery, and positioning",
      "Visual language and material catalog curation",
      "Live configurator UX and licensing clarity",
      "Full-stack implementation (Next.js, shaders, commerce flow)",
    ],
    notOwned: [
      "Third-party payment processor internals",
      "Community moderation at scale (pre-PMF)",
    ],
  },
  decisions: [
    {
      title: "PNG handoff vs. installable surface",
      chosen:
        "Typed React components with token binding, SSR-safe fallbacks, and `prefers-reduced-motion` support — materials you install, not PNGs you hope scale.",
      rejected:
        "Static export only. Faster to ship, but it doesn't solve the engineer's real job: production-safe code in their repo.",
    },
    {
      title: "Generic AI aesthetic vs. opinionated craft",
      chosen:
        "Curated materials with a clear visual signature — fewer items at a higher bar, each with measured performance budget.",
      rejected:
        "Volume catalog of anonymous effects (the Aceternity problem). High demo impact, zero differentiation.",
    },
    {
      title: "Research theater vs. shipped signals",
      chosen:
        "Fake-door pricing, waitlist, and install-intent logging to validate demand before heavy commerce build-out.",
      rejected:
        "Months of user interviews before a single material ships. Speed to PMF over research theater.",
    },
  ],
  collaborators: ["DUDESIGN (solo operator)", "Early design-engineer advisors"],
  links: [
    { label: "Live product", url: "https://frameline.ai" },
    { label: "GitHub", url: "https://github.com/freitaspauloo/frameline" },
  ],
  prototype: {
    label: "Open live product at frameline.ai",
    url: "https://frameline.ai",
    embed: true,
  },
  sections: [
    {
      id: "problem",
      title: "Problem",
      body: [
        "Teams that care how their product looks must ship that look in code. Every existing path forces a compromise: shadcn/Tailwind is structurally sound but visually anonymous; viral effect libraries look identical across thousands of sites; Figma Community files never ship; building in-house costs engineer-days nobody authorizes for 'the background.'",
        "The gap isn't a shortage of images. Taste does not currently ship as code.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "I defined Frameline as a commercial surface & materials system: typed React components, token-bound, production-safe, with a live configurator and plain-language licensing.",
        "Discovery Phase 01 focused on Gate 01 evidence — waitlist, willingness-to-pay, and install intent — before locking commerce architecture.",
        "The catalog includes screen templates (e.g. Softwave hero and feature cards) that demonstrate how materials compose into real product surfaces, not isolated demos.",
        "Built with Next.js App Router, WebGL shaders, and a solo-operable publishing pipeline so each new material ships in hours, not days.",
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      body: [
        "Live product at frameline.ai with a growing material catalog, configurator, and discovery instrumentation in place.",
        "Frameline doubles as portfolio proof: I own the full narrative from problem definition through shipped code.",
      ],
    },
    {
      id: "reflection",
      title: "What I'd do differently",
      body: [
        "Publish fewer materials earlier with stronger before/after case studies — buyers need to see transformation on a real app shell, not just the material in isolation.",
      ],
    },
  ],
  cover: {
    src: "/work/cases/frameline.png",
    alt: "Frameline design surface configurator",
  },
  logos: [{ src: "/work/logos/frameline.png", alt: "Frameline" }],
  published: true,
  order: 2,
};
