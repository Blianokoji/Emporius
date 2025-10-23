import React from "react";

const values: string[] = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Accessibility",
  "Sustainability",
];

const Ambitions: React.FC = () => {
  return (
    <section id="ambitions" className="py-20 bg-white fade-up">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        <div className="bg-white">
          <h2 className="text-4xl font-bold text-teal-700 text-center mb-8">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="p-6 bg-teal-50 rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-teal-700">{val}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start bg-teal-50 p-8 rounded-2xl shadow-sm">

            
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

        
      </div>
    </section>
  );
};

export default Ambitions;
