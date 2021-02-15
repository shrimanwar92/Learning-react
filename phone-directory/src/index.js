import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneDirectory from './PhoneDirectory'
import reportWebVitals from './reportWebVitals';
import './common/common.css'

ReactDOM.render(
  <PhoneDirectory />,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
