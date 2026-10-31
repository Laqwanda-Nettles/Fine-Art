function Featured({
  titledWork = "Stilled Life",
  artMedium = "Oil on canvas, 2024",
  description = "An intimate detail exploring light, texture, and impermanence through traditional layering techniques.",
}) {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#e8e6df] text-stone-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side: Artwork Crop Detail */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-4/3 md:aspect-square bg-stone-300">
          <img
            src="https://images.unsplash.com/photo-1582561833407-b95380302a43?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt={titledWork}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Right Side: Editorial Content */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-bold italic text-4xl md:text-5xl text-stone-900 tracking-tight">
            In the Spotlight
          </h2>

          <div className="space-y-1">
            <h3 className="font-sans uppercase font-semibold text-2xl md:text-3xl text-stone-800 tracking-wide">
              {titledWork}
            </h3>
            <p className="text-lg md:text-xl text-stone-600 italic font-medium">
              {artMedium}
            </p>
          </div>

          <p className=" leading-relaxed text-xl md:text-2xl font-medium pt-2">
            {description}
          </p>

          <button className="mt-4 bg-[#6b7a4e] hover:bg-[#455232] transition-colors duration-200 px-6 py-3 font-medium text-base md:text-lg text-amber-50 rounded-md shadow-md tracking-wider uppercase">
            View in Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
