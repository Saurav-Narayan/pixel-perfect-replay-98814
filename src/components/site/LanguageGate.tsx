import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import i18n, { LANGS, LANG_KEY, setLanguage, type LangCode } from "@/i18n";

const gateTitles: Record<LangCode, string> = {
  en: "Choose your language",
  hi: "अपनी भाषा चुनें",
  mr: "तुमची भाषा निवडा",
  bn: "আপনার ভাষা বেছে নিন",
};

/** Restores a saved language, or shows the full-screen picker on first visit. */
export function LanguageGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) as LangCode | null;
    if (saved && LANGS.some((l) => l.code === saved)) {
      i18n.changeLanguage(saved);
      document.documentElement.lang = saved;
    } else setShow(true);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto bg-background px-5 py-10"
        >
          <div className="grid-texture pointer-events-none absolute inset-0" />
          <motion.img
            src="/logo.png"
            alt="Krishi Setu"
            width={160}
            height={160}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative h-32 w-32 rounded-full sm:h-40 sm:w-40"
          />
          <div className="relative mt-6 space-y-1 text-center text-sm text-muted-foreground">
            {LANGS.map((l) => (
              <p key={l.code} lang={l.code}>{gateTitles[l.code]}</p>
            ))}
          </div>
          <div className="relative mt-8 grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4">
            {LANGS.map((l, i) => (
              <motion.button
                key={l.code}
                lang={l.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => {
                  setLanguage(l.code);
                  setShow(false);
                }}
                className="glass flex aspect-[4/3] items-center justify-center rounded-3xl text-2xl font-semibold transition-colors hover:border-primary hover:text-lime focus-visible:outline-2 focus-visible:outline-primary sm:text-3xl"
                style={{ fontFamily: l.code === "bn" ? "Noto Sans Bengali" : l.code === "en" ? "Inter" : "Noto Sans Devanagari" }}
              >
                {l.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
