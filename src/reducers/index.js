import { combineReducers } from 'redux';
import { reduce, toNumber } from 'lodash';
import u, { omit } from 'updeep';

import { 
  UPDATE_GRAVITY, 
  UPDATE_VOLUME, 
  UPDATE_EFFICIENCY, 
  ADD_GRAIN, 
  DELETE_GRAIN,
  EDIT_GRAIN,
  UPDATE_GRAIN,
} from '../actions';

function newId(grains) {
  return reduce(grains, (accum, value, key) => {
    const id = toNumber(key);

    if (accum > id) return accum;
    return id;
  }, 0) + 1;
}

export default combineReducers({
  targets: targets,
  grains: grains,
});

function targets(state = {}, action) {
  switch (action.type) {
    case UPDATE_GRAVITY:
      return u({ 
        gravity: action.payload 
      }, state);

    case UPDATE_VOLUME:
      return u({ 
        volume: action.payload 
      }, state);

    case UPDATE_EFFICIENCY:
      return u({ 
        efficiency: action.payload 
      }, state);

    default:
      return state; 
  }
}

function grains(state = {}, action) {
  switch (action.type) {
    case ADD_GRAIN:
      return u({
        [newId(state)]: action.payload,
      }, state);
	
    case DELETE_GRAIN:
      // action.payload is the grain key
      return omit(action.payload, state);
	  
    case EDIT_GRAIN:
      // action.payload is the grain key
      return u({ 
	    [action.payload]: { isEditing: val => !val } 
      }, state);

    case UPDATE_GRAIN:
      return u({
        [action.payload.key]: {
          grainType: action.payload.grainType,
          maxPpg: action.payload.maxPpg,
          proportion: action.payload.proportion,
          isEditing: false,
        }
      }, state);

    default: 
      return state;
  }
}
