import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
const modules = import.meta.glob('@/locales/**/*.json', { eager: true });
const resources: any = {};

// Load all translations
for (const path in modules) {
  const module = modules[path] as any;
  const pathParts = path.split('/');
  const lang = pathParts[pathParts.length - 2];
  const namespace = pathParts[pathParts.length - 1].replace('.json', '');

  if (!resources[lang]) {
    resources[lang] = {};
  }
  resources[lang][namespace] = module.default || module;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id', // Default to Indonesian
    defaultNS: 'common',
    ns: ['common', 'header', 'hero', 'about', 'services', 'testimonials', 'faq', 'contact', 'footer', 'partnership', 'partners-page', 'bridging-financing', 'ipo-mapping', 'management-improvement-plans', 'ipo-compliance-plans', 'scenario-plans', 'proforma-financial-report'],
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;