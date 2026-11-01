import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  LandPlot, 
  Wheat, 
  HelpCircle, 
  ChevronRight,
  Share2,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Info
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { schemes, type Scheme } from "@/data/schemes";

interface SchemeMatcherProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "state" | "land" | "mainCrop" | "need" | "symptoms" | "results";

const STEPS: Step[] = ["state", "land", "mainCrop", "need", "symptoms", "results"];

export function SchemeMatcher({ open, onOpenChange }: SchemeMatcherProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<Step>("state");
  const [formData, setFormData] = useState({
    state: "",
    land: "",
    mainCrop: "",
    need: "",
    symptoms: [] as string[],
  });

  const stepIndex = STEPS.indexOf(currentStep);
  const progress = (stepIndex / (STEPS.length - 1)) * 100;

  const handleNext = () => {
    // Skip symptoms if not needed
    if (currentStep === "need" && formData.need !== "pest") {
      setCurrentStep("results");
      return;
    }
    const nextStep = STEPS[stepIndex + 1];
    if (nextStep) setCurrentStep(nextStep);
  };

  const handleBack = () => {
    // Handle skip logic for back button
    if (currentStep === "results" && formData.need !== "pest") {
      setCurrentStep("need");
      return;
    }
    const prevStep = STEPS[stepIndex - 1];
    if (prevStep) setCurrentStep(prevStep);
  };

  const reset = () => {
    setCurrentStep("state");
    setFormData({
      state: "",
      land: "",
      mainCrop: "",
      need: "",
      symptoms: [],
    });
  };

  const getMatchedSchemes = () => {
    const landSize = parseFloat(formData.land) || 0;
    return schemes.filter(scheme => {
      const stateMatch = scheme.states.includes("All") || scheme.states.includes(formData.state);
      const needMatch = scheme.needs.includes(formData.need);
      const landMatch = (!scheme.minLand || landSize >= scheme.minLand) && (!scheme.maxLand || landSize <= scheme.maxLand);
      return stateMatch && needMatch && landMatch;
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case "state":
        const states = ["Maharashtra", "West Bengal", "Bihar", "Uttar Pradesh", "Other"];
        const stateKeys = ["mh", "wb", "br", "up", "other"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
                <MapPin className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-semibold">{t("advisor.scheme.state.q")}</DialogTitle>
            </div>
            <div className="grid gap-3">
              {states.map((s, i) => (
                <button
                  key={s}
                  onClick={() => { setFormData(prev => ({ ...prev, state: s })); handleNext(); }}
                  className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                    formData.state === s ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <span className="text-lg font-medium">{t(`advisor.scheme.state.${stateKeys[i]}`)}</span>
                  <ChevronRight className="ml-auto h-5 w-5 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        );
      case "land":
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
                <LandPlot className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-semibold">{t("advisor.scheme.land.q")}</DialogTitle>
            </div>
            <Input 
              type="number"
              placeholder={t("advisor.scheme.land.p")}
              value={formData.land}
              onChange={(e) => setFormData(prev => ({ ...prev, land: e.target.value }))}
              className="h-14 rounded-2xl text-lg"
            />
          </div>
        );
      case "mainCrop":
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
                <Wheat className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-semibold">{t("advisor.scheme.mainCrop.q")}</DialogTitle>
            </div>
            <Input 
              placeholder={t("advisor.scheme.mainCrop.p")}
              value={formData.mainCrop}
              onChange={(e) => setFormData(prev => ({ ...prev, mainCrop: e.target.value }))}
              className="h-14 rounded-2xl text-lg"
            />
          </div>
        );
      case "need":
        const needs = ["pest", "money", "insure", "irrigate", "soil", "price", "animal"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
                <HelpCircle className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-semibold">{t("advisor.scheme.need.q")}</DialogTitle>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {needs.map((n) => (
                <button
                  key={n}
                  onClick={() => { setFormData(prev => ({ ...prev, need: n })); handleNext(); }}
                  className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-4 text-center transition-all ${
                    formData.need === n ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <span className="text-sm font-medium leading-tight">{t(`advisor.scheme.need.${n}`)}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case "symptoms":
        const symptoms = ["yellow", "spots", "wilting", "holes", "powder", "stunted"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.scheme.symptoms.q")}</DialogTitle>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {symptoms.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    const newSymp = formData.symptoms.includes(s) 
                      ? formData.symptoms.filter(x => x !== s)
                      : [...formData.symptoms, s];
                    setFormData(prev => ({ ...prev, symptoms: newSymp }));
                  }}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                    formData.symptoms.includes(s) ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <div className={`h-16 w-full rounded-lg bg-muted flex items-center justify-center`}>
                    <AlertTriangle className="h-6 w-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-medium">{t(`advisor.scheme.symptoms.${s}`)}</span>
                </button>
              ))}
            </div>
            <Button variant="pill" size="xl" className="w-full" onClick={handleNext}>
              {t("advisor.finish")}
            </Button>
          </div>
        );
      case "results":
        const matched = getMatchedSchemes();
        return (
          <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
            <div className="text-center space-y-2">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.results")}</DialogTitle>
              <p className="text-sm text-muted-foreground italic">"{t("advisor.disclaimer.scheme")}"</p>
            </div>

            {formData.need === "pest" && formData.symptoms.length > 0 && (
              <Card className="p-4 border-orange-200 bg-orange-50">
                <h3 className="font-bold text-orange-900 mb-2">{t("advisor.scheme.tips")}</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-orange-800 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    Separate infected plants immediately to prevent spread.
                  </li>
                  <li className="text-sm text-orange-800 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    Ensure proper drainage and avoid waterlogging around roots.
                  </li>
                  <li className="text-sm text-orange-800 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    Take a clear photo and visit your nearest Krishi Vigyan Kendra (KVK).
                  </li>
                </ul>
              </Card>
            )}

            <div className="space-y-4">
              <h3 className="font-bold text-lg">{t("advisor.scheme.schemes")}</h3>
              {matched.length > 0 ? (
                matched.map((scheme) => (
                  <Card key={scheme.id} className="p-4 glass border-primary/20">
                    <h4 className="font-bold text-primary">{scheme.name}</h4>
                    <p className="text-sm mt-1">{scheme.benefit}</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-muted-foreground"><span className="font-bold">How to apply:</span> {scheme.howToApply}</p>
                      <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-lime-600 font-bold hover:underline">
                        Official Website <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="text-[10px] bg-muted px-2 py-0.5 rounded flex items-center gap-1">
                        <Info className="h-3 w-3" /> {t("advisor.source")}: {scheme.source}
                      </div>
                      <div className="text-[10px] bg-muted px-2 py-0.5 rounded">
                        {t("advisor.verified")}: {scheme.lastVerified}
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No specific schemes found for your current criteria. Please check with your local agricultural office.</p>
              )}
            </div>

            <Card className="p-4 border-primary/20 bg-primary/5">
              <h3 className="font-bold text-primary mb-3">{t("advisor.scheme.steps")}</h3>
              <div className="space-y-3">
                {[
                  "Collect your Aadhaar card and Land records (7/12 or Jamabandi).",
                  "Visit the official portal links provided above.",
                  "Or, visit your nearest Common Service Centre (CSC) for assistance."
                ].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button variant="outline" className="rounded-2xl gap-2" onClick={() => {
                const text = `Krishi Setu Scheme Matcher results for ${formData.state}:\n${matched.map(s => `- ${s.name}`).join('\n')}`;
                window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
              }}>
                <Share2 className="h-4 w-4" /> {t("advisor.share")}
              </Button>
              <Button variant="outline" className="rounded-2xl gap-2" onClick={reset}>
                <RefreshCw className="h-4 w-4" /> {t("advisor.retry")}
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass flex flex-col gap-6 max-sm:h-dvh max-sm:max-w-full max-sm:rounded-none sm:max-w-2xl sm:rounded-3xl p-6 sm:p-10">
        <div className="flex items-center justify-between">
          {stepIndex > 0 && currentStep !== "results" ? (
            <button onClick={handleBack} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> {t("advisor.back")}
            </button>
          ) : <div />}
          {currentStep !== "results" && (
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Step {stepIndex + 1} of {STEPS.length - 1}
            </div>
          )}
        </div>

        {currentStep !== "results" && (
          <Progress value={progress} className="h-1.5" />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {["state", "land", "mainCrop", "need"].includes(currentStep) && (
          <Button 
            variant="pill" 
            size="xl" 
            className="w-full" 
            disabled={(currentStep === "state" && !formData.state) || (currentStep === "land" && !formData.land) || (currentStep === "mainCrop" && !formData.mainCrop) || (currentStep === "need" && !formData.need)}
            onClick={handleNext}
          >
            {t("advisor.next")}
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
