import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import store from './store';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
 , document.getElementById('root')
);


reportWebVitals();
