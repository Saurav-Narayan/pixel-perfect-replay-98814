import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Wheat, PawPrint, Leaf, MessagesSquare } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { crops } from "@/data/crops";
import { animals } from "@/data/animals";
import { practices } from "@/data/practices";

const groups = [
  { key: "crops", to: "/crops", icon: Wheat, data: crops.slice(0, 3) },
  { key: "animals", to: "/animals", icon: PawPrint, data: animals.slice(0, 3) },
  { key: "practices", to: "/practices", icon: Leaf, data: practices.slice(0, 3) },
  { key: "community", to: "/community", icon: MessagesSquare, data: [] },
] as const;

export function Teasers() {
  const { t } = useTranslation();
  return (
    <section id="learn" className="space-y-20 px-4 py-20 sm:py-24">
      {groups.map(({ key, to, icon: Icon, data }) => (
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
            {key === "community" ? (
              [0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <Link to="/community" className="glass group flex h-44 flex-col justify-between rounded-3xl p-5 transition-colors hover:border-primary">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-accent">
                      <Icon className="h-5 w-5 text-lime" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold line-clamp-2">Latest community questions and expert answers...</p>
                      <p className="text-xs text-muted-foreground">View discussions</p>
                    </div>
                  </Link>
                </Reveal>
              ))
            ) : (
              data.map((item: any, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <Link to={to} className="glass group flex h-44 flex-col justify-between rounded-3xl p-5 transition-colors hover:border-primary">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-accent">
                      <Icon className="h-5 w-5 text-lime" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold">{'name' in item ? item.name : 'issue' in item ? item.issue : item.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {'reason' in item ? item.reason : 'signs' in item ? item.signs.join(", ") : item.summary}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
