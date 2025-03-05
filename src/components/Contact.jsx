import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

  return (
    <div>
      <Navbar />
          <div className="max-w-3xl mx-auto p-4 bg-gray-50 rounded-lg shadow-lg mt-40">
      
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Submission Status */}
      {status && (
        <div className="mt-4 text-center text-lg font-medium text-gray-800">
          {status}
        </div>
      )}
    </div>
    <Footer/>
    </div>

  );
};

export default ContentForm;
