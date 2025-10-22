import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-teal-100 via-white to-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-teal-600 fade-up">
        Redefining Wellness. Restoring Trust.
      </h1>
      <p className="max-w-2xl mt-6 text-gray-600 fade-up">
        Emporis Health Care, based in Kochi, delivers high-quality, affordable,
        and accessible healthcare products designed to enhance everyday wellness.
      </p>
      <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-500 fade-up">
        Explore Our Products
      </button>
    </section>
  );
};

export default Hero;
