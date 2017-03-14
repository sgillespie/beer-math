import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';

import GrainTable from './GrainTable';

const should = chai.should();

const grains = [
  {
    type: 'type',
    maxPpg: '0',
    proportion: '1',
    weight: '2',
  }
];

let grainTable;
beforeEach(() => {
  grainTable = shallow(
    <GrainTable grains={grains} />
  );
});

it('renders', () => {
  should.exist(grainTable);
  grainTable.should.have.lengthOf(1);
});


