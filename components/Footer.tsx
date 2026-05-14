"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmiCalculator from "./EmiCalculator";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Featured Projects", href: "#projects" },
  { name: "Location Map", href: "#location" },
  { name: "About Us", href: "/about" },
];

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a
            href="https://wa.me/+919873702365"
            aria-label="WhatsApp"
            className="group relative flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 animate-bounce-subtle"
          >
            <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
            <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></span>
          </a>

          <a
            href="tel:+919873702365"
            aria-label="Call"
            className="group flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            <i className="fa-solid fa-phone text-white text-2xl"></i>
          </a>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Image
                src="/assets/img/logo.png"
                alt="Dwarka Expressway logo"
                width={160}
                height={50}
                className="w-40"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting Delhi and Gurgaon through world-class infrastructure, the Dwarka Expressway is the new heartbeat of luxury real estate. Explore premium living through luxury apartments and high-growth residential projects in India&apos;s first elevated urban expressway corridor.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dwarkaexpresswayncr"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61586373907850"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-black font-bold uppercase tracking-wider text-sm mb-6 border-b-2 border-primary w-fit pb-1">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="text-black font-bold uppercase tracking-wider text-sm mb-6 border-b-2 border-primary w-fit pb-1">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-envelope text-primary mt-1"></i>
                  <div>
                    <span className="block text-xs text-black uppercase font-bold">Email Us</span>
                    <a href="mailto:info@dwarkaexpresswayncr.com" className="text-gray-700 text-sm break-all">
                      info@dwarkaexpresswayncr.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-phone-volume text-primary mt-1"></i>
                  <div>
                    <span className="block text-xs text-black uppercase font-bold">Call Support</span>
                    <a href="tel:+919873702365" className="text-gray-700 text-sm">
                      +91 9873702365
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Financial Tools */}
            <div>
              <h4 className="text-black font-bold uppercase tracking-wider text-sm mb-6 border-b-2 border-primary w-fit pb-1">
                Financial Tools
              </h4>
              <p className="text-gray-500 text-xs mb-4">
                Plan your investment better with our easy-to-use calculator.
              </p>
              <button
                onClick={() => setShowEmiCalculator(true)}
                className="flex items-center gap-2 bg-orange-700 text-white px-5 py-3 rounded-lg text-base font-semibold transition-all shadow-md hover:bg-orange-800"
              >
                <i className="fa-solid fa-calculator"></i> EMI Calculator
              </button>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="border-t border-gray-100 pt-8 pb-4 text-center">
            <button
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="text-sm font-bold text-orange-700 flex items-center justify-center mx-auto gap-1 transition-colors uppercase tracking-widest"
            >
              Disclaimer <i className={`fa-solid fa-chevron-${showDisclaimer ? 'up' : 'down'} text-[10px]`}></i>
            </button>
            {showDisclaimer && (
              <p className="mt-4 text-[11px] text-gray-800 leading-relaxed max-w-4xl mx-auto bg-gray-50 p-4 rounded-lg">
                The content provided on this website is for information purpose only and is
                not an offer to avail of any services. This is not the official website of
                the builder or owner and it belongs to channel partner. All rights for logo
                and images reserved for the builder. The prices mentioned on the website are
                subject to change without any prior notice and availability of properties
                can not be guaranteed. The images displayed on the website are for
                representation purposes only and may not reflect the actual properties
                accurately. The specifications, dimensions, services, facilities, &
                infrastructure are illustrative & indicative and are subject to the change
                as per the approval from the respective authorities. The company has not
                verified the information and the compliances of the projects. The company
                does not make any representation in regards to the compliances done against
                these projects. Please note that the company has not checked the RERA*
                registration status. Purpose of this domain only for information, not
                claiming official website and projects.
              </p>
            )}
          </div>

          {/* Copyright */}
          <div className="mt-4 text-center text-[11px] text-gray-800 uppercase tracking-widest">
            &copy; 2026 Dwarka Expressway NCR. Designed for Excellence.
          </div>
        </div>
      </footer>

      {/* EMI Calculator Popup */}
      {showEmiCalculator && (
        <EmiCalculator onClose={() => setShowEmiCalculator(false)} />
      )}
    </>
  );
}
