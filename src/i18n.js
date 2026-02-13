import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import de from './locales/de.json'

const LANGUAGE_STORAGE_KEY = 'fanique.language'

const detectLanguage = () => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (stored) return stored
  return 'de'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: detectLanguage(),
  fallbackLng: 'de',
  supportedLngs: ['en', 'de'],
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lang) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
})

export default i18n
