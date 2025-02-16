"use client";
import React from "react";
import { motion } from "framer-motion";

const VERSION_2_0_1 = "https://lugha-tausi.vercel.app/LughaTausiv2.0.1.zip";

const DownloadCard = () => {
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
    <div className="relative w-full mt-4 px-14 py-2 max-w-full mx-auto">
      {/* Download Card */}
      <motion.div
        className="relative z-10 min-h-[350px] bg-black/40 backdrop-blur-lg shadow-2xl rounded-lg p-8 flex flex-col space-y-6"
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {/* Title with Flexible Alignment */}
        <motion.h2
          className="font-bold text-4xl text-purple-300 drop-shadow-lg text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          Pakua LughaTausi
        </motion.h2>

        {/* Description with Flexible Alignment */}
        <motion.p
          className="text-gray-300 text-center max-w-md mx-auto text-ellipsis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pakua{" "}
          <span className="text-purple-400 font-semibold">LughaTausi</span> na
          pokea muundo rahisi kutumika ukiwa na vipengele vyenye nguvu
          vinavyofanya maendeleo kuwa rahisi, na kukusaidia kuzingatia kile
          kinachohitajika zaidi.
        </motion.p>

        {/* Download Button with Flexible Alignment */}
        <motion.div className="flex justify-center">
          <motion.button
            onClick={() => downloadFileAtURL(VERSION_2_0_1)}
            className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none hover:opacity-80"
          >
            Pakua Sasa
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DownloadCard;
