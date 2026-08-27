export type CaseDecision = {
  title: string;
  chosen: string;
  rejected: string;
};

export type CaseLink = {
  label: string;
  url: string;
};

export type CasePrototype = {
  label: string;
  url: string;
  /** When false, show CTA card only (repo links, X-Frame-Options, etc.) */
  embed?: boolean;
};

export type CaseSection = {
  id: string;
  title: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  subtitle: string;
  tags: string[];
  skillsProven: string[];
  role: { owned: string[]; notOwned: string[] };
  decisions: CaseDecision[];
  collaborators: string[];
  links: CaseLink[];
  prototype?: CasePrototype;
  sections: CaseSection[];
  cover: { src: string; alt: string };
  logos?: { src: string; alt: string }[];
  featured?: boolean;
  published: boolean;
  order: number;
};
