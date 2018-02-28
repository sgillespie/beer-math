import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import Button from 'material-ui/Button';
import React from 'react';
import TextField from 'material-ui/TextField';

import AddGrainForm from './AddGrainForm';

const shallow = createShallow({ dive: true });

describe('AddGrainForm', () => {
  let grainForm;
  let onClickAdd;

  beforeEach(() => {
    onClickAdd = spy();

    grainForm = shallow(
      <AddGrainForm
        grainType="grainType"
        maxPpg="maxPpg"
        proportion="proportion"
        onClickAdd={onClickAdd} />
    );
  });

  it('renders', () => {
    grainForm.should.have.lengthOf(1);
  });

  it('passes props to text fields', () => {
    const fields = grainForm.find(TextField);

    fields
      .find('[name="grainType"]')
      .prop('value')
      .should.deep.equal('grainType');

    fields
      .find('[name="maxPpg"]')
      .prop('value')
      .should.deep.equal('maxPpg');

    fields
      .find('[name="proportion"]')
      .prop('value')
      .should.deep.equal('proportion');
  });

  it('change handlers update state', () => {
    const fields = grainForm.find(TextField);

    fields
      .find('[name="grainType"]')
      .simulate('change', {
        target: { value: 'newGrainType' },
      });

    fields
      .find('[name="maxPpg"]')
      .simulate('change', {
        target: { value: 'newMaxPpg' },
      });

    fields
      .find('[name="proportion"]')
      .simulate('change', {
        target: { value: 'newProportion' },
      });

    grainForm
      .state()
      .should.deep.equal({
        grainType: 'newGrainType',
        maxPpg: 'newMaxPpg',
        proportion: 'newProportion',
      });
  });

  it('click Add triggers onClickAdd', () => {
    grainForm
      .find(Button)
      .simulate('click');

    onClickAdd.should.have.been.calledWith('grainType', 'maxPpg', 'proportion');
  });
});
