import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/emporis_logo.png";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-cyan-50 fade-up p-6 md:p-10">
          {/* Top Row: Logo (left) and Company Name (right) */}
          <div className="flex items-center justify-between gap-6">
            <img src={logo} alt="Emporis logo" className="w-16 h-16 object-contain" />
            <div className="text-xl md:text-2xl font-semibold text-gray-800">Emporis Health Care</div>
          </div>

          {/* Two Columns Below: Left has line + address + email, Right has socials */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Left Column */}
            <div>
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

            {/* Right Column */}
            <div>
              <div className="font-semibold text-gray-800 mb-3">Follow Us</div>
              <div className="flex gap-4 text-cyan-600 text-2xl">
                <a href="#" aria-label="LinkedIn" className="hover:text-cyan-700 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-cyan-700 transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-cyan-700 transition-colors">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        
    </section>
  );
};

export default Contact;
