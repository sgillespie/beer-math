import { connect } from 'react-redux';

import RecipeTargets from '../components/RecipeTargets';
import { updateGravity } from '../actions';

export function mapStateToProps() {
  return {
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
