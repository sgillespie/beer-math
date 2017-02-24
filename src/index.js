import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import App from './components/App';
import DevTools from './containers/DevTools';
import store from './store';

import 'react-mdl/extra/css/material.teal-indigo.min.css';
import 'react-mdl/extra/material.js';

import './index.css';

const appStore = store({
  targets: {
    gravity: "1.045",
    volume: "6",
    efficiency: "70",
  }
});

render(
  <Provider store={appStore}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
