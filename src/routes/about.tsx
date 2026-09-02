import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { splitChars } from "@/lib/split-chars";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/hero and complted projects/JAMSHEER FINAL 01.jpg.jpeg";
import { Lightbulb, Target, Eye } from "lucide-react";
import { STATS, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Caeris Homes | Trusted Home Builders in Kerala" },
      { name: "description", content: "Caeris Homes is a trusted construction company based in Elanji, Ernakulam, Kerala. We specialize in quality residential construction, renovation, and turnkey projects." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <PageHero 
        eyebrow="ABOUT CAERIS HOMES"
        title="Trusted Home Builders in Kerala"
        image={heroImg}
      />

      {/* Founding Story Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 xl:px-20 max-w-5xl mx-auto text-center">
        <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed font-medium" data-reveal>
          Caeris Homes is a trusted construction company based in Elanji, Ernakulam, Kerala.
          With over a decade of hands-on experience in residential construction, we specialize in
          building practical, well-designed homes that suit the Kerala climate and lifestyle.
          From contemporary villas to budget-friendly family homes, every project is handled
          with care, transparency, and a commitment to quality that families across central Kerala
          have come to rely on.
        </p>
      </section>

      {/* Philosophy, Mission, Vision */}
      <section className="py-16 bg-surface px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Philosophy */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group">
            <h3 className="text-3xl font-display mb-8 group-hover:text-[#C8A45D] transition-colors">Our Approach</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#C8A45D] transition-colors">
              <div className="absolute inset-0 bg-[#C8A45D]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Lightbulb size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              We don't follow trends — we focus on what works for Kerala families. Every design starts with your plot, your budget, and how you actually live. We combine practical space planning with durable construction methods suited to Kerala's climate, so your home stays comfortable and low-maintenance for years.
            </p>
          </div>

          {/* Mission */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group delay-100">
            <h3 className="text-3xl font-display mb-8 group-hover:text-[#C8A45D] transition-colors">Our Promise</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#C8A45D] transition-colors">
              <div className="absolute inset-0 bg-[#C8A45D]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Target size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Transparent pricing with no hidden costs. Timely completion with weekly progress updates. Branded materials — Ultratech cement, Jindal steel, Asian Paints — verified on site. We handle everything from permits and K-SMART submissions to final handover, so you don't have to chase multiple contractors.
            </p>
          </div>

          {/* Vision */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group delay-200">
            <h3 className="text-3xl font-display mb-8 group-hover:text-[#C8A45D] transition-colors">Our Vision</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#C8A45D] transition-colors">
              <div className="absolute inset-0 bg-[#C8A45D]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Eye size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              To be the most trusted name in residential construction across Ernakulam and central Kerala — known not for flashy marketing, but for honest work, quality materials, and homes that families are proud of. We want every client to recommend us with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 md:px-10 xl:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" data-parallax="0.1">
          <img src={heroImg} alt="Background" className="w-full h-[120%] object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center mb-24 md:mb-32 border-b border-white/10 pb-12">
            <div data-reveal>
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">{STATS.projectsCompleted.value}{STATS.projectsCompleted.suffix}</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">{STATS.projectsCompleted.label}</p>
            </div>
            <div data-reveal className="delay-100">
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">{STATS.yearsExperience.value}{STATS.yearsExperience.suffix}</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">{STATS.yearsExperience.label}</p>
            </div>
            <div data-reveal className="delay-200">
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">{STATS.clientSatisfaction.value}{STATS.clientSatisfaction.suffix}</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">{STATS.clientSatisfaction.label}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight" data-split>
              {splitChars("From first meeting to key handover")}
            </h2>
            <div data-reveal className="space-y-8 text-white/70 leading-relaxed text-xl">
              <p>
                At Caeris Homes, every project begins with understanding your family's needs — the way you live, the space you need, and the budget you're comfortable with. We handle design, permits, construction, and interiors under one roof.
              </p>
              <p>
                Our team of experienced engineers and skilled workers focus on getting the fundamentals right — strong foundations, quality materials, and clean workmanship. We keep you informed at every stage with regular site visits and progress updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay w-full h-[120%] -top-[10%]" data-parallax="0.15">
           <img src={project1} alt="Texture" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display mb-8 md:mb-12 leading-tight" data-split>
            {splitChars("Ready to build your home?")}
          </h2>
          <div data-reveal className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-[#C8A45D] hover:bg-white hover:text-black text-white px-8 py-5 text-base rounded-none shadow-2xl transition-all duration-500 hover:scale-105 uppercase tracking-widest font-bold"
            >
              Talk to Us Today
            </Link>
            <a 
              href={CONTACT.phoneHref}
              className="border border-white/30 hover:border-white text-white px-8 py-5 text-base rounded-none transition-all duration-500 hover:scale-105 uppercase tracking-widest font-bold"
            >
              Call {CONTACT.phoneRaw}
            </a>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
