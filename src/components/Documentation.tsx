import React, { useState } from "react";

const LTMANUAL = "https://lughasauti.vercel.app/Mwongozo.pdf";

const Doc1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="w-full min-h-screen rounded-xl bg-gradient-to-b from-amber-500 to-gold-500 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl my-8 p-8 md:p-12 lg:p-32 bg-gray-900 shadow-2xl rounded-3xl border border-yellow-500 relative">
        {/* Animated Glow Effects */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-50 blur-lg"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-50 blur-lg"></div>

        {/* Main Content */}
        <div className="p-4 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Lugha Sauti</h1>
          <p className="text-base md:text-lg text-gray-300 mb-3">
            Hati ya kina kuhusu Lugha Sauti
          </p>

          {/* Features Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Vipengele</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 text-sm md:text-base">
            <li>Sintaksia rahisi kusoma</li>
            <li>Maktaba zenye nguvu za usindikaji wa data</li>
            <li>Jamii yenye msaada mkubwa</li>
            <li>Ufanisi kwenye majukwaa mbalimbali</li>
          </ul>

          {/* Installation Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Usakinishaji
          </h2>
          <p className="text-gray-300 mb-3 text-sm md:text-base">
            Kwa lugha yetu ya programu, ni mchakato wa kuburuta na kuachia, na
            IDE tayari kwa matumizi kwenye Windows.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Inakuja hivi karibuni
          </p>
          <pre className="bg-gray-800 p-3 rounded-md text-yellow-300 text-sm md:text-base mb-4 overflow-x-auto">
            <code># install lughasauti</code>
          </pre>

          {/* Code Example */}
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Mfano wa Matumizi
          </h2>
          <pre className="bg-gray-800 p-3 rounded-md text-yellow-300 text-sm md:text-base mb-4 overflow-x-auto">
            <code>{`// Programu rahisi ya Hello World\njumbe("Habari, Ulimwengu!")`}</code>
          </pre>
          <pre className="bg-gray-800 p-3 rounded-md text-yellow-300 text-sm md:text-base mb-4 overflow-x-auto">
            <code>{`// Simple Hello World program\njumbe("Hello, World!")`}</code>
          </pre>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className="text-white bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-sm md:text-lg font-semibold transition-all duration-500 ease-in-out border border-yellow-400 rounded-full py-2 px-6 shadow-md hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Onyesha Hati
            </button>
            <button
              className="text-white bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-sm md:text-lg font-semibold transition-all duration-500 ease-in-out border border-yellow-400 rounded-full py-2 px-6 shadow-md hover:scale-105"
              onClick={() => downloadFileAtURL(LTMANUAL)}
            >
              Pakua Hati
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl h-5/6 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-3 flex justify-between bg-gray-800 text-white">
              <h2 className="text-lg">Mwongozo.pdf - Onyesho</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <iframe
              src={LTMANUAL}
              className="flex-1 w-full h-full"
              title="PDF Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Doc1;
