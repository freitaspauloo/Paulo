import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";
import { Parallax } from "./motion/Parallax";
import { Reveal } from "./motion/Reveal";
import { SectionIntro } from "./motion/SectionIntro";
import { BtnArrow } from "./BtnArrow";

type Props = {
  caseStudy: CaseStudy;
};

export function HomeFeatured({ caseStudy }: Props) {
  return (
    <section className="home-featured" aria-label="Featured case study">
      <SectionIntro
        index="01"
        label="Featured case"
        aside={caseStudy.client}
      />
      <Link href={`/work/${caseStudy.slug}`} className="home-featured-link">
        <Parallax className="featured-hero-media" amount={6}>
          <Image
            src={assetPath(caseStudy.cover.src)}
            alt={caseStudy.cover.alt}
            fill
            unoptimized
            style={{ objectFit: "cover" }}
            priority
          />
        </Parallax>
        <Reveal targets="[data-reveal]" className="featured-below">
          <h2 className="featured-title" data-reveal>
            {caseStudy.title}
          </h2>
          <div className="featured-below-copy" data-reveal>
            <p className="featured-lead">{caseStudy.subtitle}</p>
            <ul className="tag-list">
              {caseStudy.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className="btn btn--ghost featured-cta">
              Read case study
              <BtnArrow />
            </span>
          </div>
        </Reveal>
      </Link>
    </section>
  );
}
