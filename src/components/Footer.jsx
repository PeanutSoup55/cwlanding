import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // React Icons

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column - Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold">CyberWise</h2>
            <p className="text-gray-400 mt-2">
              Protecting your digital future with hands-on cybersecurity training.
            </p>
          </div>

          {/* Center Column - Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#products" className="text-gray-400 hover:text-white">
              Products
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white">
              Pricing
            </a>
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>

          {/* Right Column - Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/PeanutSoup55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ericblanchette/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/PeanutSoup55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CyberWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
