import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComingSoon } from "@/components/site/ComingSoon";
import { useAdvisor } from "./AdvisorProvider";

export function Hero() {
  const { t } = useTranslation();
  const openSoon = useComingSoon();
  const { openAdvisor } = useAdvisor();
  
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-28 sm:pt-36">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.before")} <span className="accent-word">{t("hero.accent")}</span> {t("hero.after")}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t("hero.sub")}</p>
          <Button variant="pill" size="xl" className="mt-8 w-full sm:w-auto" onClick={() => openAdvisor("scheme")}>
            {t("hero.cta")} <ArrowRight />
          </Button>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Button variant="pillOutline" size="xl" onClick={() => openAdvisor("crop")}>{t("hero.crop")}</Button>
            <Button variant="pillOutline" size="xl" onClick={openSoon}>{t("hero.animals")}</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <img
            src="/image.png"
            alt="Krishi Setu"
            width={896}
            height={1088}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[2rem] border border-glass-border object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
