import chai from 'chai';
import { fromJS } from 'immutable';
import { spy } from 'sinon';

import { addGrain } from '../../recipe-calculator/actions';
import {
  updateGrainType,
  updateMaxPpg,
  updateProportion,
} from '../actions';
import { mapDispatchToProps, mapStateToProps } from './AddGrainContainer';

const should = chai.should();

describe('AddGrainContainer', () => {
  const state = fromJS({
    recipeGrains: {
      grainType: 'type',
      maxPpg: '1',
      proportion: '2',
    },
  });

  describe('mapStateToProps', () => {
    it('maps grain type', () => {
      mapStateToProps()(state).should.have.property(
        'grainType', state.getIn(['recipeGrains', 'grainType']));
    });

    it('maps maxPpg', () => {
      mapStateToProps()(state).should.have.property(
        'maxPpg', state.getIn(['recipeGrains', 'maxPpg']));
    });

    it('maps proportion', () => {
      mapStateToProps()(state).should.have.property(
        'proportion', state.getIn(['recipeGrains', 'proportion']));
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    let props;
    beforeEach(() => {
      dispatch = spy();
      props = mapDispatchToProps(dispatch);
    });

    it('maps onChangeType', () => {
      should.exist(props.onChangeType);
      props.onChangeType('type');

      dispatch.should.have.been.calledWith(updateGrainType('type'));
    });

    it('maps onChangeMaxPpg', () => {
      should.exist(props.onChangeMaxPpg);
      props.onChangeMaxPpg('1');

      dispatch.should.have.been.calledWith(updateMaxPpg('1'));
    });

    it('maps onChangeProportion', () => {
      should.exist(props.onChangeProportion);
      props.onChangeProportion('2');

      dispatch.should.have.been.calledWith(updateProportion('2'));
    });

    it('maps onClickAdd', () => {
      should.exist(props.onClickAdd);
      props.onClickAdd('type', '1', '2');

      dispatch
        .should.have.been.calledWith(updateGrainType(''))
        .and.calledWith(updateMaxPpg(''))
        .and.calledWith(updateProportion(''))
        .and.calledWith(addGrain('type', '1', '2'));
    });
  });
});
