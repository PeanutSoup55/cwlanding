import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCogs, FaFileCode, FaShieldAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';


const Documentation = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b border-gray-300"></div>
      <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Documentation</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/documentation/getting-started" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaUser />
              Getting Started
            </Link>
          </li>
          <li>
            <Link to="/documentation/dev-story" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaFileCode />
              Developer Story
            </Link>
          </li>
          <li>
            <Link to="/documentation/user-guides" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaCogs />
              User Guides
            </Link>
          </li>
          <li>
            <Link to="/documentation/security" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaShieldAlt />
              Security
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold">Welcome to the Documentation</h1>
        <p className="mt-4 text-lg text-gray-600">Here you can find helpful information about the platform, guides, and our development process.</p>
      </div>
    </div>
    <Footer />
    </div>

  );
};

export default Documentation;
