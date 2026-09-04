import { Compass, PenTool, FileCheck, Sofa, Hammer, Building2 } from "lucide-react";

export function Services() {
  const serviceItems = [
    {
      title: "Planning",
      icon: Compass,
      description: "We help you plan your dream home considering your plot, budget, and lifestyle, ensuring maximum space utilization.",
    },
    {
      title: "Architecture Designing",
      icon: PenTool,
      description: "Our expert architects create modern and traditional Kerala designs that are beautiful, practical, and Vastu-compliant.",
    },
    {
      title: "Permit Approval",
      icon: FileCheck,
      description: "We handle all the paperwork, K-SMART submissions, and local body approvals so you don't have to worry.",
    },
    {
      title: "Interior Designing",
      icon: Sofa,
      description: "From modular kitchens to custom wardrobes, our interior team brings your spaces to life with premium finishes.",
    },
    {
      title: "Contracting",
      icon: Hammer,
      description: "End-to-end construction with guaranteed branded materials, transparent pricing, and weekly progress updates.",
    },
    {
      title: "Turnkey Projects",
      icon: Building2,
      description: "Complete peace of mind. We handle everything from the first sketch to handing over the keys to your new home.",
    }
  ];

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20" data-reveal>
          <h4 className="text-eyebrow mb-4">
            What We Do
          </h4>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                data-reveal
                className="relative bg-card p-10 rounded-2xl border border-border/20 shadow-sm hover:apple-shadow hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
              >
                
                {/* Top Border Highlight */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#C8A45D] group-hover:w-full transition-all duration-700 ease-out z-10" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C8A45D] group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Icon className="w-7 h-7 text-[#C8A45D] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4 font-medium">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
