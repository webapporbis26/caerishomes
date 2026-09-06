import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-caeris.webp";
import { Magnetic } from "@/components/site/magnetic";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { useTheme } from "@/components/theme-provider";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/construction" as const, label: "Services" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isHome = pathname === "/";
  const isProjects = pathname === "/projects";
  const isConstruction = pathname === "/construction";
  const isAbout = pathname === "/about";
  const hasDarkHero = isHome || isProjects || isConstruction || isAbout;

  const isTransparent = !isScrolled;
  const shouldInvertLogo = (isTransparent && hasDarkHero) || theme === "dark";

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setIsScrolled(window.scrollY > 50);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[90] flex justify-center pointer-events-none px-4 md:px-8">
        <div
          className={cn(
            "pointer-events-auto flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full",
            isTransparent
              ? "h-[120px] bg-transparent border-transparent"
              : "max-w-[1200px] bg-background/90 backdrop-blur-md border border-border/20 shadow-lg rounded-full h-[70px] px-6 md:px-8 mt-4",
          )}
        >
          <div className="w-full flex justify-between items-center h-full">
            {/* Left: Logo */}
            <Link
              to="/"
              className={cn(
                "relative z-10 block flex items-center transition-all duration-500",
                isTransparent ? "h-full w-[200px] md:w-[280px]" : "h-[40px] w-[150px] md:w-[180px]",
              )}
            >
              <img
                src={logoImg}
                alt="Logo"
                className={cn(
                  "h-full w-full object-contain object-left",
                  shouldInvertLogo ? "brightness-0 invert drop-shadow-md" : "",
                )}
              />
            </Link>

            {/* Center/Right: Navigation Desktop */}
            <nav
              className={cn(
                "hidden md:flex items-center gap-8 text-[14px] font-medium transition-colors duration-300",
                isTransparent
                  ? hasDarkHero
                    ? "text-white"
                    : "text-foreground"
                  : "text-foreground/80",
              )}
            >
              {links.map((link) => (
                <Magnetic key={link.label}>
                  <Link
                    to={link.to}
                    className={cn(
                      "transition-colors py-2 drop-shadow-sm inline-block",
                      isTransparent ? "hover:text-[#C8A45D]" : "hover:text-[#C8A45D]",
                    )}
                    activeProps={{ className: "text-[#C8A45D] font-bold" }}
                  >
                    {link.label}
                  </Link>
                </Magnetic>
              ))}

              <div className="ml-2">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden flex items-center justify-center w-10 h-10 transition-colors",
                isTransparent
                  ? hasDarkHero
                    ? "text-white"
                    : "text-foreground"
                  : "text-foreground",
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-[80] pt-[100px] px-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-6 text-2xl font-semibold mt-10">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground border-b border-border/10 pb-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto mb-12 flex flex-col gap-6">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
