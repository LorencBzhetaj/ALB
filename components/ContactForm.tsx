"use client";
import { useState } from "react";

const serviceOptions = [
  "Interior & Exterior Painting",
  "Bathroom Remodeling",
  "Kitchen Remodeling",
  "Tile Installation",
  "Fire & Water Restoration",
  "Home Building",
  "Addition",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", city: "", message: "", contact: "phone",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.service) e.service = "Please select a service.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-[#1a1a1a] rounded-lg p-10 text-center">
        <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-[#C9A84C] text-3xl">✓</span>
        </div>
        <h3 className="font-display text-2xl text-white font-bold mb-3">Message Sent!</h3>
        <p className="text-gray-400 mb-6">Thank you! We'll get back to you within one business day.</p>
        <a href="tel:2482455220" className="inline-block btn-gold px-6 py-3 rounded text-white text-sm font-semibold">
          Or Call Us Now: 248-245-5220
        </a>
      </div>
    );
  }

  const fieldClass = (name: string) =>
    `w-full bg-white/5 border rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none transition-colors ${
      errors[name] ? "border-red-400" : "border-white/10 focus:border-[#C9A84C]"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#1a1a1a] rounded-lg p-6 md:p-8">
      <h3 className="font-display text-2xl text-white font-bold mb-6">Request a Free Estimate</h3>

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-400/30 rounded px-4 py-3 text-red-300 text-sm mb-5">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:2482455220" className="underline">248-245-5220</a>.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Name <span className="text-[#C9A84C]">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange}
            placeholder="Your full name" className={fieldClass("name")} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Phone <span className="text-[#C9A84C]">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange}
            placeholder="(248) 000-0000" className={fieldClass("phone")} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange}
            placeholder="you@email.com" className={fieldClass("email")} />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">City</label>
          <input id="city" name="city" type="text" value={form.city} onChange={handleChange}
            placeholder="Your city" className={fieldClass("city")} />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="service" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
          Project Type <span className="text-[#C9A84C]">*</span>
        </label>
        <select id="service" name="service" value={form.service} onChange={handleChange}
          className={fieldClass("service")} aria-describedby={errors.service ? "service-error" : undefined}>
          <option value="" className="bg-[#1a1a1a]">Select a Service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
          ))}
        </select>
        {errors.service && <p id="service-error" className="text-red-400 text-xs mt-1">{errors.service}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Tell us about your project..."
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" />
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Preferred Contact Method</p>
        <div className="flex gap-5">
          {["phone", "email", "text"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact" value={method} checked={form.contact === method}
                onChange={handleChange} className="accent-[#C9A84C]" />
              <span className="text-gray-300 text-sm capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <button type="submit" disabled={status === "sending"}
        className="w-full btn-gold py-4 rounded text-white text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? "Sending..." : "SEND MESSAGE"}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        We respond within 1 business day. No spam, no obligation.
      </p>
    </form>
  );
}
