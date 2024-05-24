
import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000'
  },
  dark: {
    background: '#000000',
    color: '#ffffff'
  }
};


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
