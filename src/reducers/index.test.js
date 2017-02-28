import chai from 'chai';

import { updateGravity } from '../actions';
import reduce from '.';

const should = chai.should();

const state = {
  targets: {
    gravity: 0,
    volume: 1,
    efficiency: 2,
  },
};

it('updates gravity when type is UPDATE_GRAVITY', () => {
  const action = updateGravity(9);
  const newState = reduce(state, action);

  should.exist(newState);
  newState.targets.gravity.should.equal(9);
});
