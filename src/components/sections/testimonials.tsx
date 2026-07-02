import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const formattedTestimonials = testimonials.map((t) => ({
    author: {
      name: t.name,
      handle: t.location,
      avatar: t.image,
    },
    text: t.quote,
  }));

  return (
    <div id="testimonials">
      <TestimonialsSection
        title="Voices of Trust"
        description="Hear from families who have experienced our commitment to quality, transparency, and care firsthand."
        testimonials={formattedTestimonials}
        className="bg-[#FAF9F6] border-y border-border/10"
      />
    </div>
  );
}
