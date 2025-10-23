import React, { useEffect } from "react";
import gsap from "gsap";
import TextType from './TextType';

interface PreloaderProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preloader: React.FC<PreloaderProps> = ({ setIsLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".preloader-logo", { scale: 1.05, duration: 1, ease: "power1.inOut" });

    const timer = setTimeout(() => {
      gsap.to(".preloader", {
        opacity: 0,
        duration: 0.8,
        onComplete: () => setIsLoading(false),
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="preloader fixed inset-0 flex flex-col justify-center items-center bg-white z-[9999]">
      <div className="preloader-logo text-3xl font-bold text-cyan-400 tracking-wide flex items-center gap-2">
        <TextType
          text={["Emporis Health Care"]}
          typingSpeed={80}
          deletingSpeed={40}
          pauseDuration={800}
          loop={true}
          showCursor={true}
          cursorCharacter={'|'}
          className="inline-block"
        />
      </div>
      <div className="mt-6 w-16 h-1.5 bg-teal-200 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-cyan-600 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Preloader;
