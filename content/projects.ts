export interface Project {
  name: string;
  description: string;
  // link to repo or live site
  url: string;
  // technologies used
  tags: string[];
}

// Placeholder entries — CLAUDE.md's seed project list wasn't filled in yet, swap these for the real ones.
export const projects: Project[] = [
  {
    name: "Project One",
    description: "Placeholder description of project one.",
    url: "https://github.com/your-handle/project-one",
    tags: ["TypeScript", "Next.js"],
  },
  {
    name: "Project Two",
    description: "Placeholder description of project two.",
    url: "https://github.com/your-handle/project-two",
    tags: ["Python"],
  },
];
