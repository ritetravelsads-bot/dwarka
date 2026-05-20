"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const projectsDropdown = [
  { name: "All Projects", href: "/projects" },
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Ready to Move", href: "/ready-to-move" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "New Launch", href: "/new-launch", highlight: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Connectivity", href: "/connectivity" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm uppercase tracking-wide">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                    onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                    className="flex items-center gap-1 text-dark hover:text-primary transition"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isProjectsDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-borderGrey py-2 z-50"
                      onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                    >
                      {projectsDropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2.5 text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors normal-case font-medium"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition ${
                    item.highlight 
                      ? 'text-primary font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                      : 'text-dark hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
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
            <nav className="flex flex-col px-4 py-6 space-y-1 font-semibold text-sm uppercase">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                      className="w-full flex items-center justify-between py-3 text-dark hover:text-primary transition"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {isMobileProjectsOpen && (
                      <div className="pl-4 border-l-2 border-primary/20 ml-2 space-y-1">
                        {projectsDropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProjectsOpen(false);
                            }}
                            className="block py-2.5 text-dark hover:text-primary transition normal-case font-medium"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 transition ${
                      item.highlight 
                        ? 'text-primary font-bold' 
                        : 'text-dark hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {item.highlight && (
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full normal-case">
                        Hot
                      </span>
                    )}
                  </Link>
                )
              ))}
              
              {/* Mobile CTA */}
              <a
                href="tel:+919873702365"
                className="flex items-center justify-center gap-2 mt-4 bg-dark rounded text-white px-4 py-3 font-bold text-sm uppercase hover:bg-black transition"
              >
                <i className="fa-solid fa-phone"></i>
                +91 9873702365
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
