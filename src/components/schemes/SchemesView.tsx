import { useTranslation } from "react-i18next";
import { schemes } from "@/data/schemes";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Info, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function SchemesView() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="text-center space-y-4">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("nav.schemes")}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover government schemes you may qualify for.</p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {schemes.map((scheme, i) => (
          <Reveal key={scheme.id} delay={i * 0.05}>
            <Card className="glass p-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-accent text-lime-700">{scheme.level}</Badge>
                    <h3 className="text-xl font-bold text-primary">{scheme.name}</h3>
                  </div>
                </div>
                <p className="text-base">{scheme.benefit}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground"><span className="font-bold">How to apply:</span> {scheme.howToApply}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {scheme.states.join(", ")}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  Source: {scheme.source}
                </div>
                <a 
                  href={scheme.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-sm font-bold text-lime-600 hover:underline"
                >
                  Visit Portal <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
