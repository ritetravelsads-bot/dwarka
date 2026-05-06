"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  projectId?: string;
  projectName?: string;
  source?: string;
  variant?: "default" | "compact" | "modal";
  onSuccess?: () => void;
}

export default function ContactForm({
  projectId,
  projectName,
  source = "website",
  variant = "default",
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name");
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
      // Try the new contact API first, fallback to leads API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          project: projectName || projectId,
          source: source,
          // Get UTM parameters from URL if available
          utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') : undefined,
          utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') : undefined,
          utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') : undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
        onSuccess?.();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#0f0f1a] mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Our team will contact you shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    variant === "modal"
      ? "w-full border border-borderGrey rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      : "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={variant === "compact" ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address (Optional)"
        value={formData.email}
        onChange={handleChange}
        className={inputClasses}
      />

      {variant !== "compact" && (
        <textarea
          name="message"
          placeholder="Your Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
        />
      )}

      {error && (
        <div className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
        By submitting, you agree to our terms and privacy policy.
      </p>
    </form>
  );
}
