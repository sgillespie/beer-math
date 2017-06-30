import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import 'react-mdl/extra/css/material.teal-indigo.min.css';
import 'react-mdl/extra/material';

import App from './components/App';
import DevTools from './containers/DevTools';
import store from './store';

import './index.css';

const appStore = store({
  targets: {
    gravity: '1.045',
    volume: '6',
    efficiency: '70',
  },

  grains: {
    0: {
      grainType: 'US Two Row',
      maxPpg: '1.034',
      proportion: '90%',
    },

    1: {
      grainType: 'Crystal 40L',
      maxPpg: '1.036',
      proportion: '5%',
    },

    2: {
      grainType: 'Crystal 80L',
      maxPpg: '1.036',
      proportion: '5%',
    },
  },
});

render(
  <Provider store={appStore}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>, document.getElementById('root'));
