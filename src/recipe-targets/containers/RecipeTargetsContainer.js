import compose from 'ramda/src/compose';
import multiply from 'ramda/src/multiply';
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
    onChangeGravity: compose(dispatch, updateGravity, Number),
    onChangeVolume: compose(dispatch, updateVolume, Number),
    onChangeEfficiency: compose(
      dispatch,
      updateEfficiency,
      multiply(0.01),
      Number),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeTargets);
