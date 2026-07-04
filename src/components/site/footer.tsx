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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Left: Address */}
          <div className="flex flex-col text-left">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/90">Address</h3>
            <p className="text-sm leading-loose text-foreground/70 font-medium">
              Neduvelil H<br />
              Mutholapuram po<br />
              Elanji. Ernakulam.
            </p>
          </div>

          {/* Center: Logo & Tagline */}
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="Logo" className="h-24 md:h-32 w-auto object-contain mb-6 filter dark:invert" />
            <div className="text-sm text-foreground/80 font-medium mb-6 max-w-sm">
              <span className="block font-bold text-[#C8A45D] mb-1">Care in Every Detail</span>
              We approach every step with attention, responsibility, and genuine care.
            </div>
            <div className="flex items-center gap-4">
               {/* Social Icons - outlined circles */}
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <MessageCircle className="w-4 h-4" /> {/* WhatsApp fallback */}
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Facebook className="w-4 h-4" />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Youtube className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/90">Contact</h3>
            <div className="space-y-3 flex flex-col md:items-end">
              <a href="tel:+918075931749" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-4 h-4" />
                <span>8075931749</span>
              </a>
              <a href="tel:+919400759169" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-4 h-4" />
                <span>9400759169</span>
              </a>
              <a href="mailto:jismariajl@gmail.com" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium mt-2">
                <Mail className="w-4 h-4" />
                <span>jismariajl@gmail.com</span>
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
