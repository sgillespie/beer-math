import { createShallow } from 'material-ui/test-utils';
import React from 'react';
import Input from 'material-ui/Input';

import EditableGrainField from './EditableGrainField';

const shallow = createShallow({ dive: false });

function render(isEditing) {
  return shallow(
    <EditableGrainField
      isEditing={isEditing}
      value="default"
      label="label"
      x="0"
      y="1" />
  );
}

describe('EditableGrainField', () => {
  it('renders', () => {
    const field = render(true);

    field.should.have.lengthOf(1);
  });

  it('renders a TextField when isEditing', () => {
    render(true)
      .find(Input)
      .should.have.lengthOf(1);
  });

  it('renders a span when not isEditing', () => {
    render(false)
      .find('span')
      .should.have.lengthOf(1);
  });

  it('defaults isEditing to false', () => {
    shallow(<EditableGrainField value="value" label="label" />)
      .instance()
      .props
      .isEditing
      .should.be.false;
  });
});
