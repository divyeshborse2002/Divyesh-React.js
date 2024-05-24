
import React from 'react';
import { useTheme,ThemeProvider } from './Components/ThemeContext';
import ThemeToggleButton from '././Components/ThemeToggleButton';
import './App.css';

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme.background, color: theme.color, minHeight: '100vh',width:"100%", padding: '20px' }}>
      <h1>Hello, World!</h1>
      <p>This is a themed application.</p>
      <ThemeToggleButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
