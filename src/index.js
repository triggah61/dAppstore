import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { CartProvider } from 'contexts/CartContext';

import App from './App';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>,
  document.querySelector('#root')
);
