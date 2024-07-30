import React, { useState } from "react";
//  import work from "./Componant/Images/work"

function LightDark() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    light: {
      backgroundColor: "#f0f0f0",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f0f0f0",
    },
  };

  const appliedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div style={appliedTheme} className="text-bold">
      <center>
        <h1 className=" text-red-800 text-2xl text">
          Small project on light and dark mode
        </h1>

        <p className="text-gray-900 ">
          Every experience where you genuinely stop encountering fear provides
          you with strength, courage, and confidence.
        </p>

        
      {/* <img src={work} alt="" /> */}

        <button
          className="text-white bg-slate-500 p-1 rounded-2xl mt-8"
          onClick={toggleMode}
        >
          {" "}
          theme change
        </button>
      </center>
    </div>
  );
}

export default LightDark;
