# Sheharyar Khan — Portfolio

A complete Next.js 16 / React 19 / TypeScript portfolio, built from Sheharyar's supplied full-stack résumé.

## Run locally

```sh
npm ci
npm run dev -- --port 3037
```

Open http://localhost:3037. If macOS reports a file watcher limit, use the static production preview instead:

```sh
npm run build
python3 -m http.server 3037 --directory out
```

## Production

`npm run build` generates a fully deployable static site in `out/`. Upload the contents to a static host, or use a Next.js host with build command `npm run build` and output directory `out`. No API keys, database, or paid runtime services are required.

The site is configured for Sites hosting through `.openai/hosting.json`. It is initially owner-private. Update `metadataBase`, canonical URL, `public/sitemap.xml`, and `public/robots.txt` when deploying to another domain.

## Edit

- `src/app/projects.ts`: six project case studies, sourced from the CV, with supplied portal and Figma links.
- `src/app/portfolio.tsx`: biography, experience, contact details, accessible interactions, SVG hero.
- `src/app/globals.css`: responsive styles, colors, animation, reduced-motion handling.
- `src/app/layout.tsx`: title, SEO, social metadata, canonical URL.
- `public/Sheharyar-Khan-CV.pdf`: original downloadable résumé.
- `public/fonts/`: self-hosted Manrope and Newsreader, with OFL licenses.
- `public/projects/`: selected page captures from the supplied Figma designs and the public Attack Insights site.

## Features

Interactive geometric hero with color remix; prominent skills section; six project detail dialogs with screen galleries; full-width section backgrounds; expandable career history; responsive mobile navigation; original résumé download; email and LinkedIn links; clipboard contact control; scroll progress; keyboard focus states; reduced-motion preference and manual pause; local font assets; static 404 page; metadata and social card.

Contact links open the visitor's mail client; the site does not claim to submit messages to a backend. Project artwork is an abstract visual interpretation; the detail galleries contain actual design captures. Portal links are marked invite-only. No invented project URLs, testimonials, or metrics.

## References

Original design, informed by the clear career storytelling at https://brittanychiang.com, playful interaction at https://bruno-simon.com, and expressive visual experiments at https://p5aholic.me. No source code or assets were copied from these portfolios.

## Validation

Run `npm run typecheck` and `npm run build`. The production export is the artifact to deploy. UI review covers desktop and mobile widths, project dialogs, menu navigation, career disclosure, motion controls, CV download, contact URLs, and console errors. See `VALIDATION.md` for the checks actually completed.
