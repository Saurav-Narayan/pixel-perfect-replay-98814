import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import hi from "./locales/hi";
import mr from "./locales/mr";
import bn from "./locales/bn";

export const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
] as const;
export type LangCode = (typeof LANGS)[number]["code"];
export const LANG_KEY = "krishi-setu-lang";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, hi: { translation: hi }, mr: { translation: mr }, bn: { translation: bn } },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnObjects: true,
  });
}

export function setLanguage(code: LangCode) {
  localStorage.setItem(LANG_KEY, code);
  i18n.changeLanguage(code);
  document.documentElement.lang = code;
}

export default i18n;
