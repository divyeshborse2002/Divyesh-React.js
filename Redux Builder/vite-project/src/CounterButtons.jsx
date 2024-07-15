// CounterButtons.jsx
import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { handleAdd, handleReduce } from './action';


const CounterButtons = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div style={{marginTop:'20px'}}>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button disabled={ counter === 0}  onClick={() => dispatch(handleReduce(1))}>sub</button>
    </div>
  );
};

export default CounterButtons;
