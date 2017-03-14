import { connect } from 'react-redux';
import flow from 'lodash.flow';
import mapValues from 'lodash.mapvalues';
import values from 'lodash.values';

import GristCalculator from '../components/GristCalculator';
import { addGrain } from '../actions';

export function mapStateToProps(state) {
  const grains = flow([
    obj => mapValues(obj, (grain, id) => Object.assign({}, grain, { id })),
    values
  ])(state.grains);

  return {
    grains,
  };
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
