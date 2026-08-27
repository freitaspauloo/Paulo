export type EnterpriseHighlight = {
  client: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  logos: { src: string; alt: string }[];
};

export const enterpriseWork = {
  headline: "Fortune 500 craft.",
  subheadline: "Startup speed.",
  body: [
    "Before DUDESIGN, I led design at XIX3D — product design, HMI, and brand systems for global automotive and consumer tech clients.",
    "Audi, Samsung, 3M, Ford, Sony + Honda (Afeela), and Costco. The same bar now applied to AI-native product work.",
  ],
  mosaic: { src: "/work/tiles.png", alt: "Selected work across automotive, retail, and consumer tech" },
  clients: ["Audi", "Samsung", "3M", "Ford", "Sony + Honda", "Costco"],
  highlights: [
    {
      client: "Ford",
      title: "First OEM-aftermarket program",
      description:
        "Product and visual design for Ford's aftermarket digital experience — OEM-grade quality with partner velocity.",
      image: { src: "/work/cases/ford.png", alt: "Ford aftermarket digital experience" },
      logos: [{ src: "/work/logos/ford.svg", alt: "Ford" }],
    },
    {
      client: "Afeela",
      title: "EV personalization platform",
      description:
        "Sony + Honda venture — HMI and personalization surfaces for next-generation electric mobility.",
      image: { src: "/work/cases/afeela.png", alt: "Afeela EV personalization interface" },
      logos: [
        { src: "/work/logos/sony.svg", alt: "Sony" },
        { src: "/work/logos/honda.svg", alt: "Honda" },
      ],
    },
    {
      client: "Costco",
      title: "Retail technology at scale",
      description:
        "Consumer-facing digital touchpoints built for clarity and trust — high volume, no compromise on craft.",
      image: { src: "/work/cases/costco.png", alt: "Costco retail technology experience" },
      logos: [{ src: "/work/logos/costco.svg", alt: "Costco" }],
    },
  ] satisfies EnterpriseHighlight[],
} as const;
