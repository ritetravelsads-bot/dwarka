"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Connectivity", href: "/connectivity" },
  { name: "Amenities", href: "/amenities" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

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
              className="h-auto w-[100px] md:w-[160px]"
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

          {/* Desktop CTA */}
          <button
            onClick={() => setShowPopupForm(true)}
            className="hidden md:block morph relative bg-dark rounded text-white px-4 py-2.5 font-bold text-sm uppercase hover:bg-black transition"
          >
            Free Site Visit
          </button>

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

      {/* Popup Form */}
      {showPopupForm && (
        <PopupForm onClose={() => setShowPopupForm(false)} />
      )}
    </>
  );
}

function PopupForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'popup_form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Thank you! We will contact you shortly.' });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitMessage({ type: 'error', text: result.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center bg-primary/20 px-8">
      <div className="relative md:left-1/3 bg-white/95 backdrop-blur-md px-4 py-6 rounded-lg shadow-md md:w-full max-w-md top-1/4 md:top-20 mx-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-primary"
          aria-label="close"
        >
          <i className="fa-solid fa-x"></i>
        </button>

        <h2 className="text-center text-xl sm:text-2xl py-4 text-dark">
          Speak with Our Property Expert
        </h2>

        <form onSubmit={handleSubmit} className="rounded-md space-y-4">
          <div>
            <label className="block text-black mb-1">Name*</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-black mb-1">WhatsApp Number*</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>

          <div>
            <label className="block text-black mb-1">Address</label>
            <input
              type="text"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
              placeholder="Enter your address"
            />
          </div>

          {submitMessage && (
            <div className={`p-3 rounded-lg text-center text-sm font-medium ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitMessage.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
