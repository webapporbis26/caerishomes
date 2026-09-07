import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { projects } from "@/lib/site-data";
import { MoveUpRight, X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? projects.length - 1 : prev - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === projects.length - 1 ? 0 : prev + 1,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <SiteLayout>
      <section className="pt-20 md:pt-24 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 bg-white dark:bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-slide-up mb-8 sm:mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4">
              Project Gallery
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              A curated collection of our completed residential projects. Click on any image to view
              details in full screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className="group relative block overflow-hidden bg-muted aspect-[4/3] reveal-slide-up cursor-pointer rounded-xl"
                style={{
                  transitionDelay: `${(idx % 3) * 100}ms`,
                  contentVisibility: "auto",
                  containIntrinsicSize: "400px",
                }}
              >
                <img
                  src={project.img}
                  alt={`Project ${project.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-[#C8A45D] text-xs tracking-widest uppercase font-semibold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </p>
                  <div className="flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <div>
                      <h3 className="text-white text-2xl font-display">{project.name}</h3>
                      {project.type && (
                        <p className="text-white/70 text-xs mt-0.5">{project.type}</p>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-[#C8A45D] group-hover:border-[#C8A45D] transition-colors">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fullscreen Lightbox Modal ── */}
      {selectedIndex !== null && activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Header Controls */}
          <div
            className="w-full max-w-7xl flex items-center justify-between z-10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C8A45D]">
              {selectedIndex + 1} / {projects.length}
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Container */}
          <div
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.img}
              alt={activeProject.name}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white transition-colors border border-white/10 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white transition-colors border border-white/10 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Info */}
          <div
            className="w-full max-w-2xl text-center text-white z-10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-1">
              {activeProject.name}
            </h3>
            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-white/70">
              <span className="flex items-center gap-1 text-[#C8A45D] font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {activeProject.location}
              </span>
              {activeProject.type && <span>• {activeProject.type}</span>}
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
