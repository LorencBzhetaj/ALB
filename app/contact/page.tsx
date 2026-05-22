import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact ALB Custom Painting & Remodeling | Free Estimate",
  description: "Contact ALB Custom Painting & Remodeling for a free estimate. Serving Metro Detroit and Southeast Michigan. Call 248-245-5220 or fill out our online form.",
};

const serviceAreas = [
  "Commerce Twp", "West Bloomfield", "Wixom", "Novi",
  "Farmington Hills", "Northville", "Plymouth", "Canton",
  "Ann Arbor", "Milford", "Waterford", "Troy",
  "And surrounding areas",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=40" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="section-tag">Contact Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Let's discuss your project. We'd love to help! Get a free, no-obligation estimate today.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left info column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1a1a1a] mb-6">Contact Details</h2>
              <div className="space-y-5">
                <a
                  href="tel:2482455220"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-[#1a1a1a] group-hover:text-[#C9A84C] transition-colors">248-245-5220</p>
                  </div>
                </a>

                <a
                  href="mailto:alb@albremodeling.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-[#1a1a1a] group-hover:text-[#C9A84C] transition-colors">alb@albremodeling.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="font-semibold text-[#1a1a1a]">Commerce Twp, MI 48390</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="font-semibold text-[#1a1a1a]">Mon – Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-sm text-gray-500">Sat: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-[#C9A84C]" /> Service Area
              </h3>
              <p className="text-sm text-gray-500 mb-3">Proudly serving Metro Detroit & Southeast Michigan:</p>
              <ul className="grid grid-cols-1 gap-1.5">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#C9A84C] text-xs font-bold">✓</span> {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* HomeAdvisor trust */}
            <a
              href="https://www.homeadvisor.com/rated.ALBCustomPaintingand.66241488.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-[#F26C24] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">HA</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Verified on HomeAdvisor</p>
                <p className="text-sm font-semibold text-[#1a1a1a]">View Our Reviews</p>
                <p className="text-[#F26C24] text-sm">★★★★★</p>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
