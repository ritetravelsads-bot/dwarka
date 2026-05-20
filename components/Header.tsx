"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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

// Paths that should highlight the Projects nav item
const projectRelatedPaths = ["/projects", "/residential", "/commercial", "/ready-to-move"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Check if Projects dropdown should be highlighted
  const isProjectsActive = projectRelatedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
  }, [pathname]);

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
                    className={`flex items-center gap-1 transition ${
                      isProjectsActive
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                    }`}
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
                          className={`block px-4 py-2.5 text-sm transition-colors normal-case font-medium ${
                            isActive(dropItem.href)
                              ? "text-primary bg-primary/5"
                              : "text-dark hover:bg-gray-50 hover:text-primary"
                          }`}
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
                      ? `text-primary font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary ${
                          isActive(item.href) ? "after:opacity-100" : "after:opacity-100"
                        }`
                      : isActive(item.href)
                        ? "text-primary"
                        : "text-dark hover:text-primary"
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
                      className={`w-full flex items-center justify-between py-3 transition ${
                        isProjectsActive
                          ? "text-primary"
                          : "text-dark hover:text-primary"
                      }`}
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
                            className={`block py-2.5 transition normal-case font-medium ${
                              isActive(dropItem.href)
                                ? "text-primary"
                                : "text-dark hover:text-primary"
                            }`}
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
                        : isActive(item.href)
                          ? "text-primary"
                          : "text-dark hover:text-primary"
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
