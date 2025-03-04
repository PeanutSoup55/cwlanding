import React from 'react'

const Hero = () => {
  return (
<div className="h-screen flex flex-col items-center justify-center px-4">
  {/* Gradient applied to h1 */}
  <h1 className="text-7xl font-bold text-center bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Master Cybersecurity With CyberWise
  </h1>

  <p className="max-w-4xl text-xl text-center text-gray-600 mt-4">
    Unlock your potential in the world of cybersecurity with our hands-on course designed to teach you the skills needed to protect vital systems and networks. Learn real-world techniques used by professionals to prevent data breaches, mitigate threats, and secure valuable information.
  </p>
</div>


  )
}

export default Hero
