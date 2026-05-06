import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import hi from './locales/hi.json'
import ja from './locales/ja.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
import it from './locales/it.json'
import ko from './locales/ko.json'
import zh from './locales/zh.json'

import {
  FALLBACK_LANGUAGE,
  SUPPORTED_LANGUAGE_CODES,
  STORAGE_KEY_LANGUAGE,
} from '../helpers/i18n'

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  ja: { translation: ja },
  de: { translation: de },
  fr: { translation: fr },
  es: { translation: es },
  pt: { translation: pt },
  it: { translation: it },
  ko: { translation: ko },
  zh: { translation: zh },
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
