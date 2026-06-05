/* eslint-disable @next/next/no-img-element */
// 🏢 Aligned for Enterprise — a faithful transfer of the Figma frame
// (Aligned-2, node 2482:1570). Each section of the design is rendered at its
// native 1920px width and scales down responsively, so it reads pixel-for-pixel
// like the source design.

const sections = [
  { src: "/enterprise/sec-hero.png", alt: "Hero — One AI for everything" },
  { src: "/enterprise/sec-cards.png", alt: "What you can do with Aligned AI" },
  { src: "/enterprise/sec-private.png", alt: "Private by design" },
  { src: "/enterprise/sec-answers.png", alt: "Answers you can trust" },
  { src: "/enterprise/sec-charts.png", alt: "Just as good, a fraction of the cost" },
  { src: "/enterprise/sec-powerful.png", alt: "Powerful AI, tailored to you" },
  { src: "/enterprise/sec-safe.png", alt: "Safe for teens, in your control" },
  { src: "/enterprise/sec-footer.png", alt: "Footer" },
];

export default function EnterprisePage() {
  return (
    <main className="mx-auto w-full max-w-[1920px] bg-[#fafbfc]">
      {sections.map((s) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className="block w-full"
        />
      ))}
    </main>
  );
}
