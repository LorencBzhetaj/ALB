"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85",
    alt: "Kitchen remodeling Metro Detroit",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=85",
    alt: "Bathroom renovation Metro Detroit",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85",
    alt: "Custom home building Metro Detroit",
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=85",
    alt: "Interior painting Metro Detroit",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setPrev(current);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setTransitioning(false);
        setPrev(null);
      }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Outgoing slide */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0"
          style={{
            opacity: transitioning ? 0 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img
            src={slides[prev].src}
            alt={slides[prev].alt}
            className="w-full h-full object-cover scale-[1.08]"
          />
        </div>
      )}

      {/* Current slide */}
      <div
        key={`current-${current}`}
        className="absolute inset-0"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: "opacity 1s ease-in-out",
          animation: "kenBurnsSlow 8s ease-in-out forwards",
        }}
      >
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

      {/* Slide dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-[#C9A84C]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}