import React, { useState } from "react";

export const useThemeMode = () => {
  const [nightMode, setNightMode] = useState(false);
  const nightModeHandler = (boolean) => {
    setNightMode(boolean);
  };
  return {
    nightMode,
    nightModeHandler,
  };
};
