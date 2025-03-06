import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCogs, FaFileCode, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';


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
            <Link to="/started" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaUser />
              Getting Started
            </Link>
          </li>
          <li>
            <Link to="/story" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaFileCode />
              Developer Story
            </Link>
          </li>
          <li>
            <Link to="/guides" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaCogs />
              User Guides
            </Link>
          </li>
          <li>
            <Link to="/security" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
              <FaShieldAlt />
              Security
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-4xl font-bold text-blue-700">Getting Started</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to CyberWise! Follow this guide to set up your account and start learning.
      </p>

      {/* Step 1: Account Setup */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Step 1: Create an Account</h2>
        <p className="mt-2 text-gray-600">
          To access the course, you need to sign up. Visit the <span className="font-semibold">Pricing</span> page, choose a plan, and complete your purchase.
        </p>
      </div>

      {/* Step 2: Login */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Step 2: Logging In</h2>
        <p className="mt-2 text-gray-600">
          After payment, you’ll receive an email with login credentials. Use them to access your course on the <span className="font-semibold">Login</span> page.
        </p>
      </div>

      {/* Step 3: Navigating the Course */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Step 3: Navigating the Course</h2>
        <p className="mt-2 text-gray-600">
          Inside the dashboard, you’ll find modules covering various cybersecurity topics. Click a module to start learning.
        </p>
      </div>

      {/* Step 4: Getting Help */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Step 4: Need Assistance?</h2>
        <p className="mt-2 text-gray-600">
          If you have any issues, visit our <span className="font-semibold">FAQ</span> section or <span className="font-semibold">Contact Support</span>.
        </p>
      </div>
    </div>
    </div>
    <Footer />
    </div>

  );
};

export default Documentation;
