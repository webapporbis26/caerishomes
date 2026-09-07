import { ArrowRight as ArrowRightIcon, Play } from "lucide-react";
import heroImg from "@/assets/hero.webp";
import { Link } from "@tanstack/react-router";

export function AboutHero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-start overflow-hidden bg-black text-white">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="About Us"
          className="w-full h-full object-cover object-top md:object-center"
        />
        {/* Stronger gradient on mobile so text is readable */}
        <div className="absolute inset-0 bg-[#111111]/70 md:bg-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent z-10" />
      </div>

      {/* Top Right Text */}
      <div
        className="absolute top-32 right-12 md:right-20 z-20 text-right hidden md:block"
        data-reveal
      >
        <p className="text-white/90 text-sm tracking-[0.2em] font-medium leading-loose uppercase">
          Spaces
          <br />
          For A Better
          <br />
          Tomorrow
        </p>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 mt-32 md:mt-48">
        <div className="max-w-2xl text-left" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-[#C8A45D] text-xs font-bold tracking-[0.25em] uppercase">
              ABOUT CAERIS HOMES
            </p>
            <div className="w-16 h-[1px] bg-[#C8A45D]/50" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-white mb-8 font-normal tracking-tight">
            Trusted Home <br />
            Builders in <span className="text-[#C8A45D]">Kerala</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1"
            >
              GET IN TOUCH <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
