import * as React from "react";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/site-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="py-8 md:py-10 bg-muted/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h4 className="text-[#C8A45D] font-bold tracking-widest uppercase mb-2 text-sm">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-[90rem] mx-auto relative px-4 md:px-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border/40 hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col justify-center">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C8A45D]/10 group-hover:text-[#C8A45D]/20 transition-colors" />

                    <div className="flex text-[#C8A45D] text-base mb-4">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm md:text-base">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="font-bold text-foreground text-base">{t.name}</h4>
                        <span className="text-[#C8A45D] text-xs font-semibold uppercase tracking-wide">
                          {t.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
