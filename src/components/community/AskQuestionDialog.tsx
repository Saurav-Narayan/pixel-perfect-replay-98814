import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HelpCircle, MessageSquare, SearchX, BadgeCheck, User } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

interface AskQuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefilledTags?: {
    crop?: string;
    animal?: string;
    topic?: string;
    practice?: string;
  };
}

interface MatchedAnswer {
  id: string;
  text: string;
  author: string;
  role?: string;
}

interface Match {
  id: string;
  text: string;
  category: string;
  answers: MatchedAnswer[];
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "why", "how", "what", "when", "where", "with", "from", "this", "that",
  "have", "has", "not", "but", "you", "your", "they", "them", "its", "is", "of", "in", "on", "to",
  "my", "me", "do", "does", "can", "could", "should", "would", "will", "be", "been", "was", "were",
]);

const tokenize = (value: string) =>
  (value || "")
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

export function AskQuestionDialog({ open, onOpenChange, prefilledTags }: AskQuestionDialogProps) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [step, setStep] = useState<"input" | "checking" | "found" | "none">("input");
  const [match, setMatch] = useState<Match | null>(null);

  const reset = () => {
    setText("");
    setStep("input");
    setMatch(null);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleCheck = async () => {
    const queryTokens = tokenize(text);
    setStep("checking");

    let found: Match | null = null;
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("id, text, category, answers(id, text, created_at, profiles(display_name, role))");
      if (error) throw error;

      const candidates = ((data as any[]) || [])
        .map((question) => {
          const answers = (question.answers || []) as any[];
          const existingTokens = tokenize([question.text, ...answers.map((a) => a.text)].join(" "));
          const overlap = queryTokens.filter((word) => existingTokens.includes(word)).length;
          return { question, answers, overlap };
        })
        .filter((candidate) => candidate.answers.length > 0 && candidate.overlap > 0)
        .sort((a, b) => b.overlap - a.overlap);

      const best = candidates[0];
      const threshold = Math.min(2, queryTokens.length);
      if (best && queryTokens.length > 0 && best.overlap >= threshold) {
        found = {
          id: best.question.id,
          text: best.question.text,
          category: best.question.category,
          answers: best.answers.map((a) => ({
            id: a.id,
            text: a.text,
            author: a.profiles?.display_name ?? "",
            role: a.profiles?.role,
          })),
        };
      }
    } catch (err) {
      console.error("Failed to check existing answers", err);
    }

    setMatch(found);
    setStep(found ? "found" : "none");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="glass flex flex-col gap-6 max-sm:h-dvh max-sm:max-w-full max-sm:rounded-none sm:max-w-lg sm:rounded-3xl p-6 sm:p-8">
        <DialogTitle className="text-2xl font-bold">{t("nav.ask")}</DialogTitle>

        <AnimatePresence mode="wait">
          {step === "input" && (
            <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              <div className="space-y-2">
                <Textarea
                  placeholder={t("ask.placeholder")}
                  className="min-h-[150px] rounded-2xl bg-white/50 border-glass-border focus:border-primary text-lg"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={500}
                />
                <div className="text-right text-xs text-muted-foreground">{text.length}/500</div>
              </div>

              {prefilledTags && Object.values(prefilledTags).some(Boolean) && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(prefilledTags).map(([k, v]) => v && (
                    <Badge key={k} variant="secondary" className="bg-lime/10 text-lime-700 border-lime/20 capitalize">
                      {v}
                    </Badge>
                  ))}
                </div>
              )}

              <Button
                variant="pill"
                size="xl"
                className="w-full"
                disabled={!text.trim()}
                onClick={handleCheck}
              >
                {t("ask.continue")} <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {step === "checking" && (
            <motion.div key="checking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-lg font-medium">{t("ask.checking")}</p>
            </motion.div>
          )}

          {step === "found" && match && (
            <motion.div key="found" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5 overflow-y-auto max-h-[60vh] pr-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-lime-600" />
                <p className="text-sm font-bold text-lime-900">{t("ask.found")}</p>
              </div>

              <div className="rounded-2xl bg-lime/5 border border-lime/10 p-4">
                <p className="font-bold">{match.text}</p>
              </div>

              <div className="space-y-3">
                {match.answers.map((answer) => (
                  <div key={answer.id} className="rounded-2xl border border-glass-border bg-white/50 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <User className="h-3 w-3" />
                      </div>
                      <span className="font-bold">{answer.author}</span>
                      {answer.role === "expert" && (
                        <Badge className="h-5 gap-1 bg-primary px-2 text-[10px]">
                          <BadgeCheck className="h-3 w-3" /> {t("community.expert")}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed">{answer.text}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full rounded-2xl" onClick={reset}>
                {t("ask.continue")}
              </Button>
            </motion.div>
          )}

          {step === "none" && (
            <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
              <div className="rounded-2xl bg-accent/40 border border-glass-border p-6 text-center space-y-3">
                <SearchX className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="font-bold">{t("ask.noMatch")}</p>
                <p className="text-sm text-muted-foreground">{t("ask.noMatchSub")}</p>
              </div>

              <Button variant="outline" className="w-full rounded-2xl gap-2" onClick={reset}>
                <HelpCircle className="h-4 w-4" /> {t("ask.continue")}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <DialogDescription className="text-center text-xs text-muted-foreground">
          {t("advisor.disclaimer.community")}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
