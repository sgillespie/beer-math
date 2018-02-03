import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import blue from 'material-ui/colors/blue';
import deepOrange from 'material-ui/colors/deepOrange';

import 'typeface-roboto/index.css';

import RecipeCalculator from './recipe-calculator/components/RecipeCalculator';
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
  palette: {
    primary: deepOrange,
    secondary: blue,
  },
});

render(
  <Provider store={appStore}>
    <MuiThemeProvider theme={theme}>
      <RecipeCalculator />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
