import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function ServiceCard({ icon, title, description, href, imageUrl }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="w-10 h-10 bg-[#C9A84C]/10 rounded flex items-center justify-center text-[#C9A84C] mb-4">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-[#1a1a1a] mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all">
          LEARN MORE <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}