import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";
import translationHE from "./locales/he/translation.json";
// import translationFR from "../public/assets/locales/fr/translation.json";

const fallbackLng = ["he"];
const availableLanguages = ["en", "ar", "he"];

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  he: {
    translation: translationHE
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
