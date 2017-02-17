import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import GristCalculator from './GristCalculator';

const should = chai.should();

it('renders', () => {
  const wrapper = shallow(
    <GristCalculator />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});


