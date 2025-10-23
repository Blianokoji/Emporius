import React from "react";
import GridMotion from "./GridMotion";
import GlassCard from "./GlassCard";
import img1 from "../assets/grid_img_1.jpg";
import img2 from "../assets/grid_img_2.jpg";
import img3 from "../assets/grid_img_3.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="relative fade-up text-center">
      <GridMotion
        items={[
          img1,
          img2,
          img3,
          "Quality",
          "Care",
          "Innovation",
          img2,
          img3,
          img1,
          "Integrity",
          "Excellence",
          img3,
          img2,
          img1,
          "Access",
          "Trust",
          img1,
          img2,
          img3,
          "Health",
          "Science",
          img2,
          img3,
          img1,
          "Safety",
          "Affordability",
          img1,
          img2,
          img3,
        ]}
        gradientColor="rgba(0,0,0,0.25)"
      >
        <div className="relative z-10 mx-auto px-6 py-20 max-w-6xl space-y-10">
          <div>
            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Where Quality Meets Care
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-gray-100/90 leading-relaxed">
              Founded in Kochi, Kerala, by five partners with deep expertise across the healthcare ecosystem,
              Emporis Health Care stands for uncompromising quality, affordability, and continuous innovation.
            </p>
          </div>

          {/* Feature cards with glassmorphic styling */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
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
              <GlassCard key={i} className="hover:shadow-xl transition-transform hover:-translate-y-2 text-left text-raise">
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">{card.title}</h3>
                <p>{card.desc}</p>
              </GlassCard>
            ))}
          </div>

          {/* Vision & Mission with same background and low-opacity glass */}
          <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
            <GlassCard className="text-left text-raise">
              <h2 className="text-3xl font-bold mb-4 text-cyan-700">Vision</h2>
              <p className="leading-relaxed">
                To be a trusted name in global healthcare, known for unmatched quality, innovation, and ethical
                excellence — improving lives with accessible and effective wellness products.
              </p>
            </GlassCard>

            <GlassCard className="text-left text-raise">
              <h2 className="text-3xl font-bold mb-4 text-cyan-700">Mission</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>Develop and deliver scientifically proven, safe, and effective healthcare solutions.</li>
                <li>Bridge the gap between quality and affordability in pharma and nutraceutical markets.</li>
                <li>Empower individuals and healthcare professionals through trust and transparency.</li>
                <li>Expand globally through innovation and sustainable partnerships.</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </GridMotion>
    </section>
  );
};

export default About;
