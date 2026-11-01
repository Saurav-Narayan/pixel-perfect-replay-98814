import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { StatsTrust } from "@/components/home/StatsTrust";
import { About } from "@/components/home/About";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Teasers } from "@/components/home/Teasers";
import { Faq } from "@/components/home/Faq";
import { Feedback } from "@/components/home/Feedback";
import { DotNav } from "@/components/home/DotNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishi Setu — Trusted farm help in your language" },
      { name: "description", content: "Free, simple farming help on crops, animals and schemes in English, Hindi, Marathi and Bangla." },
      { property: "og:title", content: "Krishi Setu — Trusted farm help in your language" },
      { property: "og:description", content: "Free, simple farming help on crops, animals and schemes in 4 languages." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <DotNav />
      <Hero />
      <StatsTrust />
      <About />
      <HowItWorks />
      <Teasers />
      <Faq />
      <Feedback />
    </main>
  );
}
