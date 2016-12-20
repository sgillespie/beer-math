import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';

import App from './containers/app';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
