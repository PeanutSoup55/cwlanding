import React, { useEffect, useState } from "react";
import ex from "../assets/WEB2.png"; // Desktop Image
import iphone from "../assets/iphone.png"; // Mobile Image
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Limit the scroll effect (for example, stop at 150px)
  const maxScroll = 150;
  const scrollEffect = Math.min(scrollY * 0.1, maxScroll);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 mt-80">
      {/* Header Text */}
      <h1 className="text-7xl font-bold text-center bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <TypingEffect text={"Master Cybersecurity With CyberWise"} speed={30} />
      </h1>

      {/* Description */}
      <p className="max-w-4xl text-xl text-center text-gray-600 mt-4">
        Unlock your potential in the world of cybersecurity with our hands-on course designed to teach you the skills needed to protect vital systems and networks. Learn real-world techniques used by professionals to prevent data breaches, mitigate threats, and secure valuable information.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Start Now →
        </button>
        <button className="px-6 py-3 text-blue-700 border-2 border-blue-700 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300">
          Contact Sales →
        </button>
      </div>

      {/* App Preview Section */}
      <div className="relative mt-40 flex items-center justify-center">
        {/* Desktop Preview (Image) */}
        <div className="h-[550px] w-[900px]">
          <img
            src={ex}
            alt="Desktop App Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Preview with Scroll Effect */}
        <div
          className="absolute right-[-10%] w-[220px]"
          style={{
            transform: `translateY(${scrollEffect}px)`, // Apply the limited scroll effect
          }}
        >
          <img
            src={iphone}
            alt="Iphone App Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
