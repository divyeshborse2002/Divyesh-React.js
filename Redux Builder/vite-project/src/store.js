// store.js
import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
