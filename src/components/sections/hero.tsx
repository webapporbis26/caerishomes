import * as React from "react";
import desk1 from "@/assets/desk/hero 1 desk.webp";
import desk2 from "@/assets/desk/hero 2 desk.webp";
import desk3 from "@/assets/desk/hero 3 desk.webp";
import mob1 from "@/assets/mob/hero 1 mob.webp";
import mob2 from "@/assets/mob/hero 2 mob.webp";
import mob3 from "@/assets/mob/hero 3 mob.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Hero() {
  const images = [
    { desktop: desk1, mobile: mob1, title: "Caeris Homes – Celebrating Excellence in Kerala" },
    { desktop: desk2, mobile: mob2, title: "Caeris Homes – Building Your Dream Home" },
    { desktop: desk3, mobile: mob3, title: "Caeris Homes – Generations of Quality Construction" },
  ];

  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <section className="relative w-full bg-black">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="ml-0">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-0 basis-full relative h-[100dvh] w-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              <picture>
                <source media="(max-width: 768px)" srcSet={img.mobile} />
                <source media="(min-width: 769px)" srcSet={img.desktop} />
                <img
                  src={img.desktop}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </picture>

              <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto md:mx-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {img.title}
                  </h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 h-12 w-12 border-0 bg-black/20 hover:bg-white/20 text-white z-30 transition-all backdrop-blur-sm" />
        <CarouselNext className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 h-12 w-12 border-0 bg-black/20 hover:bg-white/20 text-white z-30 transition-all backdrop-blur-sm" />
      </Carousel>
    </section>
  );
}
