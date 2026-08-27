import type { Metadata } from "next";
import { CaseCard } from "@/src/components/CaseCard";
import { getPublishedCases } from "@/src/content/cases";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in AI/SaaS product design — shipped in code.",
};

export default function WorkPage() {
  const cases = getPublishedCases();

  return (
    <>
      <header className="page-intro">
        <h1>Work</h1>
        <p>
          Three case studies mapped to what senior product design roles ask for
          most — AI UX, code prototypes, and enterprise complexity.
        </p>
      </header>
      <section className="workgrid">
        <div className="work-cards work-cards--three">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>
    </>
  );
}
