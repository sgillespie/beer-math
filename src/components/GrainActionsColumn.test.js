import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import GrainActionsColumn from './GrainActionsColumn';

const should = chai.should();

it('renders', () => {
  const wrapper = shallow(
    <GrainActionsColumn />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});


