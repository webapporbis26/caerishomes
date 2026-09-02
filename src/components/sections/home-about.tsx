import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-villa.png"; // Assuming an image exists, or use hero-bg

export function HomeAbout() {
  const points = [
    "Over 12 years of construction experience",
    "Transparent pricing with no hidden costs",
    "100+ successfully completed residential projects",
    "Premium branded materials (Ultratech, Jindal, etc.)",
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Content */}
        <div>
          <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm">
            About Caeris Homes
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Building Quality Homes for Generations
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Caeris Homes is a trusted construction company based in Elanji, Ernakulam, Kerala. 
            We don't follow trends — we focus on what works for Kerala families. Every design starts 
            with your plot, your budget, and how you actually live. We combine practical space planning 
            with durable construction methods suited to Kerala's climate.
          </p>
          
          <div className="space-y-4 mb-10">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C8A45D] shrink-0" />
                <span className="text-foreground font-medium">{point}</span>
              </div>
            ))}
          </div>

          <Link 
            to="/about"
            className="inline-block bg-foreground text-background hover:bg-[#C8A45D] px-8 py-4 rounded font-bold transition-colors"
          >
            Discover More About Us
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#C8A45D] rounded-lg translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10"></div>
          <img 
            src={aboutImg} 
            alt="Caeris Homes Villa" 
            className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]"
            onError={(e) => {
              // Fallback if about-villa.png doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = "/og-image.jpg"; 
            }}
          />
        </div>
      </div>
    </section>
  );
}
