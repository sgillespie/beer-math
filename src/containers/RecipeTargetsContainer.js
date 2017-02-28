import { connect } from 'react-redux';

import RecipeTargets from '../components/RecipeTargets';
import { updateGravity, updateVolume, updateEfficiency } from '../actions';

export function mapStateToProps(state) {
  return {
    gravity: state.targets.gravity,
	volume: state.targets.volume,
	efficiency: state.targets.efficiency,
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
	onChangeEfficiency(efficiency) {
      dispatch(updateEfficiency(efficiency));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeTargets);
