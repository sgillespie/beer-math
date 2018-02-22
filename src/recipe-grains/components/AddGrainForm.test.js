import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import Button from 'material-ui/Button';
import React from 'react';
import TextField from 'material-ui/TextField';

import AddGrainForm from './AddGrainForm';

const shallow = createShallow({ dive: true });

describe('AddGrainForm', () => {
  let grainForm;
  let onChangeType;
  let onChangeMaxPpg;
  let onChangeProportion;
  let onClickAdd;

  beforeEach(() => {
    onChangeType = spy();
    onChangeMaxPpg = spy();
    onChangeProportion = spy();
    onClickAdd = spy();

    grainForm = shallow(
      <AddGrainForm
        grainType="grainType"
        maxPpg="maxPpg"
        proportion="proportion"
        onChangeType={onChangeType}
        onChangeMaxPpg={onChangeMaxPpg}
        onChangeProportion={onChangeProportion}
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

  it('change grain type calls onChangeType', () => {
    const event = {
      target: {
        value: '9',
      },
    };

    grainForm
      .find(TextField)
      .find('[name="grainType"]')
      .simulate('change', event);

    onChangeType.should.have.been.calledWith('9');
  });

  it('change max ppg calls onChangeMaxPpg', () => {
    const event = {
      target: {
        value: '8',
      },
    };

    grainForm
      .find(TextField)
      .find('[name="maxPpg"]')
      .simulate('change', event);

    onChangeMaxPpg.should.have.been.calledWith('8');
  });

  it('change proportion calls onChangeProportion', () => {
    const event = {
      target: {
        value: '7',
      },
    };

    grainForm
      .find(TextField)
      .find('[name="proportion"]')
      .simulate('change', event);

    onChangeProportion.should.have.been.calledWith('7');
  });

  it('click Add triggers onClickAdd', () => {
    grainForm
      .find(Button)
      .simulate('click');

    onClickAdd.should.have.been.calledWith('grainType', 'maxPpg', 'proportion');
  });
});
