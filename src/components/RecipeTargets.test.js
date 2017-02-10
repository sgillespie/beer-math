import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import RecipeTargets from './RecipeTargets';

const should = chai.should();

it('render', () => {
  const wrapper = shallow(
    <RecipeTargets />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});
