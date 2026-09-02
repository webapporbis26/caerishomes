import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { ProjectCTA } from "@/components/sections/project-cta";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { WeEnsure } from "@/components/sections/we-ensure";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyUs } from "@/components/sections/why-us";
import { YourStory } from "@/components/sections/your-story";
import { SiteLayout } from "@/components/site/site-layout";
import { useHomeAnimations } from "@/hooks/use-home-animations";
import { Stats } from "@/components/sections/stats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caeris Homes — Trusted Home Builders in Kerala" },
      {
        name: "description",
        content: "Trusted home builders in Kerala crafting practical, durable, and beautiful residences. From architectural design to construction and turnkey handover.",
      },
      { property: "og:title", content: "Caeris Homes — We Build Your Dream Home" },
      { property: "og:description", content: "Trusted home builders in Kerala. Architecture, construction, interiors and turnkey projects." },
    ],
  }),
  component: HomePage,
});

import { HomeAbout } from "@/components/sections/home-about";

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <HomeAbout />
      <Stats />
      <Services />
      <WhatWeDo />
      <ProjectsGrid limit={6} showViewAll />
      <ProjectCTA />
      <WhyUs />
      <YourStory />
      <Testimonials />
    </SiteLayout>
  );
}
