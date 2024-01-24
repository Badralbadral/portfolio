import { createContext, useState, useContext } from "react";
import { useTheme } from "next-themes";

const ThemeContext = createContext();

export const useThemeChange = () => {
  return useContext(ThemeContext);
};

export const ThemeProviderS = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviderS;
