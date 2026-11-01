import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, HeartPulse, ShieldCheck, Stethoscope, MessagesSquare, PawPrint, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { animals, type AnimalGuidance } from "@/data/animals";
import { Reveal } from "@/components/site/Reveal";
import { useAdvisor } from "@/components/home/AdvisorProvider";

const animalGroups = [
  { value: "Dairy cattle and buffalo", key: "dairy" },
  { value: "Poultry", key: "poultry" },
  { value: "Goats", key: "goats" },
] as const;

const topicKeys: Record<AnimalGuidance["topic"], string> = {
  "Health problem": "health",
  "Breeding and delivery": "breeding",
  Feeding: "feeding",
  "Housing and care": "housing",
  "Productivity and income": "productivity",
  "Schemes and subsidies": "schemes",
};

const animalKey = (animal: AnimalGuidance["animal"]) =>
  animalGroups.find((g) => g.value === animal)?.key ?? "dairy";

export function AnimalCareView() {
  const { t } = useTranslation();
  const { openAdvisor } = useAdvisor();
  const [group, setGroup] = useState<string>("All");
  const [selected, setSelected] = useState<AnimalGuidance | null>(null);

  const filtered = group === "All" ? animals : animals.filter((a) => a.animal === group);

  const renderDetail = (a: AnimalGuidance) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {t("advisor.back")}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-lime/10 text-lime-700 border-lime/20">
            {t(`animals.${animalKey(a.animal)}`)}
          </Badge>
          <Badge variant="secondary" className="bg-accent text-lime-700 text-[10px] uppercase tracking-widest">
            {t(`animals.topics.${topicKeys[a.topic]}`)}
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{a.issue}</h2>
        <p className="text-sm text-muted-foreground italic">"{t("advisor.disclaimer.animal")}"</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" /> {t("animals.signs")}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {a.signs.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-primary" /> {t("animals.care")}
            </h3>
            <ul className="space-y-3">
              {a.basicCare.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0 text-lime" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" /> {t("animals.redFlag")}
            </h3>
            <ul className="space-y-2 rounded-2xl bg-orange-500/5 border border-orange-500/10 p-4">
              {a.redFlags.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-orange-600">{a.whenToCallVet}</p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              {t("advisor.source")}: {a.source}
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              {t("advisor.verified")}: {a.lastVerified}
            </div>
          </div>

          <Button variant="pill" size="xl" className="w-full gap-2" onClick={() => openAdvisor("ask", { animal: a.issue })}>
            <MessagesSquare className="h-5 w-5" /> {t("animals.ask")}
          </Button>
        </aside>
      </div>
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {!selected ? (
        <>
          <div className="text-center space-y-4">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("animals.title")}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("animals.sub")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-2">
            <span className="w-full text-center text-sm font-medium text-muted-foreground sm:w-auto sm:text-left">
              {t("animals.select")}
            </span>
            {[{ value: "All", key: "title" }, ...animalGroups].map((g) => (
              <button
                key={g.value}
                onClick={() => setGroup(g.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  group === g.value ? "bg-primary text-white" : "glass hover:bg-accent"
                }`}
              >
                {g.value === "All" ? t("practices.filters.all") : t(`animals.${g.key}`)}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.05}>
                <Card
                  className="glass group h-full cursor-pointer overflow-hidden rounded-[2rem] border-transparent p-6 transition-all hover:border-primary/20 hover:shadow-xl"
                  onClick={() => setSelected(a)}
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-accent text-lime-700 text-[10px] uppercase tracking-widest">
                          {t(`animals.topics.${topicKeys[a.topic]}`)}
                        </Badge>
                        <PawPrint className="h-4 w-4 text-lime" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{a.issue}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{a.signs.join(", ")}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">
                        {t(`animals.${animalKey(a.animal)}`)}
                      </span>
                      <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </>
      ) : (
        renderDetail(selected)
      )}
    </div>
  );
}
