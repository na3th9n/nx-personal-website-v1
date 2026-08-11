import { site } from "@/content/site";

export function Header() {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{site.name}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{site.tagline}</p>
      <nav className="flex gap-4 text-sm">
        <a href={site.social.github}>GitHub</a>
        <a href={site.social.linkedin}>LinkedIn</a>
        <a href={site.social.email}>Email</a>
      </nav>
    </header>
  );
}
