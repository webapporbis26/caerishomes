import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import heroImg from "@/assets/hero.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Caeris Homes | Get In Touch" },
      {
        name: "description",
        content:
          "Get in touch with Caeris Homes. Whether you have a question, want to discuss a project, or just want to say hello, we're here for you.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f0e8]">
        {/* Background image — fades from right */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] z-0">
          <div className="absolute inset-y-0 left-0 w-full md:w-2/5 bg-gradient-to-r from-[#f5f0e8] via-[#f5f0e8]/95 to-transparent z-10 hidden md:block" />
          {/* Mobile backdrop overlay for high text legibility */}
          <div className="absolute inset-0 bg-[#f5f0e8]/90 md:bg-transparent z-10" />
          <img
            src={heroImg}
            alt="Luxury Home"
            className="w-full h-full object-cover object-center opacity-25 md:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#f5f0e8] to-transparent z-10" />
        </div>

        {/* Spaces tagline — far right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20 text-right hidden xl:block">
          <p className="text-foreground/25 text-[10px] tracking-[0.3em] font-medium leading-loose uppercase">
            Spaces
            <br />
            For A Better
            <br />
            Tomorrow
          </p>
        </div>

        {/* Page content */}
        <div className="relative z-20 w-full max-w-[90rem] mx-auto px-5 sm:px-10 md:px-14 xl:px-20 pt-28 sm:pt-36 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 xl:gap-20 items-start">
            {/* ── Left Column ── */}
            <div data-reveal className="flex-1 min-w-0">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-[1.5px] bg-[#C8A45D]" />
                <p className="text-[#C8A45D] text-[11px] font-bold tracking-[0.3em] uppercase">
                  Get In Touch
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.15] text-foreground mb-5 font-medium">
                Let's Build Something Great <span className="text-[#C8A45D] italic">Together</span>
              </h1>

              {/* Description */}
              <p className="text-foreground/80 text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-[480px]">
                Whether you have a question about our services, want to discuss a project, or just
                want to say hello, we're here for you. Our team is ready to help you turn your
                vision into a home.
              </p>

              {/* Contact details — 2×2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 mb-10 sm:mb-12">
                {/* Address */}
                <div className="flex gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/60 mb-1.5">
                      Office Address
                    </p>
                    <p className="text-foreground/90 text-sm leading-relaxed font-normal">
                      Caeris Homes, Neduvelli H,
                      <br />
                      Mutholapuram PO, Elanji,
                      <br />
                      Ernakulam, Kerala - 686665
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/60 mb-1.5">
                      Phone
                    </p>
                    <a
                      href={CONTACT.phoneHref}
                      className="block text-foreground/90 text-sm font-medium hover:text-[#C8A45D] transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                    <a
                      href={`tel:${CONTACT.phone2?.replace(/\D/g, "")}`}
                      className="block text-foreground/90 text-sm font-medium hover:text-[#C8A45D] transition-colors"
                    >
                      {CONTACT.phone2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/60 mb-1.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="block text-foreground/90 text-sm font-medium hover:text-[#C8A45D] transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/60 mb-1.5">
                      Working Hours
                    </p>
                    <p className="text-foreground/90 text-sm font-medium">
                      Mon – Sat : 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-foreground/90 text-sm font-medium">
                      Sunday : By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Form Card ── */}
            <div data-reveal className="w-full lg:w-[420px] xl:w-[460px] shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-[#ede5d8]">
                <h2 className="font-display text-2xl sm:text-[1.6rem] text-foreground mb-1">
                  Send Us a Message
                </h2>
                <p className="text-foreground/60 text-xs sm:text-[13px] mb-6 sm:mb-7">
                  We usually respond within 24 hours.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name") as string;
                    const email = formData.get("email") as string;
                    const phone = formData.get("phone") as string;
                    const subject = formData.get("subject") as string;
                    const message = formData.get("message") as string;
                    const text = `Hi Caeris Homes,\n\nI would like to get in touch.\n\n*Name*: ${name}\n*Email*: ${email}\n*Phone*: ${phone || "Not provided"}\n*Subject*: ${subject || "General Inquiry"}\n\n*Message*:\n${message}`;
                    window.open(
                      `https://wa.me/918075931749?text=${encodeURIComponent(text)}`,
                      "_blank",
                    );
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      name="name"
                      required
                      placeholder="Full Name *"
                      className="w-full h-11 px-4 rounded-lg border border-[#e8dfd0] bg-[#faf7f2] text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full h-11 px-4 rounded-lg border border-[#e8dfd0] bg-[#faf7f2] text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full h-11 px-4 rounded-lg border border-[#e8dfd0] bg-[#faf7f2] text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors"
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    className="w-full h-11 px-4 rounded-lg border border-[#e8dfd0] bg-[#faf7f2] text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors"
                  />

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message *"
                    className="w-full px-4 py-3 rounded-lg border border-[#e8dfd0] bg-[#faf7f2] text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#B89650] hover:bg-[#a68645] text-white rounded-lg font-bold tracking-[0.15em] uppercase text-sm transition-all hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(184,150,80,0.3)] flex items-center justify-center gap-3"
                  >
                    SEND MESSAGE <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="w-full px-6 sm:px-10 md:px-14 xl:px-20 py-10 bg-[#faf8f4]">
        <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-[#ede5d8]">
          {/* Full-width Map */}
          <iframe
            src="https://maps.google.com/maps?q=Elanji,+Ernakulam,+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
