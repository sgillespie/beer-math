import * as actions from './actions';
import * as constants from './constants';

describe('recipe-grains actions', () => {
  describe('updateGrainType', () => {
    it('returns correct action type', () => {
      actions.updateGrainType('type').should.deep.equal({
        type: constants.UPDATE_GRAIN_TYPE,
        payload: 'type',
      });
    });
  });

  describe('updateMaxPpg', () => {
    it('returns correct action type', () => {
      actions.updateMaxPpg(10).should.deep.equal({
        type: constants.UPDATE_MAX_PPG,
        payload: 10,
      });
    });
  });

  describe('updateProportion', () => {
    it('returns correct action type', () => {
      actions.updateProportion(1).should.deep.equal({
        type: constants.UPDATE_PROPORTION,
        payload: 1,
      });
    });
  });
});
