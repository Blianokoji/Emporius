import React from "react";

const Edge: React.FC = () => {
  return (
    <section
      id="edge"
      className="py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center fade-up"
    >
      <h2 className="text-4xl font-bold mb-4">The Emporis Edge</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        At Emporis, we don’t just make products — we build trust through
        innovation and ethics. All formulations are developed under
        GMP-certified facilities ensuring purity, consistency, and therapeutic
        value.
      </p>

      <div className="flex justify-center flex-wrap gap-10 mt-10 text-lg font-medium">
        <span>✅ GMP Certified</span>
        <span>🌱 R&D Driven</span>
        <span>💊 Safe Formulations</span>
      </div>
    </section>
  );
};

export default Edge;
