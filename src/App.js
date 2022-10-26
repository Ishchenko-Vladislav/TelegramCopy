import "./App.css";
import { useState, useContext, createContext } from "react";
import { ThemeContext } from "./components/context/ThemeContext";

import { LeftBox } from "./components/LeftBox/LeftBox";
import RightBox from "./components/RightBox/RightBox";

function App() {
  const [themeMode, setThemeMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
      }}
    >
      <div className="allBox">
        <LeftBox />
        <RightBox />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
