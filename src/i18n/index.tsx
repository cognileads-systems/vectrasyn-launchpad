import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import en from "./en.json";
import ar from "./ar.json";

export type Language = "en" | "ar";

export const languages: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
];

const dictionaries: Record<Language, Record<string, string>> = {
  en: en as Record<string, string>,
  ar: ar as Record<string, string>,
};

const STORAGE_KEY = "vectrasyn.lang";

export type TranslateFn = (key: string, vars?: Record<string, string | number>) => string;

type LanguageContextValue = {
  lang: Language;
  dir: "ltr" | "rtl";
  setLang: (lang: Language) => void;
  t: TranslateFn;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function interpolate(value: string, vars?: Record<string, string | number>) {
  if (!vars) return value;
  return value.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

/** Translate against a specific language — usable outside React (e.g. route head()). */
export function translate(lang: Language, key: string, vars?: Record<string, string | number>) {
  const raw = dictionaries[lang]?.[key] ?? dictionaries.en[key] ?? key;
  return interpolate(raw, vars);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR always renders English/LTR; the stored preference is applied after hydration.
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", dir);
  }, [lang, dir]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — preference is session-only */
    }
  }, []);

  const t = useCallback<TranslateFn>((key, vars) => translate(lang, key, vars), [lang]);

  const value = useMemo(() => ({ lang, dir, setLang, t }), [lang, dir, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** Convenience hook for components that only need the translate function. */
export function useT(): TranslateFn {
  return useLanguage().t;
}
