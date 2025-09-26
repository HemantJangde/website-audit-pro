import React from "react";
import { motion } from "framer-motion";

export default function Status() {
  const statsData = [
    {
      title: "Downloads",
      value: "31K",
      desc: "Jan 1st - Feb 1st",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "New Users",
      value: "4,200",
      desc: "↗︎ 400 (22%)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "New Registers",
      value: "1,200",
      desc: "↘︎ 90 (14%)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-16 bg-yellow-50/20">
      {statsData.map((stat, idx) => (
        <motion.div
          key={idx}
          className="stat bg-white rounded-2xl shadow-md border border-yellow-200 p-6 w-64 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(250,204,21,0.3)" }}
        >
          <div className="stat-figure text-yellow-500 mb-2">{stat.icon}</div>
          <div className="stat-title text-yellow-700 font-semibold">{stat.title}</div>
          <div className="stat-value text-yellow-800 text-2xl font-bold">{stat.value}</div>
          <div className="stat-desc text-yellow-600">{stat.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}
