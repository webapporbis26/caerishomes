import { createFileRoute } from "@tanstack/react-router";
import { ProjectCTA } from "@/components/sections/project-cta";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Caeris Homes" },
      { name: "description", content: "Get in touch with us for any questions or project discussions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealAnimations();

  const inputClass = "h-12 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 transition-colors";

  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Whether you have a question about our services, want to discuss a project, or just want to say hello, we are here for you."
      />

      <section className="py-12 md:py-20 px-4 sm:px-8 md:px-12 xl:px-20 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details & Map */}
          <div data-reveal className="space-y-12 flex flex-col">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-8">Reach Out Directly</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50">Office Address</h3>
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                      {CONTACT.address.split(", ").join("\\n")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50">Phone</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {CONTACT.phone}<br />
                      {CONTACT.phone2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50">Email</h3>
                    <p className="text-foreground/80 leading-relaxed break-all">
                      {CONTACT.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] bg-surface relative overflow-hidden border border-border/10 rounded-sm">
              <iframe
                src="https://maps.google.com/maps?q=Elanji,+Ernakulam,+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div data-reveal className="bg-surface/30 p-8 md:p-12 border border-border/10 rounded-sm h-fit">
            <h2 className="font-display text-3xl md:text-4xl mb-2">Send a Message</h2>
            <p className="text-foreground/60 mb-8">We usually respond within 24 hours.</p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50">Full Name</label>
                <Input name="name" required placeholder="John Doe" className={inputClass} />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50">Email Address</label>
                <Input name="email" type="email" required placeholder="john@example.com" className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50">Phone (Optional)</label>
                <Input name="phone" type="tel" placeholder="+91 9876543210" className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-foreground/50">Your Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  className="min-h-[120px] border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
                />
              </div>

              <Button type="submit" className="h-14 w-full bg-[#C8A45D] hover:bg-[#a68645] text-white rounded-sm font-bold tracking-wide uppercase text-sm transition-colors shadow-sm mt-4">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </section>

      <ProjectCTA />
    </SiteLayout>
  );
}
