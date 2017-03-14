import { connect } from 'react-redux';
import React from 'react';
import flow from 'lodash.flow';
import mapValues from 'lodash.mapvalues';
import values from 'lodash.values';

import GrainActionsColumn from '../components/GrainActionsColumn';
import GristCalculator from '../components/GristCalculator';
import { addGrain } from '../actions';

export function mapStateToProps(state) {
  const grains = flow([
    obj => mapValues(obj, (grain, id) => Object.assign({}, grain, { id })),
    obj => mapValues(obj, grain => Object.assign({}, grain, { weight: 'TODO' })),
    obj => mapValues(obj, grain => Object.assign({}, grain, { actions: <GrainActionsColumn /> })),
    values,
    grains => grains.concat([{
      grainType: 'Totals',
      id: 'grainTotals',
      proportion: '100%',
      weight: 'TODO',
    }]),
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
