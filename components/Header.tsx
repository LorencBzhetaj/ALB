"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Interior & Exterior Painting", href: "/services/interior-exterior-painting" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { name: "Tile Installation", href: "/services/tile-installation" },
  { name: "Fire & Water Restoration", href: "/services/fire-water-restoration" },
  { name: "Home Building", href: "/services/home-building" },
  { name: "Addition", href: "/services/addition" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1a1a1a]/90 backdrop-blur-md shadow-xl" : "bg-transparent"        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="ALB Custom Painting & Remodeling LLC"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="nav-link text-white text-sm font-medium tracking-wide">
              HOME
            </Link>

            {/* Services dropdown — hover i qëndrueshëm */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="nav-link text-white text-sm font-medium tracking-wide flex items-center gap-1 cursor-pointer"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                SERVICES
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-2"
                }`}
              >
                {/* Bridge gap so mouse can travel to dropdown */}
                <div className="absolute -top-3 left-0 right-0 h-3" />
                {services.map((s, i) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-5 py-3 text-sm text-gray-300 hover:text-[#C9A84C] hover:bg-white/5 transition-colors ${
                      i < services.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/our-work" className="nav-link text-white text-sm font-medium tracking-wide">
              OUR WORK
            </Link>
            <Link href="/about" className="nav-link text-white text-sm font-medium tracking-wide">
              ABOUT
            </Link>
            <Link href="/contact" className="nav-link text-white text-sm font-medium tracking-wide">
              CONTACT
            </Link>
          </nav>

          {/* Right CTA — desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2482455220"
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#C9A84C] transition-colors"
            >
              <Phone size={15} />
              248-245-5220
            </a>
            <Link
              href="/contact"
              className="btn-gold px-5 py-2.5 text-sm rounded"
            >
              FREE ESTIMATE
            </Link>
          </div>

          {/* Mobile icons */}
          <div className="flex lg:hidden items-center gap-4">
            <a href="tel:2482455220" className="text-[#C9A84C]" aria-label="Call us">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="text-white"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ─────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] bg-[#111111] transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile header bar */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 sticky top-0 bg-[#111111] z-10">
          <img src="/logo.png" alt="ALB Custom" className="h-10 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="px-6 py-6">
          {/* Main links */}
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg font-semibold py-4 border-b border-white/10 hover:text-[#C9A84C] transition-colors"
            >
              Home
            </Link>

            {/* Services accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-white text-lg font-semibold py-4 hover:text-[#C9A84C] transition-colors"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#C9A84C]" : ""}`}
                />
              </button>

              {/* Accordion content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-[500px] pb-3" : "max-h-0"
                }`}
              >
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  {services.map((s, i) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                      className={`flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-[#C9A84C] hover:bg-white/5 transition-colors ${
                        i < services.length - 1 ? "border-b border-white/5" : ""
                      }`}
                    >
                      <span className="text-[#C9A84C] text-xs">→</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/our-work"
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg font-semibold py-4 border-b border-white/10 hover:text-[#C9A84C] transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg font-semibold py-4 border-b border-white/10 hover:text-[#C9A84C] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg font-semibold py-4 border-b border-white/10 hover:text-[#C9A84C] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold text-center py-4 rounded text-white font-semibold text-sm"
            >
              GET FREE ESTIMATE
            </Link>
            <a
              href="tel:2482455220"
              className="flex items-center justify-center gap-2 border border-white/20 text-white py-4 rounded font-medium text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              <Phone size={16} /> CALL 248-245-5220
            </a>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Contact Info</p>
            <p className="text-gray-400 text-sm mb-1">Commerce Twp, MI 48390</p>
            <p className="text-gray-400 text-sm mb-1">Mon–Fri 8AM–6PM · Sat 9AM–2PM</p>
            <a href="mailto:alb@albremodeling.com" className="text-[#C9A84C] text-sm">
              alb@albremodeling.com
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}