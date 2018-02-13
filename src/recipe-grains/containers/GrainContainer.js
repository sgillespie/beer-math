import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GristCalculator from '../components/GristCalculator';
import toJs from '../../lib/components/to-js';
import { mkGrainsSelector } from '../../recipe-calculator/selectors';
import * as actions from '../../recipe-calculator/actions';

export function mapStateToProps() {
  return createStructuredSelector({
    grains: mkGrainsSelector(),
  });
}

export function mapDispatchToProps(dispatch) {
  return {
    onClickAdd(grainType, maxPpg, proportion) {
      dispatch(actions.addGrain(grainType, maxPpg, proportion));
    },

    onClickDelete(key) {
      dispatch(actions.deleteGrain(key));
    },

    onClickEdit(key) {
      dispatch(actions.editGrain(key));
    },

    onClickUpdate(key, grainType, maxPpg, proportion) {
      dispatch(actions.updateGrain(key, grainType, maxPpg, proportion));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJs(GristCalculator));
