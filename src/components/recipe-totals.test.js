import { shallow } from 'enzyme';
import FormControl from 'react-bootstrap/lib/FormControl';
import React from 'react';

import RecipeTotals from './recipe-totals';

let totals;

beforeEach(() => {
  totals = shallow(<RecipeTotals />);
});

it('renders', () => {
  expect(totals).toBeDefined();
});

it('has a form field', () => {
  expect(totals.find(FormControl)).toHaveLength(1);
});
