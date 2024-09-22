// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

// Define light and dark themes
const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  background: "#000000",
  text: "#ffffff",
};

// Create the theme context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Determine initial theme based on system preference
  const initialTheme =
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);

  // Listen for system theme changes
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    });

    return () => listener.remove();
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
