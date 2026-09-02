import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import desk1 from "@/assets/desk/hero 1 desk.png";
import desk2 from "@/assets/desk/hero 2 desk.png";
import desk3 from "@/assets/desk/hero 3 desk.png";
import mob1 from "@/assets/mob/hero 1 mob.png";
import mob2 from "@/assets/mob/hero 2 mob.png";
import mob3 from "@/assets/mob/hero 3 mob.png";
import { Home, Clock, HeartHandshake } from "lucide-react";
import { STATS } from "@/lib/site-data";

export function Hero() {
  const images = [
    { desktop: desk1, mobile: mob1, title: "Caeris Homes – Celebrating Excellence in Kerala" },
    { desktop: desk2, mobile: mob2, title: "Caeris Homes – Building Your Dream Home" },
    { desktop: desk3, mobile: mob3, title: "Caeris Homes – Generations of Quality Construction" }
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full bg-black">
      {/* Slider Container */}
      <div className="relative h-[100dvh] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Dark overlay for text readability */}
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

            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {img.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
