import chai from 'chai';

import {
  updateGravity,
  updateVolume,
  updateEfficiency,
  addGrain,
  deleteGrain,
  editGrain,
  updateGrain,
} from '../actions';
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

    1: {
      grainType: 'Crystal 40L',
      maxPpg: '1.036', 
      proportion: '10%', 
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
  
  should.exist(newState.grains['0']);
  should.exist(newState.grains['1']);
  should.exist(newState.grains['2']);
  newState.grains['2'].should.deep.equal({
    grainType: 1,
    maxPpg: 2,
    proportion: 3,
  });
});

it('deletes grain when type is DELETE_GRAIN', () => {
  const action = deleteGrain(0);
  const newState = reduce(state, action);
  
  should.not.exist(newState.grains['0']);
});

it('edits grain when type is EDIT_GRAIN', () => {
  const action = editGrain('0');
  const newState = reduce(state, action);
  
  should.exist(newState.grains['0'].isEditing);
  newState.grains['0'].isEditing.should.be.true;
});

it('isEditing equals false when EDIT_GRAIN called twice', () => {
  const action = editGrain('0');
  const newState = reduce( reduce(state, action), action);
  
  should.exist(newState.grains['0'].isEditing);
  newState.grains['0'].isEditing.should.be.false;
});

it('updates grain when type is UPDATE_GRAIN', () => {
  const action = updateGrain('0', 'US Three Row', '1.040', '60%');
  const newState = reduce(state, action);

  should.exist(newState.grains['0']);
  newState.grains['0'].should.deep.equal({
    grainType: 'US Three Row',
    maxPpg: '1.040',
    proportion: '60%',
  });
});
