import Link from "next/link";
import { Phone, Paintbrush, Bath, ChefHat, Grid3X3, Flame, Home, PlusSquare, CheckCircle, ArrowRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import HomeTransformationAnimation from "@/components/HomeTransformationAnimation";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const services = [
  {
    icon: <Paintbrush size={20} />,
    title: "Interior & Exterior Painting",
    description: "Professional painting for beautiful, lasting results. Interior walls, ceilings, trim, and full exterior painting.",
    href: "/services/interior-exterior-painting",
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=75",
  },
  {
    icon: <Bath size={20} />,
    title: "Bathroom Remodeling",
    description: "Beautiful, functional bathrooms built for you. Complete renovations from design to installation.",
    href: "/services/bathroom-remodeling",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
  },
  {
    icon: <ChefHat size={20} />,
    title: "Kitchen Remodeling",
    description: "Custom kitchens that blend style and function. Cabinetry, countertops, backsplashes & more.",
    href: "/services/kitchen-remodeling",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75",
  },
  {
    icon: <Grid3X3 size={20} />,
    title: "Tile Installation",
    description: "Expert tile installation for any space. Floors, walls, showers, backsplashes and custom patterns.",
    href: "/services/tile-installation",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  {
    icon: <Flame size={20} />,
    title: "Fire & Water Restoration",
    description: "Fast, reliable restoration when you need it most. We restore your home to its original condition.",
    href: "/services/fire-water-restoration",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75",
  },
  {
    icon: <Home size={20} />,
    title: "Home Building",
    description: "Custom homes built with quality & care. From foundation to finish, we build your dream home.",
    href: "/services/home-building",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  },
  {
    icon: <PlusSquare size={20} />,
    title: "Addition",
    description: "Add more space and value to your home. Room additions, garage conversions, and expansions.",
    href: "/services/addition",
    imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=75",
  },
];

const whyUs = [
  "18+ years of remodeling experience",
  "Family-owned and operated",
  "Direct communication with owner",
  "Free, no-obligation estimates",
  "Licensed and fully insured",
  "No material markups — fair pricing",
  "Quality craftsmanship on every job",
  "HomeAdvisor verified contractor",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Cinematic slideshow background */}
        <HeroSlideshow />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-tag mb-4 animate-fade-in">
              Metro Detroit's Trusted Remodeling Experts
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ animation: "slideUp 0.9s ease-out 0.3s both" }}
            >
              Custom<br />Remodeling<br />Built With<br />
              <span className="text-[#C9A84C]">Precision</span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
              style={{ animation: "slideUp 0.9s ease-out 0.5s both" }}
            >
              Kitchen, bathroom, painting, tile and full home renovations.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "slideUp 0.9s ease-out 0.7s both" }}
            >
              <Link
                href="/contact"
                className="btn-gold px-8 py-4 rounded text-white text-sm font-semibold text-center"
              >
                GET FREE ESTIMATE
              </Link>
              <a
                href="tel:2482455220"
                className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded text-sm font-semibold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <Phone size={16} /> CALL 248-245-5220
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">
              Complete Remodeling Solutions
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We offer a full range of remodeling services to enhance, improve and transform your home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {services.slice(4).map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 btn-gold px-8 py-3 rounded text-white text-sm font-semibold"
            >
              VIEW ALL SERVICES <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOME TRANSFORMATION ───────────────────────────────────────── */}
      <HomeTransformationAnimation />

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a1a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">Why Choose ALB</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Quality Work.<br />Honest Service.<br />
              <span className="text-[#C9A84C]">Beautiful Results.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're a family-owned remodeling company proudly serving Metro Detroit for over 18 years. Our mission is simple: deliver exceptional craftsmanship, honest service, and results that last.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {whyUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-4 transition-all"
            >
              LEARN ABOUT US <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
              alt="ALB remodeling team at work"
              className="rounded-lg w-full object-cover h-[450px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] text-white p-6 rounded-lg shadow-xl max-w-[200px]">
              <p className="font-display text-4xl font-bold">18+</p>
              <p className="text-sm font-medium mt-1">Years Serving Metro Detroit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS CAROUSEL ─────────────────────────────────────────── */}
      <ProjectsCarousel />

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}