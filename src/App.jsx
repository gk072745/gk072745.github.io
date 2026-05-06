import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2'

import { LanguageSelect, QuickDock } from './components/shared'
import resumePdfUrl from './assets/Govind_Kumawat_Resume_.pdf'
import { useLocale } from './hooks/useLocale'
import { useTheme } from './hooks/useTheme'
import { getLanguageOptions } from './helpers/i18n'

const NAV_ITEMS = [
  { href: '#hero', labelKey: 'nav.home', fallback: 'Home' },
  { href: '#about', labelKey: 'nav.about', fallback: 'About' },
  { href: '#experience', labelKey: 'nav.experience', fallback: 'Experience' },
  { href: '#projects', labelKey: 'nav.projects', fallback: 'Projects' },
  { href: '#skills', labelKey: 'nav.skills', fallback: 'Skills' },
  { href: '#education', labelKey: 'nav.education', fallback: 'Education' },
  { href: '#certifications', labelKey: 'nav.certifications', fallback: 'Certifications' },
  { href: '#contact', labelKey: 'nav.contact', fallback: 'Contact' },
]

function App() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-[200] border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
      >
        <div
          className="header-magnetic relative flex w-full flex-col gap-3 p-4 sm:px-[clamp(1rem,4vw,2rem)]"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            const x = ((event.clientX - rect.left) / rect.width) * 100
            const y = ((event.clientY - rect.top) / rect.height) * 100
            event.currentTarget.style.setProperty('--hx', `${x}%`)
            event.currentTarget.style.setProperty('--hy', `${y}%`)
          }}
        >
          <span className="header-pointer-glow" aria-hidden />
          <div className="relative z-[1] flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label={t('nav.home')}
            className="hidden w-full md:block lg:flex-1"
          >
            <ul className="relative z-[1] flex items-center justify-between gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="min-w-0 flex-1">
                  <a
                    href={item.href}
                    className="nav-link-fancy inline-flex min-h-11 w-full items-center justify-center px-2 py-2 text-sm font-semibold"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {t(item.labelKey, { defaultValue: item.fallback })}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex w-full items-center justify-end gap-3 lg:w-auto lg:flex-nowrap">
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
            className="inline-flex h-11 min-h-[44px] w-11 cursor-pointer shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg text-zinc-900 transition-all hover:border-violet-500/40 hover:text-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/40 dark:hover:text-violet-400"
          >
            <span className="sr-only">{t('common.toggleTheme')}</span>
            <span aria-hidden="true">
              {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 min-h-[44px] w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 transition-all hover:border-violet-500/40 hover:text-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/40 dark:hover:text-violet-400 md:hidden"
          >
            {mobileNavOpen ? <HiOutlineXMark className="size-5" /> : <HiBars3 className="size-5" />}
          </button>
          </div>
          </div>

          {mobileNavOpen ? (
            <nav aria-label={t('nav.home')} className="relative z-[1] md:hidden">
              <ul className="grid grid-cols-2 gap-2 rounded-xl border border-zinc-200 bg-white/90 p-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90">
                {NAV_ITEMS.map((item) => (
                  <li key={`mobile-${item.href}`} className="min-w-0">
                    <a
                      href={item.href}
                      onClick={() => setMobileNavOpen(false)}
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-violet-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
                    >
                      {t(item.labelKey, { defaultValue: item.fallback })}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </header>

      <QuickDock
        name="Govind Kumawat"
        role="Software Engineer"
        highlights={[
          'React + TypeScript + Tailwind',
          'Performance, DX, and accessibility',
          'Shipped features end-to-end',
        ]}
        resumeUrl={resumePdfUrl}
        ctaLabel={t('hero.ctaContact')}
        onCtaClick={() => {
          window.location.hash = '#contact'
        }}
      />

      <Outlet />
    </>
  )
}

export default App
