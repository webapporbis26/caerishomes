import { createFileRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/site/site-layout'
import { PageHero } from '@/components/site/page-hero'
import { FinalCTA } from '@/components/sections/final-cta'
import { ConstructionStats } from '@/components/sections/construction-stats'
import { ConstructionFeatures } from '@/components/sections/construction-features'
import { ConstructionPortfolio } from '@/components/sections/construction-portfolio'
import { useRevealAnimations } from '@/hooks/use-reveal-animations'

import heroImg from '@/assets/construction-hero.webp'

export const Route = createFileRoute('/construction')({
  head: () => ({
    meta: [
      { title: "Services — Caeris Homes" },
      { name: "description", content: "Top home builders and architectural consultants in Kerala, focused on delivering sustainable, innovative homes through turnkey construction." }
    ]
  }),
  component: ConstructionRoute,
})

function ConstructionRoute() {
  useRevealAnimations()

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Construction"
        title="We Build Your Dream Home"
        description="We are top home builders and architectural consultants in Kerala, focused on delivering sustainable, innovative homes through turnkey construction. Our architects and engineers create strong, innovative designs, keeping function, schedule, budget, safety, and sustainability in mind."
        image={heroImg}
      />
      <ConstructionStats />
      <ConstructionPortfolio />
      <ConstructionFeatures />
      <FinalCTA />
    </SiteLayout>
  )
}
