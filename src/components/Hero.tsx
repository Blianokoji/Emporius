import React from "react";
import labImg from "../assets/lab_img.webp";

const Hero: React.FC = () => {
  const handleNavigateProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `url(${labImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* dark overlay for readable text */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-6 md:mx-12 lg:mx-20 py-24">
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 text-left pl-6 md:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight fade-up text-raise drop-shadow-lg pb-2 md:pb-3">
              Redefining Wellness. Restoring Trust.
            </h1>

            <p className="max-w-4xl mt-5 pb-2 md:pb-3 text-white text-base md:text-xl lg:text-2xl leading-relaxed fade-up text-raise">
              We are driven by science and compassion, committed to building a healthier tomorrow through innovation,
              integrity, and excellence.
            </p>

            <button
              onClick={handleNavigateProducts}
              className="group mt-8 inline-flex items-center gap-3 px-7 py-3 md:px-9 md:py-4 bg-cyan-600/95 hover:bg-cyan-500/95 text-white text-base md:text-lg rounded-lg shadow-xl ring-1 ring-cyan-300/30 transition-transform transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
            >
              <span className="font-semibold">Explore Our Products</span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
