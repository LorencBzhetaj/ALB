"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const transformations = [
  {
    label: "Kitchen",
    before: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    beforeAlt: "Outdated kitchen before remodeling",
    afterAlt:  "Modern kitchen after ALB remodeling",
  },
  {
    label: "Bathroom",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    beforeAlt: "Dated bathroom before renovation",
    afterAlt:  "Luxury bathroom after ALB renovation",
  },
  {
    label: "Interior",
    before: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    after:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    beforeAlt: "Interior before painting",
    afterAlt:  "Interior after professional painting",
  },
];

/* ─── Slide counter badge ───────────────────────────────────────────────── */
function CounterBadge({ current, total }: { current: number; total: number }) {
  return (
    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm border border-[#C9A84C]/30 rounded-full px-3 py-1 flex items-center gap-1.5">
      <span className="text-[#C9A84C] font-bold text-sm">{current + 1}</span>
      <span className="text-white/40 text-xs">/</span>
      <span className="text-white/60 text-xs">{total}</span>
    </div>
  );
}

/* ─── Interactive before/after slider ──────────────────────────────────── */
function BeforeAfterSlider({
  before, after, beforeAlt, afterAlt, label, active,
}: {
  before: string; after: string;
  beforeAlt: string; afterAlt: string;
  label: string; active: boolean;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  /* Auto-animate on active, pause while user interacts */
  useEffect(() => {
    if (!active || dragging || reducedMotion.current) return;
    let frame: number;
    let direction = -1;
    let current = pos;

    const animate = () => {
      current += direction * 0.18;
      if (current <= 28) direction = 1;
      if (current >= 72) direction = -1;
      setPos(current);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, dragging]);

  const calcPos = (clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPos(pct);
  };

  /* Mouse */
  const onMouseDown = (e: React.MouseEvent) => { setDragging(true); calcPos(e.clientX); };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) calcPos(e.clientX); };
  const onMouseUp   = () => setDragging(false);

  /* Touch */
  const onTouchStart = (e: React.TouchEvent) => { setDragging(true); calcPos(e.touches[0].clientX); };
  const onTouchMove  = (e: React.TouchEvent) => { if (dragging) calcPos(e.touches[0].clientX); };
  const onTouchEnd   = () => setDragging(false);

  return (
    <div
      ref={ref}
      className="relative w-full h-full select-none overflow-hidden rounded-xl cursor-ew-resize"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={() => { onMouseUp(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label={`Before and after slider for ${label} transformation`}
    >
      {/* AFTER — full width base */}
      <img
        src={after}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* BEFORE — clipped to left of slider */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, minWidth: "100%" }}
          loading="lazy"
          draggable={false}
        />
        {/* BEFORE label */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
            Before
          </span>
        </div>
      </div>

      {/* AFTER label */}
      <div className="absolute bottom-4 right-4 z-10">
        <span className="bg-[#C9A84C]/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-[#C9A84C]" />

        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#C9A84C] shadow-[0_0_20px_rgba(201,168,76,0.5)] flex items-center justify-center gap-1 transition-transform duration-200"
          style={{ transform: `translate(-50%, -50%) scale(${hovered || dragging ? 1.15 : 1})` }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M5 7H1M1 7L4 4M1 7L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 7H17M17 7L14 4M17 7L14 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────────────────── */
export default function HomeTransformationAnimation() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLDivElement>(null);

  /* Scroll reveal — section */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Scroll reveal — title */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  /* Auto-cycle tabs every 10s */
  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % transformations.length);
    }, 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-[#111111] overflow-hidden"
      aria-labelledby="transformation-heading"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="section-tag mb-3">Home Transformation</p>
          <h2
            id="transformation-heading"
            className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            From Outdated To{" "}
            <span className="text-[#C9A84C] relative">
              Outstanding
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C9A84C]/40 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We transform kitchens, bathrooms, interiors, and full homes with precise
            craftsmanship and premium attention to detail.
          </p>
        </div>

        {/* ── Layout: tabs left + slider right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">

          {/* Left — tab list */}
          <div
            className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {transformations.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-xl border transition-all duration-300 group ${
                  active === i
                    ? "bg-[#C9A84C]/10 border-[#C9A84C] text-white"
                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Active indicator dot */}
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300 ${
                    active === i ? "bg-[#C9A84C]" : "bg-white/20"
                  }`} />
                  <span className="font-semibold text-sm tracking-wide">{t.label}</span>
                </div>
                {active === i && (
                  <p className="text-xs text-gray-500 mt-1 ml-5 hidden lg:block">
                    Drag the slider to reveal the transformation
                  </p>
                )}
              </button>
            ))}

            {/* Progress bar — desktop only */}
            <div className="hidden lg:block mt-4 px-1">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C9A84C] rounded-full transition-all duration-300"
                  style={{ width: `${((active + 1) / transformations.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {active + 1} of {transformations.length} transformations
              </p>
            </div>

            {/* CTA — desktop */}
            <Link
              href="/our-work"
              className="hidden lg:inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-lg text-white text-sm font-semibold mt-4 self-start group"
            >
              View Our Work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — slider */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "perspective(1200px) rotateY(0deg) translateX(0)" : "perspective(1200px) rotateY(4deg) translateX(40px)",
              transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
            }}
          >
            {/* Glow ring */}
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#C9A84C]/30 via-transparent to-[#C9A84C]/10 z-0 pointer-events-none" />

              {/* Slider container */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                style={{ aspectRatio: "16/9" }}>
                {transformations.map((t, i) => (
                  <div
                    key={t.label}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
                  >
                    <BeforeAfterSlider
                      before={t.before}
                      after={t.after}
                      beforeAlt={t.beforeAlt}
                      afterAlt={t.afterAlt}
                      label={t.label}
                      active={active === i}
                    />
                  </div>
                ))}

                {/* Counter badge */}
                <CounterBadge current={active} total={transformations.length} />

                {/* Drag hint — fades after 3s */}
                <DragHint />
              </div>
            </div>

            {/* Reflection bar */}
            <div
              className="mx-6 h-8 rounded-b-2xl opacity-20"
              style={{
                background: "linear-gradient(to bottom, rgba(201,168,76,0.15), transparent)",
                filter: "blur(6px)",
              }}
            />
          </div>
        </div>

        {/* CTA — mobile */}
        <div className="lg:hidden text-center mt-10">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-lg text-white text-sm font-semibold"
          >
            View Our Work <ArrowRight size={15} />
          </Link>
        </div>

      </div>

      {/* Gold glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>
  );
}

/* ─── Drag hint overlay ─────────────────────────────────────────────────── */
function DragHint() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      <div className="bg-black/50 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2 border border-white/10">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M6 7H1M1 7L4 4M1 7L4 10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7H19M19 7L16 4M19 7L16 10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xs font-medium">Drag to reveal</span>
      </div>
    </div>
  );
}