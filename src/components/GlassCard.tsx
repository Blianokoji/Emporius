import React, { useRef } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl p-6 backdrop-blur-xl bg-white/10 border border-white/25 shadow-xl overflow-hidden transition-colors duration-200 text-gray-100 text-raise ${className}`}
    >
      {/* Strong, neutral scrim to guarantee readability over mixed backgrounds */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-white/5" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
