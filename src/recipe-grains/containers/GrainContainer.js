import { connect } from 'react-redux';

import GristCalculator from '../components/GristCalculator';
import { addGrain, deleteGrain, editGrain, updateGrain } from '../../actions';

export function mapStateToProps(state) {
  return {
    grains: state.grains,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onClickAdd(grainType, maxPpg, proportion) {
      dispatch(addGrain(grainType, maxPpg, proportion));
    },

    onClickDelete(key) {
      dispatch(deleteGrain(key));
    },

    onClickEdit(key) {
      dispatch(editGrain(key));
    },

    onClickUpdate(key, grainType, maxPpg, proportion) {
      dispatch(updateGrain(key, grainType, maxPpg, proportion));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GristCalculator);
