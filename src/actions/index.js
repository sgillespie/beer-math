export const UPDATE_GRAVITY = 'UPDATE_GRAVITY';
export const UPDATE_VOLUME = 'UPDATE_VOLUME';
export const UPDATE_EFFICIENCY = 'UPDATE_EFFICIENCY';
export const ADD_GRAIN = 'ADD_GRAIN';
export const DELETE_GRAIN = 'DELETE_GRAIN';
export const EDIT_GRAIN = 'EDIT_GRAIN';
export const UPDATE_GRAIN = 'UPDATE_GRAIN';

export function updateGravity(gravity) {
  return {
    type: UPDATE_GRAVITY,
    payload: gravity,
  };
}

export function updateVolume(volume) {
  return {
    type: UPDATE_VOLUME,
    payload: volume,
  };
}

export function updateEfficiency(efficiency) {
  return {
    type: UPDATE_EFFICIENCY,
    payload: efficiency,
  };
}

export function addGrain( grainType, maxPpg, proportion ) {
  return{
    type: ADD_GRAIN,

    payload: {
      grainType,
      maxPpg,
      proportion,
    },
  };
}

export function deleteGrain(key) {
  return{
    type: DELETE_GRAIN,
    payload: key,
  };
}

export function editGrain(key) {
  return {
    type: EDIT_GRAIN,
    payload: key,
  };
}

export function updateGrain(key, grainType, maxPpg, proportion) {
  return{
    type: UPDATE_GRAIN,
	
    payload: {
      key,
      grainType,
      maxPpg,
      proportion,
    },
  };
}
