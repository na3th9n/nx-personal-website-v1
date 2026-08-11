export interface Job {
  company: string;
  role: string;
  // e.g. "2023"
  start: string;
  // e.g. "Present"
  end: string;
  description: string;
}

// Auto-generated placeholder entries — swap in real work history later.
export const jobs: Job[] = [
  {
    company: "Acme Corp",
    role: "Software Engineer",
    start: "2023",
    end: "Present",
    description:
      "Built and maintained internal tools and customer-facing features across the stack, working closely with product and design to ship iteratively.",
  },
  {
    company: "Globex Inc.",
    role: "Software Engineer Intern",
    start: "2022",
    end: "2023",
    description:
      "Contributed to a small team shipping a web app end to end, from API design to frontend implementation and deployment.",
  },
  {
    company: "University Project Lab",
    role: "Research Assistant",
    start: "2021",
    end: "2022",
    description:
      "Prototyped and evaluated tooling for a research project, focusing on data pipelines and reproducible experiments.",
  },
];
