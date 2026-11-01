import { createContext, useContext, useState, type ReactNode } from "react";
import { CropRecommender } from "@/components/home/CropRecommender";
import { SchemeMatcher } from "@/components/home/SchemeMatcher";
import { AskQuestionDialog } from "@/components/community/AskQuestionDialog";

type AdvisorType = "crop" | "scheme" | "ask" | null;

interface AdvisorContextType {
  openAdvisor: (type: AdvisorType, prefilled?: any) => void;
  closeAdvisor: () => void;
}

const AdvisorContext = createContext<AdvisorContextType>({
  openAdvisor: () => {},
  closeAdvisor: () => {},
});

export const useAdvisor = () => useContext(AdvisorContext);

export function AdvisorProvider({ children }: { children: ReactNode }) {
  const [activeAdvisor, setActiveAdvisor] = useState<AdvisorType>(null);
  const [prefilled, setPrefilled] = useState<any>(null);

  const openAdvisor = (type: AdvisorType, prefilledData?: any) => {
    setActiveAdvisor(type);
    setPrefilled(prefilledData);
  };
  const closeAdvisor = () => {
    setActiveAdvisor(null);
    setPrefilled(null);
  };

  return (
    <AdvisorContext.Provider value={{ openAdvisor, closeAdvisor }}>
      {children}
      <CropRecommender open={activeAdvisor === "crop"} onOpenChange={(open: boolean) => !open && closeAdvisor()} />
      <SchemeMatcher open={activeAdvisor === "scheme"} onOpenChange={(open: boolean) => !open && closeAdvisor()} />
      <AskQuestionDialog open={activeAdvisor === "ask"} onOpenChange={(open: boolean) => !open && closeAdvisor()} prefilledTags={prefilled} />
    </AdvisorContext.Provider>
  );
}
