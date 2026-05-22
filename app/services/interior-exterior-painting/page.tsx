import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting Metro Detroit | ALB Custom",
  description: "Professional interior and exterior painting services in Metro Detroit. Quality materials, meticulous prep work, beautiful lasting results. Free estimates. 248-245-5220.",
};

const features = ["Interior wall & ceiling painting","Exterior house painting","Trim, doors & cabinet painting","Deck & fence staining","Color consultation","Detailed surface preparation"];

export default function PaintingPage() {
  return (
    <>
      <section className="relative pt-28 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80" alt="Interior exterior painting Metro Detroit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-xl">
            <p className="section-tag">Painting Services</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Interior & Exterior<br /><span className="text-[#C9A84C]">Painting</span></h1>
            <p className="text-gray-300 text-lg mb-8">Professional painting for beautiful, lasting results. We take pride in thorough preparation and quality finishes.</p>
            <ul className="space-y-2 mb-8">
              {features.map(f => <li key={f} className="flex items-center gap-3 text-gray-200 text-sm"><CheckCircle size={15} className="text-[#C9A84C]" />{f}</li>)}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold px-8 py-4 rounded text-white text-sm font-semibold text-center">GET FREE ESTIMATE</Link>
              <a href="tel:2482455220" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded text-sm font-semibold hover:border-[#C9A84C] transition-colors"><Phone size={15} />CALL 248-245-5220</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">Why Our Painting Stands Out</p>
            <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mt-2 mb-6">The ALB Painting Difference</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Great painting starts with great preparation. We sand, fill, prime, and protect every surface before a single stroke of paint. The result is a finish that looks exceptional and lasts for years.</p>
            <ul className="space-y-3">
              {["Premium quality paints & materials","Thorough surface preparation","Clean, professional work environment","Detailed trim and edge work","Interior & exterior specialists"].map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-600 text-sm"><CheckCircle size={15} className="text-[#C9A84C]" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden h-80 md:h-96">
            <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80" alt="Professional painting results" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
