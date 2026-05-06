/**
 * Maps tech labels → SVG component (see `./svgicons.js`).
 * Icon colour: violet on light sheets, slightly softer violet on dark (no fuchsia tint).
 */
import {
  SvgApi,
  SvgCodeChevrons,
  SvgDocker,
  SvgExpress,
  SvgGit,
  SvgGithubActions,
  SvgGnuBash,
  SvgHtml,
  SvgI18next,
  SvgJavaScript,
  SvgMongo,
  SvgMysql,
  SvgNode,
  SvgPostgresql,
  SvgPostman,
  SvgPython,
  SvgReact,
  SvgRedis,
  SvgRedux,
  SvgSass,
  SvgStacks,
  SvgTailwind,
  SvgTypeScript,
  SvgVite,
} from './svgicons'

/** Violet family only — aligns with badges, borders, and `HighlightCheckRow` (avoids pink fuchsia on icons). */
export const TECH_ICON_TINT = 'text-violet-700 dark:text-violet-400'

/** @typedef {{ Icon: typeof SvgReact; iconClassName: string }} TechVisual */

/**
 * Normalize labels like `Node.js`, `REST API` for lookup keys.
 */
export function normalizeTechKey(raw) {
  return String(raw)
    .trim()
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '')
}

const FALLBACK_ICON = SvgCodeChevrons

/** @type {Record<string, { Icon: typeof SvgReact }>} */
const TABLE = {
  react: { Icon: SvgReact },
  typescript: { Icon: SvgTypeScript },
  javascript: { Icon: SvgJavaScript },

  html5: { Icon: SvgHtml },
  css3: { Icon: SvgStacks },

  sass: { Icon: SvgSass },
  scss: { Icon: SvgSass },

  nodejs: { Icon: SvgNode },
  express: { Icon: SvgExpress },

  python: { Icon: SvgPython },

  postgresql: { Icon: SvgPostgresql },
  mongodb: { Icon: SvgMongo },
  mysql: { Icon: SvgMysql },
  redis: { Icon: SvgRedis },

  docker: { Icon: SvgDocker },
  git: { Icon: SvgGit },
  gnubash: { Icon: SvgGnuBash },

  redux: { Icon: SvgRedux },

  vite: { Icon: SvgVite },
  tailwindcss: { Icon: SvgTailwind },
  i18next: { Icon: SvgI18next },

  restapi: { Icon: SvgApi },
  githubactions: {
    Icon: SvgGithubActions,
  },
  postman: { Icon: SvgPostman },
}

/** @type {Record<string, string>} */
const ALIAS = {
  node: 'nodejs',
  ts: 'typescript',
  js: 'javascript',
  restapis: 'restapi',
}

/** @returns {TechVisual} */
export function getTechVisual(label) {
  let key = normalizeTechKey(label)
  if (key in ALIAS) key = ALIAS[key]

  const row = TABLE[key]
  return {
    Icon: row?.Icon ?? FALLBACK_ICON,
    iconClassName: TECH_ICON_TINT,
  }
}
