import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import GrainTable from './GrainTable';

const should = chai.should();

it('renders', () => {
  const wrapper = shallow(
    <GrainTable />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});


