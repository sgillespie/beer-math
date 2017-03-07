import { UPDATE_GRAVITY, UPDATE_VOLUME, UPDATE_EFFICIENCY, ADD_GRAIN } from '../actions';
import { reduce, toNumber } from 'lodash';

function newId(grains) {
  return reduce(grains, (accum, value, key) => {
    const id = toNumber(key);

    if (accum > id) return accum;
    return id;
  }, 0) + 1;
}

export default function(state, action) {
  switch (action.type) {
    case UPDATE_GRAVITY:
      return {
        targets: {
          gravity: action.payload,
          volume: state.targets.volume,
          efficiency: state.targets.efficiency
        },

        grains: state.grains,
      };
	case UPDATE_VOLUME:
      return {
        targets: {
          gravity: state.targets.gravity,
          volume: action.payload,
          efficiency: state.targets.efficiency
        },

        grains: state.grains,
	  };
	case UPDATE_EFFICIENCY:
      return {
        targets: {
          gravity: state.targets.gravity,
          volume: state.targets.volume,
          efficiency: action.payload
        },

        grains: state.grains,
	  };
    case ADD_GRAIN:
      // TODO[sgillespie]: Refactor me
      const { grains, targets } = state;
      const newState = {
        grains,
        targets,
      };

      newState.grains[newId(grains)] = {
        grainType: action.payload.grainType,
        maxPpg: action.payload.maxPpg,
        proportion: action.payload.proportion,
      };

      return newState;

    default: 
      return state;
  }
}
