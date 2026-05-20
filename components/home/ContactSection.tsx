"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Loader2,
  PhoneCall,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare
} from "lucide-react";

const faqs = [
  {
    question: "What is Dwarka Expressway?",
    answer: "Dwarka Expressway is a 27.6 km, 16-lane operational highway linking Delhi's IGI Airport area to Gurgaon, offering signal-free connectivity across the corridor.",
  },
  {
    question: "Is it worth investing in Dwarka Expressway?",
    answer: "Yes — the corridor has seen 8–12% annual appreciation backed by completed infrastructure, rising rental demand, and strong developer activity in 2025–26.",
  },
  {
    question: "What is the construction status of Dwarka Expressway?",
    answer: "The expressway has been fully operational since early 2024, with the metro extension to Sector 111 planned for 2026.",
  },
  {
    question: "Is Dwarka Expressway good to live in?",
    answer: "Absolutely. Projects here offer signal-free access to IGI Airport (15–20 mins), Cyber City, and Delhi — along with top schools, hospitals, and retail hubs within the corridor.",
  },
  {
    question: "Which projects are best on Dwarka Expressway?",
    answer: "Sobha City, M3M Capital, Godrej Summit, Elan The Presidential, and Experion Windchants are among the most sought-after projects for lifestyle and investment.",
  },
  {
    question: "What are the best sectors on Dwarka Expressway?",
    answer: "Sectors 113, 112, 111, 106, and 99 are the most sought-after for luxury living and metro proximity.",
  },
  {
    question: "What BHK configurations are available here?",
    answer: "Projects range from 2 BHK to ultra-luxury 5 BHK penthouses. Most premium launches in 2025–26 offer 3 BHK and 4 BHK configurations.",
  },
  {
    question: "How do I schedule a site visit?",
    answer: "Simply fill in the enquiry form on this page or call us directly. Our relationship manager will coordinate a free, hassle-free site visit at your preferred time.",
  },
  {
    question: "Are there RERA-approved projects on Dwarka Expressway?",
    answer: "Yes, all projects listed on our platform are RERA-approved under the Haryana RERA (Gurugram) jurisdiction. RERA numbers are available on each project detail page.",
  },
  {
    question: "Where does Dwarka Expressway run from and to?",
    answer: "It runs from Shiv Murti interchange (Mahipalpur, Delhi) to Kherki Daula Toll Plaza in Gurgaon, spanning approximately 27.6 km.",
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
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="uppercase tracking-[0.2em] text-xs font-bold">
              Concierge Support
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Everything You Need <br className="hidden md:block" />
            <span className="font-semibold text-primary">To Know</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left — FAQ accordion (Takes 7 columns) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl border transition-all duration-300 ${isOpen
                      ? "border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                      : "border-slate-200 hover:border-primary/20 shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <span className={`text-[15px] md:text-base font-medium leading-snug transition-colors ${isOpen ? "text-primary" : "text-slate-800 group-hover:text-primary"
                      }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary"
                      }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Floating Bento Card (Takes 5 columns) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-[#0B0F19] rounded-[2rem] overflow-hidden shadow-2xl relative">
              {/* Card background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              <div className="p-8 md:p-10 relative z-10">
                {/* Phone Banner */}
                <div className="mb-10 text-center">
                  <a
                    href="tel:+919599107676"
                    className="group inline-flex flex-col items-center gap-2 text-white hover:text-primary transition-colors"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all mb-2">
                      <PhoneCall className="w-5 h-5" />
                    </span>
                    <span className="text-2xl md:text-3xl font-light tracking-tight">
                      +91 95991 07676
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                      Request A Site Visit Today
                    </span>
                  </a>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                {/* Form Section */}
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-xl">Request Received!</p>
                    <p className="text-white/50 text-sm mt-2">Our concierge team will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="+91 99999 99999"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs mt-1 ml-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-6 bg-primary text-white font-bold text-sm py-4 rounded-xl hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all disabled:opacity-60 flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Callback
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Social Media Footer inside the card */}
                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-center text-[10px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-4">
                    Connect With Us
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="https://www.instagram.com/dwarkaexpresswayncr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61589058328159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@DwarkaExpressWayncr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}