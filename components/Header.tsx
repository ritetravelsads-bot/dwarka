"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Projects",
    href: "/projects",
    children: [
      { name: "All Projects", href: "/projects" },
      { name: "New Launch", href: "/projects?status=new-launch" },
      { name: "Under Construction", href: "/projects?status=under-construction" },
      { name: "Ready to Move", href: "/projects?status=ready-to-move" },
    ],
  },
  { name: "Amenities", href: "/amenities" },
  { name: "Connectivity", href: "/connectivity" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f0f1a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dwarka Expressway"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white/90 hover:text-[#c8a55d] transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] border border-[#c8a55d]/20 rounded-lg shadow-xl overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-white/80 hover:bg-[#c8a55d]/10 hover:text-[#c8a55d] transition-colors text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-white/90 hover:text-[#c8a55d] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+91 99999 99999</span>
            </a>
            <Link
              href="/contact"
              className="btn-gold text-sm px-6 py-3"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a2e] border-t border-[#c8a55d]/20">
          <nav className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-white/90 hover:text-[#c8a55d] transition-colors font-medium"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-white/60 hover:text-[#c8a55d] transition-colors text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 py-3 text-[#c8a55d]"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 99999 99999</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
