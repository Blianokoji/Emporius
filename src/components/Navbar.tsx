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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-filter backdrop-blur-sm bg-opacity-10 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 lg:px-8 py-4">
        <h1
          className={`text-xl sm:text-xl md:text-xl font-bold mr-auto ${
            scrolled ? "text-teal-400" : "text-white drop-shadow-lg"
          }`}
        >
          Emporis Health Care
        </h1>
        <ul className={`hidden md:flex space-x-8`}>
          {["Home", "About", "Vision", "Products", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`hover:text-teal-500 ${
                  scrolled ? "text-slate-700" : "text-white drop-shadow-lg"
                } transition-colors`}
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
