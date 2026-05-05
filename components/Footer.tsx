import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Amenities", href: "/amenities" },
  { name: "Connectivity", href: "/connectivity" },
  { name: "Contact", href: "/contact" },
];

const projectTypes = [
  { name: "New Launch", href: "/projects?status=new-launch" },
  { name: "Under Construction", href: "/projects?status=under-construction" },
  { name: "Ready to Move", href: "/projects?status=ready-to-move" },
  { name: "Residential", href: "/projects?type=residential" },
  { name: "Commercial", href: "/projects?type=commercial" },
  { name: "SCO Plots", href: "/projects?type=sco" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-[#c8a55d]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Dwarka Expressway"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner in finding premium real estate properties on
              Dwarka Expressway, Gurgaon. We offer a curated selection of
              residential and commercial projects from top developers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white/60 hover:bg-[#c8a55d] hover:text-[#0f0f1a] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#c8a55d] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Projects</h3>
            <ul className="space-y-3">
              {projectTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#c8a55d] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-3 text-white/60 hover:text-[#c8a55d] transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-[#c8a55d]" />
                  <span className="text-sm">+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dwarkaexpressway.com"
                  className="flex items-start gap-3 text-white/60 hover:text-[#c8a55d] transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-[#c8a55d]" />
                  <span className="text-sm">info@dwarkaexpressway.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#c8a55d] flex-shrink-0" />
                  <span className="text-sm">
                    Dwarka Expressway, Sector 99,
                    <br />
                    Gurgaon, Haryana 122505
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#c8a55d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Dwarka Expressway. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/40 hover:text-[#c8a55d] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-[#c8a55d] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-white/40 hover:text-[#c8a55d] transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
