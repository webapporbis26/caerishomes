import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  // Duplicate testimonials to ensure seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-8 md:py-10 bg-muted/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-2 text-sm">
            Testimonials
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee hover:[animation-play-state:paused] pb-4">
          {scrollItems.map((t, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border/40 hover:shadow-lg transition-shadow duration-300 relative mx-4"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C8A45D]/10 group-hover:text-[#C8A45D]/20 transition-colors" />
              
              <div className="flex text-[#C8A45D] text-base mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm md:text-base min-h-[80px]">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <h4 className="font-bold text-foreground text-base">{t.name}</h4>
                  <span className="text-[#C8A45D] text-xs font-semibold uppercase tracking-wide">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </section>
  );
}
