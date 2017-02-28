import { UPDATE_GRAVITY, UPDATE_VOLUME, UPDATE_EFFICIENCY } from '../actions';

export default function(state, action) {
  switch (action.type) {
    case UPDATE_GRAVITY:
      return {
        targets: {
          gravity: action.payload,
          volume: state.targets.volume,
          efficiency: state.targets.efficiency
        },
      };
	case UPDATE_VOLUME:
      return {
        targets: {
          gravity: state.targets.gravity,
          volume: action.payload,
          efficiency: state.targets.efficiency
        },
	  };
	case UPDATE_EFFICIENCY:
      return {
        targets: {
          gravity: state.targets.gravity,
          volume: state.targets.volume,
          efficiency: action.payload
        },
	  };

    default: 
      return state;
  }
}
