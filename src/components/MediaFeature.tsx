import React from "react";

interface MediaFeatureProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  eyebrow?: string;
  imageOn?: "left" | "right";
  imageFit?: "cover" | "contain";
  childrenRight?: React.ReactNode;
  childrenBelow?: React.ReactNode;
  id?: string;
  sectionClassName?: string;
}

const MediaFeature: React.FC<MediaFeatureProps> = ({
  imageSrc,
  imageAlt,
  title,
  eyebrow,
  imageOn = "left",
  childrenRight,
  childrenBelow,
  id,
  imageFit = "cover",
  sectionClassName = "bg-white",
}) => {
  const imageFirst = imageOn === "left";
  const isContain = imageFit === "contain";
  const imgClass = isContain
    ? "max-h-[520px] max-w-full h-auto w-auto object-contain"
    : "w-full h-full max-h-[520px] object-cover";

  return (
    <section id={id} className={`py-24 ${sectionClassName} fade-up`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-cyan-600 font-semibold mb-2">{eyebrow}</p>
        )}
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-8">{title}</h2>
        )}
        <div className={`grid md:grid-cols-2 gap-10 items-start`}>
          {imageFirst && (
            <div className="relative rounded-2xl shadow-lg overflow-hidden bg-slate-50 flex items-center justify-center">
              <img src={imageSrc} alt={imageAlt} className={`${imgClass}`} />
            </div>
          )}

          <div className="space-y-5 text-left">
            {childrenRight}
          </div>

          {!imageFirst && (
            <div className="relative order-first md:order-none rounded-2xl shadow-lg overflow-hidden bg-slate-50 flex items-center justify-center">
              <img src={imageSrc} alt={imageAlt} className={`${imgClass}`} />
            </div>
          )}
        </div>

        {childrenBelow && (
          <div className="mt-10">
            {childrenBelow}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaFeature;
