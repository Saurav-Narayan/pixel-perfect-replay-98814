import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/practices")({
  head: () => ({
    meta: [
      { title: "Farming practices — Krishi Setu" },
      { name: "description", content: "Better farming practices explained simply, coming soon." },
      { property: "og:title", content: "Farming practices — Krishi Setu" },
      { property: "og:description", content: "Better farming practices explained simply, coming soon." },
    ],
  }),
  component: () => <PlaceholderPage titleKey="nav.practices" />,
});
