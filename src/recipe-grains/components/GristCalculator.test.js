import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import React from 'react';

import AddGrainForm from './AddGrainForm';
import GrainTable from './GrainTable';
import GristCalculator from './GristCalculator';

const shallow = createShallow({ dive: true });

describe('GristCalculator', () => {
  const grains = {
    0: {
      grainType: 'type',
      maxPpg: '0',
      proportion: '1',
      weight: '2',
    },
  };

  let calculator;
  let onClickAdd;
  let onClickDelete;
  let onClickEdit;
  let onClickUpdate;

  beforeEach(() => {
    onClickAdd = spy();
    onClickDelete = spy();
    onClickEdit = spy();
    onClickUpdate = spy();

    calculator = shallow(
      <GristCalculator
        grains={grains}
        onClickAdd={onClickAdd}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickUpdate={onClickUpdate} />
    );
  });

  it('renders', () => {
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

  it('passes onClickDelete to Grain Table', () => {
    calculator
      .find(GrainTable)
      .prop('onClickDelete')();

    onClickDelete.should.have.been.calledWith();
  });

  it('passes onClickEdit to Grain Table', () => {
    calculator
      .find(GrainTable)
      .prop('onClickEdit')();

    onClickEdit.should.have.been.calledWith();
  });

  it('passes onClickUpdate to Grain Table', () => {
    calculator
      .find(GrainTable)
      .prop('onClickUpdate')();

    onClickUpdate.should.have.been.calledWith();
  });
});
