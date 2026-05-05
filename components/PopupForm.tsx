"use client";

import { useState } from "react";

interface PopupFormProps {
  onClose: () => void;
}

export default function PopupForm({ onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "popup_form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: "success", text: "Thank you! We will contact you shortly." });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitMessage({ type: "error", text: result.message || "Something went wrong. Please try again." });
      }
    } catch {
      setSubmitMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-primary/20 px-8">
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
            <div
              className={`p-3 rounded-lg text-center text-sm font-medium ${
                submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
