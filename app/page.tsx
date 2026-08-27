import { CaseCard } from "@/src/components/CaseCard";
import { EnterpriseSection } from "@/src/components/EnterpriseSection";
import { HomeFeatured } from "@/src/components/HomeFeatured";
import {
  getFeaturedCase,
  getPublishedCases,
} from "@/src/content/cases";
import { site } from "@/src/content/site";

export default function HomePage() {
  const cases = getPublishedCases();
  const featured = getFeaturedCase();
  const rest = cases.filter((c) => c.slug !== featured?.slug);

  return (
    <>
      <section className="home-hero">
        <p className="micro-label">{site.title}</p>
        <h1 className="home-hero-title">{site.name}</h1>
        <p className="home-hero-tagline">{site.tagline}</p>
        <div className="cta-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </section>

      {featured ? <HomeFeatured caseStudy={featured} /> : null}

      <section className="home-workgrid workgrid" aria-label="Case studies">
        <h2 className="workgrid-headline">Case studies</h2>
        <div className="work-cards">
          {rest.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <EnterpriseSection />
    </>
  );
}
