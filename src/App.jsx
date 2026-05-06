import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import Home from './pages/Home'
import { useLocale } from './hooks/useLocale'
import { useTheme } from './hooks/useTheme'
import { getLanguageOptions } from './helpers/i18n'
import styles from './App.module.scss'

function App() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <header className={styles.shell} role="banner">
        <div className={styles.toolbar}>
          <label className="u-visually-hidden" htmlFor="lang-select">
            {t('common.language')}
          </label>
          <select
            id="lang-select"
            className={styles.langSelect}
            value={language}
            onChange={(e) => {
              void setLanguage(e.target.value)
            }}
            aria-label={t('common.language')}
          >
            {getLanguageOptions().map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>

          <button
            type="button"
            className={styles.themeButton}
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
          >
            <span className="u-visually-hidden">{t('common.toggleTheme')}</span>
            <span className={styles.themeButton__icon} aria-hidden="true">
              {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </span>
          </button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
