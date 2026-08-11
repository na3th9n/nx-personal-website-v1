import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
        <nav className="flex items-center gap-4 text-muted">
          <a
            href={site.social.github}
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.email}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>
      <p className="text-muted">{site.tagline}</p>
    </header>
  );
}
