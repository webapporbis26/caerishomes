import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useRouterState } from "@tanstack/react-router";

export function useSectionOverlap() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // A small delay ensures the DOM is fully rendered and image sizes are calculated
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Select all major sections on the page
        const sections = gsap.utils.toArray<HTMLElement>("section");
        
        sections.forEach((section, i) => {
          // Only apply the overlap pinning effect to the very first section
          if (i !== 0) return;

          // Ensure the section has a relative positioning and z-index so stacking works
          section.style.position = "relative";
          section.style.zIndex = "0";

          // If the section is taller than the window, let the user scroll to the bottom of it before pinning.
          // Otherwise, pin it as soon as it reaches the top of the window.
          const isTaller = section.offsetHeight > window.innerHeight;

          ScrollTrigger.create({
            trigger: section,
            start: isTaller ? "bottom bottom" : "top top",
            pin: true,
            pinSpacing: false, // The magic property: allows the next section to slide over it
            id: `overlap-${i}`,
          });
        });

        // Force a refresh after creating triggers to ensure layout is correct
        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);
}
