import { createContext, useContext, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Sprout } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Ctx = createContext<() => void>(() => {});
export const useComingSoon = () => useContext(Ctx);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="glass flex flex-col items-center justify-center gap-4 text-center max-sm:h-dvh max-sm:max-w-full max-sm:rounded-none sm:max-w-md sm:rounded-3xl">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
            <Sprout className="h-8 w-8" />
          </div>
          <DialogTitle className="text-2xl font-semibold">{t("soon.title")}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{t("soon.body")}</DialogDescription>
          <Button variant="pill" size="xl" onClick={() => setOpen(false)}>
            {t("soon.close")}
          </Button>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}
