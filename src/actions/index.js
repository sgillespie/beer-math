export const UPDATE_GRAVITY = 'UPDATE_GRAVITY';

export function updateGravity(gravity) {
  return {
    type: UPDATE_GRAVITY,
    payload: gravity,
  };
}
