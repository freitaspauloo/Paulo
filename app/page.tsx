import { CaseCard } from "@/src/components/CaseCard";
import { EnterpriseSection } from "@/src/components/EnterpriseSection";
import { HomeFeatured } from "@/src/components/HomeFeatured";
import { HeroIntro } from "@/src/components/motion/HeroIntro";
import { Reveal } from "@/src/components/motion/Reveal";
import { SectionIntro } from "@/src/components/motion/SectionIntro";
import { getFeaturedCase, getPublishedCases } from "@/src/content/cases";
import { site } from "@/src/content/site";

export default function HomePage() {
  const cases = getPublishedCases();
  const featured = getFeaturedCase();
  const rest = cases.filter((c) => c.slug !== featured?.slug);

  return (
    <>
      <HeroIntro>
        <section className="home-hero">
          <p className="micro-label" data-hero>
            {site.name} — {site.title}
          </p>
          <h1 className="home-hero-title">
            <span data-hero>I design complex</span>
            <span data-hero>product surfaces</span>
            <span className="is-soft" data-hero>
              and ship them in code.
            </span>
          </h1>
          <div className="home-hero-foot" data-hero>
            <div className="cta-links">
              <a href={`mailto:${site.email}`}>Email</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <p className="home-hero-clients">
              {site.credibility.join("  ·  ")}
            </p>
          </div>
        </section>
      </HeroIntro>

      {featured ? <HomeFeatured caseStudy={featured} /> : null}

      <section className="home-workgrid workgrid" aria-label="Case studies">
        <h2 className="workgrid-headline">Case studies</h2>
        <SectionIntro index="02" label="Case studies" aside="Selected work" />
        <Reveal targets=".work-card-link" stagger={0.12}>
          <div className="work-cards">
            {rest.map((caseStudy, i) => (
              <CaseCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                index={String(i + 2).padStart(2, "0")}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <EnterpriseSection />

      <section className="home-cta" aria-label="Contact">
        <SectionIntro
          index="04"
          label="Contact"
          aside="Open to senior product design roles"
          sticky={false}
        />
        <Reveal>
          <p className="home-cta-line">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
