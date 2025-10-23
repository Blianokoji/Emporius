import React from 'react';
import PixelTransition from './PixelTransition';
import labImg from '../assets/lab_img.jpg';

interface Product {
  name: string;
  tagline: string;
  desc: string;
}

const products: Product[] = [
  {
    name: 'Embiotin™️',
    tagline: 'Advanced Hair Growth Supplement',
    desc: 'A premium biotin-based formulation fortified with vitamins and minerals. Strengthens hair from the root, enhances shine, and promotes natural regrowth.',
  },
  {
    name: 'Emflat™️',
    tagline: 'Simethicone Syrup for Digestive Comfort',
    desc: "Provides fast, gentle relief from gas, bloating, and discomfort. Its simethicone-based formula ensures safe digestive comfort for all ages.",
  },
  {
    name: 'Emprotino™️',
    tagline: 'Advanced Whey Protein Formula',
    desc: 'Scientifically developed whey protein supplement designed for recovery, muscle maintenance, and immune support.',
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-cyan-50 text-center fade-up">
      <h2 className="text-4xl font-bold text-cyan-700 mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {products.map((p, i) => {
          const first = (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center p-6"
              style={{ backgroundImage: `url(${labImg})` }}
              aria-hidden
            >
              <div className="bg-black/30 backdrop-blur-sm p-3 rounded-md max-w-xs text-center">
                <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
              </div>
            </div>
          );

          const second = (
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-lg border border-cyan-200/50" />

              <div className="relative z-10 flex h-full w-full p-6">
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700">{p.name}</h3>
                    <p className="text-gray-700 mt-2">{p.tagline}</p>
                    <p className="text-gray-700 mt-3 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );

          return (
            <PixelTransition
              key={i}
              className="w-full"
              firstContent={first}
              secondContent={second}
              aspectRatio={'80%'}
              pixelColor={'#e6f7ff'}
              animationStepDuration={0.35}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
