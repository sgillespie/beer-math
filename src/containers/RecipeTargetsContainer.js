import { connect } from 'react-redux';

import RecipeTargets from '../components/RecipeTargets';
import { updateGravity, updateVolume } from '../actions';

export function mapStateToProps(state) {
  return {
    gravity: state.targets.gravity,
	volume: state.targets.volume,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeGravity(gravity) {
      dispatch(updateGravity(gravity));
    },
	onChangeVolume(volume) {
      dispatch(updateVolume(volume));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeTargets);
