import React from "react";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <div className="flex justify-center  bg-yellow-50/20">
      <figure className="diff aspect-video w-full  rounded-xl overflow-hidden shadow-lg">
        {/* Left Side: Before Optimization */}
        <motion.div
          className="diff-item-1"
          role="img"
          tabIndex={0}
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-yellow-400/30 text-yellow-900 font-black grid place-content-center text-6xl md:text-7xl p-8 text-center">
            Optimization
          
          </div>
        </motion.div>

        {/* Right Side: After Optimization */}
        <motion.div
          className="diff-item-2"
          role="img"
          whileHover={{ scale: 1.03 }}
        >
          <div className="bg-green-300/30 text-green-900 font-black grid place-content-center text-6xl md:text-7xl p-8 text-center">
             Optimization
         
          </div>
        </motion.div>

        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
}
