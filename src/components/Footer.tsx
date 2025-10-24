import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        {/* Top row: big title + back-to-top button */}
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">Emporis Health Care</h3>
          <a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 hover:bg-cyan-500 transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5l-7 7m7-7l7 7m-7-7v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Bottom meta */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p>© 2025 Emporis Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
