import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Metro Detroit | ALB Custom",
  description: "Expert bathroom remodeling in Metro Detroit. Full renovations, tile work, fixtures, vanities & more. Free estimates. Call 248-245-5220.",
};

const features = ["Custom tile work & flooring","Vanity & fixture installation","Walk-in shower conversions","Bathtub replacement","Full bathroom renovations","Accessibility upgrades"];
const faqs = [
  { q: "How long does a bathroom remodel take?", a: "A typical bathroom remodel takes 1–3 weeks. Larger master bathroom renovations may take up to 4 weeks." },
  { q: "Do you handle both design and installation?", a: "Yes! We guide you through design choices, material selection, and handle all installation for a seamless process." },
  { q: "Can you work with my existing layout?", a: "Absolutely. We can remodel within your existing layout or reconfigure the space for better functionality." },
];

export default function BathroomRemodeling() {
  return (
    <>
      <section className="relative pt-28 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80" alt="Bathroom remodeling Metro Detroit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-xl">
            <p className="section-tag">Bathroom Remodeling</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Beautiful Bathrooms<br />Built <span className="text-[#C9A84C]">For You</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">From simple updates to complete renovations, we transform your bathroom into a space you'll love.</p>
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

      <section className="py-20 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10"><p className="section-tag">Recent Projects</p><h2 className="font-display text-3xl font-bold text-[#1a1a1a] mt-2">Bathroom Transformations</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80","https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"].map((src,i) => (
              <div key={i} className="rounded-lg overflow-hidden h-64 group"><img src={src} alt={`Bathroom project ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12"><p className="section-tag">FAQ</p><h2 className="font-display text-3xl font-bold text-white mt-2">Common Questions</h2></div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
