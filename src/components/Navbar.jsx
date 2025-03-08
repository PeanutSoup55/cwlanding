import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import cw from "../assets/cw.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full bg-transparent py-4 border-b-0 border-transparent transition-all duration-200 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-500/50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button className="text-black font-semibold text-xl">
          <Link to={"/"}>
            <img src={cw} alt="CW" className="h-16 w-auto" />
          </Link>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black">
          <ul className="list-none flex gap-10">
            <li><Link to="/pricing" className="hover:text-blue-500 cursor-pointer">Pricing</Link></li>
            <li><Link to="/documentation" className="hover:text-blue-500 cursor-pointer">Documentation</Link></li>
            <li><Link to="/our-story" className="hover:text-blue-500 cursor-pointer">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 cursor-pointer">Contact</Link></li>
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

