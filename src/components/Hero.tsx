import React from "react";
import labImg from "../assets/lab_img.jpg";

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
        <div className="max-w-5xl mx-6 md:mx-12 lg:mx-20 py-24">
          <div className="w-full md:w-2/3 lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold fade-up">
              Redefining Wellness. Restoring Trust.
            </h1>

            <p className="max-w-xl mt-6 text-gray-100 fade-up">
              We are driven by science and compassion, committed to building a healthier tomorrow through innovation, integrity, and excellence.
            </p>

            <button
              onClick={handleNavigateProducts}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition-all duration-300 group"
            >
              <span>Explore Our Products</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
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
