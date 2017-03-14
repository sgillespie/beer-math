import { spy } from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import { mapDispatchToProps, mapStateToProps } from './GrainContainer';
import { addGrain } from '../actions';

chai.use(sinonChai);
const should = chai.should();

const state = {
  grains: {
    0: {
      grainType: 'type-0',
      maxPpg: '0', 
      proportion: '1', 
    },

    1: {
      grainType: 'type-1',
      maxPpg: '2', 
      proportion: '3', 
    },
  },
}

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

it('mapStateToProps maps grains', () => {
  const props = mapStateToProps(state);

  should.exist(props.grains);
  props.grains.should.be.an.instanceOf(Array);

  props
    .grains
    .forEach(grain => grain.should.include.key('id'));
});

