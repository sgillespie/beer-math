import chai from 'chai';

import { updateGravity, updateVolume, updateEfficiency } from '../actions';
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

it('updates volume when type is UPDATE_VOLUME', () => {
  const action = updateVolume(9);
  const newState = reduce(state, action);

  should.exist(newState);
  newState.targets.volume.should.equal(9);
});

it('updates efficiency when type is UPDATE_EFFICIENCY', () => {
  const action = updateEfficiency(9);
  const newState = reduce(state, action);

  should.exist(newState);
  newState.targets.efficiency.should.equal(9);
});
