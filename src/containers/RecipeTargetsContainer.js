import { connect } from 'react-redux';

import RecipeTargets from '../components/RecipeTargets';
import { updateGravity } from '../actions';

export function mapStateToProps(state) {
  return {
    gravity: state.targets.gravity,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeGravity(gravity) {
      dispatch(updateGravity(gravity));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeTargets);
