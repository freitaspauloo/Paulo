export type SocialChannel = "LinkedIn" | "X" | "Instagram";
export type SocialFormat =
  | "Offer"
  | "Diary"
  | "Scorecard"
  | "Case"
  | "Stack"
  | "Why-us"
  | "Face";

export type SocialPost = {
  slug: string;
  number: string;
  title: string;
  date: string;
  format: SocialFormat;
  channels: SocialChannel[];
  visual: string;
  linkedin: string;
  x: string;
};

export const socialPosts: SocialPost[] = [
  {
    slug: "wait-three-months",
    number: "01",
    title: "Most teams wait months for a Figma file",
    date: "2026-09-12",
    format: "Offer",
    channels: ["LinkedIn", "X"],
    visual: "Figma poster. CRT on the hill. 1080 x 1350.",
    linkedin: `Week 1 we lock the bet.
What the product is for, who uses it, what success looks like. Architecture and the key flows a human actually uses.

Week 2 the first surface ships in the product.
Components, pages, click-through. Your team reacts to real UI, not a file.

From week 3 I keep building in code.
Production UI, iteration in the build, design and implementation in the same place. No handoff queue.`,
    x: `Week 1: bet, architecture, key flows.
Week 2: first surface in the product.
Week 3+: production UI, same stack, no handoff queue.`,
  },
  {
    slug: "softwave-hero",
    number: "02",
    title: "Softwave hero surfaces",
    date: "2026-09-15",
    format: "Case",
    channels: ["LinkedIn", "X", "Instagram"],
    visual: "Softwave device frame. Frameline surface library.",
    linkedin: `Softwave hero surfaces.
Frameline template. Designed and coded.`,
    x: `Softwave hero surfaces. Frameline template. Designed and coded.`,
  },
  {
    slug: "model-default",
    number: "03",
    title: "Most AI products look the same",
    date: "2026-09-17",
    format: "Why-us",
    channels: ["LinkedIn", "X", "Instagram"],
    visual: "Split. Generic chat on the left. Designed surface on the right.",
    linkedin: `Most AI products look the same.
Same chat. Same purple button. Same "ask anything."
That's the model default. Not a designed product.
I replace that screen and ship it in code.`,
    x: `Most AI products look the same.
That's the model default. I replace that screen and ship it in code.`,
  },
  {
    slug: "how-a-surface-ships",
    number: "04",
    title: "How a surface ships",
    date: "2026-09-19",
    format: "Stack",
    channels: ["LinkedIn", "X"],
    visual: "Three boxes. Bet. Surface. In the product.",
    linkedin: `How a surface ships.
1. The bet. What it is for.
2. The surface. The screen a human uses.
3. In the product. Clickable. Not a Figma file.
That's the job.`,
    x: `How a surface ships: bet, surface, in the product.
Figma is a step. Not the product.`,
  },
  {
    slug: "not-that-hire",
    number: "05",
    title: "You don't need that hire",
    date: "2026-09-22",
    format: "Offer",
    channels: ["LinkedIn", "X"],
    visual: "Two columns. File / Code.",
    linkedin: `You don't need a design-engineer hire to ship the interface.
I design the surface and put it in the product.
Your engineers keep the backend.`,
    x: `You don't need a design-engineer hire.
I design the surface and ship it in code.`,
  },
  {
    slug: "fortune-500-craft",
    number: "06",
    title: "A product designer who engineers",
    date: "2026-09-24",
    format: "Face",
    channels: ["LinkedIn", "X", "Instagram"],
    visual: "Type card. Paulo line. Swap a photo later if you want.",
    linkedin: `I'm Paulo. A product designer who engineers.
I design the surface and ship it in code.
Previously Audi, Samsung, 3M, Ford, Sony + Honda, Costco.
Now AI products.`,
    x: `I'm Paulo. A product designer who engineers.
I design the surface and ship it in code.`,
  },
  {
    slug: "yc-landing",
    number: "07",
    title: "Partnering with a YC company",
    date: "2026-09-13",
    format: "Diary",
    channels: ["LinkedIn", "X"],
    visual: "Minimal mark. No company name.",
    linkedin: `Partnering with a YC company on their landing.
The brief: looks AI-generated. Fix the buttons. Keep it minimal.
I'm doing it in code. Not a Figma dump.`,
    x: `YC landing this week.
Brief: looks AI-generated. Fix the buttons.
Doing it in code.`,
  },
  {
    slug: "product-was-last",
    number: "08",
    title: "The product was last on the page",
    date: "2026-09-16",
    format: "Case",
    channels: ["LinkedIn", "X", "Instagram"],
    visual: "Route diagram. No company name.",
    linkedin: `The product was last on the page.
The hero talked. The thing that is the product sat at the bottom, small, with no caption.
Promote it. Put one sentence under it.`,
    x: `The product was last on the page.
Promote it. One sentence under it.`,
  },
  {
    slug: "keep-the-system",
    number: "09",
    title: "Keep the system. Fix the buttons",
    date: "2026-09-18",
    format: "Stack",
    channels: ["LinkedIn", "X"],
    visual: "Three buttons. Primary, secondary, ghost.",
    linkedin: `They didn't ask for a new brand.
Keep the system. Fix the buttons.
Three CTAs with the same weight is why the page looks generated.
That's the work.`,
    x: `They didn't ask for a new brand.
Keep the system. Fix the buttons.`,
  },
];

export function getSocialPost(slug: string): SocialPost | undefined {
  return socialPosts.find((post) => post.slug === slug);
}
