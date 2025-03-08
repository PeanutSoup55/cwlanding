// PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const PricingCard = ({ title, price, features, link, popular }) => {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className={`relative p-6 bg-white/40 shadow-lg rounded-lg flex flex-col items-center ${popular ? 'border-4 border-blue-500' : ''}`}
    >
      {popular && (
        <div className="absolute top-[-16px] bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2">
          ✨ Most Popular ✨
        </div>
      )}

      <h2 className="text-3xl font-semibold text-center mt-4">{title}</h2>
      <p className="text-center text-xl text-gray-500 mt-2">{price}</p>

      <ul className="mt-4 mb-4 text-gray-600 text-center space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <a
        href={link}
        className="mt-auto text-white bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
      >
        Start Now
      </a>
    </motion.div>
  );
};

export default PricingCard;
