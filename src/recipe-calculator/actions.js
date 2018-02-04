import { createAction } from 'redux-actions';
import * as constants from './constants';

// synchronous actions

// recipe target actions
export const updateEfficiency = createAction(constants.UPDATE_EFFICIENCY);
export const updateGravity = createAction(constants.UPDATE_GRAVITY);
export const updateVolume = createAction(constants.UPDATE_VOLUME);

// recipe grains actions
export const addGrain = createAction(constants.ADD_GRAIN,
  ((grainType, maxPpg, proportion) => ({
    grainType,
    maxPpg,
    proportion,
  })));

export const updateGrain = createAction(constants.UPDATE_GRAIN,
  ((key, grainType, maxPpg, proportion) => ({
    key,
    grainType,
    maxPpg,
    proportion,
  })));

export const deleteGrain = createAction(constants.DELETE_GRAIN);

// TODO: move this one to recipe-grains
export const editGrain = createAction(constants.EDIT_GRAIN);

