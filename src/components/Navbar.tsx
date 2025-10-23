import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow-md" : "bg-transparent shadow-none"
      }`}
      style={{
        transitionProperty: "background-color, box-shadow, opacity, transform",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        <h1
          className={`text-lg sm:text-xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-black"
          }`}
        >
          Emporis Health Care
        </h1>

        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Vision", "Products", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition-colors duration-300 hover:text-teal-500 ${
                  scrolled ? "text-gray-700" : "text-black"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
