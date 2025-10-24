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
      className={`relative rounded-2xl p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-lg overflow-hidden transition-colors duration-200 text-black ${className}`}
    >
      {/* Light, frosted white scrim to create a pale glassy card so text can be black */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl">
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
