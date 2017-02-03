import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';

import App from './components/App.js';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import 'bootstrap-material-design/dist/css/ripples.css';

import './index.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
