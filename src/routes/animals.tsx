import { createFileRoute } from "@tanstack/react-router";
import { AnimalCareView } from "@/components/animals/AnimalCareView";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animal Care — Krishi Setu" },
      { name: "description", content: "Simple animal care guides for dairy cattle, poultry, and goats." },
      { property: "og:title", content: "Animal Care — Krishi Setu" },
      { property: "og:description", content: "Simple animal care guides for dairy cattle, poultry, and goats." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <AnimalCareView />
    </div>
  ),
});
