"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Master Bathroom",
    location: "Troy, MI",
    category: "Bathroom Remodeling",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=85",
  },
  {
    id: 2,
    title: "Classic Bathroom Upgrade",
    location: "Royal Oak, MI",
    category: "Bathroom Remodeling",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85",
  },
  {
    id: 3,
    title: "Spa-Inspired Bathroom",
    location: "Bloomfield Hills, MI",
    category: "Bathroom Remodeling",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
  },
  {
    id: 4,
    title: "Kitchen Transformation",
    location: "Commerce Twp, MI",
    category: "Kitchen Remodeling",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
  },
  {
    id: 5,
    title: "Interior Painting",
    location: "Novi, MI",
    category: "Interior Painting",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=85",
  },
  {
    id: 6,
    title: "Custom Home Build",
    location: "Northville, MI",
    category: "Home Building",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  },
  {
    id: 7,
    title: "Tile Installation",
    location: "Farmington Hills, MI",
    category: "Tile Installation",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragged    = useRef(false);
  const scrollLock = useRef(false);
  const total = projects.length;

  /* scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total);
  }, [total]);

  /* ── wheel / trackpad horizontal scroll ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontal && !e.shiftKey) return;
      e.preventDefault();
      if (scrollLock.current) return;
      const delta = e.shiftKey ? e.deltaY : e.deltaX;
      if (delta > 20)       { goTo(current + 1); scrollLock.current = true; setTimeout(() => { scrollLock.current = false; }, 550); }
      else if (delta < -20) { goTo(current - 1); scrollLock.current = true; setTimeout(() => { scrollLock.current = false; }, 550); }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, goTo]);

  /* ── keyboard ── */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft")  goTo(current - 1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [current, goTo]);

  /* ── mouse drag ── */
  const onMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; dragged.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 6) dragged.current = true;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
    dragStartX.current = null;
  };

  /* ── touch swipe ── */
  const onTouchStart = (e: React.TouchEvent) => { dragStartX.current = e.touches[0].clientX; dragged.current = false; };
  const onTouchMove  = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - dragStartX.current) > 6) dragged.current = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(diff) > 40) goTo(diff < 0 ? current + 1 : current - 1);
    dragStartX.current = null;
  };

  const prev  = projects[(current - 1 + total) % total];
  const center = projects[current];
  const next  = projects[(current + 1) % total];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "#0e0e0e" }}
      aria-label="Recent Projects"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      {/* header */}
      <div
        className="text-center mb-14 px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity .7s ease, transform .7s ease",
        }}
      >
        <p className="section-tag mb-3">Recent Projects</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          See Our Recent Projects
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Real transformations. Real craftsmanship. Designed for modern living.
        </p>
      </div>

      {/* ── 3-card floating carousel ── */}
      <div
        ref={trackRef}
        className="relative flex items-center justify-center gap-5 px-6 cursor-grab active:cursor-grabbing select-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity .8s ease .2s",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => { dragStartX.current = null; }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* left card */}
        <div
          onClick={() => !dragged.current && goTo(current - 1)}
          className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
          style={{
            width:  "clamp(130px, 20vw, 260px)",
            height: "clamp(200px, 34vw, 430px)",
            transform: "perspective(1000px) rotateY(10deg) scale(0.86)",
            opacity: 0.5,
            filter: "brightness(0.45)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          }}
        >
          <img src={prev.img} alt={prev.title}
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-white font-semibold text-sm leading-tight">{prev.title}</p>
            <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className="flex-shrink-0">
                <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C4.17 5.5 3.5 4.83 3.5 4S4.17 2.5 5 2.5 6.5 3.17 6.5 4 5.83 5.5 5 5.5z"/>
              </svg>
              {prev.location}
            </p>
          </div>
        </div>

        {/* center card */}
        <div
          className="relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 z-10"
          style={{
            width:  "clamp(260px, 40vw, 520px)",
            height: "clamp(230px, 42vw, 480px)",
            boxShadow: "0 0 0 1px rgba(201,168,76,0.35), 0 30px 80px rgba(0,0,0,0.65), 0 0 50px rgba(201,168,76,0.07)",
          }}
        >
          <img
            src={center.img}
            alt={center.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-[1.04]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          {/* category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#C9A84C]/90 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded">
              {center.category}
            </span>
          </div>

          {/* info */}
          <div className="absolute bottom-0 inset-x-0 p-5 z-10">
            <p className="text-white font-display font-semibold text-xl leading-tight">{center.title}</p>
            <p className="text-white/55 text-sm mt-1 flex items-center gap-1.5">
              <svg width="11" height="14" viewBox="0 0 10 12" fill="currentColor" className="flex-shrink-0">
                <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C4.17 5.5 3.5 4.83 3.5 4S4.17 2.5 5 2.5 6.5 3.17 6.5 4 5.83 5.5 5 5.5z"/>
              </svg>
              {center.location}
            </p>
          </div>

          {/* gold ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C9A84C]/30 pointer-events-none" />
        </div>

        {/* right card */}
        <div
          onClick={() => !dragged.current && goTo(current + 1)}
          className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
          style={{
            width:  "clamp(130px, 20vw, 260px)",
            height: "clamp(200px, 34vw, 430px)",
            transform: "perspective(1000px) rotateY(-10deg) scale(0.86)",
            opacity: 0.5,
            filter: "brightness(0.45)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          }}
        >
          <img src={next.img} alt={next.title}
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-white font-semibold text-sm leading-tight">{next.title}</p>
            <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className="flex-shrink-0">
                <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C4.17 5.5 3.5 4.83 3.5 4S4.17 2.5 5 2.5 6.5 3.17 6.5 4 5.83 5.5 5 5.5z"/>
              </svg>
              {next.location}
            </p>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center items-center gap-2.5 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Project ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === current ? "28px" : "8px",
              height:     "8px",
              background: i === current ? "#C9A84C" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* swipe hint */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="opacity-40">
          <rect x="7" y="1" width="8" height="14" rx="4" stroke="#C9A84C" strokeWidth="1.5"/>
          <path d="M11 15v5M7 18l4 4 4-4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12l-3 2M18 12l3 2" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
        </svg>
        <span className="text-white/35 text-sm tracking-wide">Swipe to explore more projects</span>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl text-white text-sm font-semibold group"
        >
          View All Projects
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}