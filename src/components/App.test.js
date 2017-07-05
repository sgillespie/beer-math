import { createShallow } from 'material-ui/test-utils';
import chai from 'chai';
import React from 'react';

import App from './App';

const should = chai.should();

it('renders', () => {
  const wrapper = createShallow()(
    <App />
  );

  should.exist(wrapper);
  wrapper.should.have.lengthOf(1);
});
