import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { projects } from "@/lib/site-data";
import { MoveUpRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Caeris Homes" },
      { name: "description", content: "Explore our completed projects and luxury home designs." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <section className="pt-[180px] pb-24 px-4 sm:px-8 md:px-12 bg-white dark:bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-slide-up mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4">
              Project Gallery
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              A curated collection of our completed residential projects. Care in every detail, designed and built for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative block overflow-hidden bg-muted aspect-[4/3] reveal-slide-up"
                style={{ 
                  transitionDelay: `${(idx % 3) * 100}ms`,
                  contentVisibility: "auto",
                  containIntrinsicSize: "400px" 
                }}
              >
                <img
                  src={project.img}
                  alt={`Project for ${project.client}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-semibold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.location}
                  </p>
                  <div className="flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <h3 className="text-white text-2xl font-display">{project.client}</h3>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                      <MoveUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
