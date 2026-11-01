import { createFileRoute } from "@tanstack/react-router";
import { CropDiseasesView } from "@/components/crops/CropDiseasesView";

export const Route = createFileRoute("/crop-diseases")({
  head: () => ({
    meta: [
      { title: "Crop Diseases — Krishi Setu" },
      { name: "description", content: "Know your crop and the diseases it may have — symptoms, cause, spread and control in detail." },
      { property: "og:title", content: "Crop Diseases — Krishi Setu" },
      { property: "og:description", content: "Detailed crop disease guide with symptoms, cause, spread, organic and chemical control." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background px-4 pb-20 pt-24">
      <CropDiseasesView />
    </div>
  ),
});
