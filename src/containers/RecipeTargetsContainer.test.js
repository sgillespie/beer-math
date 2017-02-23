import { spy } from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import { mapDispatchToProps } from './RecipeTargetsContainer';
import { updateGravity } from '../actions';

chai.use(sinonChai);
const should = chai.should();

let dispatch;
beforeEach(() => {
  dispatch = spy();
});

it('mapDispatchToProps should map onChangeGravity', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onChangeGravity);
  props.onChangeGravity('0');

  dispatch.should.have.been.calledWith(updateGravity('0'));
});
