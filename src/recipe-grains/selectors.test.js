import { fromJS } from 'immutable';

import * as selectors from './selectors';

describe('recipe-grains selectors', () => {
  const state = fromJS({
    recipeGrains: {
      grainType: 'type',
      maxPpg: '1',
      proportion: '2',
    },
  });

  describe('recipeGrainsSelector', () => {
    it('selects recipeGrains', () => {
      selectors
        .recipeGrainsSelector(state)
        .should.equal(state.get('recipeGrains'));
    });
  });

  describe('mkGrainTypeSelector', () => {
    it('selects grainType', () => {
      selectors
        .mkGrainTypeSelector()(state)
        .should.equal('type');
    });
  });

  describe('mkMaxPpgSelector', () => {
    it('selects maxPpg', () => {
      selectors
        .mkMaxPpgSelector()(state)
        .should.equal('1');
    });
  });

  describe('mkProportionSelector', () => {
    it('selects proportion', () => {
      selectors
        .mkProportionSelector()(state)
        .should.equal('2');
    });
  });
});
