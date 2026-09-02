import { useEffect } from "react";

export function useLenis() {
  // Lenis smooth scrolling has been disabled to eliminate scroll lag 
  // and return to buttery smooth native OS scrolling for the new layout.
  useEffect(() => {
    // Native scroll is now used globally.
  }, []);
}
