import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Top CTA strip */}
      <div className="bg-[#C9A84C] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl md:text-2xl text-white font-semibold">
            Ready to Transform Your Home?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:2482455220"
              className="flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-2.5 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone size={15} /> 248-245-5220
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-[#1a1a1a] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#2a2a2a] transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-[#C9A84C] flex items-center justify-center">
              <span className="text-white font-bold text-sm">ALB</span>
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">ALB Custom</p>
              <p className="text-[#C9A84C] text-xs">Painting & Remodeling LLC</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Metro Detroit's trusted remodeling experts. Family-owned, quality craftsmanship, honest service.
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="tel:2482455220" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <Phone size={14} /> 248-245-5220
            </a>
            <a href="mailto:alb@albremodeling.com" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <Mail size={14} /> alb@albremodeling.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C9A84C]" /> Commerce Twp, MI 48390
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#C9A84C]" /> Mon–Fri 8AM–6PM · Sat 9AM–2PM
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-5">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              ["Interior & Exterior Painting", "/services/interior-exterior-painting"],
              ["Bathroom Remodeling", "/services/bathroom-remodeling"],
              ["Kitchen Remodeling", "/services/kitchen-remodeling"],
              ["Tile Installation", "/services/tile-installation"],
              ["Fire & Water Restoration", "/services/fire-water-restoration"],
              ["Home Building", "/services/home-building"],
              ["Addition", "/services/addition"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Work", "/our-work"],
              ["All Services", "/services"],
              ["Contact Us", "/contact"],
              ["Free Estimate", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-5">Service Area</h4>
          <p className="text-gray-400 text-sm mb-4">Proudly serving Metro Detroit & Southeast Michigan:</p>
          <ul className="flex flex-col gap-1.5 text-sm text-gray-400">
            {["Commerce Twp", "West Bloomfield", "Wixom", "Novi", "Farmington Hills", "Northville", "Plymouth", "Canton", "Ann Arbor", "And surrounding areas"].map((city) => (
              <li key={city} className="flex items-center gap-2">
                <span className="text-[#C9A84C] text-xs">✓</span> {city}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ALB Custom Painting & Remodeling LLC. All Rights Reserved.</p>
          <p>Metro Detroit, Michigan · Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
