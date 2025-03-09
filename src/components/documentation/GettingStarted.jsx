import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCogs, FaFileCode, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="border-b border-gray-300"></div>

      {/* Main Content Wrapper */}
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
                <FaFileCode /> About This Site
              </Link>
            </li>
          </ul>
        </div>

        {/* Documentation Content */}
        <div className="flex-1 p-10 bg-gray-50 font-sans text-gray-800">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Getting Started with CyberWise
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Welcome to CyberWise! This guide will walk you through everything you need to know to navigate the platform, enroll in courses, and successfully complete your cybersecurity training.
          </p>

          {/* Navigation Section */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-blue-500 pl-3">
            Navigating the Platform
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li><strong>Homepage:</strong> Overview of the course and key features.</li>
            <li><strong>Pricing:</strong> Choose a plan and subscribe.</li>
            <li><strong>Dashboard:</strong> View your enrolled courses and progress.</li>
            <li><strong>Course Content:</strong> Access lessons, quizzes, and exams.</li>
            <li><strong>Support:</strong> Contact customer support for assistance.</li>
          </ul>

          {/* Payment Section */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-green-500 pl-3">
            Making a Payment
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Select a plan on the <strong>Pricing</strong> page.</li>
            <li>Click <strong>Start Now</strong> to proceed to Stripe checkout.</li>
            <li>Enter your payment details and confirm your purchase.</li>
            <li>Once payment is successful, your account will be upgraded automatically.</li>
          </ul>

          {/* Account Creation */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-purple-500 pl-3">
            Creating an Account
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Click <strong>Sign Up</strong> in the top-right corner.</li>
            <li>Enter your email, create a password, and confirm your details.</li>
            <li>Check your email for a verification link and activate your account.</li>
          </ul>

          {/* Logging In */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-yellow-500 pl-3">
            Logging In
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Click <strong>Login</strong> at the top-right of the homepage.</li>
            <li>Enter your registered email and password.</li>
            <li>Click <strong>Sign In</strong> to access your dashboard.</li>
          </ul>

          {/* Accessing Course Content */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-red-500 pl-3">
            Accessing Your Course
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Go to the <strong>Dashboard</strong>.</li>
            <li>Select your enrolled course.</li>
            <li>Click on a lesson to begin learning.</li>
          </ul>

          {/* Completing a Lesson */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-indigo-500 pl-3">
            Completing a Lesson
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Go through the learning materials.</li>
            <li>Mark the lesson as <strong>Complete</strong> once done.</li>
            <li>Progress is saved automatically.</li>
          </ul>

          {/* Taking a Quiz */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-teal-500 pl-3">
            Taking a Quiz
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Click on the <strong>Quiz</strong> tab after finishing a lesson.</li>
            <li>Answer the multiple-choice and practical questions.</li>
            <li>Submit your answers and review your score.</li>
          </ul>

          {/* Completing the Course */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-orange-500 pl-3">
            Completing the Course
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Ensure all modules are marked as complete.</li>
            <li>Take the <strong>Final Exam</strong> under the "Exam" tab.</li>
            <li>Submit your exam for evaluation.</li>
          </ul>

          {/* Earning Your Certificate */}
          <h2 className="text-3xl font-bold mt-10 text-gray-900 border-l-4 border-pink-500 pl-3">
            Earning Your Certificate
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700 text-lg">
            <li>Your completion certificate will be available for download.</li>
            <li>You can share it on LinkedIn or add it to your resume.</li>
          </ul>
        </div>
      </div>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
};

export default Documentation;
