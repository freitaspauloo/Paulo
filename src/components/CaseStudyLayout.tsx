import Image from "next/image";
import Link from "next/link";
import { getPublishedCases } from "@/src/content/cases";
import type { CaseStudy } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";
import { DecisionBlock } from "./DecisionBlock";
import { LivePrototype } from "./LivePrototype";
import { HeroIntro } from "./motion/HeroIntro";
import { Reveal } from "./motion/Reveal";
import { ProofStrip } from "./ProofStrip";
import { SkillTags } from "./SkillTags";

type Props = {
  caseStudy: CaseStudy;
};

export function CaseStudyLayout({ caseStudy }: Props) {
  const published = getPublishedCases();
  const idx = published.findIndex((c) => c.slug === caseStudy.slug);
  const next = published.length > 1 ? published[(idx + 1) % published.length] : undefined;

  return (
    <article className="case-study">
      <HeroIntro>
        <header className="case-study__header">
          <Link href="/work" className="case-study__back" data-hero>
            ← All work
          </Link>
          <p className="case-study__client" data-hero>
            {caseStudy.client}
          </p>
          <h1 data-hero>{caseStudy.title}</h1>
          <p className="case-study__subtitle" data-hero>
            {caseStudy.subtitle}
          </p>
          <div className="case-study__meta" data-hero>
            <SkillTags skills={caseStudy.skillsProven} />
            <ProofStrip links={caseStudy.links} />
          </div>
        </header>

        <div className="case-study__hero" data-hero>
          <Image
            src={assetPath(caseStudy.cover.src)}
            alt={caseStudy.cover.alt}
            width={1200}
            height={675}
            className="case-study__cover"
            priority
            unoptimized
          />
        </div>
      </HeroIntro>

      {caseStudy.prototype ? (
        <Reveal>
          <LivePrototype prototype={caseStudy.prototype} />
        </Reveal>
      ) : null}

      <div className="case-study__grid">
        <Reveal>
          <section className="case-study__role">
            <h2>My role</h2>
            <div className="role-columns">
              <div>
                <h3>Owned</h3>
                <ul>
                  {caseStudy.role.owned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Did not own</h3>
                <ul>
                  {caseStudy.role.notOwned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {caseStudy.collaborators.length > 0 && (
              <p className="collaborators">
                <strong>Collaborators:</strong>{" "}
                {caseStudy.collaborators.join(", ")}
              </p>
            )}
          </section>
        </Reveal>

        {caseStudy.sections.map((section) => (
          <Reveal key={section.id}>
            <section id={section.id} className="case-study__section">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </section>
          </Reveal>
        ))}

        <Reveal>
          <section className="case-study__decisions">
            <h2>Key decisions</h2>
            <DecisionBlock decisions={caseStudy.decisions} />
          </section>
        </Reveal>
      </div>

      {next ? (
        <Reveal>
          <footer className="case-next">
            <p className="micro-label">Next case</p>
            <Link href={`/work/${next.slug}`} className="case-next-link">
              {next.title}
              <span className="case-next-arrow" aria-hidden>
                →
              </span>
            </Link>
          </footer>
        </Reveal>
      ) : null}
    </article>
  );
}
