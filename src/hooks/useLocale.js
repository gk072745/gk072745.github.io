import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { STORAGE_KEY_LANGUAGE, normalizeLanguageCode } from '../helpers/i18n'

export function useLocale() {
  const { i18n } = useTranslation()
  const language = normalizeLanguageCode(
    i18n.resolvedLanguage || i18n.language
  )

  useEffect(() => {
    syncDocumentLang(language)
  }, [language])

  const setLanguage = useCallback(
    async (code) => {
      const next = normalizeLanguageCode(code)
      await i18n.changeLanguage(next)
      try {
        window.localStorage.setItem(STORAGE_KEY_LANGUAGE, next)
      } catch {
        /* ignore */
      }
      syncDocumentLang(next)
    },
    [i18n]
  )

  return { language, setLanguage }
}

function syncDocumentLang(code) {
  if (typeof document === 'undefined') return

  document.documentElement.lang =
    code === 'zh'
      ? 'zh-Hans'
      : code === 'pt'
        ? 'pt-BR'
        : code === 'ko'
          ? 'ko-KR'
          : code === 'ja'
            ? 'ja-JP'
            : code === 'hi'
              ? 'hi-IN'
              : code === 'fr'
                ? 'fr-FR'
                : code === 'de'
                  ? 'de-DE'
                  : code === 'es'
                    ? 'es-ES'
                    : code === 'it'
                      ? 'it-IT'
                      : 'en-US'
}
