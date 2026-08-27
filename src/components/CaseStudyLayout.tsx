import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/src/content/types";
import { DecisionBlock } from "./DecisionBlock";
import { LivePrototype } from "./LivePrototype";
import { ProofStrip } from "./ProofStrip";
import { SkillTags } from "./SkillTags";

type Props = {
  caseStudy: CaseStudy;
};

export function CaseStudyLayout({ caseStudy }: Props) {
  return (
    <article className="case-study">
      <header className="case-study__header">
        <Link href="/work" className="case-study__back">
          ← All work
        </Link>
        <p className="case-study__client">{caseStudy.client}</p>
        <h1>{caseStudy.title}</h1>
        <p className="case-study__subtitle">{caseStudy.subtitle}</p>
        <SkillTags skills={caseStudy.skillsProven} />
        <ProofStrip links={caseStudy.links} />
      </header>

      <div className="case-study__hero">
        <Image
          src={caseStudy.cover.src}
          alt={caseStudy.cover.alt}
          width={1200}
          height={675}
          className="case-study__cover"
          priority
          unoptimized
        />
      </div>

      {caseStudy.prototype ? (
        <LivePrototype prototype={caseStudy.prototype} />
      ) : null}

      <div className="case-study__grid">
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

        {caseStudy.sections.map((section) => (
          <section key={section.id} id={section.id} className="case-study__section">
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="case-study__decisions">
          <h2>Key decisions</h2>
          <DecisionBlock decisions={caseStudy.decisions} />
        </section>
      </div>
    </article>
  );
}
