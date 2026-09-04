import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useRevealAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const chars = el.querySelectorAll(".split-char");
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 95%" },
          },
        );
      });

      // Counter Animation
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        gsap.to(el, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // Text Scrub Effect
      gsap.utils.toArray<HTMLElement>("[data-scrub]").forEach((el) => {
        gsap.fromTo(
          el,
          { backgroundPositionX: "100%" },
          {
            backgroundPositionX: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: 1,
              start: "top 85%",
              end: "bottom 50%",
            },
          }
        );
      });

      // Simple Parallax Effect
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = el.dataset.parallax ? parseFloat(el.dataset.parallax) : 0.15;
        gsap.fromTo(
          el,
          { yPercent: -speed * 100 },
          {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
}
