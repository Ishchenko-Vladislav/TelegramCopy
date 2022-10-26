import { Circle } from "./Circle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import LeftBoxHeader from "./LeftBoxHeader";
// import { useThemeMode } from "../hooks/ThemeMode";

export const LeftBox = () => {
  // const { nightMode, nightModeHandler } = useThemeMode();
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  console.log(themeMode);
  return (
    <div className={`leftBox active ${themeMode && "dark"}`}>
      <LeftBoxHeader />
      <Circle />
    </div>
  );
};
