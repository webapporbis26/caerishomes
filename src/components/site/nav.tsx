import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";
import { FullScreenMenu } from "./full-screen-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/ChatGPT Image Jul 2, 2026, 07_51_22 PM.png";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/construction" as const, label: "Services" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  
  const isHome = pathname === "/";
  const forceDark = isHome && !isScrolled;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header 
        className={cn(
        "fixed top-0 left-0 right-0 z-[90] px-4 sm:px-8 md:px-12 flex items-center h-[90px] md:h-[130px] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isTransparent ? "bg-transparent" : "bg-transparent", // Removed white bg on scroll as requested
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Left: Logo (very large) */}
      <div className="flex-1 md:flex-none md:w-[450px] flex justify-start items-center h-full py-1 md:py-2">
        <Link to="/" className="relative z-10 block h-full w-full max-w-[320px] md:max-w-[420px]">
          <img src={logoImg} alt="Logo" className="h-full w-full object-contain object-left transition-all scale-110 sm:scale-100 origin-left" />
        </Link>
      </div>
      
      {/* Center: Navigation (flex-1 perfectly centered) */}
      <nav className={cn(
        "hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-12 text-[12px] tracking-[0.15em] uppercase font-bold transition-colors duration-500",
        isTransparent ? "text-white/90" : "text-black/80"
      )}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={cn(
              "relative py-2 whitespace-nowrap transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-bottom-left hover:after:scale-x-100",
              isTransparent ? "hover:text-white after:bg-white drop-shadow-sm" : "hover:text-black after:bg-black"
            )}
            activeProps={{ className: isTransparent ? "text-white after:scale-x-100 after:origin-bottom-left" : "text-black after:scale-x-100 after:origin-bottom-left" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right: Menu Button / CTA (450px to match left) */}
      <div className="flex flex-none md:w-[450px] justify-end items-center gap-4 z-10">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "flex items-center justify-center min-w-[48px] min-h-[48px] transition-all duration-300 active:scale-[0.96] shadow-sm rounded-none border",
            isTransparent ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" : "bg-white border-black/10 text-black hover:bg-black hover:text-white"
          )}
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>
    </header>

    <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
