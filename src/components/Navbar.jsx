import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-4 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-black font-semibold text-xl">
            CW
        </div>
        <div className="space-x-8 text-black">
            <a href="#products" className="hover:text-black">Products</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#documentation" className="hover:text-black">Documentation</a>
            <a href="#about" className="hover:text-black">About Us</a>
            <a href="#contact" className="hover:text-black">Contact</a>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
