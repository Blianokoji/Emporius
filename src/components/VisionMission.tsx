import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-teal-50 fade-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">
        <div>
          <h2 className="text-4xl font-bold text-teal-700 mb-4">🌍 Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a trusted name in global healthcare, known for unmatched
            quality, innovation, and ethical excellence — improving lives with
            accessible and effective wellness products.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-teal-700 mb-4">🎯 Mission</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>
              Develop and deliver scientifically proven, safe, and effective
              healthcare solutions.
            </li>
            <li>
              Bridge the gap between quality and affordability in pharma and
              nutraceutical markets.
            </li>
            <li>
              Empower individuals and healthcare professionals through trust and
              transparency.
            </li>
            <li>
              Expand globally through innovation and sustainable partnerships.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
