import { combineReducers } from 'redux-immutable';

import globalReducer from '../recipe-calculator/reducer';
import recipeGrainsReducer from '../recipe-grains/reducer';

export default combineReducers({
  global: globalReducer,
  recipeGrains: recipeGrainsReducer,
});
