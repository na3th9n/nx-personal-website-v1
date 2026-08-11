import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h1 className="glow-text text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
          <span className="cursor-blink text-accent" aria-hidden="true">
            _
          </span>
        </h1>
        <nav className="flex items-center gap-4 text-muted">
          <a
            href={site.social.github}
            aria-label="GitHub"
            className="glow-hover transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.linkedin}
            aria-label="LinkedIn"
            className="glow-hover transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.email}
            aria-label="Email"
            className="glow-hover transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>
      <p className="text-sm text-muted">{site.tagline}</p>
    </header>
  );
}
