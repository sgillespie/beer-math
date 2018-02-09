import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { fromJS } from 'immutable';

import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    fromJS(initialState),
    composeWithDevTools());

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
