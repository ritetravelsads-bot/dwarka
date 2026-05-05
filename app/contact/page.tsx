import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dwarka Expressway Real Estate",
  description:
    "Get in touch with Dwarka Expressway NCR for property enquiries, site visits, and expert consultation. Call +91 93549 02932 or visit our office.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 93549 02932", "+91 98737 02365"],
    action: "tel:+919354902932",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@dwarkaexpresswayncr.com", "sales@dwarkaexpresswayncr.com"],
    action: "mailto:info@dwarkaexpresswayncr.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      "Unit no. 555, JMD Megapolis",
      "Badshahpur Sohna Road, Sector 48",
      "Gurugram, Haryana 122018",
    ],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Sunday", "9:00 AM - 7:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-[#c8a55d]">Touch</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Have questions about properties on Dwarka Expressway? Our team is here to
              help you find your perfect home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#c8a55d]/10 flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-[#c8a55d]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f0f1a] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-[#c8a55d] font-medium text-sm hover:underline"
                  >
                    {info.icon === Phone
                      ? "Call Now"
                      : info.icon === Mail
                      ? "Send Email"
                      : "Get Directions"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0f0f1a] mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm source="contact-page" variant="modal" />
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8234534023744!2d77.03899231507825!3d28.41025698250182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229d84c8c0f7%3A0x4d1b4d79e4d3f8a8!2sDwarka%20Expressway!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919354902932?text=Hello!%20I%27m%20interested%20in%20properties%20on%20Dwarka%20Expressway."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Chat with us on WhatsApp
              </a>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#c8a55d] to-[#b8954d] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer a Call?</h3>
                <p className="text-white/80 mb-6">
                  Speak directly with our property experts for immediate assistance.
                </p>
                <a
                  href="tel:+919354902932"
                  className="inline-flex items-center gap-2 bg-white text-[#c8a55d] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 93549 02932
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f0f1a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions about contacting us</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What are your working hours?",
                a: "We are available Monday to Sunday, 9:00 AM to 7:00 PM. For urgent queries, you can reach us on WhatsApp anytime.",
              },
              {
                q: "How quickly will you respond to my enquiry?",
                a: "We aim to respond to all enquiries within 2 hours during business hours. Most enquiries are addressed within 30 minutes.",
              },
              {
                q: "Do you charge any consultation fee?",
                a: "No, all our consultations are completely free. We provide unbiased advice to help you make the best decision.",
              },
              {
                q: "Can I schedule a site visit?",
                a: "Yes! We organize free site visits to all listed projects. Simply fill the contact form or call us to schedule.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-xl p-6 group"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0f0f1a]">
                  {faq.q}
                  <span className="text-[#c8a55d] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
