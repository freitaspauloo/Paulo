import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";

type Props = {
  caseStudy: CaseStudy;
  /** Editorial index label, e.g. "02" */
  index?: string;
};

export function CaseCard({ caseStudy, index }: Props) {
  return (
    <Link href={`/work/${caseStudy.slug}`} className="work-card-link">
      <article className="work-card">
        {index ? (
          <div className="work-card-head">
            <p className="micro-label">Case — {index}</p>
            <p className="micro-label">{caseStudy.client}</p>
          </div>
        ) : null}
        <div className="work-card-media">
          <Image
            src={assetPath(caseStudy.cover.src)}
            alt={caseStudy.cover.alt}
            fill
            unoptimized
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="work-card-meta">
          <div>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.tags.join(" · ")}</p>
          </div>
          {caseStudy.logos && caseStudy.logos.length > 0 ? (
            <div className="work-card-logos">
              {caseStudy.logos.map((logo) => (
                <img key={logo.src} src={assetPath(logo.src)} alt={logo.alt} />
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
