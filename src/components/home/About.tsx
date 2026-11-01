import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import aboutImg from "@/assets/about-farm.jpg";

export function About() {
  const { t } = useTranslation();
  const cards = t("about.cards", { returnObjects: true }) as { p: string; s: string }[];
  return (
    <section id="about" className="bg-light px-4 py-20 text-light-foreground sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img src={aboutImg} alt="" width={896} height={1024} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[7/8]" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t("about.kicker")}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{t("about.title")}</h2>
          <p className="mt-5 text-lg text-light-muted">{t("about.body")}</p>
          <div className="mt-8 grid gap-3">
            {cards.map((c) => (
              <div key={c.p} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-light-foreground/10 bg-light-foreground/[0.03] p-4">
                <span className="text-light-muted line-through decoration-primary/60">{c.p}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-semibold">{c.s}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
