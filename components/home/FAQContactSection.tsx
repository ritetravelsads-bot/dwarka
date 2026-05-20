"use client";

import { useState } from "react";
import { Plus, Minus, Loader2 } from "lucide-react";

const faqs = [
  {
    question: "What is Dwarka Expressway?",
    answer:
      "Dwarka Expressway is a 27.6 km, 16-lane operational highway linking Delhi's IGI Airport area to Gurgaon, offering signal-free connectivity across the corridor.",
  },
  {
    question: "Is it worth investing in Dwarka Expressway?",
    answer:
      "Yes — the corridor has seen 8–12% annual appreciation backed by completed infrastructure, rising rental demand, and strong developer activity in 2025–26.",
  },
  {
    question: "What is the construction status of Dwarka Expressway?",
    answer:
      "The expressway has been fully operational since early 2024, with the metro extension to Sector 111 planned for 2026.",
  },
  {
    question: "Is Dwarka Expressway good to live in?",
    answer:
      "Absolutely. Projects here offer signal-free access to IGI Airport (15–20 mins), Cyber City, and Delhi — along with top schools, hospitals, and retail hubs within the corridor.",
  },
  {
    question: "Which projects are best on Dwarka Expressway?",
    answer:
      "Sobha City, M3M Capital, Godrej Summit, Elan The Presidential, and Experion Windchants are among the most sought-after projects for lifestyle and investment.",
  },
  {
    question: "What are the best sectors on Dwarka Expressway?",
    answer:
      "Sectors 113, 112, 111, 106, and 99 are the most sought-after for luxury living and metro proximity.",
  },
  {
    question: "What BHK configurations are available here?",
    answer:
      "Projects range from 2 BHK to ultra-luxury 5 BHK penthouses. Most premium launches in 2025–26 offer 3 BHK and 4 BHK configurations.",
  },
  {
    question: "How do I schedule a site visit?",
    answer:
      "Simply fill in the enquiry form on this page or call us directly. Our relationship manager will coordinate a free, hassle-free site visit at your preferred time.",
  },
  {
    question: "Are there RERA-approved projects on Dwarka Expressway?",
    answer:
      "Yes, all projects listed on our platform are RERA-approved under the Haryana RERA (Gurugram) jurisdiction. RERA numbers are available on each project detail page.",
  },
  {
    question: "Where does Dwarka Expressway run from and to?",
    answer:
      "It runs from Shiv Murti interchange (Mahipalpur, Delhi) to Kherki Daula Toll Plaza in Gurgaon, spanning approximately 27.6 km.",
  },
];

export default function FAQContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your full name");
      setLoading(false);
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "").slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid 10-digit mobile number");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          source: "homepage-faq-section",
          utm_source:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_source")
              : undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", phone: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#f0f2f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.22em] text-xs text-primary font-semibold">
            Concierge Support
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-light text-dark tracking-tight">
            Everything You Need to Know
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — FAQ accordion */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <span
                    className={`text-[15px] font-medium leading-snug transition-colors ${
                      openIndex === index ? "text-primary" : "text-dark group-hover:text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-0.5">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — phone + enquiry form */}
          <div className="flex flex-col items-center lg:items-start">

            {/* Phone number display */}
            <div className="text-center mb-8 w-full">
              <a
                href="tel:+919599107676"
                className="text-3xl md:text-4xl font-light text-dark tracking-tight hover:text-primary transition-colors"
              >
                +91 9873702365
              </a>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-primary" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Enquiry Now
                </span>
                <div className="h-px w-8 bg-primary" />
              </div>
            </div>

            {/* Dark form card */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: "#000" }}>
              <div className="px-8 py-8">

                {success ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">Thank You!</p>
                    <p className="text-white/60 text-sm mt-1">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-white text-xl font-semibold tracking-tight mb-6">
                      Personalized Inquiry
                    </h3>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-white/50 font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none text-white placeholder:text-white/30 text-sm py-2 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-white/50 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 focus:border-white/60 outline-none text-white placeholder:text-white/30 text-sm py-2 transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-4 bg-white text-[#1b2a4a] font-bold text-xs uppercase tracking-[0.18em] py-4 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Callback
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/30 text-[11px] mt-2">
                      No spam. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
