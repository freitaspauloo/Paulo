import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BtnArrow } from "@/src/components/BtnArrow";
import { Reveal } from "@/src/components/motion/Reveal";
import { SwapLabel } from "@/src/components/SwapLabel";
import { getPublishedCases } from "@/src/content/cases";
import { assetPath } from "@/src/lib/asset-path";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in AI/SaaS product design — shipped in code.",
};

export default function WorkPage() {
  const cases = getPublishedCases();

  return (
    <>
      <header className="page-intro page-intro--frame">
        <h1>Work</h1>
        <p>
          Case studies in AI UX, code prototypes, and enterprise complexity —
          shipped in product, not slide decks.
        </p>
      </header>
      <section className="work-rows work-rows--frame" aria-label="Case studies">
        {cases.map((caseStudy, i) => (
          <Reveal key={caseStudy.slug} targets="[data-reveal]">
            <article className="work-row">
              <Link href={`/work/${caseStudy.slug}`} className="work-row-link">
                <div className="work-row-copy" data-reveal>
                  <span className="work-row-index">
                    {String(i + 1).padStart(2, "0")} —{" "}
                    <SwapLabel>{caseStudy.client}</SwapLabel>
                  </span>
                  <h2>
                    <SwapLabel>{caseStudy.title}</SwapLabel>
                  </h2>
                  <p className="work-row-lead">{caseStudy.subtitle}</p>
                  <ul className="tag-list">
                    {caseStudy.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="btn btn--ghost work-row-cta">
                    Read case study
                    <BtnArrow />
                  </span>
                </div>
                <div className="work-row-media" data-reveal>
                  <Image
                    src={assetPath(caseStudy.cover.src)}
                    alt={caseStudy.cover.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 960px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
