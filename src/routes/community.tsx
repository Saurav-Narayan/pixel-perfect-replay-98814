import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Krishi Setu" },
      { name: "description", content: "Questions and answers from farmers. Coming soon to Krishi Setu." },
      { property: "og:title", content: "Community — Krishi Setu" },
      { property: "og:description", content: "Questions and answers from farmers. Coming soon to Krishi Setu." },
    ],
  }),
  component: () => <PlaceholderPage titleKey="nav.community" />,
});
