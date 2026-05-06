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
| Styling     | SCSS (Sass), design tokens / CSS vars + theming |
| Routing     | React Router v6                   |
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
│   │   └── shared/          # Shared primitives (`SectionContainer`, etc.)
│   ├── helpers/
│   │   ├── animation.js      # cn(), motion class helpers
│   │   └── i18n.js           # locales list, normalization, picker labels
│   ├── hooks/
│   │   ├── useLocale.js      # language change + synced <html lang>
│   │   └── useTheme.js       # persisted light/dark on data-theme + color-scheme
│   ├── i18n/
│   │   ├── index.js          # i18next init + detectors
│   │   └── locales/          # one JSON file per language
│   ├── pages/
│   ├── styles/
│   │   ├── _variables.scss    # Sass tokens (spacing, type scale, breakpoints, timing)
│   │   ├── _theme.scss        # CSS vars for semantic colors (+ light overrides)
│   │   ├── _mixins.scss       # breakpoints, transitions, hover, reduced-motion helpers
│   │   ├── _animations.scss   # keyframes + .anim-* utility classes
│   │   ├── _utilities.scss    # layout + accessibility utilities
│   │   └── global.scss        # base reset consuming tokens + importing partials
│   ├── App.jsx
│   └── main.jsx               # mounts after `./i18n` init import
├── index.html                 # `<html lang="en" data-theme="dark">` default shell
├── vite.config.js
└── package.json
```

---

## SCSS conventions

| File | Responsibility |
|------|----------------|
| `_variables.scss` | Single source truth for Sass tokens (spacing/radius/type/motion breakpoints). Prefer CSS vars at runtime (`var(--color-bg)`) for theme-able colors. |
| `_theme.scss` | Maps semantic colors to `:root`/`*[data-theme]` CSS variables consumed by layouts. |
| `_mixins.scss` | `mq-up`, `mq-down`, `respond` alias, transitions, hover gating. |
| `_animations.scss` | Global `@keyframes`, `.anim-*` helpers, respects `prefers-reduced-motion`. |
| `_utilities.scss` | Minimal utility classes (`u-container`, stagger helpers). |

Sections should animate via `[data-anim]` on `SectionContainer` or composed `.anim-*` classes shared across the site — **never scatter one-off durations**.

---

## i18n conventions

| Item | Detail |
|------|--------|
| Locale files | `src/i18n/locales/{code}.json` — mirrored keys across all locales. |
| Detection | Stored under `portfolio_language`, browser language fallback, synced `document.documentElement.lang`. |
| Switching UI | Implemented in [`src/App.jsx`](src/App.jsx) with native labels curated in [`src/helpers/i18n.js`](src/helpers/i18n.js). |
| Adding languages | Duplicate JSON skeleton, extend `SUPPORTED_LANGUAGE_CODES`, update picker labels & sync mapping in `helpers/i18n.js`. |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173). Hot-reload is enabled.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

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

| Name   | Width       |
|--------|-------------|
| Mobile | ≤ 480px     |
| Tablet | ≤ 768px     |
| Laptop | ≤ 1024px    |
| Desktop| ≤ 1280px    |
| Wide   | ≥ 1600px    |

Mixins for these live in [`src/styles/_mixins.scss`](src/styles/_mixins.scss); token values originate from [`src/styles/_variables.scss`](src/styles/_variables.scss).

---

## Build Log

| Date       | Change                                                              |
|------------|---------------------------------------------------------------------|
| 2026-05-06 | Foundation: modular SCSS (tokens/theme/mixins/animations/utils), SectionContainer shared shell, hooks/helpers baseline, react-i18next +10 locales wired in shell |
| 2026-05-06 | Added .cursor rules, hooks, MCP config, and slash commands          |
| 2026-05-06 | Fresh start — Vite + React + SCSS scaffold                          |

---

## License

Personal project. All rights reserved.
