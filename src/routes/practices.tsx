import { createFileRoute } from "@tanstack/react-router";
import { PracticesView } from "@/components/practices/PracticesView";

export const Route = createFileRoute("/practices")({
  head: () => ({
    meta: [
      { title: "Farming Practices — Krishi Setu" },
      { name: "description", content: "Sustainable farming practices from India and Nordic regions." },
      { property: "og:title", content: "Farming Practices — Krishi Setu" },
      { property: "og:description", content: "Sustainable farming practices from India and Nordic regions." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <PracticesView />
    </div>
  ),
});
