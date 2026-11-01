import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlaceholderPage({ titleKey }: { titleKey: string }) {
  const { t } = useTranslation();
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center px-4 pt-28">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <div className="glass relative w-full max-w-lg rounded-3xl p-8 text-center sm:p-12">
        <Sprout className="mx-auto h-10 w-10 text-lime" />
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t(titleKey)}</h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-primary">{t("page.soon")}</p>
        <p className="mt-2 text-muted-foreground">{t("page.body")}</p>
        <Button asChild variant="pillOutline" size="xl" className="mt-8">
          <Link to="/">{t("page.back")}</Link>
        </Button>
      </div>
    </main>
  );
}
