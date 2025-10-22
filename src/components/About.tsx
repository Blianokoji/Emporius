import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-center fade-up">
      <h2 className="text-4xl font-bold text-teal-700 mb-6">
        Where Quality Meets Care
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Founded in Kochi, Kerala, by five partners with deep expertise across
        the healthcare ecosystem, Emporis Health Care stands for uncompromising
        quality, affordability, and continuous innovation.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4">
        {[
          {
            title: "Uncompromising Quality",
            desc: "Every formulation is manufactured under stringent quality standards and scientific precision.",
          },
          {
            title: "Cost-Effective Access",
            desc: "We believe healthcare should be equitable and affordable for all.",
          },
          {
            title: "Continuous Innovation",
            desc: "Our R&D-driven approach ensures modern, safe, and effective solutions for evolving health needs.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="p-6 bg-teal-50 rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
