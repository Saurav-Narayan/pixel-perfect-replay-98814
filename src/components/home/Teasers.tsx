import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Wheat, PawPrint, Leaf, MessagesSquare } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const groups = [
  { key: "crops", to: "/crops", icon: Wheat },
  { key: "animals", to: "/animals", icon: PawPrint },
  { key: "practices", to: "/practices", icon: Leaf },
  { key: "community", to: "/community", icon: MessagesSquare },
] as const;

export function Teasers() {
  const { t } = useTranslation();
  return (
    <section id="learn" className="space-y-20 px-4 py-20 sm:py-24">
      {groups.map(({ key, to, icon: Icon }) => (
        <div key={key} className="mx-auto max-w-6xl">
          <Reveal className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">{t(`teasers.${key}.title`)}</h2>
              <p className="mt-1 text-muted-foreground">{t(`teasers.${key}.sub`)}</p>
            </div>
            <Link to={to} className="flex shrink-0 items-center gap-1 text-sm text-primary hover:text-lime">
              {t("teasers.all")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass group flex h-44 flex-col justify-between rounded-3xl p-5 transition-colors hover:border-primary">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent">
                    <Icon className="h-5 w-5 text-lime" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-2/3 rounded-full bg-muted" />
                    <div className="h-3 w-1/3 rounded-full bg-muted" />
                    <p className="pt-1 text-xs uppercase tracking-wider text-muted-foreground">{t("teasers.soon")}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
