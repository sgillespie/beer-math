export const UPDATE_GRAVITY = 'UPDATE_GRAVITY';
export const UPDATE_VOLUME = 'UPDATE_VOLUME';

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
