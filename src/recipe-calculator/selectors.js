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
  return createSelector(
    globalSelector,
    state => state.get('grains'));
}
