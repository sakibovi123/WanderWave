import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

function LanguageModal({ visible, onClose }) {
  const [showBorder1, setBorder1] = useState(true);
  const [showBorder2, setBorder2] = useState(false);
  // State to keep track of the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Function to handle language selection
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleBorderState2 = () => {
    setBorder1(false);
    setBorder2(true);
  };

  const handleBorderState1 = () => {
    setBorder1(true);
    setBorder2(false);
  };

  const languages = [
    {
      title: "English",
      subtitle: "United States",
    },
    {
      title: "Bangla",
      subtitle: "Banlgadesh",
    },
    {
      title: "French",
      subtitle: "France",
    },
    {
      title: "Brazilian",
      subtitle: "Brazil",
    },
    {
      title: "Italian",
      subtitle: "Italy",
    },
    {
      title: "Arabic",
      subtitle: "Saudi",
    },
    {
      title: "Uk-English",
      subtitle: "United Kingdom",
    },
    {
      title: "Rusky",
      subtitle: "Russia",
    },
    {
      title: "Chinese",
      subtitle: "China",
    },
    {
      title: "Japanese",
      subtitle: "Japan",
    },
  ];

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex
        justify-center items-center"
    >
      <div className="w-[50%] h-[80%] bg-white p-2 rounded-xl ">
        <div className="bg-white flex items-center justify-start p-5">
          <MdClose
            onClick={onClose}
            className="bg-white text-3xl cursor-pointer hover:bg-slate-100 p-1 rounded-full"
          />
        </div>

        <div className="bg-white flex items-center justify-start gap-5 p-5">
          <p
            onClick={handleBorderState1}
            className={`bg-white cursor-pointer ${
              showBorder1
                ? "pb-1 border-b-2 border-blue-400"
                : "pb-1 border-b-0"
            }`}
          >
            Language
          </p>
          <p
            onClick={handleBorderState2}
            className={`bg-white cursor-pointer ${
              showBorder2
                ? "pb-1 border-b-2 border-blue-400"
                : "pb-1 border-b-0"
            }`}
          >
            Currency
          </p>
        </div>
        <div className="w-full bg-white p-5">
          <div className="bg-white w-full grid grid-rows-4 grid-flow-col gap-4">
            {languages.map((lg) => (
              <div
                onClick={() => handleLanguageClick(lg.title)}
                className={`rounded-xl p-3 cursor-pointer ${
                  selectedLanguage === lg.title
                    ? "border border-blue-300"
                    : "border border-transparent"
                }`}
              >
                <h1 className="font-semibold text-slate-800">{lg.title}</h1>
                <p className="text-sm text-gray-600">{lg.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageModal;
