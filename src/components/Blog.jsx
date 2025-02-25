import React, { useState } from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

function Blog() {
  const blogs = [
    {
      id: 1,
      image: pic1,
      title: "Maximizing Your Brand’s Online Presence",
      shortDescription: "Discover how strategic social media management can help your brand grow.",
      fullDescription: "Discover how strategic social media management can help your brand grow. We explore data-driven approaches that maximize engagement and improve brand positioning across platforms. Learn how to use audience insights to drive engagement and customer loyalty.",
    },
    {
      id: 2,
      image: pic2,
      title: "How to Build an Engaging Personal Brand",
      shortDescription: "Tips and insights on creating a strong, memorable personal brand.",
      fullDescription: "Tips and insights on creating a strong, memorable personal brand. Learn how to craft your brand story, establish authority, and build trust with your audience. Discover the secrets of thought leadership and positioning yourself as an expert in your field.",
    },
    {
      id: 3,
      image: pic3,
      title: "E-Commerce Marketing: Boost Your Sales",
      shortDescription: "Explore data-driven strategies to increase your online store’s conversions.",
      fullDescription: "Explore data-driven strategies to increase your online store’s conversions. From SEO techniques to customer retention hacks, find out how to optimize your sales funnel. Learn how to create personalized experiences that drive higher engagement and repeat customers.",
    },
  ];

  // State to track which blog post is expanded
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="md:w-3/4 lg:w-1/2 mx-auto text-center mb-10">
        <h2 className="text-4xl text-gray-800 font-semibold mb-3">
          Latest Insights from Kaptan Marketing
        </h2>
        <p className="text-gray-500">
          Stay updated with our expert marketing tips and strategies.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>

              {/* Show short text by default and full text if expanded */}
              <p className="text-gray-600 mb-4">
                {expandedId === blog.id ? blog.fullDescription : blog.shortDescription}
              </p>

              <button
                onClick={() => setExpandedId(expandedId === blog.id ? null : blog.id)}
                className="text-brandPrimary font-semibold hover:underline"
              >
                {expandedId === blog.id ? "Read Less ↑" : "Read More →"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
