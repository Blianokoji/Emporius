import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ambitions from "./components/Ambitions";
import Products from "./components/Products";
import Edge from "./components/Edge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader setIsLoading={setIsLoading} />;
  }

  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <Hero />
  <About />
  <Ambitions />
      <Products />
      <Edge />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
