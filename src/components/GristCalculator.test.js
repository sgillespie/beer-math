import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import AddGrainForm from './AddGrainForm';
import GristCalculator from './GristCalculator';

chai.use(sinonChai);
const should = chai.should();

let calculator,
    onClickAdd;
beforeEach(() => {
  onClickAdd = spy();

  calculator = shallow(
    <GristCalculator onClickAdd={onClickAdd} />
  );
});

it('renders', () => {
  should.exist(calculator);
  calculator.should.have.lengthOf(1);
});

it('passes onClickAdd to add grain form', () => {
  calculator
    .find(AddGrainForm)
    .prop('onClickAdd')();

  onClickAdd.should.have.been.calledWith();
});
