export interface Project {
  name: string;
  description: string;
  // link to repo or live site
  url: string;
  // technologies used
  tags: string[];
}

// Auto-generated placeholder entries — CLAUDE.md's seed project list wasn't
// filled in yet, swap these for the real ones.
export const projects: Project[] = [
  {
    name: "Task Tracker",
    description:
      "A minimal task manager with keyboard-first navigation, optimistic updates, and offline support.",
    url: "https://github.com/your-handle/task-tracker",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
  },
  {
    name: "Weather Dashboard",
    description:
      "A weather dashboard that pulls from a public API and visualizes forecasts with simple, readable charts.",
    url: "https://github.com/your-handle/weather-dashboard",
    tags: ["React", "Node.js"],
  },
  {
    name: "Link Shortener",
    description:
      "A self-hosted URL shortener with click analytics, built to learn the ins and outs of caching and redirects.",
    url: "https://github.com/your-handle/link-shortener",
    tags: ["Python", "Docker"],
  },
];
