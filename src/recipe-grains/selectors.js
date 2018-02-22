import { createSelector } from 'reselect';

export function recipeGrainsSelector(state) {
  return state.get('recipeGrains');
}

export function mkGrainTypeSelector() {
  return createSelector(
    recipeGrainsSelector,
    state => state.get('grainType'));
}

export function mkMaxPpgSelector() {
  return createSelector(
    recipeGrainsSelector,
    state => state.get('maxPpg'));
}

export function mkProportionSelector() {
  return createSelector(
    recipeGrainsSelector,
    state => state.get('proportion'));
}
