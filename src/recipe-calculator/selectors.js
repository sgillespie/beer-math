import multiply from 'ramda/src/multiply';
import { createSelector } from 'reselect';

export const globalSelector = state => state.get('global');

export const targetsSelector = createSelector(
  globalSelector,
  state => state.get('targets'));

export function mkGravitySelector() {
  return createSelector(
    targetsSelector,
    state => state.get('gravity'));
}

export function mkVolumeSelector() {
  return createSelector(
    targetsSelector,
    state => state.get('volume'));
}

export function mkEfficiencySelector() {
  return createSelector(
    targetsSelector,
    state => state.get('efficiency') * 100);
}

export function mkGrainsSelector() {
  const updateProportion = state =>
    state
      .get('grains')
      .map(grain => grain.update('proportion', multiply(100)));

  return createSelector(
    globalSelector,
    updateProportion);
}

export function mkTotalGrainWeightSelector() {
  const averagePpgSelector = createSelector(
    state => state.getIn(['global', 'grains']),
    state => state.reduce((accum, grain) => {
      const maxPpg = grain.get('maxPpg');
      const proportion = grain.get('proportion');

      return accum + (maxPpg * proportion);
    }, 0));

  return createSelector(
    mkGravitySelector(),
    mkVolumeSelector(),
    state => state.getIn(['global', 'targets', 'efficiency']),
    averagePpgSelector,
    (gravity, volume, efficiency, averagePpg) =>
      (gravity * volume) / (efficiency * averagePpg));
}
