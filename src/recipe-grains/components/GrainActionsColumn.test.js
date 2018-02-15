import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import IconButton from 'material-ui/IconButton';
import React from 'react';

import GrainActionsColumn from './GrainActionsColumn';

const shallow = createShallow({ dive: true });

describe('GrainActionsColumn', () => {
  let grain;
  let onClickDelete;
  let onClickEdit;
  let onClickUpdate;

  beforeEach(() => {
    onClickDelete = spy();
    onClickEdit = spy();
    onClickUpdate = spy();

    grain = {
      grainType: 'type',
      maxPpg: '0',
      proportion: '1',
      weight: '2',
    };
  });

  function render(_grain) {
    return shallow(
      <GrainActionsColumn
        id="0"
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickUpdate={onClickUpdate}
        grain={_grain} />
    );
  }

  it('renders', () => {
    const grainActions = render(grain);

    grainActions.should.have.lengthOf(1);
  });

  it('click delete triggers onClickDelete', () => {
    render(grain)
      .find(IconButton)
      .find('[name="delete"]')
      .simulate('click');

    onClickDelete.should.have.been.calledWith('0');
  });

  it('click edit triggers onClickEdit', () => {
    render(grain)
      .find(IconButton)
      .find('[name="edit"]')
      .simulate('click');

    onClickEdit.should.have.been.calledWith();
  });

  it('click clear triggers onClickEdit', () => {
    grain.isEditing = true;

    render(grain)
      .find(IconButton)
      .find('[name="cancel"]')
      .simulate('click');

    onClickEdit.should.have.been.calledWith();
  });

  it('click save triggers onClickUpdate', () => {
    grain.isEditing = true;

    render(grain)
      .find(IconButton)
      .find('[name="save"]')
      .simulate('click');

    onClickUpdate.should.have.been.calledWith();
  });

  it('displays edit and delete buttons by default', () => {
    const grainActions = render(grain);
    const buttons = grainActions.find(IconButton);

    buttons
      .find('[name="edit"]')
      .should.have.lengthOf('1');

    buttons
      .find('[name="delete"]')
      .should.have.lengthOf('1');

    buttons
      .find('[name="cancel"]')
      .should.have.lengthOf('0');

    buttons
      .find('[name="save"]')
      .should.have.lengthOf('0');
  });

  it('save and cancel buttons display when grains.isEditing', () => {
    grain.isEditing = true;
    const grainActions = render(grain);
    const buttons = grainActions.find(IconButton);

    buttons
      .find('[name="edit"]')
      .should.have.lengthOf('0');

    buttons
      .find('[name="delete"]')
      .should.have.lengthOf('0');

    buttons
      .find('[name="cancel"]')
      .should.have.lengthOf('1');

    buttons
      .find('[name="save"]')
      .should.have.lengthOf('1');
  });
});
