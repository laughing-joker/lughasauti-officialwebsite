"use client";
import React from "react";
import { motion } from "framer-motion";
import DownloadCard from "./Downloadcard";

const LargeCardWithNestedCard = () => {
  return (
    <div className="relative w-full max-w-full px-6 sm:px-4 md:px-6">
      {/* Large Outer Card with gold/amber-like colors */}
      <div className="min-h-[400px] sm:min-h-[300px] bg-gradient-to-br from-yellow-400 via-amber-600 to-yellow-700 shadow-lg relative overflow-hidden rounded-lg">
        {/* Glowing Circle Animation */}
        <motion.div
          className="absolute -top-20 -left-20 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-yellow-500/50 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0.5, 1, 0.7] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            filter: "blur(50px)",
            boxShadow: "0 0 80px rgba(255, 223, 0, 0.6)",
          }}
        />

        {/* Nested Inner Card */}
        <div className="relative z-10">
          <DownloadCard />
        </div>
      </div>
    </div>
  );
};

export default LargeCardWithNestedCard;
