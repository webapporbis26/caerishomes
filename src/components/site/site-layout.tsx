import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ScrollTrigger } from "@/lib/gsap";
import { useLenis } from "@/lib/use-lenis";
import { Footer } from "./footer";
import { FloatingContact } from "./floating-contact";
import { Nav } from "./nav";
import { Loader } from "./loader";
import { ScrollProgress } from "./scroll-progress";
import { AnimatePresence, motion } from "framer-motion";

export function SiteLayout({ children }: { children: ReactNode }) {
  useLenis();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Loader />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
    </main>
  );
}
