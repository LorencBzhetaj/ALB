"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── Intersection hook ─────────────────────────────────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Video me autoplay të garantuar në iOS/Safari ─────────────────────── */
function VideoAutoPlay() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // iOS kërkon muted si property JS, jo vetëm HTML attribute
    v.muted = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");

    const play = () => {
      v.play().catch(() => {
        // Nëse dështon, provo pas ndërveprimit të parë të përdoruesit
        const unlock = () => {
          v.play().catch(() => {});
        };
        document.addEventListener("touchstart", unlock, { once: true });
        document.addEventListener("click", unlock, { once: true });
      });
    };

    if (v.readyState >= 2) {
      play();
    } else {
      v.addEventListener("canplay", play, { once: true });
    }

    return () => v.removeEventListener("canplay", play);
  }, []);

  return (
    <video
      ref={ref}
      src="/test.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      disablePictureInPicture
      className="w-full object-cover"
      style={{ maxHeight: "560px", display: "block" }}
    />
  );
}

/* ─── Main ──────────────────────────────────────────────────────────────── */
export default function HomeTransformationAnimation() {
  const { ref: titleRef, inView: titleVisible } = useInView(0.4);
  const { ref: videoRef, inView } = useInView(0.15);

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0d0d0d" }}
      aria-labelledby="transform-heading"
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* top bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Title ── */}
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(22px)",
            transition: "opacity .8s ease, transform .8s ease",
          }}
        >
          <p className="section-tag mb-4">Transforming Spaces. Elevating Lives.</p>
          <h2
            id="transform-heading"
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            From Outdated<br />
            To{" "}
            <span className="relative inline-block text-[#C9A84C]">
              Outstanding
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: "linear-gradient(90deg,transparent,#C9A84C80,transparent)",
                }}
              />
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
            We take your space through a seamless transformation
            and deliver results that exceed expectations.
          </p>
        </div>

        {/* ── Video ── */}
        <div
          ref={videoRef}
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(201,168,76,0.3)",
            boxShadow: "0 0 60px rgba(201,168,76,0.12)",
          }}
        >
          <VideoAutoPlay />
        </div>

        {/* ── CTA ── */}
        <div
          className="text-center mt-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .8s ease .4s, transform .8s ease .4s",
          }}
        >
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl text-white text-sm font-semibold group"
          >
            View Our Work
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* bottom bar */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
    </section>
  );
}