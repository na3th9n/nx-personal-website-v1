import { site } from "@/content/site";

export function About() {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">About</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{site.bio}</p>
      <ul className="flex flex-wrap gap-2 text-sm">
        {site.techStack.map((tech) => (
          <li key={tech} className="rounded-full border px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
