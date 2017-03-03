import { connect } from 'react-redux';

import RecipeTargets from '../components/RecipeTargets';
import { updateGravity, updateVolume, updateEfficiency } from '../actions';

export function mapStateToProps(state) {
  return state.targets;
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
