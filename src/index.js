import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Provider } from 'react-redux';
import createPalette from 'material-ui/styles/palette';
import { render } from 'react-dom';
import React from 'react';
import { indigo, teal } from 'material-ui/styles/colors';

import 'typeface-roboto/index.css';

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

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light',
    primary: teal,
    accent: indigo,
  }),
});

render(
  <Provider store={appStore}>
    <MuiThemeProvider theme={theme}>
      <div>
        <DevTools />
        <App />
      </div>
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
