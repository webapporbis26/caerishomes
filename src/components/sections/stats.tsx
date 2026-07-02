import { useEffect, useRef } from "react";
import { Home, Clock, HeartHandshake } from "lucide-react";
import { gsap } from "@/lib/gsap";

export function Stats() {
  const containerRef = useRef<HTMLElement>(null);

  const stats = [
    { 
      n: 20, 
      suf: "+", 
      l: "Projects Delivered",
      desc: "Successfully completed premium residential projects.",
      icon: Home 
    },
    { 
      n: 5, 
      suf: "+", 
      l: "Years Experience",
      desc: "Delivering architectural and construction excellence.",
      icon: Clock 
    },
    { 
      n: 98, 
      suf: "%", 
      l: "Client Satisfaction",
      desc: "Trusted by families to build their dream homes.",
      icon: HeartHandshake 
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-counter").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: { 
            trigger: el, 
            start: "top 95%" 
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-4 sm:px-8 md:px-12 xl:px-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.l} 
                data-reveal 
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-[#C8A45D]" strokeWidth={1.5} />
                </div>
                
                <div className="font-display text-4xl md:text-5xl text-foreground mb-3">
                  <span className="stat-counter" data-count={s.n}>{s.n}</span>
                  <span>{s.suf}</span>
                </div>
                
                <h3 className="text-[#C8A45D] uppercase tracking-[0.15em] text-xs font-bold mb-4">
                  {s.l}
                </h3>
                
                <p className="text-sm text-foreground/60 max-w-[220px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
