import Link from "next/link";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Ready to Start Your Project?",
  subtitle = "Get a free, no-obligation estimate from Metro Detroit's trusted remodeling experts.",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-6 ${dark ? "bg-[#1a1a1a]" : "bg-[#F5F0E8]"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-tag mb-3">Get Started Today</p>
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-5 ${dark ? "text-white" : "text-[#1a1a1a]"}`}>
          {title}
        </h2>
        <p className={`text-lg mb-10 ${dark ? "text-gray-400" : "text-gray-600"}`}>{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold px-8 py-4 rounded text-white text-sm font-semibold w-full sm:w-auto text-center">
            GET FREE ESTIMATE
          </Link>
          <a
            href="tel:2482455220"
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold w-full sm:w-auto border ${
              dark
                ? "border-white/20 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]"
                : "border-[#1a1a1a]/30 text-[#1a1a1a] hover:border-[#C9A84C] hover:text-[#C9A84C]"
            } transition-colors`}
          >
            <Phone size={16} /> CALL 248-245-5220
          </a>
        </div>
      </div>
    </section>
  );
}
