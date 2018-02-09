import { fromJS } from 'immutable';
import { spy } from 'sinon';
import chai from 'chai';

import { mapStateToProps, mapDispatchToProps } from './RecipeTargetsContainer';
import {
  updateGravity,
  updateVolume,
  updateEfficiency,
} from '../../recipe-calculator/actions';

const should = chai.should();

describe('RecipeTargetsContainer', () => {
  const state = fromJS({
    global: {
      targets: {
        gravity: 0,
        volume: 1,
        efficiency: 2,
      },
    },
  });

  describe('mapStateToProps', () => {
    it('should map targets', () => {
      mapStateToProps()(state).should.deep.equal({
        gravity: 0,
        volume: 1,
        efficiency: 2,
      });
    });
  });

  describe('mapDispatchToProps', () => {
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
  });
});
