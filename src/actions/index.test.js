import chai from 'chai';

import {
  UPDATE_GRAVITY,
  UPDATE_VOLUME,
 
  updateGravity,
  updateVolume,
} from '.';

const should = chai.should();

it('updateGravity creates action UPDATE_GRAVITY', () => {
  const action = updateGravity(5);

  should.exist(action);
  action.should.deep.equal({
    type: UPDATE_GRAVITY,
    payload: 5,
  });
});

it('updateVolume creates action UPDATE_VOLUME', () => {
  const action = updateVolume(3);

  should.exist(action);
  action.should.deep.equal({
    type: UPDATE_VOLUME,
    payload: 3,
  });
});
