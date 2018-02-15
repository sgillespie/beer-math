import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import Button from 'material-ui/Button';
import React from 'react';
import TextField from 'material-ui/TextField';
import chai from 'chai';

import AddGrainForm from './AddGrainForm';

const shallow = createShallow({ dive: true });
const should = chai.should();

describe('AddGrainForm', () => {
  let grainForm;
  let onClickAdd;

  beforeEach(() => {
    onClickAdd = spy();

    grainForm = shallow(
      <AddGrainForm onClickAdd={onClickAdd} />
    );
  });

  it('renders', () => {
    grainForm.should.have.lengthOf(1);
  });

  it('has state', () => {
    should.exist(grainForm.state());
  });

  it('change grain type updates state', () => {
    const event = {
      target: {
        value: '9',
      },
    };

    grainForm
      .find(TextField)
      .find('[name="grainType"]')
      .simulate('change', event);

    grainForm.state('grainType').should.equal('9');
  });

  it('click Add triggers onClickAdd', () => {
    grainForm
      .find(Button)
      .simulate('click');

    onClickAdd.should.have.been.calledWith();
  });
});