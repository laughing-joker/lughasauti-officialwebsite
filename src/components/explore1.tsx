import Image from "next/image";
import React from "react";

const SplitCard = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[540px] w-full shadow-lg overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full md:w-11/12 p-6 flex flex-col justify-center items-center bg-gradient-to-b from-amber-600 to-yellow-500 transition-all duration-500">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400 mb-2 leading-tight drop-shadow-lg text-center">
            Karibu kwenye <span className="text-yellow-100">Sauti</span>
          </h2>
          <p className="text-base sm:text-lg text-white leading-relaxed mt-4 opacity-95 text-center">
            Sauti si lugha ya programu pekee—ni mwamko wa ubunifu unaoangaza kwa
            kasi! Imeundwa kwa Kiswahili, ikifananisha uzuri wa mbawa za tausi,
            ikiwa na mchanganyiko wa urahisi wa matumizi na nguvu ya ubunifu.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-2 drop-shadow-lg">
            Maono Yetu: Kupasua Mipaka ya Teknolojia
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed opacity-95">
            Sauti ni daraja linalounganisha wataalamu wa teknolojia wa Afrika na
            wale wanaotaka kuchangia. Mapinduzi ya kiteknolojia yameanza, na
            Sauti inachochea nguvu hiyo kwa moyo wa Kiafrika!
          </p>
        </div>

        {/* Additional Content */}
        <div className="mt-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600 mb-4 drop-shadow-lg">
            Gahawa ya Maendeleo: Teknolojia na Utamaduni
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed opacity-95">
            Kwa kutumia Sauti, tunachangia maendeleo ya kiteknolojia na
            utamaduni wa Kiafrika. Ubunifu wetu ni wa kipekee, ukiunganisha
            ustadi wa kisasa na tamaduni zetu. Hii ni safari ya mageuzi ya
            kiteknolojia, na Sauti ndio chombo kinachotupeleka huko!
          </p>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="flex justify-center md:justify-end w-full">
          <Image
            src="/4.png"
            alt="Sauti Artwork"
            className="object-contain h-[250px] sm:h-[300px] md:h-[540px] w-full transition-transform duration-500 hover:scale-105"
            layout="intrinsic"
            width={672}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
