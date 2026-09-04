import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp — small round button */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Customer Care pill — shows number in visible text */}
      <a
        href={CONTACT.phoneHref}
        className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.03] active:scale-[0.97] group"
        aria-label="Call Customer Care"
      >
        <span className="w-10 h-10 bg-[#C8A45D] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-card group-hover:text-[#C8A45D] transition-colors">
          <Phone className="w-5 h-5" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Customer Care</span>
          <span className="text-sm font-bold tracking-wide">{CONTACT.phoneRaw}</span>
        </span>
      </a>
    </div>
  );
}
