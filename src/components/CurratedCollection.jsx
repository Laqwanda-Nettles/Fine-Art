const collections = [
  {
    id: "vanitas-oils",
    name: "Vanitas Oils",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    linkText: "Explore Oil Paintings",
  },
  {
    id: "print-linocut",
    name: "Print & Linocut",
    image:
      "https://images.unsplash.com/photo-1731343886469-f4d97edea078?q=80&w=800&auto=format&fit=crop",
    linkText: "Explore Prints",
  },
  {
    id: "sketches",
    name: "Sketches & Studies",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    linkText: "Explore Drawings",
  },
];

export default function CuratedCollection({ onSelectCollection }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#f2f0e9] text-stone-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="italic text-4xl md:text-5xl font-bold text-stone-900">
            Curated Collections Preview
          </h2>
          <p className="text-stone-600 text-lg md:text-xl font-semibold italic mt-2">
            Explore works grouped by medium and thematic inquiry
          </p>
        </div>

        {/* 3-Column Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCollection && onSelectCollection(item.id)}
              className="group cursor-pointer bg-[#f9f8f3] p-6 rounded-2xl shadow-md border border-stone-200/60 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Collection Title */}
              <h3 className="font-sans text-xs md:text-sm font-semibold tracking-widest text-stone-700 uppercase mb-4">
                {item.name}
              </h3>

              {/* Framed Image Container */}
              <div className="w-full aspect-4/3 rounded-lg overflow-hidden bg-stone-200 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Call-to-Action Link */}
              <div className="mt-auto inline-flex items-center gap-2 font-serif italic text-stone-700 text-sm md:text-base group-hover:text-stone-950 transition-colors">
                <span>{item.linkText}</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
