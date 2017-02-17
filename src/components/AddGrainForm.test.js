import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import AddGrainForm from './AddGrainForm';

const should = chai.should();

it('renders', () => {
  const wrapper = shallow(
    <AddGrainForm />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});

