import React from "react";
import Navbar from "./Navbar"; // Make sure you have this imported
import Footer from "./Footer"; // Make sure you have this imported
import founderImage1 from "../assets/founderImage1.jpg"; // Example Image 1
import founderImage2 from "../assets/founderImage2.jpg"; // Example Image 2
import founderImage3 from "../assets/founderImage3.jpg"; // Example Image 3
import founderImage4 from "../assets/founderImage4.jpg"; // Example Image 4
import founderImage5 from "../assets/group.jpg"; // Example Image 5

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-black h-[90vh] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${founderImage5})` }}  // Replace with your image path
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay to darken the image */}
        <div className="relative z-10 px-4">
          <h1 className="text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-2xl mb-8">From College to Colleagues to Company</p>
        </div>
      </div>


      {/* Founders' Short Stories */}
      {/* Founders Section */}
      <div className="max-w-5xl mx-auto py-16 space-y-20">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-20">
          {/* Founder 1 */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 px-4">
            <h3 className="text-4xl font-semibold text-gray-800">Founder Name 1</h3>
            <p className="text-md text-gray-500">Position in the Company</p> {/* Subtitle */}
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu urna, vel efficitur ante auctor ac.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={founderImage1} alt="Founder 1" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-20">
          {/* Founder 2 */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 px-4">
            <h3 className="text-4xl font-semibold text-gray-800">Founder Name 2</h3>
            <p className="text-md text-gray-500">Position in the Company</p> {/* Subtitle */}
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla odio. Integer suscipit fringilla.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={founderImage2} alt="Founder 2" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-20">
          {/* Founder 3 */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 px-4">
            <h3 className="text-4xl font-semibold text-gray-800">Founder Name 3</h3>
            <p className="text-md text-gray-500">Position in the Company</p> {/* Subtitle */}
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra mollis augue, vel dictum elit sagittis at.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={founderImage3} alt="Founder 3" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 mb-20">
          {/* Founder 4 */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 px-4">
            <h3 className="text-4xl font-semibold text-gray-800">Founder Name 4</h3>
            <p className="text-md text-gray-500">Position in the Company</p> {/* Subtitle */}
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ligula sed tortor dictum, nec dignissim lorem.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img src={founderImage4} alt="Founder 4" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>


      {/* Our Values Section */}
      <div className="bg-white py-16 mb-40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Values</h2>
          <ul className="space-y-6 text-lg text-gray-600">
            <li className="flex items-center">
              <span className="mr-4 text-blue-500">✔️</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-blue-500">✔️</span> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-blue-500">✔️</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-blue-500">✔️</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
