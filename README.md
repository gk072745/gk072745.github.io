# Govind Kumawat — Portfolio

Personal portfolio website deployed at [gk072745.github.io](https://gk072745.github.io).

---

## Goal

A modern, fully responsive portfolio targeting senior/high-impact engineering roles (20 LPA+ / US tech). Built from scratch with a clean, maintainable codebase.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | React 18                          |
| Bundler     | Vite 5                            |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`), global `src/index.css` |
| Routing     | React Router v7 (`createBrowserRouter` + `RouterProvider`) |
| Icons       | React Icons                       |
| i18n        | i18next, react-i18next, LanguageDetector (`en`, `hi`, `ja`, `de`, `fr`, `es`, `pt`, `it`, `ko`, `zh`) |
| Deployment  | GitHub Pages via `gh-pages`       |

---

## Project Structure

```
gk072745.github.io/
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Hero/            # Hero section (landing)
│   │   ├── About/           # About section (#about)
│   │   ├── Experience/      # Experience section (#experience)
│   │   ├── Projects/        # Projects section (#projects)
│   │   ├── Skills/          # Skills section (#skills)
│   │   ├── Education/       # Education section (#education)
│   │   ├── Certifications/  # Certifications section (#certifications)
│   │   └── shared/          # Shared primitives (`SectionContainer`, `LanguageSelect`, …)
│   ├── data/
│   │   └── portfolioContent.js   # Section roadmap + placeholder copy
│   ├── helpers/
│   │   ├── animation.js        # `cn()` for class names
│   │   ├── i18n.js             # locales list, normalization, picker labels
│   │   ├── svgicons.js        # theme-tintable tech SVGs (`currentColor`, built from `_techPaths.json`)
│   │   ├── _techPaths.json     # path `d` strings (regenerate: `node scripts/extract-si-paths.mjs`)
│   │   └── resolveTechVisual.js  # label → `{ Icon, iconClassName }` for `TechPill`
│   ├── hooks/
│   │   ├── useLocale.js      # language change + synced <html lang>
│   │   └── useTheme.js       # persisted light/dark (`html.dark` + `data-theme`)
│   ├── i18n/
│   │   ├── index.js          # i18next init + detectors
│   │   └── locales/          # one JSON file per language
│   ├── pages/
│   ├── index.css             # `@import "tailwindcss"`, base layer, keyframes
│   ├── App.jsx               # Root layout shell (header + Outlet)
│   ├── router.jsx            # Route config via createBrowserRouter
│   └── main.jsx              # mounts RouterProvider after `./i18n` init
├── index.html                # default `class="dark"` + `data-theme` on `<html>`
├── vite.config.js
└── package.json
```

---

## Styling conventions

| Item | Detail |
|------|--------|
| Utilities | Tailwind classes on `className`; merge with `cn()` from `src/helpers/animation.js` when conditional |
| Global CSS | `src/index.css` — Tailwind import, `@layer base` for `body`, shared `@keyframes` for section motion |
| Dark mode | `html` class `dark` toggled in `useTheme`; use `dark:` variants in components |
| Motion | Prefer `motion-safe:` / `motion-reduce:` patterns consistent with `SectionContainer` |
| Tech icons | Use `src/helpers/svgicons.js` (+ `resolveTechVisual`); colour only via Tailwind on the SVG (`text-violet-400`, etc.) — paths are MIT Simple Icons data in `_techPaths.json` |

---

## i18n conventions

| Item | Detail |
|------|--------|
| Locale files | `src/i18n/locales/{code}.json` — mirrored keys across all locales. |
| Detection | Stored under `portfolio_language`, browser language fallback, synced `document.documentElement.lang`. |
| Switching UI | Implemented in [`src/App.jsx`](src/App.jsx) (root layout) with native labels curated in [`src/helpers/i18n.js`](src/helpers/i18n.js). |
| Adding languages | Duplicate JSON skeleton, extend `SUPPORTED_LANGUAGE_CODES`, update picker labels & sync mapping in `helpers/i18n.js`. |

---

## MCP tooling (Cursor IDE)

For agents that need a **real browser**, enable MCP servers in Cursor. This repo lists recommended entries in [`.cursor/mcp.json`](.cursor/mcp.json):

| Server | Purpose |
|--------|---------|
| **chrome-devtools-mcp** | Official Chrome DevTools MCP — open `http://localhost:5173`, inspect console/network, screenshots, traces. Runs via `npx chrome-devtools-mcp@latest` (`--no-usage-statistics` in config). Requires **Node.js ≥ 20.19** and **Chrome stable**. Repo: [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp). |
| **Playwright MCP** (`@playwright/mcp`) | Scripted navigation, snapshots, responsiveness checks across engines. |

After editing MCP config, restart Cursor or reload MCP. Keep `npm run dev` running locally so agents can attach to Vite.

---

### Routing architecture

Routing uses the modern data-router setup:
- [`src/router.jsx`](src/router.jsx): `createBrowserRouter([...])`
- [`src/main.jsx`](src/main.jsx): `<RouterProvider router={router} />`
- [`src/App.jsx`](src/App.jsx): root route layout with `<Outlet />`

This matches the current React Router v7 data-router style (no legacy `BrowserRouter`).

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

`package-lock.json` is gitignored (not committed). Each checkout resolves dependencies from `package.json`; run `npm install` after pulling.

Add your PDF at [`public/resume.pdf`](public/resume.pdf) so the Hero **Resume** button works (otherwise the file will 404 until you add it).

### Run locally

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173). Hot-reload is enabled.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Tailwind is compiled through the Vite plugin (`@tailwindcss/vite` in [`vite.config.js`](vite.config.js)).

