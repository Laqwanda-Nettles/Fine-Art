import { useState, useEffect } from "react";
import { NavLink } from "react-router";

const artworks = [
  {
    id: 1,
    title: "Vanitas No. 4",
    medium: "mixed media: oil & print",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Southern Gothic Study",
    medium: "linocut & charcoal",
    image:
      "https://images.unsplash.com/photo-1762970443904-e982a1f28fd8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Fragile Beauty II",
    medium: "oil on canvas",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Auto-rotate slides every 6 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const currentArtwork = artworks[currentIndex];

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center py-12 px-6 md:px-12 bg-stone-100">
      {/* BACKGROUND:Dynamic Blurred Background Layer Synchronized fade using identical duration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {artworks.map((art, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={`bg-${art.id}`}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out blur-sm scale-110 pointer-events-none ${
                isActive ? "opacity-35" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${art.image})` }}
            />
          );
        })}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start gap-6 text-stone-800">
          <h2 className="font-semibold text-4xl md:text-5xl leading-tight">
            Art Crafted with patience & heart from South Louisiana
          </h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-text-dark">
            I am a mixed-media artist, exploring mortality, fragile beauty, and
            the sacred nature of the human body, finding quiet inspiration in
            the darker corners of our world.
          </p>
          <NavLink
            to="/collections"
            className="bg-[#6b7a4e] hover:bg-[#44543c] transition-colors duration-200 px-6 py-3 font-medium text-lg text-amber-50 rounded-md shadow-md uppercase"
          >
            Explore Collection
          </NavLink>
        </div>

        {/* Right Side: Polaroid Card & Slider Navigation */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Polaroid Frame */}
          <div className="bg-white p-4 pb-6 rounded-md shadow-xl border border-stone-200 max-w-sm w-full transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="relative aspect-square w-full overflow-hidden bg-stone-200 rounded-sm">
              {artworks.map((art, idx) => (
                <img
                  key={art.id}
                  src={art.image}
                  alt={art.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Polaroid Label */}
            <div className="mt-4 text-center">
              <h3 className="text-stone-900 text-lg font-semibold ">
                '{currentArtwork.title}'
              </h3>
              <p className="text-stone-500 text-sm italic">
                ({currentArtwork.medium})
              </p>
            </div>
          </div>

          {/* Controls & Slide Counter */}
          <div className="flex items-center gap-6 text-stone-700 text-2xl font-extrabold">
            <button
              onClick={handlePrev}
              aria-label="Previous artwork"
              className="p-2 hover:text-black transition-colors"
            >
              &lt;
            </button>
            <span>
              0{currentIndex + 1} / 0{artworks.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next artwork"
              className="p-2 hover:text-black transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
