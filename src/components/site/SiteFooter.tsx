import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const links = [
  { to: "/crops", key: "nav.crops" },
  { to: "/crop-diseases", key: "nav.diseases" },
  { to: "/animals", key: "nav.animals" },
  { to: "/practices", key: "nav.practices" },
  { to: "/schemes", key: "nav.schemes" },
  { to: "/community", key: "nav.community" },
] as const;

const CONTACT_EMAIL = "examplemail1234@gmail.com";
const CONTACT_PHONE = "9334347038";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-glass-border px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <img src="/logo.png" alt="" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full" />
          <div>
            <p className="font-semibold">Krishi Setu</p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">{t("footer.explore")}</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">{t(l.key)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">{t("footer.contact")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-foreground">
                {t("footer.email")}: {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
              <a href={`tel:${CONTACT_PHONE}`} className="text-muted-foreground hover:text-foreground">
                {t("footer.phone")}: {CONTACT_PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Krishi Setu. {t("footer.rights")}
      </p>
    </footer>
  );
}
