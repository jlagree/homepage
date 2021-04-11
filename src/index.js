import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderInfo from './HeaderInfo'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HeaderInfo />
  </React.StrictMode>,
  document.getElementById('root'),
  document.getElementById('header')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
