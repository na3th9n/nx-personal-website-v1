export interface SiteContent {
  name: string;
  tagline: string;
  bio: string;
  social: {
    linkedin: string;
    github: string;
    // mailto link, e.g. "mailto:you@example.com"
    email: string;
  };
  // technologies listed in the About section
  techStack: string[];
}

export const site: SiteContent = {
  name: "Nathan Xie",
  tagline: "Placeholder tagline — one line about what you do.",
  bio: "Placeholder bio — a couple sentences about who you are and what you build.",
  social: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    email: "mailto:you@example.com",
  },
  techStack: ["TypeScript", "React", "Next.js", "Node.js"],
};
