"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";

// Nested dropdown structure for Projects
const projectsDropdown = {
  items: [
    { name: "All Projects", href: "/projects" },
    { 
      name: "Residential", 
      href: "/residential",
      subItems: [
        { name: "3 BHK", href: "/3bhk" },
        { name: "4 BHK", href: "/4bhk" },
        { name: "5 BHK", href: "/5bhk" },
      ]
    },
    { name: "Commercial", href: "/commercial" },
    { name: "Ready to Move", href: "/ready-to-move" },
  ],
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "New Launch", href: "/new-launch", highlight: false },
  { name: "PROJECTS", href: "/projects", hasDropdown: true },
  { name: "Connectivity", href: "/connectivity" },
  { name: "About Us", href: "/about" },
];

// Paths that should highlight the Projects nav item
const projectRelatedPaths = ["/projects", "/residential", "/commercial", "/ready-to-move", "/3bhk", "/4bhk", "/5bhk"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
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
        setActiveSubMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
    setMobileSubMenuOpen(null);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-60 bg-white backdrop-blur-md border-b border-borderGrey">
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
                  
                  {/* Dropdown Menu with Nested Structure */}
                  {isProjectsDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-borderGrey py-2 z-50"
                      onMouseLeave={() => {
                        setIsProjectsDropdownOpen(false);
                        setActiveSubMenu(null);
                      }}
                    >
                      {projectsDropdown.items.map((dropItem) => (
                        <div key={dropItem.name} className="relative">
                          {dropItem.subItems ? (
                            <div
                              className="relative"
                              onMouseEnter={() => setActiveSubMenu(dropItem.name)}
                              onMouseLeave={() => setActiveSubMenu(null)}
                            >
                              <div
                                className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors normal-case font-medium cursor-pointer ${
                                  isActive(dropItem.href)
                                    ? "text-primary bg-primary/5"
                                    : "text-dark hover:bg-gray-50 hover:text-primary"
                                }`}
                              >
                                <Link href={dropItem.href} onClick={() => setIsProjectsDropdownOpen(false)}>
                                  {dropItem.name}
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                              
                              {/* Sub-dropdown */}
                              {activeSubMenu === dropItem.name && (
                                <div className="absolute left-full top-0 ml-1 w-40 bg-white rounded-lg shadow-lg border border-borderGrey py-2 z-50">
                                  {dropItem.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={`block px-4 py-2.5 text-sm transition-colors normal-case font-medium ${
                                        isActive(subItem.href)
                                          ? "text-primary bg-primary/5"
                                          : "text-dark hover:bg-gray-50 hover:text-primary"
                                      }`}
                                      onClick={() => {
                                        setIsProjectsDropdownOpen(false);
                                        setActiveSubMenu(null);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
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
                          )}
                        </div>
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
                    
                    {/* Mobile Dropdown with Nested Structure */}
                    {isMobileProjectsOpen && (
                      <div className="pl-4 border-l-2 border-primary/20 ml-2 space-y-1">
                        {projectsDropdown.items.map((dropItem) => (
                          <div key={dropItem.name}>
                            {dropItem.subItems ? (
                              <>
                                <button
                                  onClick={() => setMobileSubMenuOpen(
                                    mobileSubMenuOpen === dropItem.name ? null : dropItem.name
                                  )}
                                  className={`w-full flex items-center justify-between py-2.5 transition normal-case font-medium ${
                                    isActive(dropItem.href)
                                      ? "text-primary"
                                      : "text-dark hover:text-primary"
                                  }`}
                                >
                                  {dropItem.name}
                                  <ChevronDown className={`w-3 h-3 transition-transform ${
                                    mobileSubMenuOpen === dropItem.name ? 'rotate-180' : ''
                                  }`} />
                                </button>
                                
                                {/* Mobile Sub Items */}
                                {mobileSubMenuOpen === dropItem.name && (
                                  <div className="pl-4 border-l border-primary/10 ml-2 space-y-1">
                                    <Link
                                      href={dropItem.href}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsMobileProjectsOpen(false);
                                      }}
                                      className={`block py-2 text-sm transition normal-case font-medium ${
                                        pathname === dropItem.href
                                          ? "text-primary"
                                          : "text-dark hover:text-primary"
                                      }`}
                                    >
                                      All {dropItem.name}
                                    </Link>
                                    {dropItem.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setIsMobileProjectsOpen(false);
                                        }}
                                        className={`block py-2 text-sm transition normal-case font-medium ${
                                          isActive(subItem.href)
                                            ? "text-primary"
                                            : "text-dark hover:text-primary"
                                        }`}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
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
                            )}
                          </div>
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
