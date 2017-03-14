import chai from 'chai';

import {
  UPDATE_GRAVITY,
  UPDATE_VOLUME,
  UPDATE_EFFICIENCY,
  ADD_GRAIN,
  DELETE_GRAIN,
 
  updateGravity,
  updateVolume,
  updateEfficiency,
  addGrain,
  deleteGrain,
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

it('updateEfficiency creates action UPDATE_EFFICIENCY', () => {
  const action = updateEfficiency(7);

  should.exist(action);
  action.should.deep.equal({
    type: UPDATE_EFFICIENCY,
    payload: 7,
  });
});

it('addGrain creates action ADD_GRAIN', () => {
  const action = addGrain(1, 2, 3);

  should.exist(action);
  action.should.deep.equal({
    type: ADD_GRAIN,
    payload: {
	  grainType: 1,
	  maxPpg: 2,
	  proportion: 3,
	},
  });
});

it('deleteGrain creates action DELETE_GRAIN', () => {
  const action = deleteGrain(0);
  
  should.exist(action);
  action.should.deep.equal({
    type: DELETE_GRAIN,
	payload: 0,
  });
});