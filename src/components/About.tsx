import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cyan-50 text-center fade-up">
      <h2 className="text-4xl font-bold text-cyan-700 mb-6">
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
            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-2xl shadow-sm">
          <div>
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted name in global healthcare, known for unmatched
              quality, innovation, and ethical excellence — improving lives with
              accessible and effective wellness products.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">Mission</h2>
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

export default About;
