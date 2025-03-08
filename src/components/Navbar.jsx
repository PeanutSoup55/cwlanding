import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import cw from "../assets/cw.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 w-full bg-transparent py-4 z-50 border-b-0 border-transparent transition-all duration-200 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-500/50">
      <div className="container max-w-[90%] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-3 relative z-50 backdrop-blur-md bg-white/30 px-6 py-3 rounded-xl shadow-lg border border-white/40">
          <img src={cw} alt="CW" className="h-16 w-auto" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CyberWise
          </h1>
        </Link>




        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex gap-8 text-lg font-medium text-gray-900">
            <li>
              <Link to="/pricing" className="relative group">
                Pricing
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/documentation" className="relative group">
                Documentation
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/our-story" className="relative group">
                Our Story
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="relative group">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><Link to="/pricing" className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link to="/documentation" className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>Documentation</Link></li>
            <li><Link to="/our-story" className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

