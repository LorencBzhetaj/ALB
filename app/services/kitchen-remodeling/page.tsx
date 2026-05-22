import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Metro Detroit | ALB Custom",
  description: "Expert kitchen remodeling in Metro Detroit. Custom cabinetry, countertops, backsplashes, flooring & full kitchen renovations. Free estimates. Call 248-245-5220.",
};

const features = ["Custom cabinetry & storage solutions","Countertops & backsplashes","Flooring, lighting & more","Full kitchen renovations","Design & planning","Material selection assistance"];
const process = [
  { step: "01", title: "Consultation", desc: "We listen to your needs, goals and budget." },
  { step: "02", title: "Design & Planning", desc: "We create a custom design for your space." },
  { step: "03", title: "Material Selection", desc: "We help you choose the perfect materials." },
  { step: "04", title: "Expert Construction", desc: "Our skilled team brings your new kitchen to life." },
];
const faqs = [
  { q: "How long does a kitchen remodel take?", a: "Most kitchen remodels take 3–6 weeks depending on the scope of work. We'll give you a clear timeline during your consultation." },
  { q: "Do you provide design services?", a: "Yes. We offer design planning as part of our kitchen remodeling service to help you make the best choices for your space and budget." },
  { q: "Can I stay in my home during the remodel?", a: "In most cases, yes. We work efficiently to minimize disruption to your daily routine." },
];

export default function KitchenRemodeling() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80" alt="Kitchen remodeling Metro Detroit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <p className="section-tag">Kitchen Remodeling</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Kitchens Designed<br />For The Way<br /><span className="text-[#C9A84C]">You Live</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We create beautiful, functional kitchens that combine quality craftsmanship, smart layouts and premium materials.
            </p>
            <ul className="space-y-2 mb-8">
              {features.slice(0,4).map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-200 text-sm">
                  <CheckCircle size={15} className="text-[#C9A84C]" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold px-8 py-4 rounded text-white text-sm font-semibold text-center">GET FREE ESTIMATE</Link>
              <a href="tel:2482455220" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded text-sm font-semibold hover:border-[#C9A84C] transition-colors">
                <Phone size={15} /> CALL 248-245-5220
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag">How We Work</p>
            <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mt-2">Our Kitchen Remodeling Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(p => (
              <div key={p.step} className="text-center">
                <p className="font-display text-5xl font-bold text-[#C9A84C] mb-3 opacity-70">{p.step}</p>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery snippet */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-tag">Our Work</p>
            <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mt-2">Recent Kitchen Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80","https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80","https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80"].map((src,i) => (
              <div key={i} className="rounded-lg overflow-hidden h-56 md:h-72 group">
                <img src={src} alt={`Kitchen remodel project ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Common Questions</h2>
          </div>
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
