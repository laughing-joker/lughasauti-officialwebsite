import Image from "next/image";
import React from "react";
import Link from "next/link"; // Importing the Link component

const Explore3 = () => {
  return (
    <div className="w-full h-auto sm:h-[540px] shadow-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Section One - Why Choose Lugha Sauti */}
        <div className="bg-gradient-to-br from-amber-700 via-yellow-600 to-amber-800 p-6 sm:p-8 w-full sm:w-1/2 h-full overflow-y-auto text-white flex flex-col justify-between text-center sm:text-left flex-grow">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-l from-yellow-900 to-amber-500 text-transparent bg-clip-text mb-6 sm:mb-8">
            Kwa Nini Uchague{" "}
            <span className="text-yellow-400">Lugha Sauti?</span>
          </h2>
          <div className="flex flex-col justify-between flex-grow space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed">
              <strong className="text-yellow-300">
                🌍 Urithi wa Kiswahili:
              </strong>
              Lugha Sauti imejengwa juu ya misingi imara ya Kiswahili,
              ikirahisisha mawasiliano na kukuza urithi wa lugha yetu.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              <strong className="text-yellow-300">
                🎨 Ubunifu wa Kipekee:
              </strong>
              Imebuniwa kwa mvuto wa kisasa, ikileta uzoefu wa kipekee na wa
              kuvutia kwa watumiaji wake.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              <strong className="text-yellow-300">
                📚 Urahisi wa Kujifunza:
              </strong>
              Rahisi kutumia na kuelewa – inawafaa wanafunzi, vijana, na
              wataalamu wa sekta mbalimbali.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              <strong className="text-yellow-300">
                🚀 Mapinduzi ya Teknolojia:
              </strong>
              Lugha ya Kiafrika inayoleta uvumbuzi, maendeleo, na fursa mpya kwa
              Afrika!
            </p>
            <p className="font-bold text-yellow-400 text-2xl sm:text-3xl mt-4 sm:mt-6">
              Karibu kwenye <span className="text-yellow-300">Lugha Sauti</span>
              - mahali ambapo ubunifu unakutana na teknolojia kupitia Kiswahili!
            </p>
          </div>
          {/* Button to show products */}
          <div className="mt-6 sm:mt-8">
            <Link href="https://lt-team-portfolio.vercel.app/#products">
              <button className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out w-full sm:w-auto">
                🔍 Onyesha Bidhaa Zetu
              </button>
            </Link>
          </div>
        </div>

        {/* Section Two - Image */}
        <div className="w-full sm:w-[500px] h-full flex justify-center items-center flex-shrink-0">
          <div className="w-full sm:w-[400px] lg:w-[500px] h-full flex justify-center items-center">
            <Image
              src="/3.png" // Replace this with the actual image path
              alt="Lugha Sauti Artwork"
              className="w-full h-full max-w-full max-h-[90%] sm:max-h-full  shadow-lg"
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
