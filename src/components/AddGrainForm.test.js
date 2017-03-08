import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

import AddGrainForm from './AddGrainForm';

chai.use(sinonChai);
const should = chai.should();

let grainForm;
let onClickAdd;

beforeEach(() => {
  onClickAdd = spy();
  
  grainForm = shallow(
    <AddGrainForm onClickAdd={onClickAdd}/>
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

it('click Add triggers onClickAdd', () => {  
  grainForm.find('Button').simulate('click');
  
  onClickAdd.should.have.been.calledWith();
});
