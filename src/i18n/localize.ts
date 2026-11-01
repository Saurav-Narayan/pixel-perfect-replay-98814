import { useTranslation } from "react-i18next";
import type { LangCode } from "./index";

/** A single localized string, one entry per supported language. */
export type Loc = Record<LangCode, string>;
/** A localized list of strings, one entry per supported language. */
export type LocList = Record<LangCode, string[]>;

const toCode = (lang: string): LangCode => ((lang || "en").split("-")[0] as LangCode);

/** Resolve a localized string for the given language, falling back to English. */
export const tr = (value: Loc, lang: string): string => value[toCode(lang)] ?? value.en;

/** Resolve a localized string list for the given language, falling back to English. */
export const trList = (value: LocList, lang: string): string[] => value[toCode(lang)] ?? value.en;

/** Hook that resolves localized data content against the active UI language. */
export function useLoc() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return {
    L: (value: Loc) => tr(value, lang),
    LL: (value: LocList) => trList(value, lang),
  };
}
