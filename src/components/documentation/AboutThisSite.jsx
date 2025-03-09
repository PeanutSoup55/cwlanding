import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCogs, FaFileCode, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutThisSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="border-b border-gray-300"></div>
      <div className="flex flex-grow">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Documentation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/started" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaUser /> Getting Started
              </Link>
            </li>
            <li>
              <Link to="/guides" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaCogs /> User Guides
              </Link>
            </li>
            <li>
              <Link to="/security" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaShieldAlt /> Security
              </Link>
            </li>
            <li>
              <Link to="/about-site" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaFileCode/> About This Site
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-10 bg-gray-50 font-sans text-gray-800">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            CyberWise Security Course Website Documentation
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The CyberWise Security Course Website is an online platform designed to educate users about cybersecurity through interactive lessons and real-world simulations.
        </p>

        <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-blue-500 pl-3">
            Technologies Used
        </h2> 
        <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li><span className="font-semibold">Frontend:</span> React.js with Tailwind CSS and Framer Motion</li>
            <li><span className="font-semibold">Backend:</span> Laravel for API management and authentication</li>
            <li><span className="font-semibold">Database:</span> MySQL</li>
            <li><span className="font-semibold">Payment Processing:</span> Stripe</li>
            <li><span className="font-semibold">Email Service:</span> EmailJS</li>
            <li><span className="font-semibold">Hosting:</span> Vercel (Frontend), Cloud Server (Backend)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-green-500 pl-3">
            Development Time Frame
        </h2>
        <p className="mt-4 text-lg text-gray-700">Total Duration: <span className="font-semibold">2 weeks</span></p>
        <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li><strong>Week 1:</strong> UI design, authentication, payment integration</li>
            <li><strong>Week 2:</strong> Course management, contact form, documentation</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-purple-500 pl-3">
            Website Navigation
        </h2>
        <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li><strong>Homepage:</strong> Introduces the course, key features, CTA buttons</li>
            <li><strong>Pricing Page:</strong> Plan details, Stripe checkout</li>
            <li><strong>Contact Page:</strong> Inquiry form using EmailJS</li>
            <li><strong>Documentation Page:</strong> Sidebar navigation, FAQ, guides</li>
            <li><strong>Our Story Page:</strong> Background, founder stories</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Key Features
        </h2>
        <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>User Authentication with Laravel</li>
            <li>Stripe Payment Processing</li>
            <li>Responsive Design with Tailwind CSS</li>
            <li>Framer Motion Animations</li>
            <li>Interactive FAQ & Course Management</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-red-500 pl-3">
            Conclusion
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            This documentation provides an overview of the CyberWise Security Course Website, outlining its technologies, timeline, navigation, and key features.
        </p>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AboutThisSite;
