import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/schemes")({
  head: () => ({
    meta: [
      { title: "Schemes — Krishi Setu" },
      { name: "description", content: "Government schemes for farmers, explained simply. Coming soon." },
      { property: "og:title", content: "Schemes — Krishi Setu" },
      { property: "og:description", content: "Government schemes for farmers, explained simply. Coming soon." },
    ],
  }),
  component: () => <PlaceholderPage titleKey="nav.schemes" />,
});
