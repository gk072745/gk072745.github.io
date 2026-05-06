/**
 * Supported locale codes match files in `src/i18n/locales/*.json`.
 */
export const SUPPORTED_LANGUAGE_CODES = [
  'en',
  'hi',
  'ja',
  'de',
  'fr',
  'es',
  'pt',
  'it',
  'ko',
  'zh',
]

export const FALLBACK_LANGUAGE = 'en'

export const STORAGE_KEY_LANGUAGE = 'portfolio_language'

/** UI labels for the language picker (shown in native script). */
export const LANGUAGE_NATIVE_LABELS = {
  en: 'English',
  hi: 'हिंदी',
  ja: '日本語',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  it: 'Italiano',
  ko: '한국어',
  zh: '简体中文',
}

export function normalizeLanguageCode(code) {
  if (!code) return FALLBACK_LANGUAGE
  const base = String(code).toLowerCase().split('-')[0]
  return SUPPORTED_LANGUAGE_CODES.includes(base) ? base : FALLBACK_LANGUAGE
}

export function getLanguageOptions() {
  return SUPPORTED_LANGUAGE_CODES.map((code) => ({
    code,
    label: LANGUAGE_NATIVE_LABELS[code],
  }))
}
