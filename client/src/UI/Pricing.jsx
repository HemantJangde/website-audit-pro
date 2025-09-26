import React from "react";
import { motion } from "framer-motion";

// Reusable Card Component
const PricingCard = ({ title, price, features, badge }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(250,204,21,0.3)" }}
      className="card w-72 bg-white rounded-2xl shadow-md border border-yellow-200"
    >
      <div className="card-body">
        {badge && (
          <span className="badge badge-warning badge-xs">{badge}</span>
        )}
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-2xl font-bold text-yellow-700">{title}</h2>
          <span className="text-xl font-semibold text-yellow-800">{price}</span>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-yellow-900/90">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center ${feature.disabled ? "opacity-50" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 mr-2 flex-shrink-0 ${
                  feature.disabled ? "text-yellow-900/40" : "text-yellow-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className={feature.disabled ? "line-through" : ""}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-warning btn-block text-white hover:bg-yellow-600">
            Subscribe
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component with Three Cards
const Pricing = () => {
  const cardData = [
    {
      title: "Basic",
      price: "$9/mo",
      badge: null,
      features: [
        { name: "High-resolution image generation" },
        { name: "Customizable style templates" },
        { name: "Batch processing capabilities", disabled: true },
        { name: "AI-driven image enhancements", disabled: true },
      ],
    },
    {
      title: "Premium",
      price: "$29/mo",
      badge: "Most Popular",
      features: [
        { name: "High-resolution image generation" },
        { name: "Customizable style templates" },
        { name: "Batch processing capabilities" },
        { name: "AI-driven image enhancements" },
        { name: "Seamless cloud integration", disabled: true },
        { name: "Real-time collaboration tools", disabled: true },
      ],
    },
    {
      title: "Enterprise",
      price: "$49/mo",
      badge: null,
      features: [
        { name: "High-resolution image generation" },
        { name: "Customizable style templates" },
        { name: "Batch processing capabilities" },
        { name: "AI-driven image enhancements" },
        { name: "Seamless cloud integration" },
        { name: "Real-time collaboration tools" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-16 bg-yellow-50/20">
      {cardData.map((card, idx) => (
        <PricingCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default Pricing;
