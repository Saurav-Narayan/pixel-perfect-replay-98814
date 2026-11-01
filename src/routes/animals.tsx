import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animal care — Krishi Setu" },
      { name: "description", content: "Simple animal care guides, coming soon to Krishi Setu." },
      { property: "og:title", content: "Animal care — Krishi Setu" },
      { property: "og:description", content: "Simple animal care guides, coming soon to Krishi Setu." },
    ],
  }),
  component: () => <PlaceholderPage titleKey="nav.animals" />,
});
