import React from "react";

interface Product {
  name: string;
  tagline: string;
  desc: string;
}

const products: Product[] = [
  {
    name: "Embiotin™️",
    tagline: "Advanced Hair Growth Supplement",
    desc: "A premium biotin-based formulation fortified with vitamins and minerals. Strengthens hair from the root, enhances shine, and promotes natural regrowth.",
  },
  {
    name: "Emflat™️",
    tagline: "Simethicone Syrup for Digestive Comfort",
    desc: "Provides fast, gentle relief from gas, bloating, and discomfort. Its simethicone-based formula ensures safe digestive comfort for all ages.",
  },
  {
    name: "Emprotino™️",
    tagline: "Advanced Whey Protein Formula",
    desc: "Scientifically developed whey protein supplement designed for recovery, muscle maintenance, and immune support.",
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-teal-50 text-center fade-up">
      <h2 className="text-4xl font-bold text-teal-700 mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">
              {p.name}
            </h3>
            <p className="text-gray-600 mb-3">{p.tagline}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
            <button className="mt-5 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
