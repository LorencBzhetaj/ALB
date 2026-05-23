import type { Metadata } from "next";
import Link from "next/link";
import { Paintbrush, Bath, ChefHat, Grid3X3, Flame, Home, PlusSquare, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Remodeling Services | Painting, Kitchen, Bathroom & More",
  description: "Complete remodeling services in Metro Detroit: painting, kitchen remodeling, bathroom remodeling, tile installation, fire & water restoration, home building and additions.",
};

const services = [
  { icon: <Paintbrush size={28} />, title: "Interior & Exterior Painting", desc: "Professional painting for beautiful, lasting results. Interior walls, ceilings, trim, and full exterior painting services.", href: "/services/interior-exterior-painting", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80" },
  { icon: <Bath size={28} />, title: "Bathroom Remodeling", desc: "Beautiful, functional bathrooms built for you. Complete renovations from design to installation.", href: "/services/bathroom-remodeling", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80" },
  { icon: <ChefHat size={28} />, title: "Kitchen Remodeling", desc: "Custom kitchens designed for the way you live. Cabinetry, countertops, backsplashes, flooring & more.", href: "/services/kitchen-remodeling", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80" },
  { icon: <Grid3X3 size={28} />, title: "Tile Installation", desc: "Expert tile installation for floors, walls, showers, backsplashes and custom patterns.", href: "/services/tile-installation", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80" },
  { icon: <Flame size={28} />, title: "Fire & Water Restoration", desc: "Fast, reliable restoration when you need it most. We restore your home after fire or water damage.", href: "/services/fire-water-restoration", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80" },
  { icon: <Home size={28} />, title: "Home Building", desc: "Custom homes built with quality & care. From foundation to finish, we build your dream home.", href: "/services/home-building", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
  { icon: <PlusSquare size={28} />, title: "Addition", desc: "Add more space and value to your home with a room addition, garage conversion, or expansion.", href: "/services/addition", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=700&q=80" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-tag">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Complete Remodeling Solutions
          </h1>
          <p className="text-gray-400 text-lg">
            We offer a full range of remodeling services to enhance, improve and transform your home across Metro Detroit.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div
              key={s.href}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow`}
            >
              <div className="lg:w-1/2 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center text-[#C9A84C] mb-5">
                  {s.icon}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <Link href={s.href} className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded text-white text-sm font-semibold self-start">
                  LEARN MORE <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}