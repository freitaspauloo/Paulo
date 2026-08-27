import type { Metadata } from "next";
import Link from "next/link";
import { EnterpriseSection } from "@/src/components/EnterpriseSection";
import { getPublishedCases } from "@/src/content/cases";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Senior Product Designer — AI/SaaS. Based in the US market.",
};

export default function AboutPage() {
  const cases = getPublishedCases();

  return (
    <>
      <header className="page-intro">
        <h1>About</h1>
        <p>{site.tagline}</p>
      </header>

      <div className="about-page-grid">
        <div className="about-body">
          <p>
            I&apos;m Paulo Freitas — a product designer who works at the
            intersection of AI/SaaS, visual craft, and production UI. I ship
            for startups today; before that I led design at XIX3D for global
            clients including Audi, Samsung, 3M, Ford, Sony + Honda, and
            Costco.
          </p>
          <p>
            I also build my own tools when the market gap is obvious — like{" "}
            <a href="https://frameline.ai">Frameline</a> — and run{" "}
            <a href="https://dudesign.us">DUDESIGN</a> as an independent product
            design partner for AI startups.
          </p>
          <p>
            I&apos;m targeting <strong>Senior Product Designer — AI/SaaS</strong>{" "}
            roles in the US (~$200k). I work best with PM and Eng when the bet is
            clear but the surface is hard — complex B2B, agent UX, or dev-facing
            products that need to ship in code, not slide decks.
          </p>
          <p>
            <Link href="/resume">Résumé</Link>
            {" · "}
            <a href={site.linkedin}>LinkedIn</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <aside className="about-sidebar-panel">
          <h2>Skills · 50 JDs reviewed</h2>
          <ul className="tag-list" style={{ marginBottom: "1.25rem" }}>
            {site.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <h2>Case studies</h2>
          <ul>
            {cases.map((c) => (
              <li key={c.slug}>
                <Link href={`/work/${c.slug}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <EnterpriseSection />
    </>
  );
}
