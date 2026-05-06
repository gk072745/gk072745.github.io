import { useCallback, useEffect, useState } from 'react'

export const STORAGE_KEY_THEME = 'portfolio_theme'

const VALID_THEMES = new Set(['light', 'dark'])

function applyTheme(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement

  root.dataset.theme = theme
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light'
}

function readStoredTheme() {
  if (typeof window === 'undefined') return 'dark'

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY_THEME)
    return VALID_THEMES.has(saved) ? saved : 'dark'
  } catch {
    return 'dark'
  }
}

/**
 * Persisted light/dark theme via `data-theme` on `<html>`.
 */
export function useTheme() {
  const [theme, setThemeStateInternal] = useState(readStoredTheme)

  useEffect(() => {
    applyTheme(theme)

    try {
      window.localStorage.setItem(STORAGE_KEY_THEME, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeStateInternal(() => {
      const t = VALID_THEMES.has(next) ? next : 'dark'
      return t
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeStateInternal((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, setTheme, toggleTheme }
}
