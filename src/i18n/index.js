import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import hi from './locales/hi.json'

import {
  FALLBACK_LANGUAGE,
  SUPPORTED_LANGUAGE_CODES,
  STORAGE_KEY_LANGUAGE,
} from '../helpers/i18n'

const resources = {
  en: { translation: en },
  hi: { translation: hi },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: FALLBACK_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGE_CODES,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: STORAGE_KEY_LANGUAGE,
    },
  })

export default i18n
