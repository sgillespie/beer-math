import { spy } from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import { mapDispatchToProps, mapStateToProps } from './GrainContainer';
import { addGrain, deleteGrain, editGrain, updateGrain } from '../../actions';

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
};

let dispatch;
beforeEach(() => {
  dispatch = spy();
});

it('mapDispatchToProps should map onClickAdd', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onClickAdd);
  props.onClickAdd('0', '1', '2');

  dispatch.should.have.been.calledWith(addGrain('0', '1', '2'));
});

it('mapDispatchToProps should map onClickDelete', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onClickDelete);
  props.onClickDelete('0');

  dispatch.should.have.been.calledWith(deleteGrain('0'));
});

it('mapStateToProps maps grains', () => {
  const props = mapStateToProps(state);
  should.exist(props.grains);
});

it('mapDispatchToProps should map onClickEdit', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onClickEdit);
  props.onClickEdit('0');

  dispatch.should.have.been.calledWith(editGrain('0'));
});

it('mapDispatchToProps should map onClickUpdate', () => {
  const props = mapDispatchToProps(dispatch);

  should.exist(props.onClickUpdate);
  props.onClickUpdate('0', '1', '2', '3');

  dispatch.should.have.been.calledWith(updateGrain('0', '1', '2', '3'));
});
