import Image from "next/image";
import React from "react";
import Link from "next/link"; // Importing the Link component

const Explore3 = () => {
  return (
    <div className="w-full h-auto sm:h-[540px] shadow-lg  overflow-hidden">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Section One - Why Choose Lugha Tausi */}
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-4 sm:p-6 w-full sm:w-1/2 h-full overflow-y-auto text-white flex flex-col justify-between text-center sm:text-left flex-grow">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-l from-purple-900 to-indigo-600 text-transparent bg-clip-text mb-4 sm:mb-6">
            Kwa Nini Uchague Lugha Tausi?
          </h2>
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-sm sm:text-lg mb-2 sm:mb-4">
              <strong>Urithi wa Kiswahili:</strong> Lugha Tausi imetengenezwa
              kwa misingi ya Kiswahili, ikifanya mawasiliano kuwa rahisi kwa
              wazungumzaji.
            </p>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4">
              <strong>Ubunifu wa Kipekee:</strong> Inajivunia muundo wa kuvutia,
              ikileta mtindo wa kisasa na ubunifu katika matumizi.
            </p>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4">
              <strong>Urahisi wa Kujifunza:</strong> Lugha inayolenga kila mtu,
              ikiwa ni pamoja na wanafunzi, vijana, na wataalamu.
            </p>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4">
              <strong>Lugha ya Kiafrika:</strong> Inaleta mapinduzi katika
              teknolojia ya Kiafrika, ikitoa fursa za uvumbuzi na maendeleo.
            </p>
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 mt-2 sm:mt-4 text-xl">
              Karibu kwenye Lugha Tausi, ambapo ubunifu na teknolojia hukutana
              kwa mwangaza wa Kiswahili!
            </p>
          </div>
          {/* Button to show products */}
          <div className="mt-4 sm:mt-6">
            <Link href="https://lt-team-portfolio.vercel.app/#products">
              {/* Link to the products page */}
              <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out w-full sm:w-auto">
                Onyesha Bidhaa Zetu
              </button>
            </Link>
          </div>
        </div>

        {/* Section Two - Image */}
        <div className="w-full sm:w-[500px] h-full flex justify-center items-center flex-shrink-0">
          <div className="w-full sm:w-[400px] lg:w-[500px] h-full flex justify-center items-center">
            <Image
              src="/Jamii.webp" // Replace this with the actual logo path
              alt="Lugha Tausi Artwork"
              className="w-full h-full max-w-full max-h-[90%] sm:max-h-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore3;
