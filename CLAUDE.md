# CLAUDE.md

## Project

Personal portfolio website for Nathan — a single site to showcase who he is and the projects he's built. This is his first full project built end-to-end with Claude Code, so favor clarity and small, reviewable steps over doing everything in one shot.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Deployed on Vercel
- No CMS, no backend — static content, rendered from local data files

## Design direction

- Use this website as a template for the vibes of the website: https://github.com/chrismwilliams/astro-theme-cactus. Do not copy their code or how they designed the website. Stick to a simple mimic to the design and adhere to the stack that I defined.
- Aesthetic: minimalist single page, refined with a modern/techy edge — not plain. Warm neutral palette (light/dark via `prefers-color-scheme`) with a small accent color used sparingly.
- Layout: The layout will be similar to how the example portfolio website looks like. The sections that of the page will the header with my name and have icons linking to my linkedin, github, and email. Below we will have sections: about with a list of the technologies I use, places I worked at, and projects
- Fonts: Space Grotesk, unified across the whole site (headings, body, and meta text like dates/tags/section labels) — loaded via `next/font/google` in `app/layout.tsx`. Don't reintroduce a second font without being asked.
- Terminal-inspired touches: section headers are comment-style (`// about`, `// experience`, `// projects`) instead of plain uppercase labels. The header name types itself out on load (typewriter effect, see `components/Header.tsx`), ending in a white blinking block cursor.
- Motion: subtle only — scroll-reveal (fade + slight upward slide) on each section via the shared `components/Reveal.tsx` wrapper, and small hover micro-interactions (scale, glow) on interactive elements (project links, tech pills, nav icons). Keep durations short (~150-300ms) and offsets small; this is a minimalist site being refined, not turned into a motion showcase.
- Glow accents: a soft `text-shadow`/`drop-shadow` using the `--accent-glow` CSS variable (defined in `app/globals.css`) is used behind the name and on hover states — keep it subtle, not neon.
- Background: a subtle dot-grid texture (`radial-gradient` on `body` in `app/globals.css`), using the existing `--border` color so it stays theme-aware.
- Dependencies: `framer-motion` is an approved dependency for the motion described above, and Space Grotesk is the approved font — no need to re-ask before using them. Beyond that, keep dependencies minimal — no carousel libraries, no additional animation/UI libraries unless explicitly requested.

## Content architecture (important)

All content lives in `/content` as typed TypeScript data — never hardcoded inside components. This is so Nathan can edit content directly later without needing help re-editing.

```
/content
  site.ts       — name, tagline, bio, social/contact linksa, about
  jobs.ts       - places I worked at
  projects.ts   — array of project objects
/components      — pure rendering only, imports from /content, no literal copy in JSX
```

Field names in `/content` should be self-explanatory, with a brief comment on any field whose purpose isn't obvious from the name.

## Seed content — projects to scaffold into projects.ts

Nathan will refine the wording, but start with these as real entries (not placeholders):

## Working style

- Build in passes: structure/scaffold first, then real content, then styling/polish, then deploy config. Don't do all of this in one giant step.
- For any non-trivial step (e.g. initial scaffold), lay out the plan before writing files.
- Prioritize simplicity and readability over cleverness — this needs to stay maintainable by Nathan alone, without Claude's help for routine edits.
