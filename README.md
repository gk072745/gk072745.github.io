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
| Styling     | SCSS (Sass)                       |
| Routing     | React Router v6                   |
| Icons       | React Icons                       |
| Deployment  | GitHub Pages via `gh-pages`       |

---

## Project Structure

```
gk072745.github.io/
├── public/                  # Static files served as-is
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/              # Images, resume PDF, fonts
│   ├── components/          # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/               # One file per page/section
│   ├── styles/
│   │   ├── _variables.scss  # Colors, spacing, breakpoints, mixins
│   │   └── global.scss      # CSS reset + base styles
│   ├── App.jsx              # Router shell
│   └── main.jsx             # React DOM mount point
├── index.html               # Vite HTML entry
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

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

Mixins for these are defined in `src/styles/_variables.scss`.

---

## Build Log

| Date       | Change                                                              |
|------------|---------------------------------------------------------------------|
| 2026-05-06 | Added .cursor rules, hooks, MCP config, and slash commands          |
| 2026-05-06 | Fresh start — Vite + React + SCSS scaffold                          |

---

## License

Personal project. All rights reserved.
