import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";

const infoItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am – 7pm",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quick response guaranteed",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dwarkaexpresswayncr.com",
    sub: "Reply within 2 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Sector 110, Gurugram",
    sub: "Dwarka Expressway, Haryana",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9am – 7pm",
    sub: "Sunday by appointment",
  },
];

const highlights = [
  "RERA Approved Projects",
  "Zero Brokerage Fee",
  "Dedicated Relationship Manager",
  "Free Site Visit Assistance",
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 px-4 bg-lightGrey">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px] font-bold mb-2 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-dark">
            Request a Site Visit Today
          </h2>
        </div>

        {/* 2-col card — fixed 500px height on desktop */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl border border-borderGrey md:h-[500px]">

          {/* Left — info panel */}
          <div className="bg-dark md:w-[42%] flex-shrink-0 flex flex-col justify-between p-7 text-white">

            <div>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Our property advisors are ready to help you find the perfect home on Dwarka Expressway.
              </p>

              {/* Info items */}
              <div className="space-y-3.5">
                {infoItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">{item.label}</p>
                        <p className="text-white text-sm font-medium truncate">{item.value}</p>
                        <p className="text-white/40 text-[11px]">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-white/70">
                  <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form panel */}
          <div className="flex-1 bg-white flex flex-col justify-center px-7 py-7 overflow-y-auto">
            <h3 className="text-lg font-bold text-dark mb-1">Send Us an Enquiry</h3>
            <p className="text-slate-500 text-sm mb-5">
              Fill in your details and we&apos;ll get back to you within minutes.
            </p>
            <ContactForm source="homepage" variant="modal" />
          </div>

        </div>
      </div>
    </section>
  );
}
