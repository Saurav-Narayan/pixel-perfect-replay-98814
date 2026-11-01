import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Globe, 
  Info, 
  AlertTriangle, 
  Layers, 
  Droplets, 
  Leaf, 
  Users,
  MessagesSquare,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practices, type Practice } from "@/data/practices";
import { Reveal } from "@/components/site/Reveal";
import { useAdvisor } from "@/components/home/AdvisorProvider";
import { useLoc } from "@/i18n/localize";

const CATEGORIES = [
  { value: "all", key: "all" },
  { value: "community", key: "coop" },
  { value: "soil-water", key: "soil" },
  { value: "natural", key: "natural" },
  { value: "livestock", key: "livestock" },
] as const;

const REGIONS = [
  { value: "all", key: "all" },
  { value: "india", key: "india" },
  { value: "nordic", key: "nordic" },
  { value: "other", key: "other" },
] as const;

const categoryKey = (c: string) => CATEGORIES.find((x) => x.value === c)?.key ?? "all";

export function PracticesView() {
  const { t } = useTranslation();
  const { L, LL } = useLoc();
  const { openAdvisor } = useAdvisor();
  const [filter, setFilter] = useState<string>("all");
  const [region, setRegion] = useState<string>("all");
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(null);

  const filteredPractices = practices.filter(p => {
    const matchesFilter = filter === "all" || p.category === filter;
    const matchesRegion = region === "all" || p.regions.includes(region as any);
    return matchesFilter && matchesRegion;
  });

  const renderDetail = (p: Practice) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setSelectedPractice(null)}
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {t("advisor.back")}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-lime/10 text-lime-700 border-lime/20">{t(`practices.filters.${categoryKey(p.category)}`)}</Badge>
          {p.regions.map(r => (
            <Badge key={r} variant="outline" className="flex items-center gap-1">
              <Globe className="h-3 w-3" /> {t(`practices.regions.${r}`)}
            </Badge>
          ))}
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{L(p.title)}</h2>
        <p className="text-sm text-muted-foreground italic">"{t("advisor.disclaimer.practice")}"</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" /> {t("practices.details.what")}
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">{L(p.summary)}</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" /> {t("practices.details.where")}
            </h3>
            <p className="text-muted-foreground">{L(p.whereUsed)}</p>
            {p.indianExample && (
              <div className="mt-4 rounded-2xl bg-lime/5 border border-lime/10 p-4">
                <p className="text-sm font-bold text-lime-700 uppercase tracking-wider mb-1">{t("practices.details.indianExample")}</p>
                <p className="text-lime-900">{L(p.indianExample)}</p>
              </div>
            )}
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> {t("practices.details.helps")}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {LL(p.benefits).map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" /> {t("practices.details.limits")}
            </h3>
            <ul className="space-y-2">
              {LL(p.limits).map((l, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" />
                  {l}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <Card className="p-5 glass border-primary/20 space-y-4">
            <h3 className="font-bold flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" /> {t("practices.details.needs")}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">{t("practices.details.land")}</span>
                <span className="font-bold">{L(p.requirements.land)}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">{t("practices.details.money")}</span>
                <span className="font-bold">{L(p.requirements.money)}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">{t("practices.details.groupSize")}</span>
                <span className="font-bold">{L(p.requirements.groupSize)}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">{t("practices.details.time")}</span>
                <span className="font-bold">{L(p.requirements.time)}</span>
              </div>
            </div>
          </Card>

          <div className="space-y-2">
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              {t("advisor.source")}: {p.source}
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              {t("advisor.verified")}: {p.lastVerified}
            </div>
          </div>

          <Button variant="pill" size="xl" className="w-full gap-2" onClick={() => openAdvisor("ask", { practice: L(p.title) })}>
            <MessagesSquare className="h-5 w-5" /> {t("practices.details.discuss")}
          </Button>
        </aside>
      </div>
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {!selectedPractice ? (
        <>
          <div className="text-center space-y-4">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("practices.title")}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("practices.sub")}</p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map(c => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === c.value ? "bg-primary text-white" : "glass hover:bg-accent"
                  }`}
                >
                  {t(`practices.filters.${c.key}`)}
                </button>
              ))}
            </Reveal>

            <Reveal delay={0.3} className="flex items-center justify-center gap-4 text-sm font-medium">
              <span className="text-muted-foreground flex items-center gap-2">
                <Globe className="h-4 w-4" /> {t("practices.regionLabel")}:
              </span>
              {REGIONS.map(r => (
                <button
                  key={r.value}
                  onClick={() => setRegion(r.value)}
                  className={`transition-colors ${region === r.value ? "text-primary font-bold underline underline-offset-4" : "text-muted-foreground hover:text-primary"}`}
                >
                  {t(`practices.regions.${r.key}`)}
                </button>
              ))}
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPractices.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <Card 
                  className="glass group cursor-pointer overflow-hidden rounded-[2rem] border-transparent p-6 transition-all hover:border-primary/20 hover:shadow-xl"
                  onClick={() => setSelectedPractice(p)}
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-accent text-lime-700 text-[10px] uppercase tracking-widest">{t(`practices.filters.${categoryKey(p.category)}`)}</Badge>
                        <div className="flex gap-1">
                          {p.regions.map(r => (
                            <div key={r} className="h-2 w-2 rounded-full bg-lime" title={t(`practices.regions.${r}`)} />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{L(p.title)}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{L(p.summary)}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{t("practices.learnMore")}</span>
                      <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </>
      ) : renderDetail(selectedPractice)}
    </div>
  );
}
