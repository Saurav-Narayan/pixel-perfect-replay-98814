import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crops — Krishi Setu" },
      { name: "description", content: "Guides on what to grow and when, coming soon to Krishi Setu." },
      { property: "og:title", content: "Crops — Krishi Setu" },
      { property: "og:description", content: "Guides on what to grow and when, coming soon to Krishi Setu." },
    ],
  }),
  component: () => <PlaceholderPage titleKey="nav.crops" />,
});
