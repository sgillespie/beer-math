import { UPDATE_GRAVITY } from '../actions';

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

    default: 
      return state;
  }
}
