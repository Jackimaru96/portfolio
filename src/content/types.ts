// See /CONTEXT.md for the definitions behind these types.

export type Disclosure = "full" | "anonymized" | "writeupOnly";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  disclosure: Disclosure;
  result: string;
  tags: string[];
  repoUrl?: string;
  belongsTo: string;
  highlights: string[];
  body: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  start: string;
  end: string;
  impact: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  start: string;
  end: string;
}
