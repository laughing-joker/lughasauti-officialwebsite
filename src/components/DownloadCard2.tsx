"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const VERSION_2 = "https://lugha-tausi.vercel.app/LughaTausi.zip";
const VERSION_2_0_1 = "https://lugha-tausi.vercel.app/LughaTausiv2.0.1.zip";

const FullScreenCard = () => {
  const downloadFileAtURL = (url: string) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName || "download");
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full h-screen flex items-center justify-center m-8">
        {/* Enhanced glassmorphism effect */}
        <div className="w-full h-screen bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-10 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-10 tracking-wider">
            Matoleo ya Lugha Tausi
          </h1>

          {/* Flexbox layout for buttons */}
          <div className="flex flex-col space-y-6">
            <Button
              onClick={() => downloadFileAtURL(VERSION_2_0_1)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
              variant="link"
            >
              Pakua Toleo 2.0.1
            </Button>

            <Button
              onClick={() => downloadFileAtURL(VERSION_2)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-2xl font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
              variant="link"
            >
              Pakua Toleo 2.0
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullScreenCard;
