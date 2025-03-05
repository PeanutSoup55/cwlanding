import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Two Large Circular Blobs Behind Pricing Cards */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {/* Left Circular Blob */}
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava"></div>

        {/* Right Circular Blob */}
        <div className="absolute top-[20%] left-[45%] w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow items-center justify-center px-4 max-h-screen">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Pricing Plans
        </h1>
        <p className="max-w-3xl text-xl text-center text-gray-600 mt-4 mb-10">
          Choose a plan that fits your needs. Whether you're just starting or
          looking to deepen your knowledge, we have a course for you.
        </p>

        {/* Pricing Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl ">
          <motion.div 
          initial={{y: 0, scale: 1}}
          whileHover={{y: -5, scale: 1.02 }}
          transition={{ duration: .3 }}
          className="p-6 bg-white/40 shadow-lg rounded-lg flex flex-col items-center relative z-10 ">
            <h2 className="text-3xl font-semibold text-center mt-4">Free Trial</h2>
            <p className="text-center text-xl text-gray-500 mt-2">$0.00</p>
            <ul className="mt-4 text-gray-600 text-center space-y-2">
              <li>Access to the first two lessons</li>
            </ul>
            <a
            href="https://buy.stripe.com/test_5kA8z8dje1fddmE144"  // Stripe Checkout session URL
            className="mt-6 text-white bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
            >
            Start Now
            </a>
          </motion.div>

          <motion.div 
          initial={{y: 0, scale: 1}}
          whileHover={{y: -5, scale: 1.02 }}
          transition={{ duration: .3 }}
          className="relative p-6 bg-white/40 shadow-lg rounded-lg flex flex-col items-center border-4 border-blue-500">
            <div className="absolute top-[-16px] bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2">
              ✨ Most Popular ✨
            </div>

            <h2 className="text-3xl font-semibold text-center mt-4">Basic Plan</h2>
            <p className="text-center text-xl text-gray-500 mt-2">$199.99</p>
            
            <ul className="mt-4 text-gray-600 text-center space-y-2">
              <li>Access to basic course materials</li>
              <li>1 month of support</li>
              <li>Basic Course completion certificate</li>
            </ul>

            <a
              href="https://buy.stripe.com/test_eVa4iS1Aw8HFciA3cf"  // Stripe Checkout session URL
              className="mt-6 text-white bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
            >
              Start Now
            </a>
          </motion.div>



          {/* Pro Plan */}
          <motion.div 
          initial={{y: 0, scale: 1}}
          whileHover={{y: -5, scale: 1.02 }}
          transition={{ duration: .3 }}
          className="p-6 bg-white/40 shadow-lg rounded-lg flex flex-col items-center relative z-10">
            <h2 className="text-3xl font-semibold text-center mt-4">Pro Plan</h2>
            <p className="text-center text-xl text-gray-500 mt-2">$399.99</p>
            <ul className="mt-4 text-gray-600 text-center space-y-2">
              <li>Access to all course materials</li>
              <li>6 months of support</li>
              <li>Priority assistance</li>
              <li>Basic Course completion certificate</li>
              <li>Professional Course completion certificate</li>
            </ul>
            <a
              href="https://buy.stripe.com/test_cN2g1Acfa1fddmE4gh"  // Stripe Checkout session URL
              className="mt-6 text-white bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
            >
              Start Now
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
          initial={{y: 0, scale: 1}}
          whileHover={{y: -5, scale: 1.02 }}
          transition={{ duration: .3 }}
          className="p-6 bg-white/40 shadow-lg rounded-lg flex flex-col items-center relative z-10">
            <h2 className="text-3xl font-semibold text-center mt-4">Premium Plan</h2>
            <p className="text-center text-xl text-gray-500 mt-2">$599.99</p>
            <ul className="mt-4 text-gray-600 text-center space-y-2">
              <li>Full course access</li>
              <li>Lifetime support</li>
              <li>Priority assistance, ensuring faster response times and higher support priority over other plans</li>
              <li>Course completion certificate</li>
              <li>Basic Course completion certificate</li>
            </ul>
            <a
              href="https://buy.stripe.com/test_7sIbLk2EA0b91DWdQS"  // Stripe Checkout session URL
              className="mt-6 text-white bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
            >
              Start Now
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
