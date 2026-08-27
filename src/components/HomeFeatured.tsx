import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";

type Props = {
  caseStudy: CaseStudy;
};

export function HomeFeatured({ caseStudy }: Props) {
  return (
    <section className="home-featured" aria-label="Featured case study">
      <p className="micro-label home-section-label">Featured work</p>
      <Link href={`/work/${caseStudy.slug}`} className="home-featured-link">
        <div className="featured">
          <div className="featured-copy">
            <div className="featured-main">
              {caseStudy.logos && caseStudy.logos.length > 0 ? (
                <div className="featured-logos">
                  {caseStudy.logos.map((logo) => (
                    <img key={logo.src} src={assetPath(logo.src)} alt={logo.alt} />
                  ))}
                </div>
              ) : null}
              <div className="featured-text">
                <h2 className="featured-title">{caseStudy.title}</h2>
                <p className="featured-lead">{caseStudy.subtitle}</p>
              </div>
              <div className="featured-tags-block">
                <p className="micro-label">Focus</p>
                <ul className="tag-list">
                  {caseStudy.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="featured-media">
            <span>
              <Image
                src={caseStudy.cover.src}
                alt={caseStudy.cover.alt}
                fill
                unoptimized
                style={{ objectFit: "cover" }}
                priority
              />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
