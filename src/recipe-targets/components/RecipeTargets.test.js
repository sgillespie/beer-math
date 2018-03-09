import { createShallow } from 'material-ui/test-utils';
import { spy } from 'sinon';
import React from 'react';

import RecipeTargets from './RecipeTargets';

const shallow = createShallow({ dive: true });

describe('RecipeTargets', () => {
  let onChangeGravity;
  let onChangeVolume;
  let onChangeEfficiency;
  let recipeTargets;

  beforeEach(() => {
    onChangeGravity = spy();
    onChangeVolume = spy();
    onChangeEfficiency = spy();

    recipeTargets = shallow(
      <RecipeTargets
        onChangeGravity={onChangeGravity}
        onChangeVolume={onChangeVolume}
        onChangeEfficiency={onChangeEfficiency}
        gravity={1.034}
        volume={6}
        efficiency={90} />
    );
  });

  it('renders', () => {
    recipeTargets.should.have.lengthOf(1);
  });

  it('passes props to text fields', () => {
    recipeTargets
      .find('[name="gravity"]')
      .prop('value')
      .should.equal(1.034);

    recipeTargets
      .find('[name="volume"]')
      .prop('value')
      .should.equal(6);

    recipeTargets
      .find('[name="efficiency"]')
      .prop('value')
      .should.equal(90);
  });

  it('change gravity triggers onChangeGravity', () => {
    const event = {
      target: {
        value: '0',
      },
    };

    recipeTargets
      .find('TextField[name="gravity"]')
      .simulate('change', event);

    onChangeGravity.should.have.been.calledWith('0');
  });

  it('change volume triggers onChangeVolume', () => {
    const event = {
      target: {
        value: '9',
      },
    };

    recipeTargets
      .find('TextField[name="volume"]')
      .simulate('change', event);

    onChangeVolume.should.have.been.calledWith('9');
  });

  it('change efficiency triggers onChangeEfficiency', () => {
    const event = {
      target: {
        value: '9',
      },
    };

    recipeTargets
      .find('TextField[name="efficiency"]')
      .simulate('change', event);

    onChangeEfficiency.should.have.been.calledWith('9');
  });
});
