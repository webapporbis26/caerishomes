import { CONTACT } from "@/lib/site-data";
import logoImg from "@/assets/ChatGPT Image Jul 2, 2026, 07_51_22 PM.png";
import { Phone, Mail, ArrowUp, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground relative pt-12 pb-8 px-4 sm:px-8 md:px-12">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-12 md:mb-16">
          
          <div className="flex flex-col text-left">
            <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4 text-foreground/90">Address</h3>
            <p className="text-[10px] md:text-sm leading-relaxed md:leading-loose text-foreground/70 font-medium whitespace-pre-line max-w-[200px]">
              {CONTACT.address.split(", ").join("\n")}
            </p>
          </div>

          {/* Center: Logo & Tagline */}
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="Logo" className="h-12 sm:h-16 md:h-32 w-auto object-contain mb-3 md:mb-6 filter dark:invert" />
            <div className="text-[10px] md:text-sm text-foreground/80 font-medium mb-3 md:mb-6 max-w-sm hidden sm:block">
              <span className="block font-bold text-[#C8A45D] mb-1">Care in Every Detail</span>
              We approach every step with attention, responsibility, and genuine care.
            </div>

          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-end text-right">
            <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4 text-foreground/90">Contact</h3>
            <div className="space-y-2 md:space-y-3 flex flex-col items-end">
              <a href={CONTACT.phoneHref} className="flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
                <span>{CONTACT.phone}</span>
              </a>
              <a href={`tel:${CONTACT.phone2.replace(/\\D/g, "")}`} className="flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
                <span>{CONTACT.phone2}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium mt-1 md:mt-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C8A45D]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/60 font-medium">© Caeris Homes 2026</p>
          
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors text-foreground/80 hover:text-[#C8A45D]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          
          <p className="text-sm text-foreground/60 font-medium">Designed and Developed by ENEM</p>
        </div>
      </div>
    </footer>
  );
}
