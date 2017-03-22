import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

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
  }
};

let grainTable,
    onClickDelete;
	
beforeEach(() => {
  onClickDelete = spy();

  grainTable = shallow(
    <GrainTable grains={grains} onClickDelete={onClickDelete}/>
  );
});

it('renders', () => {
  should.exist(grainTable);
  grainTable.should.have.lengthOf(1);
});

it('passes onClickDelete to Grain Actions Column', () => {
  grainTable
    .find(GrainActionsColumn)
    .prop('onClickDelete')();

  onClickDelete.should.have.been.calledWith();
});

