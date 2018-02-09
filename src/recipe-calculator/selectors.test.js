import { fromJS } from 'immutable';
import * as selectors from './selectors';

describe('recipe-calculator selectors', () => {
  const state = fromJS({
    global: {
      targets: {
        gravity: 0,
        volume: 1,
        efficiency: 2,
      },

      grains: {
        0: {
          grainType: 'grainType',
          maxPpg: 3,
          proportin: 4,
        },
      },
    },
  });
  
  describe('globalSelector', () => {
    it('selects global state', () => {
      selectors
        .globalSelector(state)
        .should.equal(state.get('global'));
    });
  });

  describe('targetsSelector', () => {
    it('selects targets', () => {
      selectors
        .targetsSelector(state)
        .should.deep.equal(state.getIn(['global', 'targets']));
    });
  });

  describe('mkGravitySelector', () => {
    it('selects gravity', () => {
      selectors
        .mkGravitySelector()(state)
        .should.equal(0);
    });
  });

  describe('mkVolumeSelector', () => {
    it('selects volume', () => {
      selectors
        .mkVolumeSelector()(state)
        .should.equal(1);
    });
  });

  describe('mkGrainsSelector', () => {
    it('selects grains', () => {
      selectors
        .mkGrainsSelector()(state)
        .should.equal(state.getIn(['global', 'grains']));
    });
  });
});
