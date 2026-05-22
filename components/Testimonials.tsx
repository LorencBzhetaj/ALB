const reviews = [
  {
    name: "Sarah M.",
    location: "West Bloomfield, MI",
    rating: 5,
    text: "ALB completely transformed our kitchen. The craftsmanship is top-notch and they finished on schedule. Highly recommend to anyone in Metro Detroit looking for quality remodeling.",
    project: "Kitchen Remodeling",
  },
  {
    name: "David K.",
    location: "Novi, MI",
    rating: 5,
    text: "They painted the entire interior of our home. Professional, clean, and the results were beautiful. Fair pricing and direct communication throughout the project.",
    project: "Interior Painting",
  },
  {
    name: "Jennifer T.",
    location: "Commerce Twp, MI",
    rating: 5,
    text: "Our bathroom remodel exceeded expectations. The tile work is stunning and they were respectful of our home the entire time. Will definitely use ALB again.",
    project: "Bathroom Remodeling",
  },
  {
    name: "Robert A.",
    location: "Farmington Hills, MI",
    rating: 5,
    text: "After a water damage incident, ALB handled the full restoration. They made a stressful situation much easier. True professionals who care about their clients.",
    project: "Water Restoration",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-tag">What Our Clients Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">
            Trusted by Homeowners Across Metro Detroit
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our work speaks for itself. Read what local homeowners have to say about their experience with ALB Custom Painting & Remodeling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#C9A84C] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{r.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1a1a1a] text-sm">{r.name}</p>
                <p className="text-gray-400 text-xs">{r.location}</p>
                <span className="inline-block mt-2 text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-0.5 rounded-full font-medium">
                  {r.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* HomeAdvisor trust badge */}
        <div className="mt-12 text-center">
          <a
            href="https://www.homeadvisor.com/rated.ALBCustomPaintingand.66241488.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-8 h-8 bg-[#F26C24] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">HA</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 leading-tight">Verified on</p>
              <p className="text-sm font-semibold text-[#1a1a1a]">HomeAdvisor</p>
            </div>
            <span className="text-[#F26C24] font-bold text-lg">★★★★★</span>
          </a>
        </div>
      </div>
    </section>
  );
}
