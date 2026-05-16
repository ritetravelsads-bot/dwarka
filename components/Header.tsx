"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Connectivity", href: "/connectivity" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full z-50 bg-white backdrop-blur-md border-b border-borderGrey">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              alt="Dwarka Expressway Logo"
              width={160}
              height={64}
              className="h-10 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wide">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark hover:text-primary transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - Call Button */}
          <a
            href="tel:+919873702365"
            className="hidden md:flex items-center gap-2 morph relative bg-dark rounded text-white px-4 py-2.5 font-bold text-sm uppercase hover:bg-black transition"
          >
            <i className="fa-solid fa-phone"></i>
            +91 9873702365
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-primary"
            aria-label="Menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-borderGrey rounded-b-lg">
            <nav className="flex flex-col px-4 py-6 space-y-4 font-semibold text-sm uppercase">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-dark hover:text-primary transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>


    </>
  );
}
