import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Lava Lamp Blobs as Background */}
      <div className="absolute top-[-25%] left-[-15%] w-[500px] h-[500px] bg-purple-300 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-1"></div>
      <div className="absolute top-[-25%] left-[5%] w-[460px] h-[460px] bg-yellow-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-2 animation-delay-2000"></div>
      <div className="absolute top-[-25%] left-[25%] w-[430px] h-[430px] bg-blue-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-3 animation-delay-4000"></div>
      <div className="absolute top-[-25%] left-[45%] w-[400px] h-[400px] bg-pink-500 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-4 animation-delay-1000"></div>
      <div className="absolute top-[-25%] left-[65%] w-[450px] h-[450px] bg-green-300 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-1 animation-delay-500"></div>
      <div className="absolute top-[-25%] right-[-15%] w-[500px] h-[500px] bg-red-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-2 animation-delay-1500"></div>

      {/* Navbar */}
      <Navbar/>

      <Hero/>

    </div>
  );
};

export default App;
