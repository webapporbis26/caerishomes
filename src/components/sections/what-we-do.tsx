import { splitChars } from "@/lib/split-chars";

import { services } from "@/lib/site-data";

export function WhatWeDo() {

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 pt-8 pb-4 md:pt-12 md:pb-8 border-y border-border/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div data-reveal>
          <p className="text-eyebrow mb-4">What we do</p>
          <h2 data-split className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight">
            {splitChars("We Build Your Dream Home")}
          </h2>
        </div>
        <div className="space-y-6">
          {services.map((service, i) => (
            <div key={i} data-reveal className="border-l border-[#C8A45D]/40 pl-6">
              <h3 className="font-display text-xl mb-2 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
