// Pricing.jsx
import React from "react";
import Navbar from "./Navbar";
import PricingCard from "./PricingCard";  // Import the PricingCard component

const Pricing = () => {
  return (
    <div className="h-screen flex flex-col relative">
      <Navbar />

      {/* Two Large Circular Blobs Behind Pricing Cards */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {/* Left Circular Blob */}
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava lg:block hidden"></div>

        {/* Right Circular Blob */}
        <div className="absolute top-[20%] left-[45%] w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava animation-delay-2000 lg:block hidden"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow items-center justify-center px-4 ">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Pricing Plans
        </h1>
        <p className="max-w-3xl text-xl text-center text-gray-600 mt-4 mb-10">
          Choose a plan that fits your needs. Whether you're just starting or
          looking to deepen your knowledge, we have a course for you.
        </p>

        {/* Pricing Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl ">
          <PricingCard 
            title="Free Trial" 
            price="$0.00" 
            features={["Access to the first two lessons"]} 
            link="https://buy.stripe.com/test_5kA8z8dje1fddmE144"
          />

          <PricingCard 
            title="Basic Plan" 
            price="$199.99" 
            features={["Access to basic course materials", "1 month of support", "Basic Course completion certificate"]} 
            link="https://buy.stripe.com/test_eVa4iS1Aw8HFciA3cf"
            popular={true}
          />

          <PricingCard 
            title="Pro Plan" 
            price="$399.99" 
            features={["Full course materials", "6 months of support", "Priority assistance", "Professional Course completion certificate"]} 
            link="https://buy.stripe.com/test_cN2g1Acfa1fddmE4gh"
          />

          <PricingCard 
            title="Premium Plan" 
            price="$599.99" 
            features={["Full course access", "Lifetime support", "Priority assistance", "Professional course completion certificate", "Access to new future course material"]} 
            link="https://buy.stripe.com/test_7sIbLk2EA0b91DWdQS"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
