import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Globe, ShieldCheck, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComingSoon } from "@/components/site/ComingSoon";
import heroImg from "@/assets/hero-farm.jpg";

export function Hero() {
  const { t } = useTranslation();
  const openSoon = useComingSoon();
  const chips = [
    { icon: Globe, text: t("hero.chip1"), cls: "left-3 top-6 sm:-left-8 sm:top-10" },
    { icon: ShieldCheck, text: t("hero.chip2"), cls: "right-3 top-1/2 sm:-right-6" },
    { icon: Wifi, text: t("hero.chip3"), cls: "bottom-6 left-3 sm:-left-10" },
  ];
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-28 sm:pt-36">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.before")} <span className="accent-word">{t("hero.accent")}</span> {t("hero.after")}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t("hero.sub")}</p>
          <Button variant="pill" size="xl" className="mt-8 w-full sm:w-auto" onClick={openSoon}>
            {t("hero.cta")} <ArrowRight />
          </Button>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Button variant="pillOutline" size="xl" onClick={openSoon}>{t("hero.crop")}</Button>
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
            src={heroImg}
            alt=""
            width={896}
            height={1088}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[2rem] border border-glass-border object-cover"
          />
          {chips.map(({ icon: Icon, text, cls }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`glass absolute flex max-w-[70%] items-center gap-2 rounded-2xl px-3 py-2 text-sm shadow-lg ${cls}`}
            >
              <Icon className="h-4 w-4 shrink-0 text-lime" />
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
