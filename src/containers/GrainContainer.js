import { connect } from 'react-redux';

import GristCalculator from '../components/GristCalculator';
import { addGrain } from '../actions';

export function mapStateToProps(state) {
  return {};
}

export function mapDispatchToProps(dispatch) {
  return {
    onClickAdd(grainType, maxPpg, proportion) {
      dispatch(addGrain(grainType, maxPpg, proportion));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GristCalculator);
