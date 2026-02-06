import i18n, { type Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { enTranslations, type LocaleResource } from "./i18n-en";
import { idTranslations } from "./i18n-id";

export type TranslationResources = LocaleResource;

const resources: Resource = {
  en: enTranslations,
  id: idTranslations,
};

const namespaces = Array.from(
  new Set([...Object.keys(enTranslations), ...Object.keys(idTranslations)]),
);

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "id",
  defaultNS: "common",
  ns: namespaces,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
  },
});

export default i18n;
