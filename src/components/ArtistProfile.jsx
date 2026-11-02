import { useState } from "react";

export default function ArtistProfile() {
  const [activeTab, setActiveTab] = useState("statement");

  return (
    <section className="bg-bg-primary text-text-dark py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Header / Intro Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-stone-300/60 pb-12">
          {/* Framed Portrait Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative bg-bg-secondary p-4 rounded-xl border border-stone-300/80 shadow-md max-w-xs w-full">
              <div className="aspect-3/4 overflow-hidden rounded-lg bg-stone-300">
                <img
                  src="./public/portrait.jpg"
                  alt="Heather Meyer - Artist Portrait"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <p className="mt-3 text-center font-serif text-sm italic text-stone-600">
                Heather Meyer — Artist
              </p>
            </div>
          </div>

          {/* Intro Text */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <span className="font-sans text-lg tracking-widest uppercase text-sage-medium font-extrabold">
              About the Artist
            </span>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Quiet beauty in the darkest corners of our world.
            </h1>
            <p className="font-sans text-stone-700 text-2xl font-semibold leading-relaxed pt-2">
              "The Vanitas Still Life has always captivated me with its reminder
              of mortality, life&apos;s fragile beauty, and the celebration of
              what remains once we depart from this world. I believe the human
              body is a sacred vessel, a gift that should be cherished in life
              and revered even after death."
            </p>
          </div>
        </div>

        {/* Tabbed Narrative Navigation */}
        <div className="flex flex-col items-center">
          <div
            className="inline-flex gap-4 md:gap-8 border-b border-stone-300/80 w-full justify-center pb-3 font-sans text-base md:text-lg uppercase tracking-wider font-bold"
            role="tablist"
            aria-label="Artist Information Tabs"
          >
            <button
              role="tab"
              aria-selected={activeTab === "statement"}
              aria-controls="statement-tab"
              id="tab-statement"
              onClick={() => setActiveTab("statement")}
              className={`pb-2 transition-all cursor-pointer text-xl font-extrabold ${
                activeTab === "statement"
                  ? "border-b-2 border-sage-dark text-sage-dark"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Artist Statement
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "biography"}
              aria-controls="biography-tab"
              id="tab-biography"
              onClick={() => setActiveTab("biography")}
              className={`pb-2 transition-all cursor-pointer text-xl font-extrabold ${
                activeTab === "biography"
                  ? "border-b-2 border-sage-dark text-sage-dark"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Biography & Background
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="mt-10 max-w-3xl w-full">
            {/* STATEMENT TAB */}
            {activeTab === "statement" && (
              <div
                id="statement-tab"
                role="tabpanel"
                aria-labelledby="tab-statement"
                className="flex flex-col gap-6 font-sans font-medium text-xl md:text-2xl text-stone-800 leading-relaxed"
              >
                <p>
                  I am a 34-year-old artist living and working in South
                  Louisiana. My creative practice is deeply inspired by the
                  darker corners of our world, and I have long been fascinated
                  with the tradition of the Vanitas Still Life. I believe our
                  bodies are beautiful, holy vessels—gifts that should be
                  celebrated and revered, even after we are gone.
                </p>
                <p>
                  My work seeks to honor this idea through exploration,
                  layering, and unexpected combinations of media. I embrace
                  experimentation, weaving together materials and processes that
                  traditionally resist one another, creating spaces where
                  symbolism and form converge.
                </p>
                <blockquote className="bg-bg-secondary p-6 rounded-lg border-l-4 border-sage-medium italic font-serif my-2 text-stone-900 text-xl md:text-2xl">
                  “My art is both an offering and an inquiry: a meditation on
                  impermanence, beauty, and the ways we choose to honor our
                  fleeting place in the world.”
                </blockquote>
                <p>
                  This experimentation allows me to create works that challenge
                  convention while reflecting my ongoing exploration of form,
                  symbolism, and the human experience across multiple
                  traditional and contemporary media.
                </p>
              </div>
            )}

            {/* BIOGRAPHY TAB */}
            {activeTab === "biography" && (
              <div
                id="biography-tab"
                role="tabpanel"
                aria-labelledby="tab-biography"
                className="flex flex-col gap-6 font-sans font-medium text-xl md:text-2xl text-stone-800 leading-relaxed"
              >
                <div>
                  <h3 className="font-display font-extrabold text-3xl text-text-dark mb-2">
                    Early Roots & The Craft Box
                  </h3>
                  <p>
                    My passion for art began long before I fully understood what
                    art was. I spent countless childhood afternoons and weekends
                    drawing and creating. My mother nurtured my early love for
                    construction paper, handmade confetti, and endless doodles.
                    She created a special “Big Girl Craft Box” that appeared
                    each afternoon during my younger sister&apos;s nap time,
                    giving me space to explore and imagine.
                  </p>
                </div>

                <p>
                  As I grew older, my father began teaching me how to draw. We
                  spent hours sketching classic cartoon characters together, and
                  eventually he jokingly told me that I had surpassed his skill
                  level. While my parents were honest about the challenges of
                  pursuing a career in the arts, they supported my ambitions
                  wholeheartedly.
                </p>

                <div className="pt-2">
                  <h3 className="font-display font-extrabold text-3xl text-text-dark mb-2">
                    Academic Formation & Shenanigans
                  </h3>
                  <p>
                    After graduating high school in 2010, I began working toward
                    my degree in art, earning a Bachelor of Fine Arts from
                    Nicholls State University in 2014. My undergraduate thesis,{" "}
                    <em>Shenanigans</em>, explored the intersection of
                    silkscreen printing with oil painting and linocut relief
                    techniques, reflecting my early interest in combining
                    traditional processes with layered experimentation.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="font-display font-extrabold text-3xl text-text-dark mb-2">
                    Teaching & Educator Journey
                  </h3>
                  <p>
                    Shortly after graduation, I began teaching art in the St.
                    Mary Parish School System, where I have now dedicated nearly
                    a decade of service. Teaching has been both one of the most
                    challenging and rewarding aspects of my career. It
                    continually pushes me to grow alongside my students. Their
                    curiosity fuels my own, inspiring me to learn, unlearn, and
                    rediscover new approaches to art-making.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
