import type { EducationEntry, ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "dsta-senior-product-engineer",
    role: "Senior Product Engineer",
    org: "DSTA",
    start: "2023-01",
    end: "present",
    impact: [
      "Lead end-to-end product discovery and feature delivery, from user pain points to prioritised roadmaps.",
      "Run technical demos and proof-of-concept builds, and evaluate AI/analytics platforms for build-vs-buy calls.",
    ],
  },
  {
    id: "dsta-software-engineer",
    role: "Software Engineer",
    org: "DSTA",
    start: "2021-06",
    end: "2023-01",
    impact: [
      "Built scalable React/TypeScript applications adopted across three or more product teams.",
      "Standardised frontend tooling (Webpack, Babel, ESLint) across four enterprise applications.",
    ],
  },
  {
    id: "young-maker-head-of-curriculum",
    role: "Head of Curriculum",
    org: "The Young Maker",
    start: "concurrent",
    end: "present",
    impact: [
      "Own curriculum product development for coding and robotics programmes for learners aged 4-18.",
      "Design and prototype new learning experiences in 3D printing, 3D modelling, and generative AI.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: "nus-computing",
    institution: "National University of Singapore",
    credential: "B.Comp, Computer Science (Honours with Merit)",
    start: "2017",
    end: "2021",
  },
];
