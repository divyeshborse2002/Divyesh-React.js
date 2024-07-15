// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import Theme from './Theme';
import './styles.css';

const App = () => (
  
  <div style={{width:"30%",height:"400px",textAlign:"center",marginLeft:"35%"}}>
     <Provider store={store}>
     <Theme />
    <Counter />
  </Provider>
  </div>
 
);

export default App;
