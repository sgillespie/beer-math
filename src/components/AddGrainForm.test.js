import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import AddGrainForm from './AddGrainForm';

const should = chai.should();

let grainForm;

beforeEach(() => {
  grainForm = shallow(
    <AddGrainForm />
  );
});

it('renders', () => {
  should.exist(grainForm);
  grainForm.should.have.lengthOf(1);
});

it('has state', () => {
  should.exist(grainForm.state());
});

it('change grain type update state', () => {
  const event = {
    target: {
      value: '9',
	},
  };
  
  grainForm.find('Textfield[name="grainType"]').simulate('change', event);
  
  grainForm.state('grainType').should.equal('9');
});
