import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work | Remodeling Gallery | ALB Custom Metro Detroit",
  description: "Browse our portfolio of kitchen remodels, bathroom renovations, painting projects, tile work, additions and more across Metro Detroit and Southeast Michigan.",
};

const projects = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80", alt: "Kitchen remodel Commerce Twp", category: "Kitchen", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80", alt: "Bathroom renovation West Bloomfield", category: "Bathroom" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80", alt: "Tile installation Novi", category: "Tile" },
  { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80", alt: "Interior painting Farmington Hills", category: "Painting" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", alt: "Custom home building Metro Detroit", category: "Home Building" },
  { src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500&q=80", alt: "Home addition Northville", category: "Addition" },
  { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=500&q=80", alt: "Kitchen remodel Novi", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&q=80", alt: "Bathroom remodel Canton", category: "Bathroom" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80", alt: "Master bathroom renovation", category: "Bathroom" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80", alt: "Exterior painting Plymouth", category: "Painting" },
  { src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500&q=80", alt: "Modern kitchen remodel", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80", alt: "Home restoration project", category: "Exteriors" },
];

const categories = ["All", "Kitchen", "Bathroom", "Painting", "Tile", "Additions", "Exteriors"];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-tag">Our Work</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            See Our Recent Projects
          </h1>
          <p className="text-gray-400 text-lg">
            Browse our portfolio of completed remodeling, painting, and construction projects across Metro Detroit and Southeast Michigan.
          </p>
        </div>
      </section>

      {/* Category filter (static — for dynamic filtering use client component) */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-[#C9A84C] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading={i < 4 ? "eager" : "lazy"}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {p.alt}
                </span>
              </div>
              {/* Category badge */}
              <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {p.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA after gallery */}
      <section className="py-16 px-6 bg-white text-center">
        <p className="section-tag mb-3">Like What You See?</p>
        <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mb-5">
          Let's Build Something Beautiful Together
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Contact us today for a free estimate. We serve Metro Detroit and all surrounding Southeast Michigan communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-gold px-8 py-4 rounded text-white text-sm font-semibold inline-flex items-center gap-2 justify-center">
            GET FREE ESTIMATE <ArrowRight size={15} />
          </Link>
          <Link href="/services" className="border border-gray-200 px-8 py-4 rounded text-sm font-semibold text-gray-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
            VIEW ALL SERVICES
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
