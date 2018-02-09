import { combineReducers } from 'redux-immutable';

import globalReducer from '../recipe-calculator/reducer';

export default combineReducers({
  global: globalReducer,
});
