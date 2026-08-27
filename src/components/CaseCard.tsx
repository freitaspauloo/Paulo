import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";

type Props = {
  caseStudy: CaseStudy;
};

export function CaseCard({ caseStudy }: Props) {
  return (
    <Link href={`/work/${caseStudy.slug}`} className="work-card-link">
      <article className="work-card">
        <div className="work-card-media">
          <Image
            src={caseStudy.cover.src}
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
