import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import * as constants from './constants';

export const initialState = fromJS({
  grainType: '',
  maxPpg: '',
  proportion: '',
});

export default handleActions({
  [constants.UPDATE_GRAIN_TYPE]: (state, action) =>
    state.set('grainType', action.payload),

  [constants.UPDATE_MAX_PPG]: (state, action) =>
    state.set('maxPpg', action.payload),

  [constants.UPDATE_PROPORTION]: (state, action) =>
    state.set('proportion', action.payload),
}, initialState);
