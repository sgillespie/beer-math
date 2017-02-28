import { spy } from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import { mapDispatchToProps } from './RecipeTargetsContainer';
import { updateGravity, updateVolume, updateEfficiency } from '../actions';

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

it('mapDispatchToProps should map onChangeVolume', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onChangeVolume);
  props.onChangeVolume('9');

  dispatch.should.have.been.calledWith(updateVolume('9'));
});

it('mapDispatchToProps should map onChangeEfficiency', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onChangeEfficiency);
  props.onChangeEfficiency('9');

  dispatch.should.have.been.calledWith(updateEfficiency('9'));
});
