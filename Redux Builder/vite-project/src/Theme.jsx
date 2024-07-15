// Theme.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleTheme } from './action';

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div style={{marginTop:"10px"}}>
      <button style={{backgroundColor:"transparent",padding:"10px"}}
        onClick={() => dispatch(handleTheme('light'))}
        disabled={theme === 'light'}
      >
        Switch to Light
      </button>
      <button  style={{backgroundColor:"transparent",padding:"10px"}}
        onClick={() => dispatch(handleTheme('dark'))}
        disabled={theme === 'dark'}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
