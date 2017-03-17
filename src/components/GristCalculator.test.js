import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import AddGrainForm from './AddGrainForm';
import GrainTable from './GrainTable';
import GristCalculator from './GristCalculator';

chai.use(sinonChai);
const should = chai.should();

const grains = {
  0: {
    grainType: 'type',
    maxPpg: '0',
    proportion: '1',
    weight: '2',
  }
};

let calculator,
    onClickAdd,
	onClickDelete;
	
beforeEach(() => {
  onClickAdd = spy();
  onClickDelete = spy();

  calculator = shallow(
    <GristCalculator
      grains={grains}
      onClickAdd={onClickAdd}
      onClickDelete={onClickDelete} />
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

it('passes grains to grain table', () => {
  calculator
    .find(GrainTable)
    .prop('grains')
    .should.deep.equal(grains);
});

it('passes onClickDelete to add grain form', () => {
  calculator
    .find(GrainTable)
    .prop('onClickDelete')();

  onClickDelete.should.have.been.calledWith();
});
