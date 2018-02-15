import chai from 'chai';
import reducer, { initialState } from './reducer';
import * as actions from './actions';

const should = chai.should();

describe('recipe-calculator reducer', () => {
  it('defaults initialState', () => {
    reducer(undefined, {}).should.equal(initialState);
  });

  describe('updateEfficiency', () => {
    it('update efficiency', () => {
      const action = actions.updateEfficiency(0);
      reducer(initialState, action)
        .getIn(['targets', 'efficiency'])
        .should.equal(0);
    });
  });

  describe('updateGravity', () => {
    it('updates gravity', () => {
      const action = actions.updateGravity(1);

      reducer(initialState, action)
        .getIn(['targets', 'gravity'])
        .should.equal(1);
    });
  });

  describe('updateVolume', () => {
    it('updates volume', () => {
      const action = actions.updateVolume(2);

      reducer(initialState, action)
        .getIn(['targets', 'volume'])
        .should.equal(2);
    });
  });

  describe('addGrain', () => {
    it('adds a grain', () => {
      const action = actions.addGrain('type', 4, 5);

      reducer(initialState, action)
        .getIn(['grains', '3'])
        .toJS()
        .should.deep.equal({
          grainType: 'type',
          maxPpg: 4,
          proportion: 5,
        });
    });
  });

  describe('updateGrain', () => {
    it('updates an existing grain', () => {
      const action = actions.updateGrain('0', 'type', 1, 2);

      reducer(initialState, action)
        .getIn(['grains', '0'])
        .toJS()
        .should.deep.equal({
          grainType: 'type',
          maxPpg: 1,
          proportion: 2,
        });
    });
  });

  describe('deleteGrain', () => {
    it('deletes an existing grain', () => {
      const action = actions.deleteGrain('0');
      const newState = reducer(initialState, action);

      should.not.exist(newState.getIn(['grains', '0']));
    });
  });

  describe('editGrain', () => {
    it('marks a grain as editing', () => {
      const action = actions.editGrain('0');

      reducer(initialState, action)
        .getIn(['grains', '0', 'isEditing'])
        .should.be.true;
    });

    it('unmarks a grains when editing is true', () => {
      const action = actions.editGrain('0');

      reducer(reducer(initialState, action), action)
        .getIn(['grains', '0', 'isEditing'])
        .should.be.false;
    });
  });
});
