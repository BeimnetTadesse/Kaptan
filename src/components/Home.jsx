import React from "react";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

// Reusable Component INSIDE Home.js
const CarouselSlide = ({ image, title, highlight, description, buttonText }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="py-6 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-2 md:gap-6">
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={image} alt="Banner" className="md:max-w-3xl w-full h-auto object-contain" />
      </div>

      {/* Text */}
      <div className="md:w-1/2 text-left px-4 sm:px-6 md:px-8 ml-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900 leading-snug">
          {title} <span className="text-brandPrimary">{highlight}</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
        <button
          className="bg-brandPrimary text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition-all duration-300"
          onClick={() => navigate("/contact")} // Navigate to ContactUs page
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};


function Home() {
  return (
    <div className="bg-white">
      <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto min-h-screen h-screen flex items-center mt-2 md:mt-0">
        <Carousel className="w-full mx-auto">
          <CarouselSlide
            image={Banner1}
            title="We know what you want, and we do it"
            highlight="Brilliantly."
            description="Gain deeper insights into your audience and optimize your digital presence with data-driven social media marketing."
            buttonText="Contact Us"
          />

          <CarouselSlide
            image={Banner2}
            title="Elevate Your Brand with Smart"
            highlight="Social Media"
            description="At Kaptan, we craft results-driven digital marketing strategies to help your business stand out and grow."
            buttonText="Get Started Today"
          />

          <CarouselSlide
            image={Banner3}
            title="Data-Driven Marketing for Maximum"
            highlight="Impact"
            description="We leverage advanced analytics and AI-powered marketing strategies to amplify your brand's reach, enhance engagement, and drive results. Let’s shape your success together!"
            buttonText="💡 Work with Us"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
