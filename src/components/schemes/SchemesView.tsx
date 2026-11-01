import { useTranslation } from "react-i18next";
import { schemes } from "@/data/schemes";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Info, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useLoc } from "@/i18n/localize";

export function SchemesView() {
  const { t } = useTranslation();
  const { L } = useLoc();
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="text-center space-y-4">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("nav.schemes")}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("schemesView.sub")}</p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {schemes.map((scheme, i) => (
          <Reveal key={scheme.id} delay={i * 0.05}>
            <Card className="glass p-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-accent text-lime-700">
                      {scheme.level === "Central" ? t("schemesView.central") : t("schemesView.state")}
                    </Badge>
                    <h3 className="text-xl font-bold text-primary">{L(scheme.name)}</h3>
                  </div>
                </div>
                <p className="text-base">{L(scheme.benefit)}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-bold">{t("schemesView.howToApply")}:</span> {L(scheme.howToApply)}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />{" "}
                    {scheme.states.map((s) => (s === "All" ? t("schemesView.allStates") : s)).join(", ")}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  {t("schemesView.source")}: {scheme.source}
                </div>
                <a 
                  href={scheme.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-sm font-bold text-lime-600 hover:underline"
                >
                  {t("schemesView.visitPortal")} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
