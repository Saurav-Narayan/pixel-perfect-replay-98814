import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bug,
  ChevronRight,
  CloudRain,
  FlaskConical,
  Leaf,
  MessagesSquare,
  Microscope,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Wind,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cropDiseases, type CropDisease, type DiseaseType } from "@/data/cropDiseases";
import { Reveal } from "@/components/site/Reveal";
import { useAdvisor } from "@/components/home/AdvisorProvider";

const typeStyles: Record<DiseaseType, string> = {
  Fungal: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Bacterial: "bg-sky-500/10 text-sky-700 border-sky-500/20",
  Viral: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  Pest: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  Nematode: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  "Nutrient deficiency": "bg-teal-500/10 text-teal-700 border-teal-500/20",
};

function Section({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Leaf;
  title: string;
  items: string[];
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2 text-xl font-bold">
        <Icon className="h-5 w-5 text-primary" /> {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground">
            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CropDiseasesView() {
  const { t } = useTranslation();
  const { openAdvisor } = useAdvisor();
  const [crop, setCrop] = useState<string>("All");
  const [selected, setSelected] = useState<CropDisease | null>(null);

  const cropNames = useMemo(
    () => Array.from(new Set(cropDiseases.map((d) => d.crop))),
    [],
  );

  const filtered = crop === "All" ? cropDiseases : cropDiseases.filter((d) => d.crop === crop);

  const renderDetail = (d: CropDisease) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <button
        onClick={() => setSelected(null)}
        className="flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> {t("advisor.back")}
      </button>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={typeStyles[d.type]}>
            {d.type}
          </Badge>
          <Badge variant="secondary" className="bg-accent text-lime-700 text-[10px] uppercase tracking-widest">
            {d.crop}
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{d.disease}</h2>
        <p className="text-sm italic text-muted-foreground">"{t("advisor.disclaimer.crop")}"</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <Section icon={Stethoscope} title={t("diseases.symptoms")} items={d.symptoms} />

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Microscope className="h-5 w-5 text-primary" /> {t("diseases.cause")}
            </h3>
            <p className="text-muted-foreground">{d.cause}</p>
          </section>

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Wind className="h-5 w-5 text-primary" /> {t("diseases.spread")}
            </h3>
            <p className="text-muted-foreground">{d.spread}</p>
          </section>

          <section className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <CloudRain className="h-5 w-5 text-primary" /> {t("diseases.conditions")}
            </h3>
            <p className="text-muted-foreground">{d.conditions}</p>
          </section>

          <Section icon={Leaf} title={t("diseases.organic")} items={d.organic} />
          <Section icon={FlaskConical} title={t("diseases.chemical")} items={d.chemical} />
          <Section icon={ShieldCheck} title={t("diseases.prevention")} items={d.prevention} />
        </div>

        <aside className="space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {t("advisor.source")}: {d.source}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {t("advisor.verified")}: {d.lastVerified}
            </div>
          </div>

          <Button
            variant="pill"
            size="xl"
            className="w-full gap-2"
            onClick={() => openAdvisor("ask", { crop: d.crop, topic: d.disease })}
          >
            <MessagesSquare className="h-5 w-5" /> {t("diseases.ask")}
          </Button>
        </aside>
      </div>
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {!selected ? (
        <>
          <div className="space-y-4 text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("diseases.title")}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t("diseases.sub")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-2">
            <span className="w-full text-center text-sm font-medium text-muted-foreground sm:w-auto sm:text-left">
              {t("diseases.select")}
            </span>
            {["All", ...cropNames].map((c) => (
              <button
                key={c}
                onClick={() => setCrop(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  crop === c ? "bg-primary text-white" : "glass hover:bg-accent"
                }`}
              >
                {c === "All" ? t("diseases.all") : c}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.04}>
                <Card
                  className="glass group h-full cursor-pointer overflow-hidden rounded-[2rem] border-transparent p-6 transition-all hover:border-primary/20 hover:shadow-xl"
                  onClick={() => setSelected(d)}
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="outline" className={`text-[10px] uppercase tracking-widest ${typeStyles[d.type]}`}>
                          {d.type}
                        </Badge>
                        <Bug className="h-4 w-4 shrink-0 text-lime" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{d.crop}</p>
                        <h3 className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                          {d.disease}
                        </h3>
                      </div>
                      <ul className="space-y-1.5">
                        {d.symptoms.slice(0, 3).map((s, k) => (
                          <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                            <span className="line-clamp-2">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between border-t border-glass-border pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        <Sprout className="h-3.5 w-3.5" /> {t("diseases.details")}
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
