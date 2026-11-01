import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { crops } from "@/data/crops";
import { schemes } from "@/data/schemes";

export function StatsTrust() {
  const { t } = useTranslation();
  const stats = [
    { v: "4", l: t("stats.languages") },
    { v: crops.length.toString(), l: t("stats.crops") },
    { v: schemes.length.toString(), l: t("stats.schemes") },
    { v: "20+", l: t("stats.answers") },
  ];
  const trust = [t("trust.free"), t("statsTrust.verified"), t("statsTrust.kvk"), t("statsTrust.expert")];
  return (
    <>
      <section className="px-4 pb-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-l border-glass-border pl-4 sm:pl-6">
              <p className="text-4xl font-semibold sm:text-5xl">{s.v}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="border-y border-glass-border bg-card/60 px-4 py-4">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((x) => (
            <li key={x} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {x}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
