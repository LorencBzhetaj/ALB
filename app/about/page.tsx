import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About ALB Custom Painting & Remodeling | Metro Detroit Contractor",
  description: "Family-owned remodeling company serving Metro Detroit for 18+ years. Quality craftsmanship, honest service, and beautiful results on every project.",
};

const values = [
  { title: "18+ Years Experience", desc: "Over 18 years serving Metro Detroit homeowners with quality remodeling." },
  { title: "Family Owned & Operated", desc: "We treat every home like our own. Personal attention on every project." },
  { title: "Licensed & Insured", desc: "Fully licensed and insured for your complete peace of mind." },
  { title: "No Material Markups", desc: "Honest pricing with no hidden markups on materials." },
  { title: "Direct Communication", desc: "You'll always speak directly with the owner — no runaround." },
  { title: "HomeAdvisor Verified", desc: "Trusted and verified on HomeAdvisor with top-rated reviews." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=60" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="section-tag">About ALB</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Quality Work.<br />Honest Service.<br /><span className="text-[#C9A84C]">Beautiful Results.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We're a family-owned remodeling company proudly serving Metro Detroit and Southeast Michigan for over 18 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2 mb-6">
              About ALB Custom Painting & Remodeling
            </h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                ALB Custom Painting & Remodeling LLC was built on a simple promise: treat every client's home with the same care and quality we'd want in our own. For over 18 years, we've been delivering on that promise across Metro Detroit and Southeast Michigan.
              </p>
              <p>
                Our mission is straightforward — deliver exceptional craftsmanship, communicate honestly, and stand behind every project we complete. From a fresh coat of paint to a full kitchen renovation or custom home build, we bring the same level of professionalism and attention to detail to every job.
              </p>
              <p>
                What makes us different? Direct communication. When you work with ALB, you're talking to the owner. No middlemen, no miscommunication. Just straightforward service from a team that cares about your results.
              </p>
            </div>

            <ul className="mt-8 space-y-2">
              {["18+ Years Experience", "Family Owned & Operated", "Licensed & Insured", "No Material Markups"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#C9A84C]" /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4">
              <Link href="/contact" className="btn-gold px-6 py-3 rounded text-white text-sm font-semibold">
                GET FREE ESTIMATE
              </Link>
              <a href="tel:2482455220" className="flex items-center gap-2 border border-gray-200 px-6 py-3 rounded text-sm font-medium text-gray-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                <Phone size={15} /> 248-245-5220
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
              alt="ALB remodeling team"
              className="rounded-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] text-white p-6 rounded-lg shadow-xl">
              <p className="font-display text-4xl font-bold">18+</p>
              <p className="text-sm font-medium">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag">Our Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">Why Clients Choose ALB</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded flex items-center justify-center mb-4">
                  <CheckCircle size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HomeAdvisor trust */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-tag">Verified Contractor</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-2 mb-6">Trusted on HomeAdvisor</h2>
          <p className="text-gray-500 mb-8">
            ALB Custom Painting & Remodeling is a verified HomeAdvisor contractor. Check our profile for reviews and ratings from real Metro Detroit homeowners.
          </p>
          <a
            href="https://www.homeadvisor.com/rated.ALBCustomPaintingand.66241488.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F26C24] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d95e1f] transition-colors"
          >
            View Our HomeAdvisor Profile <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
