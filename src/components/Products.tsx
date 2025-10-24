import React, { useEffect, useState } from 'react';
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
  const [isTouch, setIsTouch] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const check = () => {
      try {
        const coarse = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
        const touchCapable = typeof window !== 'undefined' && ('ontouchstart' in window || (navigator as any).maxTouchPoints > 0);
        setIsTouch(Boolean(coarse || touchCapable));
      } catch {
        setIsTouch(false);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="products" className="w-full bg-cyan-900 fade-up">
      <div className="w-full flex flex-col min-h-[90vh] md:min-h-[85vh]">
        {/* Top bar spanning full width */}
        <div className="w-full pt-15 px-6 md:px-8 py-10 text-center bg-cyan-900 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Products</h2>
        </div>

        {/* Full-width product grid: spaced tiles, taller images, content slides into card on hover */}
        <div className="w-full py-10">
          <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {products.map((p, i) => {
              const first = (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden>
                  <img src={p.image} alt={p.name} className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center" />
                </div>
              );

              const second = (
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full">
                      {/* overlay content slides up into view on hover or touch */}
                      <div className="absolute left-0 right-0 bottom-0 transform translate-y-full group-hover:translate-y-0 group-data-[active=true]:translate-y-0 transition-transform duration-300 ease-out bg-white/95 backdrop-blur-sm border-t border-cyan-100/40 text-black p-6">
                        <p className="text-md font-semibold text-black">{p.tagline}</p>
                        <p className="text-sm text-black mt-2">{p.desc}</p>
                        <div className="mt-4 flex justify-end">
                          {p.comingSoon ? (
                            <button className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm cursor-not-allowed" disabled>
                              Coming Soon
                            </button>
                          ) : p.anchor ? (
                            <a href={`#${p.anchor}`} className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm">
                              Learn More
                            </a>
                          ) : (
                            <button className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm">Learn More</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={i} className="group flex flex-col items-start">
                  <div className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative w-full h-80 md:h-96 lg:h-[520px]">
                      <PixelTransition
                        className="w-full h-full"
                        firstContent={first}
                        secondContent={second}
                        pixelColor={'#e6f7ff'}
                        animationStepDuration={0.35}
                        fillHeight={false}
                        rounded={false}
                        bordered={false}
                        active={isTouch ? i === activeIndex : undefined}
                        onActiveChange={(next) => {
                          if (!isTouch) return;
                          setActiveIndex(next ? i : null);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 px-2 md:px-3">
                    <h3 className="text-lg md:text-2xl text-white font-bold ">{p.name}</h3>
                    <p className="text-sm md:text-base text-gray-100 mt-1">{p.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
