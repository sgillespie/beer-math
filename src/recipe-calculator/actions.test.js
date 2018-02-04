import * as actions from './actions';
import * as constants from './constants';

describe('recipe-calculator actions', () => {
  describe('updateEfficiency', () => {
    it('creates UPDATE_EFFICIENCY action', () => {
      actions.updateEfficiency(0).should.deep.equal({
        type: constants.UPDATE_EFFICIENCY,
        payload: 0,
      });
    });
  });

  describe('updateGravity', () => {
    it('creates UPDATE_GRAVITY action', () => {
      actions.updateGravity(1).should.deep.equal({
        type: constants.UPDATE_GRAVITY,
        payload: 1,
      });
    });
  });

  describe('updateVolume', () => {
    it('creates UPDATE_VOLUME action', () => {
      actions.updateVolume(2).should.deep.equal({
        type: constants.UPDATE_VOLUME,
        payload: 2,
      });
    });
  });

  describe('addGrain', () => {
    it('creates ADD_GRAIN action', () => {
      actions.addGrain('type', 1, 2).should.deep.equal({
        type: constants.ADD_GRAIN,
        payload: {
          grainType: 'type',
          maxPpg: 1,
          proportion: 2,
        },
      });
    });
  });

  describe('updateGrain', () => {
    it('creates UPDATE_GRAIN action', () => {
      actions.updateGrain(3, 'type', 4, 5).should.deep.equal({
        type: constants.UPDATE_GRAIN,
        payload: {
          key: 3,
          grainType: 'type',
          maxPpg: 4,
          proportion: 5,
        },
      });
    });
  });

  describe('deleteGrain', () => {
    it('creates DELETE_GRAIN action', () => {
      actions.deleteGrain(1).should.deep.equal({
        type: constants.DELETE_GRAIN,
        payload: 1,
      });
    });
  });

  describe('editGrain', () => {
    it('creates EDIT_GRAIN action', () => {
      actions.editGrain(9).should.deep.equal({
        type: constants.EDIT_GRAIN,
        payload: 9,
      });
    });
  });
});
