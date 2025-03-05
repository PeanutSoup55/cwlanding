import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      
      <Navbar />
      <Hero />

      {/* Blobs with pointer-events-none so they don’t block clicks */}
      <div className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px] bg-purple-300 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-1 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[5%] w-[460px] h-[460px] bg-yellow-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-2 animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[25%] w-[430px] h-[430px] bg-blue-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-3 animation-delay-4000 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[45%] w-[400px] h-[400px] bg-pink-500 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-4 animation-delay-1000 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[65%] w-[450px] h-[450px] bg-green-300 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-1 animation-delay-500 pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-15%] w-[500px] h-[500px] bg-red-400 mix-blend-multiply filter blur-2xl opacity-70 animate-lava-2 animation-delay-1500 pointer-events-none"></div>

    </div>
  );
};

export default App;

