import reducer, { initialState } from './reducer';

import * as actions from './actions';

describe('recipe-grains reducer', () => {
  it('defaults initialState', () => {
    reducer(undefined, {}).should.deep.equal(initialState);
  });

  describe('updateGrainType', () => {
    it('updates grain type', () => {
      const action = actions.updateGrainType('type');
      reducer(initialState, action)
        .get('grainType')
        .should.equal('type');
    });
  });

  describe('updateMaxPpg', () => {
    it('updates max ppg', () => {
      const action = actions.updateMaxPpg('1');
      reducer(initialState, action)
        .get('maxPpg')
        .should.equal('1');
    });
  });

  describe('updateProportion', () => {
    it('updates proportion', () => {
      const action = actions.updateProportion('2');
      reducer(initialState, action)
        .get('proportion')
        .should.equal('2');
    });
  });
});
