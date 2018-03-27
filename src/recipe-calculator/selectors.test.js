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
          proportion: 0.4,
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
        .toJS()
        .should.deep.equal({
          0: {
            grainType: 'grainType',
            maxPpg: 3,
            proportion: 40,
          },
        });
    });
  });

  describe('mkTotalGrainWeightSelector', () => {
    const grainState = fromJS({
      global: {
        targets: {
          gravity: 1,
          volume: 6,
          efficiency: 1,
        },
      },
    });

    it('calculates from single grain', () => {
      const _grainState = grainState.setIn(['global', 'grains'], fromJS({
        0: {
          maxPpg: 1,
          proportion: 1,
        },
      }));

      selectors
        .mkTotalGrainWeightSelector()(_grainState)
        .should.equal(6);
    });

    it('calculates from multiple grains', () => {
      const _grainState = grainState.setIn(['global', 'grains'], fromJS({
        0: {
          maxPpg: 1,
          proportion: 0.5,
        },
        1: {
          maxPpg: 3,
          proportion: 0.5,
        },
      }));

      selectors
        .mkTotalGrainWeightSelector()(_grainState)
        .should.equal(3);
    });
  });
});
