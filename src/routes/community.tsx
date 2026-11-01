import { createFileRoute } from "@tanstack/react-router";
import { CommunityView } from "@/components/community/CommunityView";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Krishi Setu" },
      { name: "description", content: "Ask questions and get answers from farmers and agricultural experts." },
      { property: "og:title", content: "Community — Krishi Setu" },
      { property: "og:description", content: "Ask questions and get answers from farmers and agricultural experts." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <CommunityView />
    </div>
  ),
});
