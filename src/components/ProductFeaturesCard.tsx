import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProductFeaturesCard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[85vh] bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 rounded-2xl">
      {/* Outer Card */}
      <div className="relative w-full max-w-5xl p-8 bg-gray-800 rounded-2xl shadow-lg">
        {/* Enlarged Inner Card */}
        <div className="relative bg-gray-700 text-purple-300 p-16 rounded-lg shadow-md w-[99%] h-[99%] transition-all duration-500 hover:shadow-lg hover:scale-105 mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">Features</h2>
          <ul className="list-disc list-inside text-2xl mb-8 space-y-4">
            <li>Easy installation</li>
            <li>Language-driven syntax</li>
            <li>Fast execution</li>
            <li>Integratable with different devices</li>
            <li></li>
          </ul>
          <div className="text-center">
            <Link href="/home/Download">
              <Button className="relative text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-clip-padding border-2 border-transparent rounded-lg text-lg py-5 px-9 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-600 hover:to-purple-700 hover:text-white focus:outline-none before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:bg-gradient-to-r before:from-purple-600 before:via-indigo-500 before:to-purple-600 before:bg-clip-padding before:transition-transform before:duration-300 before:ease-in-out hover:before:border-transparent hover:before:scale-105 hover:before:opacity-80 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Download</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesCard;
