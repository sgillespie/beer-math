import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import GrainActionsColumn from './GrainActionsColumn';

chai.use(sinonChai);
const should = chai.should();

let grainActions,
    onClickDelete;
beforeEach(() => {
  onClickDelete = spy();

  grainActions = shallow(
    <GrainActionsColumn 
      id="0"
      onClickDelete={onClickDelete} />
  );
});

it('renders', () => {
  should.exist(grainActions);
  grainActions.should.have.lengthOf(1);
});

it('click delete triggers onClickDelete', () => {
  grainActions 
    .find('IconButton[name="delete"]')
    .simulate('click');

  onClickDelete.should.have.been.calledWith('0');
});
