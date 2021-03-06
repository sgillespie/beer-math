import React from 'react';
import Typography from 'material-ui/Typography';
import { TableCell, TableRow } from 'material-ui/Table';
import chai from 'chai';
import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';

import GrainTable from './GrainTable';
import GrainTableRow from './GrainTableRow';

const shallow = createShallow({ dive: true });
const should = chai.should();

describe('GrainTable', () => {
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

  let grainTable;
  let onClickDelete;
  let onClickEdit;
  let onClickUpdate;

  beforeEach(() => {
    onClickDelete = spy();
    onClickEdit = spy();
    onClickUpdate = spy();

    grainTable = shallow(
      <GrainTable
        grains={grains}
        totalGrainWeight={10}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickUpdate={onClickUpdate} />
    );
  });

  it('renders', () => {
    should.exist(grainTable);
    grainTable.should.have.lengthOf(1);
  });

  it('renders GrainTableRow for each grain', () => {
    grainTable
      .find(GrainTableRow)
      .should.have.lengthOf(2);
  });

  it('passes onClickDelete to GrainTableRow', () => {
    grainTable
      .find(GrainTableRow)
      .forEach(col => col.prop('onClickDelete')());

    onClickDelete.should.have.been.calledTwice;
  });

  it('passes onClickEdit to GrainTableRow', () => {
    grainTable
      .find(GrainTableRow)
      .forEach(col => col.prop('onClickEdit')());

    onClickEdit.should.have.been.calledTwice;
  });

  it('passes onClickUpdate to GrainTableRow', () => {
    grainTable
      .find(GrainTableRow)
      .forEach(col => col.prop('onClickUpdate')());

    onClickUpdate.should.have.been.calledTwice;
  });

  it('passes grain to GrainTableRow', () => {
    const grainTableRow = grainTable
      .find(GrainTableRow);

    grainTableRow
      .first()
      .prop('grain')
      .should.deep.equal(grains['0']);

    grainTableRow
      .at(1)
      .prop('grain')
      .should.deep.equal(grains['1']);
  });

  it('passes grainId to GrainTableRow', () => {
    const grainTableRow = grainTable
      .find(GrainTableRow);

    grainTableRow
      .first()
      .prop('grainId')
      .should.equal('0');

    grainTableRow
      .at(1)
      .prop('grainId')
      .should.equal('1');
  });

  it('passes totalGrainWeight to footer', () => {
    const footerCells = grainTable
      .find(TableRow)
      .last()
      .find(TableCell);

    footerCells
      .at(3)
      .find(Typography)
      .children()
      .text()
      .should.equal('10');
  });
});
