import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";

const FEEDBACK_EMAIL = "examplemail1234@gmail.com";

export function Feedback() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const send = () => {
    const subject = encodeURIComponent(t("feedback.subject"));
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="feedback" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t("feedback.kicker")}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t("feedback.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("feedback.sub")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass mt-8 rounded-3xl p-6 sm:p-8">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("feedback.placeholder")}
              rows={5}
              className="resize-none"
            />
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button variant="pill" size="xl" onClick={send} className="w-full sm:w-auto">
                <Mail /> {t("feedback.button")}
              </Button>
              <p className="text-xs text-muted-foreground">{t("feedback.note", { email: FEEDBACK_EMAIL })}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
