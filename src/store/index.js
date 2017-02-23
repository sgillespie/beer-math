import { createStore, compose } from 'redux';

import DevTools from '../containers/DevTools';
import reducers from '../reducers';

const enhancer = compose(
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}

