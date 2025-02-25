import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  BsTelegram,
  BsFacebook,
  BsTiktok,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

function CallToAction() {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Ready to Take Your Brand to the Next Level?
      </h2>
      <p className="text-gray-600 mb-6">
        Get expert insights and strategies tailored to your business.
      </p>
      <Link
        to="/contact"
        className="bg-brandPrimary text-white px-6 py-3 rounded-lg font-medium hover:bg-brandPrimaryDark transition"
      >
        Get a Demo →
      </Link>
    </div>
  );
}

function CustomFooter() {
  const navigate = useNavigate();

  // Handle smooth scroll after navigating to home
  const handleScrollToSection = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // Ensure we're on the homepage first
    }
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70, // Adjust for navbar height
      });
    }, 300); // Allow enough time for React Router to process navigation
  };

  return (
    <>
      <CallToAction />
      <footer className="bg-neutralSilver py-10 mt-20 shadow-lg">
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand Name */}
            <div className="text-2xl font-bold text-gray-800">Kaptan</div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-neutralDGrey text-sm font-medium">
              <button
                onClick={() => handleScrollToSection("about")}
                className="hover:text-brandPrimary transition"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection("services")}
                className="hover:text-brandPrimary transition"
              >
                Services
              </button>
              <Link to="/contact" className="hover:text-brandPrimary transition">
                Contact Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl text-neutralGrey">
              <a
                href="https://www.linkedin.com/company/kaptan-ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPrimary transition"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://t.me/kaptan_ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPrimary transition"
              >
                <BsTelegram />
              </a>
              <a
                href="https://www.tiktok.com/@kaptan.marketing.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPrimary transition"
              >
                <BsTiktok />
              </a>
              <a
                href="https://www.instagram.com/kaptan_ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPrimary transition"
              >
                <BsInstagram />
              </a>
              <a
                href="https://web.facebook.com/kaptan.marketing.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPrimary transition"
              >
                <BsFacebook />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutralGrey my-6"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-neutralGrey">
            &copy; {new Date().getFullYear()} Kaptan Marketing. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default CustomFooter;
