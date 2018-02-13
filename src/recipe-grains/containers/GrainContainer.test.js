import chai from 'chai';
import { fromJS } from 'immutable';
import { spy } from 'sinon';

import { mapDispatchToProps, mapStateToProps } from './GrainContainer';
import {
  addGrain,
  deleteGrain,
  editGrain,
  updateGrain,
} from '../../recipe-calculator/actions';

const should = chai.should();

describe('GrainContainer', () => {
  const state = fromJS({
    global: {
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
    },
  });

  describe('mapStateToProps', () => {
    it('maps grains', () => {
      mapStateToProps()(state).should.have.property(
        'grains', state.getIn(['global', 'grains']));
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = spy();
    });

    it('maps onClickAdd', () => {
      const props = mapDispatchToProps(dispatch);

      should.exist(props.onClickAdd);
      props.onClickAdd('0', '1', '2');

      dispatch.should.have.been.calledWith(addGrain('0', '1', '2'));
    });

    it('maps onClickDelete', () => {
      const props = mapDispatchToProps(dispatch);

      should.exist(props.onClickDelete);
      props.onClickDelete('0');

      dispatch.should.have.been.calledWith(deleteGrain('0'));
    });

    it('maps onClickEdit', () => {
      const props = mapDispatchToProps(dispatch);

      should.exist(props.onClickEdit);
      props.onClickEdit('0');

      dispatch.should.have.been.calledWith(editGrain('0'));
    });

    it('maps onClickUpdate', () => {
      const props = mapDispatchToProps(dispatch);

      should.exist(props.onClickUpdate);
      props.onClickUpdate('0', '1', '2', '3');

      dispatch.should.have.been.calledWith(updateGrain('0', '1', '2', '3'));
    });
  });
});
