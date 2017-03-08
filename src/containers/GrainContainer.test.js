import { spy } from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import { mapDispatchToProps } from './GrainContainer';
import { addGrain } from '../actions';

chai.use(sinonChai);
const should = chai.should();

let dispatch;
beforeEach(() => {
  dispatch = spy();
});

it('mapDispatchToProps should map onClickAdd', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onClickAdd);
  props.onClickAdd( '0', '1', '2' );

  dispatch.should.have.been.calledWith(addGrain( '0', '1', '2' ));
});

