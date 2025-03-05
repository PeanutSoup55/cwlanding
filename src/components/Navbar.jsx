import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full bg-transparent py-4 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
    
        <button className="text-black font-semibold text-xl"><Link to={"/"}>CW</Link></button>
        <div className="space-x-8 text-black">
          <ul className="list-none flex gap-10">
              <li><Link to="/pricing" className="hover:text-blue-500 cursor-pointer">Pricing</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 cursor-pointer">Products</Link></li>
              <li><Link to="/documentation" className="hover:text-blue-500 cursor-pointer">Documentation</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 cursor-pointer">About us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
