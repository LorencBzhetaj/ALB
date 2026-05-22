import { Shield, Star, Clock, MapPin, Award, Wrench } from "lucide-react";

const items = [
  { icon: <Clock size={20} />, label: "18+ Years Experience" },
  { icon: <Shield size={20} />, label: "Family Owned & Operated" },
  { icon: <Star size={20} />, label: "Free Estimates" },
  { icon: <MapPin size={20} />, label: "Metro Detroit Service Area" },
  { icon: <Award size={20} />, label: "Licensed & Insured" },
  { icon: <Wrench size={20} />, label: "No Material Markups" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1a1a1a] py-6 border-t border-b border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <span className="text-[#C9A84C]">{item.icon}</span>
              <span className="text-white text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
