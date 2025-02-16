import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full h-auto md:h-[540px] shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Section One - Image Section */}
        <div className="relative bg-gradient-to-b from-yellow-900 via-amber-800 to-yellow-700 w-full md:w-[650px] h-[300px] md:h-full">
          {/* Container for Image */}
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src="/5.webp" // Replace with actual image path
              alt="Lugha Tausi Artwork"
              className="object-cover h-full w-full"
              width={672}
              height={540}
            />
          </div>
        </div>

        {/* Section Two - Content Section */}
        <div className="bg-gradient-to-b from-amber-600 to-yellow-500 p-6 w-full md:w-[calc(100%-650px)] h-auto md:h-full flex flex-col justify-center items-center text-white">
          {/* Dedication Section */}
          <h2 className="text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-l from-yellow-300 to-amber-100 drop-shadow-lg">
            Timu Yetu ya Ubunifu
          </h2>
          <p className="mb-6 text-center text-xl sm:text-lg drop-shadow-md leading-relaxed">
            Katika <strong className="text-yellow-100">Lugha Tausi</strong>,
            tunajivunia kuunda teknolojia inayobadilisha maisha! Timu yetu ya
            wataalamu inajitolea kuleta suluhisho bunifu kwa ajili ya maendeleo
            ya Afrika na ulimwengu mzima.
          </p>

          {/* Button to Portfolio */}
          <div className="flex justify-center mt-6">
            <a
              href="https://lt-team-portfolio.vercel.app/" // Replace with actual portfolio link
              className="px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:text-yellow-200 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              GUNDUA UBUNIFU WETU
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
