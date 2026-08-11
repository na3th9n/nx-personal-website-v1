import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-sm font-medium tracking-wide text-muted uppercase">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-1">
            <h3 className="font-medium">
              <a
                href={project.url}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {project.name}
              </a>
            </h3>
            <p className="leading-relaxed text-muted">{project.description}</p>
            <p className="font-mono text-xs text-muted">{project.tags.join(" / ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
