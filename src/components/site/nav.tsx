import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-caeris.png";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;
  
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setIsScrolled(window.scrollY > 10);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
        "fixed z-[90] flex items-center transition-all duration-500",
        isTransparent 
          ? "top-0 left-0 right-0 px-4 md:px-8 bg-transparent border-transparent h-[120px]" 
          : "top-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-auto lg:w-[1200px] lg:transform lg:left-1/2 lg:-translate-x-1/2 bg-white/90 backdrop-blur-md border border-border/20 shadow-lg rounded-full h-[70px] px-6 md:px-8"
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-full">
        {/* Left: Logo */}
        <Link to="/" className={cn(
          "relative z-10 block flex items-center transition-all duration-500",
          isTransparent ? "h-full w-[200px] md:w-[280px]" : "h-[40px] w-[150px] md:w-[180px]"
        )}>
          <img 
            src={logoImg} 
            alt="Logo" 
            className={cn(
              "h-full w-full object-contain object-left transition-all duration-300",
              isTransparent ? "brightness-0 invert drop-shadow-md" : ""
            )} 
          />
        </Link>
        
        {/* Center/Right: Navigation Desktop */}
        <nav className={cn(
          "hidden md:flex items-center gap-8 text-[14px] font-medium transition-colors duration-300",
          isTransparent ? "text-white" : "text-foreground/80"
        )}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "transition-colors py-2 drop-shadow-sm",
                isTransparent ? "hover:text-[#C8A45D]" : "hover:text-[#C8A45D]"
              )}
              activeProps={{ className: "text-[#C8A45D] font-bold" }}
            >
              {link.label}
            </Link>
          ))}

          
          <Link to="/contact" className="bg-[#C8A45D] hover:bg-black text-white px-6 py-2.5 rounded text-sm transition-colors font-bold ml-4">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden flex items-center justify-center w-10 h-10 transition-colors",
            isTransparent ? "text-white" : "text-foreground"
          )}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

    {/* Mobile Navigation Menu */}
    <div className={cn(
      "fixed inset-0 bg-white z-[80] pt-[100px] px-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col",
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    )}>
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
      <div className="mt-auto mb-12">
        <Link 
          to="/contact" 
          onClick={() => setIsMenuOpen(false)}
          className="block w-full text-center bg-[#C8A45D] text-white py-4 rounded font-bold text-lg"
        >
          Get a Quote
        </Link>
      </div>
    </div>
    </>
  );
}
