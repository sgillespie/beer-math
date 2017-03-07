import chai from 'chai';

import { updateGravity, updateVolume, updateEfficiency, addGrain } from '../actions';
import reduce from '.';

const should = chai.should();

const state = {
  targets: {
    gravity: 0,
    volume: 1,
    efficiency: 2,
  },
  
  grains: {
    0: {
      grainType: 'US Two Row',
      maxPpg: '1.034', 
      proportion: '90%', 
    },
  }
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

it('adds grain when type is ADD_GRAIN', () => {
  const action = addGrain( 1, 2, 3);
  const newState = reduce(state, action);
  
  should.exist(newState.grains['1']);
  newState.grains['1'].should.deep.equal({
    grainType: 1,
	maxPpg: 2,
	proportion: 3,
  });
});
