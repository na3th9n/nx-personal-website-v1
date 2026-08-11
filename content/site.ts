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

// Auto-generated placeholder copy — swap in your real details later.
export const site: SiteContent = {
  name: "Nathan Xie",
  tagline: "Software engineer who likes building things end to end.",
  bio: "I'm a software engineer who enjoys turning ideas into working products, from backend systems to the UI that sits on top of them. Lately I've been spending most of my time in TypeScript, exploring how far a small, well-considered toolset can go.",
  social: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    email: "mailto:you@example.com",
  },
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
  ],
};
