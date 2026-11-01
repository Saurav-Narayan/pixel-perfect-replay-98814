import { createFileRoute } from "@tanstack/react-router";
import { SchemesView } from "@/components/schemes/SchemesView";

export const Route = createFileRoute("/schemes")({
  head: () => ({
    meta: [
      { title: "Government Schemes — Krishi Setu" },
      { name: "description", content: "Agricultural and livestock schemes for Indian farmers." },
      { property: "og:title", content: "Government Schemes — Krishi Setu" },
      { property: "og:description", content: "Agricultural and livestock schemes for Indian farmers." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <SchemesView />
    </div>
  ),
});
