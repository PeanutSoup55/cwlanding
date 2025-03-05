import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaUser, FaEnvelope, FaPaperPlane, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ContentForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle the submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setStatus("Thank you for your message! We'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
        },
        (error) => {
          console.log("Error sending message:", error.text);
          setStatus("Sorry, there was an issue sending your message. Please try again.");
        }
      );
  };

  // State for toggling FAQ visibility
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index); // Toggle between showing and hiding answers
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Blobs */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        {/* Left Circular Blob */}
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava"></div>

        {/* Right Circular Blob */}
        <div className="absolute top-[20%] left-[45%] w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-lava animation-delay-2000"></div>
      </div>

      {/* Content */}
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 flex space-x-16 mt-40">
        {/* FAQ Section */}
        <div className="w-1/3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="flex flex-col items-start gap-2 cursor-pointer">
              <div
                className="flex items-center gap-2"
                onClick={() => toggleFAQ(1)}
              >
                <FaChevronDown
                  className={`text-gray-600 ${activeFAQ === 1 ? "rotate-180" : ""} transition-transform`}
                />
                <p className="text-lg font-medium text-gray-800">What is the duration of the course?</p>
              </div>
              {activeFAQ === 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}  // Add exit animation for closing
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-600 text-sm"
                >
                  <p>The course duration is approximately 6 weeks with a self-paced structure.</p>
                </motion.div>
              )}
            </div>

            {/* Question 2 */}
            <div className="flex flex-col items-start gap-2 cursor-pointer">
              <div
                className="flex items-center gap-2"
                onClick={() => toggleFAQ(2)}
              >
                <FaChevronDown
                  className={`text-gray-600 ${activeFAQ === 2 ? "rotate-180" : ""} transition-transform`}
                />
                <p className="text-lg font-medium text-gray-800">Do I need prior knowledge of cybersecurity?</p>
              </div>
              {activeFAQ === 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}  // Add exit animation for closing
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-600 text-sm"
                >
                  <p>No, the course is designed for beginners, and we cover the fundamentals in the first few lessons.</p>
                </motion.div>
              )}
            </div>

            {/* Question 3 */}
            <div className="flex flex-col items-start gap-2 cursor-pointer">
              <div
                className="flex items-center gap-2"
                onClick={() => toggleFAQ(3)}
              >
                <FaChevronDown
                  className={`text-gray-600 ${activeFAQ === 3 ? "rotate-180" : ""} transition-transform`}
                />
                <p className="text-lg font-medium text-gray-800">Can I access the course after completion?</p>
              </div>
              {activeFAQ === 3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}  // Add exit animation for closing
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-gray-600 text-sm"
                >
                  <p>Yes, you will have lifetime access to the course materials and future updates.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-2/3 bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative flex items-center">
              <FaUser className="absolute left-4 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative flex items-center">
              <FaPaperPlane className="absolute left-4 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-10 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                rows="5"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>

          {/* Submission Status */}
          {status && (
            <div className="mt-4 text-center text-lg font-medium text-gray-800">
              {status}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContentForm;
