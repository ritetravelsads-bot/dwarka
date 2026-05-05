"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Dwarka Expressway?",
    answer:
      "Dwarka Expressway is a 27.6 km, 16-lane operational highway linking Delhi's IGI Airport area to Gurgaon.",
  },
  {
    question: "Is it worth investing in Dwarka Expressway?",
    answer:
      "Yes, worth investing due to 8-12% annual appreciation and rising rentals in 2026.",
  },
  {
    question: "Is Dwarka Expressway a Good Investment?",
    answer:
      "Yes, strong returns from infrastructure completion and commercial growth.",
  },
  {
    question: "What is the construction status of Dwarka Expressway?",
    answer:
      "Fully operational since June 2025, with metro extension planned.",
  },
  {
    question: "Is Dwarka Expressway good to Live in?",
    answer:
      "Dwarka Expressway projects offer signal-free connectivity to IGI Airport (15-20 mins), Cyber City, and Delhi via an 8-lane elevated corridor and the upcoming Metro extension.",
  },
  {
    question: "Which Projects are Best on Dwarka Expressway?",
    answer:
      "Sobha City, M3M Capital, Godrej Summit, Experion Windchants.",
  },
  {
    question: "What are the best sectors to live on Dwarka Expressway?",
    answer:
      "Sectors 113, 112, 111, 106, 99 for luxury and connectivity.",
  },
  {
    question: "How many projects in Dwarka Expressway?",
    answer:
      "Dozens across sectors, with ~25,000 units ready by 2027.",
  },
  {
    question: "Benefits of Dwarka Expressway project?",
    answer:
      "Sobha City (sports lifestyle), M3M Mansion (ultra-luxury), Godrej Meridien (amenities), and Smart World One DXP for its strategic location at the Delhi-Gurgaon border.",
  },
  {
    question: "Dwarka Expressway is located from Where to Where?",
    answer:
      "Shiv Murti (Mahipalpur, Delhi) to Kherki Daula Toll Plaza (Gurgaon).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#0f0f1a]">
          Frequently Asked Questions <span>(FAQs)</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-[#0f0f1a]">
                  {index + 1}. {faq.question}
                </span>
                <span className="text-[#c8a55d] ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
