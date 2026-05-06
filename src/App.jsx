import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { LanguageSelect } from './components/shared'
import { useLocale } from './hooks/useLocale'
import { useTheme } from './hooks/useTheme'
import { getLanguageOptions } from './helpers/i18n'

const NAV_ITEMS = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#skills', labelKey: 'nav.skills' },
  { href: '#education', labelKey: 'nav.education' },
  { href: '#certifications', labelKey: 'nav.certifications' },
  { href: '#contact', labelKey: 'nav.contact' },
]

function App() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-[200] border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
      >
        <div className="flex w-full flex-col gap-4 p-4 sm:px-[clamp(1rem,4vw,2rem)]">
          <nav aria-label={t('nav.home')} className="w-full overflow-x-auto">
            <ul className="flex min-w-max items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-violet-300"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <label id="lang-select-label" className="sr-only" htmlFor="lang-select">
            {t('common.language')}
          </label>
          <LanguageSelect
            id="lang-select"
            labelId="lang-select-label"
            aria-label={t('common.language')}
            value={language}
            onChange={(code) => {
              void setLanguage(code)
            }}
            options={getLanguageOptions()}
          />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
            className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white text-lg text-zinc-900 transition-all hover:border-violet-500/40 hover:text-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/40 dark:hover:text-violet-400 sm:h-11 sm:w-11 sm:shrink-0 sm:rounded-full"
          >
            <span className="sr-only">{t('common.toggleTheme')}</span>
            <span aria-hidden="true">
              {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </span>
          </button>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  )
}

export default App
