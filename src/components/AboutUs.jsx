import React from "react";
import Navbar from "./Navbar";  // Make sure you have this imported
import Footer from "./Footer";  // Make sure you have this imported
import stClairImage from "../assets/stclair.png"; // Example Image - Replace with actual image

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Background Art */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-64">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-4xl text-white font-semibold">Our Story</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50 flex-grow">
        {/* First Section */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Journey at St. Clair College</h2>
            <p className="text-lg text-gray-600">
              We met at St. Clair College while studying in the cybersecurity program. 
              Our shared passion for the tech industry brought us together, and it was here 
              that we realized we could achieve something big together.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={stClairImage} alt="St. Clair College" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Second Section */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-16">
          <div className="lg:w-1/2 px-4">
            <img src={stClairImage} alt="Tech Passion" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">A Shared Passion for the Tech Industry</h2>
            <p className="text-lg text-gray-600">
              Our passion for technology and innovation fueled our drive. We realized 
              that we had the skills and knowledge to help companies around the world secure their systems.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Turning Passion Into Action</h2>
            <p className="text-lg text-gray-600">
              With a common goal in mind, we decided to take the plunge and build a company that would 
              share our knowledge and expertise to help other companies enhance their cybersecurity practices.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={stClairImage} alt="Building a company" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Fourth Section */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-16">
          <div className="lg:w-1/2 px-4">
            <img src={stClairImage} alt="Over 400 hours" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left px-4">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Over 400 Hours of Work</h2>
            <p className="text-lg text-gray-600">
              The project was no small feat. Together, we invested over 400 hours into bringing our vision 
              to life, creating a high-quality product that we are proud of.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
