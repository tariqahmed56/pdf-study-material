import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-blue-500 to-purple-500 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="/" className="text-3xl font-bold">
              EduHub
            </a>
            <p className="mt-2 text-sm text-gray-300">
              Empowering students to achieve success through quality learning resources.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-0 space-y-3 md:space-x-8 md:space-y-0">
            <a href="/about" className="hover:text-blue-500">
              About Us
            </a>
            <a href="/terms" className="hover:text-blue-500">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-blue-500">
              Contact Us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-300">
          &copy; 2025 EduHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
