import { site } from "@/content/site";

export function About() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-medium tracking-wide text-muted uppercase">
        About
      </h2>
      <p className="leading-relaxed">{site.bio}</p>
      <ul className="flex flex-wrap gap-2">
        {site.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
