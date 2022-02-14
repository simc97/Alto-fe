import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './components/App';

require('./scss/main.scss');

var root = document.body.appendChild(document.createElement('div'));
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), root);


