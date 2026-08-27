import type { CaseStudy } from "../types";
import { alignedAi } from "./aligned-ai";
import { builtops } from "./builtops";
import { frameline } from "./frameline";

export const allCases: CaseStudy[] = [alignedAi, frameline, builtops];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return allCases.find((c) => c.slug === slug);
}

export function getPublishedCases(): CaseStudy[] {
  return allCases
    .filter((c) => c.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedCase(): CaseStudy | undefined {
  return allCases.find((c) => c.featured && c.published);
}
