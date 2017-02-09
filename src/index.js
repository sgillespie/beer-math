import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';

import App from './components/App.js';
import reducers from './reducers';

import 'react-mdl/extra/css/material.teal-indigo.min.css';
import 'react-mdl/extra/material.js';

import './index.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
