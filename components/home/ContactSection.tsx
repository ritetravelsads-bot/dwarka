import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-dark/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3 tracking-tight">
              REQUEST A SITE VISIT TODAY
            </h2>
            <p className="text-slate-600">
              Contact us for Dwarka Expressway project details
            </p>
          </div>

          <ContactForm source="homepage" variant="modal" />
        </div>
      </div>
    </section>
  );
}
