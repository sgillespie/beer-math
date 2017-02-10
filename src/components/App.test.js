import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import App from './App';

const should = chai.should();

it('renders', () => {
  const wrapper = shallow(
    <App />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});
