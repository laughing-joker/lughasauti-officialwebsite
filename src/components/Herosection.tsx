"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen  text-white ">
      {/* Sehemu ya Kwanza */}
      <section className="relative bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-500 text-white flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 mx-8 overflow-hidden rounded-xl">
        {/* Mandhari ya Miondoko */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 opacity-80 animate-pulse"></div>

        <div className="flex flex-col items-center text-center z-10 relative">
          {/* Maandishi Makubwa */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate__animated animate__fadeIn animate__delay-1s">
            <span className="justify-center">Inua Akili Yako</span>
            <span className="block">Inua Msimbo Wako na Sauti</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6">
            Gundua lugha ya programu inayobadilisha ugumu kuwa rahisi. Jiunge
            nasi na jifunze sanaa ya kuandika msimbo kwa urahisi!
          </p>
          <Link href="/home/About">
            <button className="bg-transparent border-2 border-gold text-white py-2 px-6 rounded-full hover:bg-gold hover:border-transparent hover:text-white transition-all duration-300 transform hover:scale-110 animate__animated animate__pulse animate__delay-3s">
              Gundua
            </button>
          </Link>
        </div>
        {/* Sehemu ya Nembo */}
        <div className="mt-12 flex justify-center relative z-10">
          <Image
            src="/Logo.jpg"
            alt="Nembo ya Sauti"
            width={256}
            height={256}
            className="rounded-full animate__animated animate__zoomIn animate__delay-1s"
          />
        </div>
      </section>

      {/* Sehemu ya Sifa */}
      <section className="bg-white text-gold py-16 px-8 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gold">
            Sifa za Sauti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Urahisi", "Utendaji", "Uwezo wa Kupanuka"].map((sifa, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gold">
                  {sifa}
                </h3>
                <p className="text-gold">
                  {sifa === "Urahisi"
                    ? "Sauti inatoa muundo safi na rahisi unaorahisisha uandishi wa msimbo."
                    : sifa === "Utendaji"
                    ? "Imejengwa kwa kasi, Sauti inahakikisha utendaji wa hali ya juu na utekelezaji wa haraka wa programu zako."
                    : "Panua miradi yako kwa urahisi kwa usanifu madhubuti wa Sauti na miundo inayobadilika."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sehemu ya Faida */}
      <section className="bg-yellow-500 text-white py-16 px-8 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Faida za Kutumia Sauti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Urahisi wa Kujifunza", "Msaada wa Jamii", "Uwezo wa Kiasi"].map(
              (faida, index) => (
                <div
                  key={index}
                  className="bg-yellow-400 backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-600 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {faida}
                  </h3>
                  <p className="text-white">
                    {faida === "Urahisi wa Kujifunza"
                      ? "Kwa muundo wake wa angavu, Sauti ni rahisi kujifunza hata kwa wanaoanza."
                      : faida === "Msaada wa Jamii"
                      ? "Jiunge na jamii yenye bidii ya waendelezaji wanaosaidiana."
                      : "Sauti ni hodari na inaweza kutumika kwa maendeleo ya wavuti, programu za simu, na zaidi."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sehemu ya Kuanza */}
      <section className="bg-white text-yellow-600 py-16 px-8 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Anza na Sauti</h2>
          <p className="text-lg text-yellow-500 mb-8">
            Uko tayari kuanza na Sauti? Fuata nyaraka zetu za kina na mafunzo
            ili kuanza kujenga programu bora leo!
          </p>
          <Link href="/home/Download">
            <button className="relative bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-yellow-600 hover:to-yellow-800">
              Anza Kuandika Msimbo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
