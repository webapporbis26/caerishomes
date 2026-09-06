import p1 from "@/assets/consultation.png";
import p2 from "@/assets/construction.png";
import p3 from "@/assets/architecture.png";
import p4 from "@/assets/interior_design.png";

export function WhatWeDo() {
  const categories = [
    { title: "Consultation", img: p1 },
    { title: "Construction", img: p2 },
    { title: "Architecture", img: p3 },
    { title: "Interior Design", img: p4 },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm">
            Expertise
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Areas of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLImageElement).src = "/og-image.jpg" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
