// CounterValue.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div style={{height:"180px",padding:"10px",marginTop:'10px',border:'1px solid black',paddingBottom:"10px"}}>
    <div style={{marginTop:'80px',fontSize:"25px"}}>
    Counter Value: {counter}
    </div>
    
    </div>
  ) 
};

export default CounterValue;
