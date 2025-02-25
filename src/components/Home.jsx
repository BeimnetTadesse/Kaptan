import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

const banners = [
  {
    image: Banner1,
    title: "We know what you want, and we do it",
    highlight: "Brilliantly.",
    description:
      "Gain deeper insights into your audience and optimize your digital presence with data-driven social media marketing.",
    buttonText: "Contact Us",
  },
  {
    image: Banner2,
    title: "Elevate Your Brand with Smart",
    highlight: "Social Media",
    description:
      "At Kaptan, we craft results-driven digital marketing strategies to help your business stand out and grow.",
    buttonText: "Get Started Today",
  },
  {
    image: Banner3,
    title: "Data-Driven Marketing for Maximum",
    highlight: "Impact",
    description:
      "We leverage advanced analytics and AI-powered marketing strategies to amplify your brand's reach, enhance engagement, and drive results. Let’s shape your success together!",
    buttonText: "💡 Work with Us",
  },
];

function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle keyboard navigation (Arrow Right)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-white">
      <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto min-h-screen flex flex-col items-center justify-center mt-0 md:mt-[-40px] relative">
        
        {/* Banner Content */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 relative w-full">
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src={banners[activeIndex].image}
              alt="Banner"
              className="md:max-w-4xl w-full h-auto object-contain"
            />
            {/* Right Arrow - Positioned next to the image in larger screens, lower in smaller screens */}
            <button
              onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length)}
              className="bg-gray-200 text-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md hover:bg-gray-300 transition-all duration-300 opacity-60 md:opacity-80 md:absolute md:right-[-50px] md:top-1/2 md:transform md:-translate-y-1/2 sm:bottom-[-40px]"
            >
              →
            </button>
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-left px-6 sm:px-8 md:px-20 relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              {banners[activeIndex].title}{" "}
              <span className="text-brandPrimary">{banners[activeIndex].highlight}</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-4">
              {banners[activeIndex].description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 relative">
              <button
                className="bg-brandPrimary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                {banners[activeIndex].buttonText}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
