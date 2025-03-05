import React, { useEffect, useState } from "react";
import ex from "../assets/WEB2.png"; // Desktop Image
import iphone from "../assets/iphone.png"; // Mobile Image
import TypingEffect from "./TypingEffect";
import { Link } from "react-router-dom";
import { FaLock, FaTools, FaChartBar } from "react-icons/fa";
import pep from '../assets/pep.jpg'
import Footer from "./Footer";
import { motion } from "framer-motion";

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
  const scrollEffect = Math.min(scrollY * 0.05, maxScroll);

  return (
    <div className="mt-70 relative min-h-screen bg-gray-50 overflow-auto flex flex-col items-center justify-center"> {/* Updated Hero Section to Center Content */}
      
      <h1 className="text-7xl font-bold text-center leading-normal bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <TypingEffect text={"Master Cybersecurity With CyberWise"} speed={70} />
      </h1>


      {/* Description */}
      <p className="max-w-4xl text-xl text-center text-gray-600 mt-4">
        Unlock your potential in the world of cybersecurity with our hands-on course designed to teach you the skills needed to protect vital systems and networks. Learn real-world techniques used by professionals to prevent data breaches, mitigate threats, and secure valuable information.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link to={"/pricing"}>Start Now →</Link>
        </button>
        <button className="px-6 py-3 text-blue-700 border-2 border-blue-700 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300">
          <Link to={"/contact"}>Contact Sales →</Link>
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
          className="absolute top-[5%] right-[-7%] w-[180px]"
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

      {/* Features Section */}
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .9 }}
      className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mb-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <FaLock className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Enhanced Security</h3>
          <p className="text-center text-gray-600 mt-2">
            Protect your data with state-of-the-art security measures, keeping everything safe from cyber threats.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <FaTools className="text-4xl text-yellow-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Advanced Tools</h3>
          <p className="text-center text-gray-600 mt-2">
            Use industry-leading tools and techniques to strengthen your understanding of network security.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
          <FaChartBar className="text-4xl text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Real-Time Analytics</h3>
          <p className="text-center text-gray-600 mt-2">
            Get actionable insights with real-time data to monitor and assess network performance and security.
          </p>
        </div>
      </motion.div>

      <div className="mt-32 mb-20 flex items-center justify-center gap-12 px-4">
        {/* Statistic Text */}
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .6 }}
        className="text-center max-w-lg">
          <h3 className="text-4xl font-semibold text-gray-800">10,000+ Students Trained</h3>
          <p className="text-xl text-gray-600 mt-4">
            Join a community of over 10,000 students who have already started their journey towards mastering cybersecurity with CyberWise.
          </p>
        </motion.div>

        {/* Statistic Image */}
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .6 }}
        className="w-[500px]   shadow-lg flex items-center justify-center">
          <img src={pep} alt="" />
          <p className="text-white text-4xl"></p> {/* Placeholder for the image */}
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hero;
