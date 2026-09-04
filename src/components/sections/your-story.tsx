import aboutImg from "@/assets/about-villa.webp";

export function YourStory() {
  return (
    <section className="bg-surface relative overflow-hidden pt-16 pb-4 md:pt-24 md:pb-8">
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* Left Column */}
        <div className="pl-4 sm:pl-8 md:pl-12 xl:pl-20 pr-4 md:pr-0 z-20">
          <div className="flex items-center gap-4 mb-6" data-reveal>
            <div className="h-[1px] w-8 bg-[#C8A45D]" />
            <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase">ABOUT US</p>
            <div className="h-[1px] w-8 bg-[#C8A45D]" />
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-foreground font-normal" data-reveal>
            A space to recharge <br />
            <span className="text-[#C8A45D] italic">life's</span> batteries.
          </h2>
          
          <div className="w-2 h-2 rotate-45 border border-[#C8A45D] mb-8" data-reveal />
          
          <p className="text-foreground/60 leading-relaxed text-lg max-w-lg" data-reveal>
            Caeris Homes is a residential construction company based in Elanji, Ernakulam, Kerala. We specialize in building practical homes designed for everyday living. Our focus is on smart design, clear planning, and reliable execution. We work closely with each client to understand their needs and budget. With a strong local presence and a hands-on approach, we ensure every project is handled with care. Our goal is simple. To deliver homes that are functional, durable, and built with trust.
          </p>

          <div className="mt-8 space-y-6 max-w-lg" data-reveal>
            <div>
              <h3 className="text-[#C8A45D] font-display text-xl mb-2">MISSION</h3>
              <p className="text-foreground/60 leading-relaxed">
                To build functional and lasting homes that respect every client’s budget, needs, and vision.
              </p>
            </div>
            <div>
              <h3 className="text-[#C8A45D] font-display text-xl mb-2">VISION</h3>
              <p className="text-foreground/60 leading-relaxed">
                To become the most trusted name for standard residential homes across Kerala.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column (Image) */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full pr-4 md:pr-8" data-reveal>
           {/* Gradient fade on the left edge of the image to blend it with background */}
           <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" />
           
           <img 
             src={aboutImg} 
             alt="Luxury Villa Exterior" 
             className="w-full h-full object-cover rounded-3xl shadow-2xl" 
           />
        </div>
      </div>
    </section>
  );
}
