import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-data";

export function ProjectsTestimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-reveal
        >
          <div>
            <p className="text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              CLIENTS SPEAK
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal">
              Trusted by Families, Loved for Generations.
            </h2>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.name}
                className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="bg-surface p-8 md:p-10 rounded-2xl relative h-full flex flex-col justify-center"
                  data-reveal
                >
                  <div className="text-[#C8A45D] font-serif text-5xl leading-none absolute top-8 left-8">
                    “
                  </div>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed mt-6 mb-8">
                    "{item.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">- {item.name}</p>
                    <p className="text-[#C8A45D] text-xs font-medium">{item.location}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex gap-4 mt-8 md:absolute md:top-[-80px] md:right-0 md:mt-0 justify-end">
            <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" />
            <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
