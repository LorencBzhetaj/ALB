import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Fire & Water Restoration Metro Detroit | ALB Custom",
  description: "Fast, reliable fire and water damage restoration in Metro Detroit. We restore your home to its original condition. Call 248-245-5220.",
};

const features = ["Fire damage restoration","Water damage repair","Smoke & soot removal","Structural drying & remediation","Full interior restoration","Insurance claim support"];

export default function RestorationPage() {
  return (
    <>
      <section className="relative pt-28 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80" alt="Fire water restoration Metro Detroit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-xl">
            <p className="section-tag">Fire & Water Restoration</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Reliable Restoration<br /><span className="text-[#C9A84C]">When You Need It Most</span></h1>
            <p className="text-gray-300 text-lg mb-8">We respond quickly and restore your home completely after fire or water damage. Let us handle the stress.</p>
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
      <CTASection />
    </>
  );
}
