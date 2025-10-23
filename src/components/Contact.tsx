import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_SERVICE_ID; // Get from emailjs.com
      const templateId = import.meta.env.VITE_TEMPLATE_ID; // Get from emailjs.com
      const publicKey = import.meta.env.VITE_PUBLIC_KEY; // Get from emailjs.com

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: import.meta.env.VITE_TO_EMAIL,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Show success toast
      setShowToast(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-700 mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Have questions about our products or services? We'd love to hear
                from you. Send us a message and we'll respond as soon as
                possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-cyan-600 text-xl mr-3">📍</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">
                    Emporis Health Care
                    <br />
                    Kochi, Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-cyan-600 text-xl mr-3">📧</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:info@emporishealthcare.com"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    info@emporishealthcare.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex gap-4 text-cyan-600 text-2xl">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-cyan-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-cyan-700 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-cyan-700 transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
  <div className="fixed bottom-6 right-6 bg-cyan-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 animate-slideIn z-50">
          <span className="text-2xl">✓</span>
          <span className="font-medium">Message sent successfully!</span>
          <div className="absolute bottom-0 left-0 h-1 bg-cyan-400 animate-shrink"></div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-shrink {
          animation: shrink 3s linear;
        }
      `}</style>
    </section>
  );
};

export default Contact;
