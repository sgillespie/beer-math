import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import teal from 'material-ui/colors/teal';
import deepPurple from 'material-ui/colors/deepPurple';

import 'typeface-roboto/index.css';

import RecipeCalculator from './recipe-calculator/components/RecipeCalculator';
import store from './store';

import './index.css';

const appStore = store({});

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
  },
});

render(
  <Provider store={appStore}>
    <MuiThemeProvider theme={theme}>
      <RecipeCalculator />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
