import React from "react";
import SpotlightCard from "./SpotlightCard";
import edgeImg from "../assets/emporis_edge.jpg";

const Edge: React.FC = () => {
  return (
  <section id="edge" className="relative bg-cyan-50 fade-up min-h-[80vh]">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left half: Dark cyan spotlight content */}
        <div className="relative h-full">
          <SpotlightCard
            className="h-full w-full border-cyan-800 bg-cyan-900 text-white flex items-center p-10 md:p-16 rounded-none"
            spotlightColor="rgba(6, 182, 212, 0.35)"
          >
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The Emporis Edge</h2>
              <p className="text-cyan-100/90 leading-relaxed">
                At Emporis, we don’t just make products — we build trust through innovation and ethics.
              </p>

              <p className="mt-5 text-cyan-100/90 leading-relaxed">
                We are steadily expanding our product range across nutritional, gastrointestinal, and wellness segments to reach
                every corner of the healthcare spectrum.
              </p>

              <ul className="mt-7 space-y-3 text-cyan-50">
                <li>• Our formulations are developed under GMP-certified facilities</li>
                <li>• Ensuring purity</li>
                <li>• Consistency</li>
                <li>• Therapeutic value</li>
              </ul>
            </div>
          </SpotlightCard>
        </div>

        {/* Right half: Full-bleed image */}
        <div className="relative h-full">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={edgeImg}
              alt="Emporis Edge illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edge;
