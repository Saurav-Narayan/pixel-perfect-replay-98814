import { useTranslation } from "react-i18next";
import { Tractor, Lightbulb, MessageCircleQuestion, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const icons = [Tractor, Lightbulb, MessageCircleQuestion, Users];

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("how.steps", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <section id="how" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t("how.kicker")}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t("how.title")}</h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary to-transparent md:left-[12.5%] md:right-[12.5%] md:h-px md:w-auto md:bg-gradient-to-r md:from-primary md:via-lime md:to-primary" />
          {steps.map((s, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={i} delay={i * 0.1} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                <div className="glass relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full">
                  <Icon className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <p className="text-xs text-primary">0{i + 1}</p>
                  <h3 className="mt-1 font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
