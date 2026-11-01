import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  CloudRain, 
  Thermometer, 
  Calendar, 
  Droplets, 
  Wallet, 
  Target,
  ChevronRight,
  Share2,
  RefreshCw,
  Info
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useWeather } from "@/hooks/use-weather";
import { crops, type Crop } from "@/data/crops";

interface CropRecommenderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "location" | "soil" | "season" | "water" | "budget" | "goal" | "results";

const STEPS: Step[] = ["location", "soil", "season", "water", "budget", "goal", "results"];

export function CropRecommender({ open, onOpenChange }: CropRecommenderProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<Step>("location");
  const [formData, setFormData] = useState({
    location: "",
    soil: "",
    season: "",
    water: "",
    budget: "",
    goal: [] as string[],
  });
  
  const stepIndex = STEPS.indexOf(currentStep);
  const progress = (stepIndex / (STEPS.length - 1)) * 100;
  
  const { data: weather, loading: weatherLoading, error: weatherError } = useWeather(formData.location);

  const handleNext = () => {
    const nextStep = STEPS[stepIndex + 1];
    if (nextStep) setCurrentStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = STEPS[stepIndex - 1];
    if (prevStep) setCurrentStep(prevStep);
  };

  const reset = () => {
    setCurrentStep("location");
    setFormData({
      location: "",
      soil: "",
      season: "",
      water: "",
      budget: "",
      goal: [],
    });
  };

  const getRecommendations = () => {
    return crops
      .map(crop => {
        let score = 0;
        if (crop.soils.includes(formData.soil) || formData.soil === "unsure") score += 2;
        if (crop.seasons.includes(formData.season)) score += 3;
        if (crop.waterNeeds.includes(formData.water)) score += 2;
        if (crop.costBand === formData.budget) score += 1;
        formData.goal.forEach(g => {
          if (crop.goal.includes(g as any)) score += 1;
        });
        return { crop, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const handleUseLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&format=json`);
          const data = await res.json();
          if (data.results?.[0]) {
            setFormData(prev => ({ ...prev, location: data.results[0].name }));
          }
        } catch (e) {
          console.error("Geocoding failed", e);
        }
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "location":
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-lime">
                <MapPin className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.location.q")}</DialogTitle>
            </div>
            <div className="space-y-4">
              <Input 
                placeholder={t("advisor.crop.location.p")}
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="h-14 rounded-2xl text-lg"
              />
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-2xl gap-2"
                onClick={handleUseLocation}
              >
                <MapPin className="h-4 w-4" /> {t("advisor.crop.location.geo")}
              </Button>
            </div>
          </div>
        );
      case "soil":
        const soils = ["black", "red", "alluvial", "sandy", "loamy", "clayey", "unsure"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.soil.q")}</DialogTitle>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {soils.map((s) => (
                <button
                  key={s}
                  onClick={() => { setFormData(prev => ({ ...prev, soil: s })); handleNext(); }}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 transition-all ${
                    formData.soil === s ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <span className="text-sm font-medium">{t(`advisor.crop.soil.${s}`)}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case "season":
        const seasons = ["kharif", "rabi", "zaid"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.season.q")}</DialogTitle>
            </div>
            <div className="grid gap-3">
              {seasons.map((s) => (
                <button
                  key={s}
                  onClick={() => { setFormData(prev => ({ ...prev, season: s })); handleNext(); }}
                  className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                    formData.season === s ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent">
                    <Calendar className="h-5 w-5 text-lime" />
                  </div>
                  <span className="text-lg font-medium">{t(`advisor.crop.season.${s}`)}</span>
                  <ChevronRight className="ml-auto h-5 w-5 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        );
      case "water":
        const waters = ["rain", "canal", "bore", "drip"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.water.q")}</DialogTitle>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {waters.map((w) => (
                <button
                  key={w}
                  onClick={() => { setFormData(prev => ({ ...prev, water: w })); handleNext(); }}
                  className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-all ${
                    formData.water === w ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <Droplets className={`h-8 w-8 ${formData.water === w ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium">{t(`advisor.crop.water.${w}`)}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case "budget":
        const budgets = ["low", "medium", "high"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.budget.q")}</DialogTitle>
            </div>
            <div className="grid gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => { setFormData(prev => ({ ...prev, budget: b })); handleNext(); }}
                  className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                    formData.budget === b ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <Wallet className={`h-6 w-6 ${formData.budget === b ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-lg font-medium">{t(`advisor.crop.budget.${b}`)}</span>
                  <ChevronRight className="ml-auto h-5 w-5 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        );
      case "goal":
        const goals = ["food", "cash", "risk"];
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.crop.goal.q")}</DialogTitle>
            </div>
            <div className="grid gap-3">
              {goals.map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    const newGoals = formData.goal.includes(g) 
                      ? formData.goal.filter(x => x !== g)
                      : [...formData.goal, g];
                    setFormData(prev => ({ ...prev, goal: newGoals }));
                  }}
                  className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                    formData.goal.includes(g) ? "border-primary bg-primary/10 text-primary" : "border-glass-border bg-white/50 hover:border-primary/50"
                  }`}
                >
                  <Target className={`h-6 w-6 ${formData.goal.includes(g) ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-lg font-medium">{t(`advisor.crop.goal.${g}`)}</span>
                  <div className={`ml-auto h-6 w-6 rounded-full border flex items-center justify-center ${formData.goal.includes(g) ? "bg-primary border-primary" : "border-muted-foreground"}`}>
                    {formData.goal.includes(g) && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                </button>
              ))}
            </div>
            <Button variant="pill" size="xl" className="w-full" onClick={handleNext}>
              {t("advisor.finish")}
            </Button>
          </div>
        );
      case "results":
        const recommendations = getRecommendations();
        return (
          <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
            <div className="text-center space-y-2">
              <DialogTitle className="text-2xl font-semibold">{t("advisor.results")}</DialogTitle>
              <p className="text-sm text-muted-foreground italic">"{t("advisor.disclaimer.crop")}"</p>
            </div>
            
            <div className="grid gap-4">
              {recommendations.map(({ crop, score }, i) => (
                <Card key={crop.id} className="p-4 glass border-primary/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{crop.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{crop.reason}</p>
                    </div>
                    <div className="text-xs font-bold bg-lime/20 text-lime-600 px-2 py-1 rounded-full uppercase">
                      Match: {Math.min(100, Math.round((score / 10) * 100))}%
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="text-[10px] bg-muted px-2 py-0.5 rounded flex items-center gap-1">
                      <Info className="h-3 w-3" /> {t("advisor.source")}: {crop.source}
                    </div>
                    <div className="text-[10px] bg-muted px-2 py-0.5 rounded">
                      {t("advisor.verified")}: {crop.lastVerified}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {formData.location && (
              <Card className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold flex items-center gap-2 text-blue-900">
                    <CloudRain className="h-5 w-5" /> {t("advisor.crop.weather.title")} - {formData.location}
                  </h3>
                  {weatherLoading && <RefreshCw className="h-4 w-4 animate-spin text-blue-400" />}
                </div>
                
                {weatherError ? (
                  <p className="text-sm text-red-500">{t("advisor.crop.weather.fail")}</p>
                ) : weather ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-8 w-8 text-orange-500" />
                        <div>
                          <p className="text-xs text-blue-700">{t("advisor.crop.weather.temp")}</p>
                          <p className="text-2xl font-bold text-blue-900">{weather.current.temp}°C</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CloudRain className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="text-xs text-blue-700">{t("advisor.crop.weather.rain")}</p>
                          <p className="text-2xl font-bold text-blue-900">{weather.current.rainChance}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-blue-200">
                      <p className="text-sm font-medium text-blue-800">
                        {weather.current.rainChance > 40 ? "⚠️ High chance of rain. Avoid sowing or applying fertilizer today." : "✅ Weather looks good for field work."}
                      </p>
                    </div>

                    <div className="flex gap-2 overflow-x-auto py-2">
                      {weather.daily.slice(1, 6).map((day, i) => (
                        <div key={i} className="flex-shrink-0 text-center p-2 rounded-lg bg-white/50 min-w-[70px]">
                          <p className="text-[10px] font-bold text-blue-700">{new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short' })}</p>
                          <p className="text-sm font-bold text-blue-900">{day.maxTemp}°</p>
                          <p className="text-[10px] text-blue-500">{day.rainProb}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Card>
            )}

            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button variant="outline" className="rounded-2xl gap-2" onClick={() => {
                const text = `Krishi Setu Recommendations for ${formData.location}:\n${recommendations.map(r => `- ${r.crop.name}`).join('\n')}`;
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

        {currentStep === "location" && (
          <Button 
            variant="pill" 
            size="xl" 
            className="w-full" 
            disabled={!formData.location}
            onClick={handleNext}
          >
            {t("advisor.next")}
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
