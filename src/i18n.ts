import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "@translation/English/translation.json";
import translationPolish from "@translation/Polish/translation.json";
import translationUkraine from "@translation/Ukraine/translation.json";

export const resources = {
  en: {
    translation: translationEnglish,
  },
  pl: {
    translation: translationPolish,
  },
  ukr: {
    translation: translationUkraine,
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
