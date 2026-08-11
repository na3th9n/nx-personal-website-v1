import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Projects</h2>
      {projects.map((project) => (
        <div key={project.name} className="flex flex-col gap-1">
          <h3 className="font-medium">
            <a href={project.url}>{project.name}</a>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
          <p className="text-sm text-zinc-500">{project.tags.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}
