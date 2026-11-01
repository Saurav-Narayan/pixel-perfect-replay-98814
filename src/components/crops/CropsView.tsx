import { useTranslation } from "react-i18next";
import { crops } from "@/data/crops";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, MapPin, Calendar, Droplets } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function CropsView() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="text-center space-y-4">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("nav.crops")}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("teasers.crops.sub")}</p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {crops.map((crop, i) => (
          <Reveal key={crop.id} delay={i * 0.05}>
            <Card className="glass p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-primary">{crop.name}</h3>
                <Badge variant="outline" className="bg-lime/10 text-lime-700 border-lime/20 capitalize">{crop.costBand} Cost</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{crop.reason}</p>
              
              <div className="space-y-2 pt-4 border-t border-glass-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {crop.states.join(", ")}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {crop.seasons.join(", ")}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Droplets className="h-3.5 w-3.5" /> {crop.waterNeeds.join(", ")}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest border-t border-glass-border">
                <div>{t("advisor.source")}: {crop.source}</div>
                <div>{t("advisor.verified")}: {crop.lastVerified}</div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
