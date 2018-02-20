import React from 'react';
import { createShallow } from 'material-ui/test-utils';

import GrainContainer from '../../recipe-grains/containers/GrainContainer';
import RecipeCalculator from './RecipeCalculator';
import RecipeTargets from '../../recipe-targets/containers/RecipeTargetsContainer';

const shallow = createShallow({ dive: true });

describe('RecipeCalculator', () => {
  let recipeCalculator;

  beforeEach(() => {
    recipeCalculator = shallow(
      <RecipeCalculator />
    );
  });

  it('renders', () => {
    recipeCalculator.should.have.lengthOf(1);
  });

  it('renders RecipeTargetsContainer', () => {
    recipeCalculator
      .find(RecipeTargets)
      .should.have.lengthOf(1);
  });

  it('renders GrainsContainer', () => {
    recipeCalculator
      .find(GrainContainer)
      .should.have.lengthOf(1);
  });
});
