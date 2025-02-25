import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactImage from "../assets/contact.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        "service_wxf68vd", // Replace with your Email.js Service ID
        "template_8hyyw07", // Replace with your Email.js Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "F_aj1BBoIdtDPb3kU" // Replace with your Email.js Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-lg w-full md:w-1/2">
        <h1 className="text-4xl font-extrabold text-brandPrimary text-center mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We’d love to hear from you! Send us a message and let’s connect.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-center gap-4">
            <FaPhone className="text-brandPrimary text-2xl" />
            <span className="text-gray-800 text-lg font-medium">+251 983 757 991</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-brandPrimary text-2xl" />
            <span className="text-gray-800 text-lg font-medium">abdella.amin19@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-brandPrimary text-2xl" />
            <span className="text-gray-800 text-lg font-medium">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPrimary"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPrimary"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPrimary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brandPrimary to-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:scale-105 transform transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success or Error Message */}
          {success && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-600 text-center mt-4">Failed to send message. Try again.</p>}
        </form>
      </div>

      {/* Contact Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={ContactImage}
          alt="Contact Us"
          className="w-3/4 md:w-full h-auto max-w-sm md:max-w-lg mx-auto"
        />
      </div>
    </div>
  );
}

export default Contact;
