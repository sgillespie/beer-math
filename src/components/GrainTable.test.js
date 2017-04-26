import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

import EditableGrainField from './EditableGrainField';
import GrainTable from './GrainTable';
import GrainActionsColumn from './GrainActionsColumn';

chai.use(sinonChai);
const should = chai.should();

const grains = {
  0: {
    grainType: 'type',
    maxPpg: '0',
    proportion: '1',
    weight: '2',
  },

  1: {
    grainType: 'type2',
    maxPpg: '3',
    proportion: '4',
    weight: '5',
    isEditing: true,
  },
};

let grainTable,
    onClickDelete,
    onClickEdit;
	
beforeEach(() => {
  onClickDelete = spy();
  onClickEdit = spy();

  grainTable = shallow(
    <GrainTable
      grains={grains}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit} />
  );
});

it('renders', () => {
  should.exist(grainTable);
  grainTable.should.have.lengthOf(1);
});

it('passes onClickDelete to Grain Actions Column', () => {
  grainTable
    .find(GrainActionsColumn)
    .forEach(col => col.prop('onClickDelete')());

  onClickDelete.should.have.been.called.twice;
});

it('passes onClickEdit to Grain Actions Column', () => {
  grainTable
    .find(GrainActionsColumn)
    .forEach(col => col.prop('onClickEdit')());

  onClickEdit.should.have.been.called.twice;
});

it('renders EditableGrainFields for each grain', () => {
  grainTable
    .find('tbody tr')
    .forEach(row => row.find(EditableGrainField).should.have.length.above(0));
});

it('passes grain.isEditing to EditableGrainField', () => {
  const rows = grainTable
    .find('tbody tr')

  rows
    .first()
    .find(EditableGrainField)
    .forEach(field => (!!field.props().isEditing).should.not.be.ok);

  rows
    .at(1)
    .find(EditableGrainField)
    .forEach(field => field.prop('isEditing').should.be.ok);
});
