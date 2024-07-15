// Counter.jsx
import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
import { useSelector } from 'react-redux';

const Counter = () => {
  const theme = useSelector((state) => state.theme);
  const themeClass = theme === 'light' ? 'light_theme' : 'dark_theme';

  return (
    <div className={themeClass}>
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;
