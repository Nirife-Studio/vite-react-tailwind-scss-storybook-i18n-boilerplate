import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jaTranslation from '@/translations/ja.json';
import viTranslation from '@/translations/vi.json';

const DEFAULT_LANG = 'vi';

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: jaTranslation },
    vi: { translation: viTranslation },
  },
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
