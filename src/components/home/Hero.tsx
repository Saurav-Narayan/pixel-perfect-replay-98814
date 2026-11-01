import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdvisor } from "./AdvisorProvider";

export function Hero() {
  const { t } = useTranslation();
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
          <Button variant="pill" size="xl" className="mt-8 w-full sm:w-auto" asChild>
            <Link to="/crop-diseases">
              {t("hero.cta")} <ArrowRight />
            </Link>
          </Button>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Button variant="pillOutline" size="xl" onClick={() => openAdvisor("crop")}>{t("hero.crop")}</Button>
            <Button variant="pillOutline" size="xl" asChild>
              <Link to="/animals">{t("hero.animals")}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <img
            src="/true.jpg"
            alt="Krishi Setu"
            width={678}
            height={1024}
            fetchPriority="high"
            className="aspect-[2/3] w-full rounded-[2rem] border border-glass-border object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
