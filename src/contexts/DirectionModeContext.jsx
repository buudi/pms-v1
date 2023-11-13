import React, { createContext, useContext, useState } from "react";

const DirectionModeContext = createContext();

export const DirectionModeProvider = ({ children }) => {
  const [directionMode, setDirectionMode] = useState("rtl");

  const toggleDirectionMode = () => {
    setDirectionMode((prevMode) => (prevMode === "rtl" ? "ltr" : "rtl"));
  };

  return (
    <DirectionModeContext.Provider
      value={{ directionMode, toggleDirectionMode }}
    >
      {children}
    </DirectionModeContext.Provider>
  );
};

export const useDirectionMode = () => {
  const context = useContext(DirectionModeContext);
  if (!context) {
    throw new Error("useDirectionMode must be used within a DirectionModeProvider");
  }
  return context;
};
