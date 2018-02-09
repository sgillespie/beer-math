import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RecipeTargets from '../components/RecipeTargets';
import {
  updateGravity,
  updateVolume,
  updateEfficiency,
} from '../../recipe-calculator/actions';
import {
  mkGravitySelector,
  mkVolumeSelector,
  mkEfficiencySelector,
} from '../../recipe-calculator/selectors';

export function mapStateToProps() {
  return createStructuredSelector({
    gravity: mkGravitySelector(),
    volume: mkVolumeSelector(),
    efficiency: mkEfficiencySelector(),
  });
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
