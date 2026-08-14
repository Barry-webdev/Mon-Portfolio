import { createContext, useContext, useState, type ReactNode } from "react";
import type { BilingualText } from "../data";

type Lang = "fr" | "en";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

export function t(obj: BilingualText | string, lang: Lang): string {
  if (typeof obj === "string") return obj;
  return obj?.[lang] ?? obj?.fr ?? "";
}