### Preview production build locally

```bash
npm run preview
```

---

## Deployment

The `gh-pages` branch is the live deployed site. To deploy:

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`), then pushes the `dist/` folder to the `gh-pages` branch.

---

## Responsive Breakpoints

Design and test at least these widths: **375**, **480**, **768**, **1024**, **1280**, and **1600** px.

In code, use Tailwind’s responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) with a mobile-first default. See [`.cursor/rules/responsive-design.mdc`](.cursor/rules/responsive-design.mdc) for token reference.

---

## Build Log

| Date       | Change                                                              |
|------------|---------------------------------------------------------------------|
| 2026-05-06 | **Certifications** section (`#certifications`): responsive cards with issuer/year, credential link CTA + i18n; `portfolioContent.certifications` → `{ summary, items }` |
| 2026-05-06 | **Education** section (`#education`): degree timeline card, school/date row, coursework note label + i18n; `portfolioContent.education` → `{ summary, items }` |
| 2026-05-06 | Projects card layout fix: add visible gap between tech chips and CTA divider (`mt-5` before border) |
| 2026-05-06 | **Skills** section (`#skills`): category cards with themed `TechPill` chips, i18n labels across 10 locales, wired after Projects in `Home` |
| 2026-05-06 | **Projects** section (`#projects`): responsive 2-column cards, impact callout, `TechPill` tags, external Live/Source links + i18n; `portfolioContent.projects` → `{ summary, items }` |
| 2026-05-06 | Experience: tighten vertical gap between highlights and tech stack (`pt-3` only, no extra `mt-*`) |
| 2026-05-06 | Experience: “Tech stack” label + i18n; subtler separator above chips; `gap-3` between pills; role `pb-8` before next-entry divider (`last:pb-0`) |
| 2026-05-06 | Tech icons: `TECH_ICON_TINT` = `text-violet-700 dark:text-violet-400` (violet-only, no fuchsia); React 32×32 atom path (`currentColor`); `TechPill` full-opacity icons |
| 2026-05-06 | Tech stacks: `svgicons.js` + `_techPaths.json` (Simple Icons paths, `currentColor`); `TechPill` normalizes icon box so mixed glyphs align |
| 2026-05-06 | Experience tech pills: themed SVG icons (`resolveTechVisual` + `TechPill`) with inset-ring edge + shared height; slight check icon nudge in `HighlightCheckRow` |
| 2026-05-06 | Highlights / experience bullets: `HighlightCheckRow` + `lh` alignment; new **Experience** section (`#experience`) mirroring About’s two-card layout + i18n |
| 2026-05-06 | Language dropdown: custom `.scrollbar-accent` (thin violet thumb + track) for Firefox + WebKit |
| 2026-05-06 | Replace native language `<select>` with accessible custom `LanguageSelect` listbox (themed panel, keyboard + click outside) |
| 2026-05-06 | Migrate styling from SCSS to Tailwind v4; remove Sass partials/CSS modules and empty `styles/` folder; docs + Cursor rules/commands updated |
| 2026-05-06 | Fix blank page: SectionContainer stagger now uses full `animation` shorthand (avoid invisible `opacity: 0`) + Hero `overflow-x` clip only |
| 2026-05-06 | Added About section (`#about`) wired to dummy `portfolioContent.about` + i18n shell; SectionContainer forwards `...rest` for a11y |
| 2026-05-06 | Added `src/data/portfolioContent.js` with section roadmap + dummy content for about/experience/projects/skills/education/certifications/contact |
| 2026-05-06 | Routing upgraded to latest React Router v7 architecture (`createBrowserRouter` + `RouterProvider` + root layout `Outlet`) |
| 2026-05-06 | React Router: enable `v7_startTransition` + `v7_relativeSplatPath` future flags on `BrowserRouter`; MCP: add Chrome DevTools server to `.cursor/mcp.json` |
| 2026-05-06 | Added Hero section (responsive layout, CTAs, accent card, i18n `hero.*` across 10 locales; resume link expects `public/resume.pdf`) |
| 2026-05-06 | Git: ignore `package-lock.json`, stop tracking lockfile in repo     |
| 2026-05-06 | Vite: enable Sass modern-compiler API; pin Vite to 5.4+ to suppress legacy JS API deprecation warnings |
| 2026-05-06 | Foundation: modular SCSS (tokens/theme/mixins/animations/utils), SectionContainer shared shell, hooks/helpers baseline, react-i18next +10 locales wired in shell |
| 2026-05-06 | Added .cursor rules, hooks, MCP config, and slash commands          |
| 2026-05-06 | Fresh start — Vite + React + SCSS scaffold                          |

---

## License

Personal project. All rights reserved.
