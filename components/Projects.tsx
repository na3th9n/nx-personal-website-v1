"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-mono text-sm text-muted">// projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-1">
            <h3 className="font-medium">
              <motion.a
                href={project.url}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className="glow-hover underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {project.name}
              </motion.a>
            </h3>
            <p className="leading-relaxed text-muted">{project.description}</p>
            <p className="font-mono text-xs text-muted">{project.tags.join(" / ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
