import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  Tag, 
  Info, 
  LogIn,
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import i18n from "@/i18n";

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

export function AskQuestionDialog({ open, onOpenChange, prefilledTags }: AskQuestionDialogProps) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [step, setStep] = useState<"input" | "checking" | "post">("input");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handlePost = async () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("questions").insert({
        user_id: user.id,
        text,
        category: prefilledTags?.animal ? "livestock" : prefilledTags?.crop ? "crop" : prefilledTags?.practice ? "practice" : "crop",
        animal: prefilledTags?.animal,
        crop: prefilledTags?.crop,
        topic: prefilledTags?.topic,
        practice: prefilledTags?.practice,
        language: i18n.language,
      });

      if (error) throw error;

      toast.success("Question posted successfully!");
      onOpenChange(false);
      setText("");
      setStep("input");
    } catch (err: any) {
      toast.error(err.message || "Failed to post question");
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = () => {
    setStep("checking");
    // Simulate checking rule-based data
    setTimeout(() => {
      setStep("post");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass flex flex-col gap-6 max-sm:h-dvh max-sm:max-w-full max-sm:rounded-none sm:max-w-lg sm:rounded-3xl p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <DialogTitle className="text-2xl font-bold">{t("nav.ask")}</DialogTitle>
          <button onClick={() => onOpenChange(false)} className="rounded-full p-2 hover:bg-accent">
            <X className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {step === "input" && (
            <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              <div className="space-y-2">
                <Textarea 
                  placeholder="What is your question? (e.g. Why are my tomato leaves turning yellow?)"
                  className="min-h-[150px] rounded-2xl bg-white/50 border-glass-border focus:border-primary text-lg"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={500}
                />
                <div className="text-right text-xs text-muted-foreground">
                  {text.length}/500
                </div>
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
                Continue <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {step === "checking" && (
            <motion.div key="checking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-lg font-medium">Checking if we already have the answer...</p>
            </motion.div>
          )}

          {step === "post" && (
            <motion.div key="post" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              <div className="rounded-2xl bg-lime/5 border border-lime/10 p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-lime-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-lime-900 font-medium">
                    We couldn't find a direct rule-based answer for this specific question.
                  </p>
                </div>
                <p className="text-xs text-lime-700">
                  Would you like to post it to the community? Farmers and experts can help you.
                </p>
              </div>

              {!user ? (
                <div className="rounded-2xl border border-glass-border bg-accent/30 p-6 text-center space-y-4">
                  <LogIn className="mx-auto h-8 w-8 text-muted-foreground" />
                  <div className="space-y-1">
                    <h4 className="font-bold">Login required</h4>
                    <p className="text-sm text-muted-foreground">You need to be logged in to post to the community.</p>
                  </div>
                  <Button variant="pill" className="w-full" onClick={() => setShowLogin(true)}>
                    Login / Sign Up
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="pill" 
                  size="xl" 
                  className="w-full gap-2" 
                  onClick={handlePost}
                  disabled={loading}
                >
                  <Send className="h-4 w-4" /> {loading ? "Posting..." : "Post to Community"}
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <DialogDescription className="text-center text-xs text-muted-foreground">
          {t("advisor.disclaimer.community")}
        </DialogDescription>
      </DialogContent>

      {/* Simplified Login Modal */}
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-md rounded-3xl p-8 text-center space-y-6">
          <DialogTitle className="text-2xl font-bold">Welcome back</DialogTitle>
          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 rounded-2xl gap-3" onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}>
              <img src="https://www.google.com/favicon.ico" className="h-4 w-4" alt="" />
              Continue with Google
            </Button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-glass-border"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or</span></div>
            </div>
            <Input placeholder="Email address" className="h-12 rounded-2xl" />
            <Button variant="pill" className="w-full h-12" onClick={() => toast.info("Check your email for login link!")}>
              Send Login Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
