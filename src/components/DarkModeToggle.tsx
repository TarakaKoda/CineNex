import { useState } from "react";
import { moon, sun, clouds, stars } from "../assets";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex  h-8 w-16 overflow-hidden rounded-full p-1 \ shadow-xl ${
        isDarkMode ? "justify-end ring-1 ring-slate-50" : "justify-start ring-1"
      } items-center bg-blue-500 dark:bg-black`}
    >
      {isDarkMode && (
        <>
          <img className={`h-8 w-8`} src={stars} alt="filmLight logo" />
          <img
            className={` animate-spin-slow dark:shadow-3xl h-6  w-6 rounded-full shadow-xl transition-transform dark:bg-yellow-200 dark:shadow-yellow-200`}
            src={moon}
            alt="filmLight logo"
          />
        </>
      )}
      {!isDarkMode && (
        <>
          <img
            className={`bg-re animate-spin-slow dark:shadow-3xl h-6 w-6 rounded-full shadow-xl transition-transform`}
            src={sun}
            alt="filmLight logo"
          />
          <img className="h-8 w-8" src={clouds} alt="Clouds" />
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
