import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./reducers/index"
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
    <Router>
   <React.StrictMode>
     <App />
   </React.StrictMode>
   </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
