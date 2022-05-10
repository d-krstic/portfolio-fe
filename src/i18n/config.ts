import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import login from './en/login.json';
import translation from './en/translation.json';

export const resources = {
  en: {
    translation,
    login,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  saveMissing: true,
  missingKeyHandler: (language, namespace, key) =>
    console.error(`Missing translation key: ${key}`),
  resources,
});
