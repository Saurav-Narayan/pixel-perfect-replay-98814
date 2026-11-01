import { createFileRoute } from "@tanstack/react-router";
import { CropsView } from "@/components/crops/CropsView";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crops — Krishi Setu" },
      { name: "description", content: "Learn about different crops, their soil needs, and best seasons." },
      { property: "og:title", content: "Crops — Krishi Setu" },
      { property: "og:description", content: "Learn about different crops, their soil needs, and best seasons." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <CropsView />
    </div>
  ),
});
