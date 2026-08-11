"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

// Milliseconds between each typed character in the name animation.
const TYPE_SPEED_MS = 90;

export function Header() {
  const [typed, setTyped] = useState("");
  const finishedTyping = typed.length >= site.name.length;

  useEffect(() => {
    if (finishedTyping) return;
    const timeout = setTimeout(() => {
      setTyped(site.name.slice(0, typed.length + 1));
    }, TYPE_SPEED_MS);
    return () => clearTimeout(timeout);
  }, [typed, finishedTyping]);

  return (
    <header className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="glow-text flex items-center text-6xl font-semibold tracking-tight sm:text-7xl">
          {typed}
          <span
            className={`ml-2 inline-block h-[0.85em] w-[0.5em] bg-white ${
              finishedTyping ? "cursor-blink" : ""
            }`}
            aria-hidden="true"
          />
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
