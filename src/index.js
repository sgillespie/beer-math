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

const appStore = store({});

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
