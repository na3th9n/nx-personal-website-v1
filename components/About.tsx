"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";

export function About() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm text-muted">{"// about"}</h2>
      <p className="leading-relaxed">{site.bio}</p>
      <ul className="flex flex-wrap gap-2">
        {site.techStack.map((tech) => (
          <motion.li
            key={tech}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
            className="glow-hover rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
