import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { ConstructionHero } from "@/components/sections/construction-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { ConstructionStats } from "@/components/sections/construction-stats";
import { ConstructionFeatures } from "@/components/sections/construction-features";
import { Services } from "@/components/sections/services";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title: "Services — Caeris Homes" },
      {
        name: "description",
        content:
          "Top home builders and architectural consultants in Kerala, focused on delivering sustainable, innovative homes through turnkey construction.",
      },
    ],
  }),
  component: ConstructionRoute,
});

function ConstructionRoute() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <ConstructionHero />
      <Services />
      <ConstructionStats />
      <ConstructionFeatures />
      <FinalCTA />
    </SiteLayout>
  );
}
