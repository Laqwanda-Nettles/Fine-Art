function AboutCTA() {
  return (
    <section className="bg-sage-dark text-text-dark py-20 px-6 md:py-28 md:px-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        {/* Quote Block */}
        <blockquote className="relative">
          {/* Subtle Decorative Quote Symbol */}
          <span className="font-display text-7xl md:text-8xl opacity-20 absolute -top-10 -left-6 md:-left-12 select-none pointer-events-none">
            “
          </span>

          <p className="font-display text-3xl md:text-5xl leading-relaxed md:leading-snug tracking-wide">
            “My art is both an offering and an inquiry: a meditation on
            impermanence, beauty, and the ways we choose to honor our fleeting
            place in the world.”
          </p>
        </blockquote>

        {/* CTA Button */}
        <a
          href="/about"
          className="mt-2 bg-bg-dark hover:bg-[#2c2424] text-bg-primary transition-all duration-300 px-8 py-3.5 font-sans font-medium text-sm md:text-base tracking-widest uppercase rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Read About the Artist
        </a>
      </div>
    </section>
  );
}

export default AboutCTA;
