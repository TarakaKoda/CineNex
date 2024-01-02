import { useState } from "react";
import { moon, sun, stars } from "../assets";
import { BsCloudsFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); 
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex  h-8 w-16 overflow-hidden rounded-full p-1 ring-black shadow-md ${
        isDarkMode ? "justify-end ring-1" : "justify-start ring-1"
      } items-center dark:bg-black dark:ring-slate-50`}
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
        <div className="flex justify-between gap-2 items-center">
          <img
            className={`bg-re animate-spin-slow dark:shadow-3xl h-6 w-6 rounded-full shadow-xl transition-transform`}
            src={sun}
            alt="filmLight logo"
          />
          <BsCloudsFill className="h-6 w-6 fill-sky-400" />
        </div> 
      )}
    </button>
  );
};

export default DarkModeToggle;
