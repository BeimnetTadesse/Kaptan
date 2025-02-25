import React from "react";
import Comp1 from "../assets/Comp1.png";
import Comp2 from "../assets/Comp2.png";
import Comp3 from "../assets/Comp3.png";
import Comp4 from "../assets/Comp4.png";
import Comp5 from "../assets/Comp5.png";
import { FaChartPie, FaUsers, FaStore } from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      title: "Small & Medium Businesses",
      description:
        "We create targeted social media strategies to help you attract and retain customers.",
      icon: <FaChartPie className="text-brandPrimary text-5xl mb-4" />,
    },
    {
      id: 2,
      title: "Personal Brands & Influencers",
      description:
        "Our branding solutions help you stand out and build a loyal audience online.",
      icon: <FaUsers className="text-brandPrimary text-5xl mb-4" />,
    },
    {
      id: 3,
      title: "E-Commerce & Startups",
      description:
        "We provide data-driven digital marketing to boost your sales and online visibility.",
      icon: <FaStore className="text-brandPrimary text-5xl mb-4" />,
    },
  ];

  const clients = [
    { id: 1, name: "Albab", image: Comp1 },
    { id: 2, name: "Qemer", image: Comp2 },
    { id: 3, name: "Thrills", image: Comp3 },
    { id: 4, name: "Umyes", image: Comp4 },
    { id: 5, name: "CareShare", image: Comp5 },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      {/* Clients Section */}
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some fortune clients
        </p>

        {/* Client logos with names & hover effect (text only changes color, image gets slightly bigger) */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 pb-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col items-center transition-all duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-16 transition-all duration-300 group-hover:scale-150" 
              />
              <p className="mt-4 text-neutralDGrey font-medium text-lg transition-all duration-300 group-hover:text-brandPrimary">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-neutralSilver py-24 px-5 ">
        <div className="md:w-1/2 mx-auto text-center mb-10">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
            Manage Your Brand Presence Seamlessly
          </h2>
          <p className="text-neutralGrey">Who is Kaptan Marketing for?</p>
        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center bg-white hover:bg-[#E5F3FF] hover:text-white hover:shadow-lg"
            >
              <div className="transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-3 group-hover:text-white">
                {service.title}
              </h4>
              <p className="text-lg text-neutralGrey group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
