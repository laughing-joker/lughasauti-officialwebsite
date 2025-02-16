import Image from "next/image";
import React from "react";

const SplitCard = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[540px] w-full shadow-lg overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full md:w-11/12 p-6 flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-700 transition-all duration-500">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-2 leading-tight drop-shadow-2xl transition-all duration-500 ease-in-out text-center">
            Karibu kwenye Lugha Tausi
          </h2>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-0 opacity-90 text-center">
            Kwa ngeli safi murua, Tunu yetu kuienzi, Tausi mwana madaha, Awapo
            bustanini.
          </p>

          <p className="text-base sm:text-lg text-white leading-relaxed mt-4 opacity-90 text-center">
            Lugha Tausi ni zaidi ya lugha ya programu—ni mwamko wa ajabu na
            nguvu ya ubunifu inayowaka kwa kasi! Imeundwa kwa Kiswahili,
            ikichora picha ya mbawa za tausi—kila kipengele kikiwa na uzuri wake
            wa kipekee. Inachanganya urahisi wa kutumia na nguvu ya uchangamfu.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200 mb-2 drop-shadow-2xl text-center">
            Maono Yetu: Kupasua Mipaka ya Teknolojia
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed opacity-90 text-center">
            Lugha Tausi inafungua milango ya fursa mpya, ikiwa ni daraja
            linalounganisha wataalamu wa teknolojia wa Afrika na wale wanaotaka
            kuchangia. Tujivunie, kwa sababu mapinduzi ya kiteknolojia yameanza,
            na Lugha Tausi inazalisha nguvu hiyo kwa moyo wa Kiafrika!
          </p>
        </div>

        {/* Additional Content */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-100 mb-4 drop-shadow-2xl">
            Gahawa ya Maendeleo: Teknolojia na Utamaduni
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed opacity-90 text-center">
            Kwa kutumia Lugha Tausi, tunachangia ufanisi katika kuleta maendeleo
            ya kiteknolojia na utamaduni wa Kiafrika. Ubunifu wetu ni wa
            kipekee, ukiunganisha ustadi wa kisasa na tamaduni zetu. Hii ni
            safari ya ajabu inayolenga kuleta mageuzi ya kiteknolojia, na Lugha
            Tausi ni chombo kinachowezesha haya yote.
          </p>
        </div>
      </div>
      {/* Right Side - Logo */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Placeholder for the Logo */}
        <div className="flex justify-center md:justify-end w-full">
          <Image
            src="/Tausi_Art.png" // Replace this with the actual logo path
            alt="Lugha Tausi Artwork"
            className="object-contain h-[250px] sm:h-[300px] md:h-[540px] w-full"
            layout="intrinsic" // Use intrinsic for better responsiveness
            width={672} // Customize for the image width based on your requirements
            height={200} // Customize for the image height based on your requirements
          />
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
