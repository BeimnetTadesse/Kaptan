import React from "react";
import { FaRocket, FaChartLine, FaLightbulb } from "react-icons/fa";
import aboutImg from "../assets/About2.png";
import about2 from "../assets/About1.jpg";

function About() {
  return (
    <div>
      {/* About section */}
 
      <div id="about" className="px-6 lg:px-20 max-w-screen-2xl mx-auto my-16 pt-5 scroll-mt-15">

        <div className="md:w-10/12 mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={aboutImg}
              alt="About Kaptan Marketing"
              className="w-full h-auto max-w-md md:max-w-lg rounded-xl shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-neutralDGrey mb-6 leading-snug">
              About Us
            </h2>
            <p className="text-lg text-neutralGrey mb-8 leading-relaxed">
              At Kaptan Marketing, we don’t just create brands—we build
              experiences. Our team specializes in strategic branding, digital
              marketing, and web & app development to elevate businesses to the
              next level. We turn ideas into impact through creativity and
              innovation.
            </p>
            <button className="bg-brandPrimary text-white px-8 py-3 text-lg font-medium rounded-lg shadow-md hover:scale-105 transition transform"  
             onClick={() => window.open("https://linktr.ee/kaptan_ca", "_blank")}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Our Strengths Section */}
      <div className="px-6 lg:px-20 max-w-screen-2xl mx-auto py-20 bg-neutralSilver rounded-xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-neutralDGrey">
            Why Work With Us?
          </h3>
          <p className="text-lg text-neutralGrey mt-3 md:w-2/3 mx-auto">
            We are committed to providing innovative solutions, digital
            transformation, and branding excellence that drive measurable
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <FaRocket className="text-brandPrimary text-6xl mb-5" />
            <h4 className="text-xl font-semibold mb-3">Strategic Branding</h4>
            <p className="text-neutralGrey">
              We craft powerful brand identities that resonate with audiences
              and establish a lasting presence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <FaChartLine className="text-brandPrimary text-6xl mb-5" />
            <h4 className="text-xl font-semibold mb-3">Data-Driven Growth</h4>
            <p className="text-neutralGrey">
              Our marketing strategies are backed by analytics, ensuring
              measurable success for your business.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <FaLightbulb className="text-brandPrimary text-6xl mb-5" />
            <h4 className="text-xl font-semibold mb-3">Creative Innovation</h4>
            <p className="text-neutralGrey">
              We create cutting-edge digital solutions, from stunning websites
              to impactful marketing campaigns.
            </p>
          </div>
        </div>

        <p className="text-lg text-neutralGrey text-center mt-14">
          Your growth is our mission. Let’s redefine success—together.
        </p>
      </div>
    </div>
  );
}

export default About;
