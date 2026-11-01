import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useComingSoon } from "./ComingSoon";

const learn = [
  { to: "/crops", key: "nav.crops" },
  { to: "/animals", key: "nav.animals" },
  { to: "/practices", key: "nav.practices" },
] as const;

const linkCls = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteNav() {
  const { t } = useTranslation();
  const openSoon = useComingSoon();
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full py-2 pl-2 pr-2 sm:pr-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full" />
          <span className="truncate font-semibold tracking-tight">Krishi Setu</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className={`${linkCls} flex items-center gap-1 outline-none`}>
              {t("nav.learn")} <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass rounded-2xl">
              {learn.map((l) => (
                <DropdownMenuItem key={l.to} asChild className="rounded-xl">
                  <Link to={l.to}>{t(l.key)}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/schemes" className={linkCls}>{t("nav.schemes")}</Link>
          <Link to="/community" className={linkCls}>{t("nav.community")}</Link>
          <a href="/#how" className={linkCls}>{t("nav.how")}</a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block"><LanguageSwitcher /></div>
          <Button variant="pill" className="hidden h-9 px-4 lg:inline-flex" onClick={openSoon}>
            {t("nav.ask")}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="pillOutline" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass flex w-[85vw] max-w-sm flex-col gap-1 pt-14">
              <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
              <p className="px-2 text-xs uppercase tracking-widest text-primary">{t("nav.learn")}</p>
              {learn.map((l) => (
                <Link key={l.to} to={l.to} className="rounded-xl px-2 py-3 text-lg hover:bg-accent">{t(l.key)}</Link>
              ))}
              <Link to="/schemes" className="rounded-xl px-2 py-3 text-lg hover:bg-accent">{t("nav.schemes")}</Link>
              <Link to="/community" className="rounded-xl px-2 py-3 text-lg hover:bg-accent">{t("nav.community")}</Link>
              <a href="/#how" className="rounded-xl px-2 py-3 text-lg hover:bg-accent">{t("nav.how")}</a>
              <div className="mt-4 flex flex-col gap-3">
                <LanguageSwitcher />
                <Button variant="pill" size="xl" onClick={openSoon}>{t("nav.ask")}</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
