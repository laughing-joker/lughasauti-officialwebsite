// src/pages/loading.js
import Image from "next/image";
import React from "react";

const LoadingPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 animate-gradientShift">
    <div className="animate-glow text-white text-center">
      <Image
        src="/logo.png" // Replace with the path to your logo
        alt="Loading Logo"
        width={96} // Set the desired width (h-24 in Tailwind is 6rem, which equals 96px)
        height={96} // Set the desired height (h-24 in Tailwind is 6rem, which equals 96px)
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </div>
);

export default LoadingPage;
