import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import GrainActionsColumn from './GrainActionsColumn';

chai.use(sinonChai);
const should = chai.should();

let grain,
    onClickDelete,
    onClickEdit;

beforeEach(() => {
  onClickDelete = spy();
  onClickEdit = spy();

  grain = {
    grainType: 'type',
    maxPpg: '0',
    proportion: '1',
    weight: '2',
  };
});

function render(grain) {
  return shallow(
    <GrainActionsColumn
      id="0"
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      grain={grain} />
  );
}

it('renders', () => {
  const grainActions = render(grain);

  should.exist(grainActions);
  grainActions.should.have.lengthOf(1);
});

it('click delete triggers onClickDelete', () => {
  render(grain)
    .find('IconButton[name="delete"]')
    .simulate('click');

  onClickDelete.should.have.been.calledWith('0');
});

it('click edit triggers onClickEdit', () => {
  render(grain)
    .find('IconButton[name="create"]')
    .simulate('click');

  onClickEdit.should.have.been.calledWith('0');
});

it('on page load displays edit and delete buttons', () => {
  const grainActions = render(grain);

  grainActions
    .find('IconButton[name="create"]')
    .should.have.lengthOf('1');

  grainActions
    .find('IconButton[name="delete"]')
    .should.have.lengthOf('1');

  grainActions
    .find('IconButton[name="clear"]')
    .should.have.lengthOf('0');

  grainActions
    .find('IconButton[name="check"]')
    .should.have.lengthOf('0');
});

it('save and cancel buttons display when grains.isEditing', () => {
  grain.isEditing = true;
  const grainActions = render(grain);

  grainActions
    .find('IconButton[name="create"]')
    .should.have.lengthOf('0');

  grainActions
    .find('IconButton[name="delete"]')
    .should.have.lengthOf('0');

  grainActions
    .find('IconButton[name="clear"]')
    .should.have.lengthOf('1');

  grainActions
    .find('IconButton[name="check"]')
    .should.have.lengthOf('1');
});
