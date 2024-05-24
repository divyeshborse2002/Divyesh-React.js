import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleToggle = () => {
    toggleTheme();
    setIsLightTheme(prevTheme => !prevTheme);
  };

  return (
    <button onClick={handleToggle} style={{ padding: '10px', margin: '10px' }}>
      {isLightTheme ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggleButton;
