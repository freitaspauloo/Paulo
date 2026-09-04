import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedCases } from "@/src/content/cases";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Paulo Freitas — Product Designer, AI/SaaS",
};

export default function ResumePage() {
  const cases = getPublishedCases();

  return (
    <article className="resume-page">
      <p className="resume-hint">
        Print this page (Ctrl+P / Cmd+P) and save as PDF for applications.
      </p>

      <h1>Paulo Freitas</h1>
      <p className="resume-meta">
        {site.title} · {site.domain} · {site.email}
      </p>

      <section className="resume-block">
        <h2>Summary</h2>
        <p>
          Product designer with Fortune 500 craft (Audi, Samsung, 3M, Ford,
          Sony + Honda, Costco) and startup ship speed. I design complex AI/SaaS
          surfaces and implement production UI in code — working end to end with
          PM and Eng, from problem framing through shipped interface.
        </p>
      </section>

      <section className="resume-block">
        <h2>Skills</h2>
        <p>{site.skills.join(" · ")}</p>
      </section>

      <section className="resume-block">
        <h2>Selected work</h2>
        <ul>
          {cases.map((c) => (
            <li key={c.slug}>
              <strong>{c.title}</strong> — {c.subtitle}{" "}
              <Link href={`/work/${c.slug}`}>
                {site.domain}/work/{c.slug}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block">
        <h2>Experience</h2>
        <p>
          <strong>Founder / Creative Director, DUDESIGN</strong> (2020–present)
          — Product design partner for AI startups. Product judgment, UX/UI, and
          shipped interfaces in code.
        </p>
        <p>
          <strong>Design lead, XIX3D</strong> — Product design, HMI, and brand
          systems for automotive and tech clients.
        </p>
      </section>
    </article>
  );
}
