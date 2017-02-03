import { shallow } from 'enzyme';
import React from 'react';

import RecipeTargets from './RecipeTargets';

let targets;

beforeEach(() => {
  targets = shallow(<RecipeTargets />);
});

it('renders', () => {
  expect(targets).toBeDefined();
});

it('has form fields', () => {
  const fields = targets.find('FormControl[type="text"]');
  expect(fields.length).toBeGreaterThan(1);
});

it('populates default values', () => {
  const fields = targets.find('FormControl[type="text"]');

  expect(fields.length).toBeGreaterThan(1);
  fields.forEach(field => expect(field.props().defaultValue).toBeDefined);
});
