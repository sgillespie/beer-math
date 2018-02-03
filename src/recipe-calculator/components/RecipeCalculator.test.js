import { createShallow } from 'material-ui/test-utils';
import React from 'react';

import App from './RecipeCalculator';

const shallow = createShallow();

describe('RecipeCalculator', () => {
  it('renders', () => {
    const wrapper = shallow(
      <App />
    );

    wrapper.should.have.lengthOf(1);
  });
});
