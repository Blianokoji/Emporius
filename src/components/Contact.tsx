import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/emporis_logo.webp";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-cyan-50 fade-up p-6 md:p-10">
      <div className="relative">
        {/* Top Row: Logo (left) and Company Name (right) */}
        <div className="flex items-center justify-between gap-6">
          <img src={logo} alt="Emporis logo" className="w-16 h-16 object-contain" />
          <div className="text-xl md:text-2xl font-semibold text-gray-800">Emporis Health Care</div>
        </div>

        {/* Main content: address + email (single column on mobile, left column on md) */}
        <div className="mt-6 max-w-3xl">
          <hr className="border-gray-200 mb-4" />
          <h3 className="text-2xl font-bold text-cyan-700 mb-3">Contact With Us!</h3>
          <div className="text-gray-700 space-y-2">
            <div className="font-semibold text-gray-800">Address</div>
            <p>Door No: 32/422, Rajeev Nagar Road, Puthupallypuram</p>
            <p>Edappally, Kochi-682024, Kerala, India</p>
          </div>
          <div className="mt-4">
            <div className="font-semibold text-gray-800">Email</div>
            <a href="mailto:info@emporishealthcare.com" className="text-cyan-600 hover:text-cyan-700">
              info@emporishealthcare.com
            </a>
          </div>
        </div>

        {/* Follow Us: centered on mobile, bottom-right on md+ */}
        <div className="w-full mt-8 flex justify-center md:justify-end md:absolute md:bottom-0 md:right-0">
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-sm font-semibold text-gray-800 mr-2">Follow Us</span>
            <a href="#" aria-label="LinkedIn" className="text-cyan-600 hover:text-cyan-700 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="text-cyan-600 hover:text-cyan-700 transition-colors text-2xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="text-cyan-600 hover:text-cyan-700 transition-colors text-2xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
