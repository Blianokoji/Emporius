import React from 'react';
import PixelTransition from './PixelTransition';
import embiotinImg from '../assets/embiotin.jpg';
import emflatImg from '../assets/emflat.jpg';
import emproteinImg from '../assets/emprotein.jpg';

interface Product {
  name: string;
  tagline: string;
  desc: string;
  image: string;
  comingSoon?: boolean;
  anchor?: string;
}

const products: Product[] = [
  {
    name: 'Embiotin™️',
    tagline: 'Advanced Hair Growth Supplement',
    desc: 'A premium biotin-based formulation fortified with vitamins and minerals. Strengthens hair from the root, enhances shine, and promotes natural regrowth.',
    image: embiotinImg,
    anchor: 'embiotin',
  },
  {
    name: 'Emflat™️',
    tagline: 'Simethicone Syrup for Digestive Comfort',
    desc: "Provides fast, gentle relief from gas, bloating, and discomfort. Its simethicone-based formula ensures safe digestive comfort for all ages.",
    image: emflatImg,
    comingSoon: true,
  },
  {
    name: 'Emprotino™️',
    tagline: 'Advanced Whey Protein Formula',
    desc: 'Scientifically developed whey protein supplement designed for recovery, muscle maintenance, and immune support.',
    image: emproteinImg,
    comingSoon: true,
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="bg-cyan-50 fade-up">
      <div className="flex flex-col w-full min-h-[90vh] md:min-h-screen">
        {/* Top bar spanning full width (not vertically) */}
        <div className="px-6 md:px-8 py-10 text-center bg-cyan-900 text-white">
          <h2 className="text-5xl font-extrabold">Our Products</h2>
        </div>

        {/* Remaining area: split into three equal panels */}
        <div className="flex-1 flex flex-col md:flex-row w-full gap-0">
          {products.map((p, i) => {
          const first = (
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center p-6"
              aria-hidden
            >
              <img
                src={p.image}
                alt={p.name}
                className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white drop-shadow-md transition-opacity duration-300 group-hover:opacity-0 group-data-[active=true]:opacity-0">
                  {p.name}
                </h3>
              </div>
            </div>
          );

            const second = (
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-lg border border-cyan-200/50" />

              <div className="relative z-10 flex h-full w-full p-7 md:p-8 text-raise">
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-3xl font-extrabold text-cyan-700">{p.name}</h3>
                      {/* {p.comingSoon && (
                        <span className="bg-amber-500/90 text-white text-[10px] tracking-wide uppercase font-semibold px-2.5 py-1 rounded-full shadow">
                          Coming Soon
                        </span>
                      )} */}
                    </div>
                    <p className="text-gray-700 mt-3 text-base md:text-lg">{p.tagline}</p>
                    <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    {p.comingSoon ? (
                      <button
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-full cursor-not-allowed shadow-inner"
                        disabled
                        aria-disabled
                        title="This product is coming soon"
                      >
                        Coming Soon
                      </button>
                    ) : p.anchor ? (
                      <a
                        href={`#${p.anchor}`}
                        className="px-5 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition"
                      >
                        Learn More
                      </a>
                    ) : (
                      <button className="px-5 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );

            return (
              <div
                key={i}
                className="w-full flex-none h-[420px] md:flex-1 md:h-auto md:min-h-0"
              >
                <PixelTransition
                  className="w-full h-full"
                  firstContent={first}
                  secondContent={second}
                  aspectRatio={'120%'}
                  pixelColor={'#e6f7ff'}
                  animationStepDuration={0.35}
                  fillHeight
                  rounded={false}
                  bordered={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
