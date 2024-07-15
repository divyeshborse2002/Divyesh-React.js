// counterReducer.js
import { ADD, REDUCE } from './action';

const initialState = 0;

const counterReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ADD:
      return state + payload;
    case REDUCE:
      return state - payload;
    default:
      return state;
  }
};

export default counterReducer;
