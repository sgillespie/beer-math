import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as constants from './constants';

export const initialState = fromJS({
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

const newGrainId = mkNewId(2);

export default handleActions({
  [constants.UPDATE_EFFICIENCY]: (state, action) =>
    state.setIn(['targets', 'efficiency'], action.payload),

  [constants.UPDATE_GRAVITY]: (state, action) =>
    state.setIn(['targets', 'gravity'], action.payload),

  [constants.UPDATE_VOLUME]: (state, action) =>
    state.setIn(['targets', 'volume'], action.payload),

  [constants.ADD_GRAIN]: (state, action) => {
    const id = newGrainId().toString();
    return state.setIn(['grains', id], fromJS(action.payload));
  },

  [constants.UPDATE_GRAIN]: (state, action) => {
    const { key, ...grain } = action.payload;
    return state.setIn(['grains', key], fromJS(grain));
  },

  [constants.DELETE_GRAIN]: (state, action) =>
    state.deleteIn(['grains', action.payload]),

  // TODO: move this one to recipe-grains
  [constants.EDIT_GRAIN]: (state, action) => {
    const isEditing = state.getIn(['grains', action.payload, 'isEditing']);
    return state.setIn(['grains', action.payload, 'isEditing'], !isEditing);
  },
}, initialState);

/** A higher order function that creates an incrementing value */
function mkNewId(initialVal) {
  let id = initialVal;

  return () => {
    id += 1;
    return id;
  };
}
