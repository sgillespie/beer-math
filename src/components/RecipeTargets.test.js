import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import RecipeTargets from './RecipeTargets';

chai.use(sinonChai);
const should = chai.should();

let onChangeGravity,
    recipeTargets;

beforeEach(() => {
  onChangeGravity = spy();
  recipeTargets = shallow(
    <RecipeTargets onChangeGravity={onChangeGravity} />
  );
});

it('renders', () => {
  should.exist(recipeTargets);
  recipeTargets.should.have.lengthOf(1);
});

it('change gravity triggers onChangeGravity', () => {
  const event = {
    target: {
      value: '0',
    },
  };

  recipeTargets
    .find('Textfield[name="gravity"]')
    .simulate('change', event);

  onChangeGravity.should.have.been.calledWith('0');
});
