import { createAction } from 'redux-actions';
import * as constants from './constants';

// synchronous actions

// add grain actions
export const updateGrainType = createAction(constants.UPDATE_GRAIN_TYPE);
export const updateMaxPpg = createAction(constants.UPDATE_MAX_PPG);
export const updateProportion = createAction(constants.UPDATE_PROPORTION);
