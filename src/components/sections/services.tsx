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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm">
            What We Do
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C8A45D] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#C8A45D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
