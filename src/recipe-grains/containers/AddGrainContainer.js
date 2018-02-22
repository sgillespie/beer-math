import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddGrainForm from '../components/AddGrainForm';
import * as selectors from '../selectors';
import { addGrain } from '../../recipe-calculator/actions';
import {
  updateGrainType,
  updateMaxPpg,
  updateProportion,
} from '../actions';

export function mapStateToProps() {
  return createStructuredSelector({
    grainType: selectors.mkGrainTypeSelector(),
    maxPpg: selectors.mkMaxPpgSelector(),
    proportion: selectors.mkProportionSelector(),
  });
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeType(grainType) {
      dispatch(updateGrainType(grainType));
    },

    onChangeMaxPpg(maxPpg) {
      dispatch(updateMaxPpg(maxPpg));
    },

    onChangeProportion(proportion) {
      dispatch(updateProportion(proportion));
    },

    onClickAdd(grainType, maxPpg, proportion) {
      dispatch(updateGrainType(''));
      dispatch(updateMaxPpg(''));
      dispatch(updateProportion(''));

      dispatch(addGrain(grainType, maxPpg, proportion));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGrainForm);
