import chai from 'chai';

import {
  UPDATE_GRAVITY,
 
  updateGravity,
} from '.';

const should = chai.should();

it('updateGravity creates action UPDATE_GRAVITY', () => {
  const action = updateGravity(5);

  should.exist(action);
  action.should.deep.equal({
    type: UPDATE_GRAVITY,
    payload: 5,
  });
});
