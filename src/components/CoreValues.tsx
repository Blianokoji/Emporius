import React from "react";

const values: string[] = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Accessibility",
  "Sustainability",
];

const CoreValues: React.FC = () => {
  return (
    <section id="values" className="py-20 bg-white text-center fade-up">
      <h2 className="text-4xl font-bold text-teal-700 mb-10">Our Core Values</h2>
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
      <p className="mt-10 text-gray-600 italic">
        “Success is measured not by numbers but by the lives we touch.”
      </p>
    </section>
  );
};

export default CoreValues;
