import store from './';

describe('store', () => {
  it('returns valid store', () => {
    store().should.be.an.instanceof(Object);
  });

  it('passes initialState to store', () => {
    const initialState = {
      global: {
        initialState: true,
      },
    };

    store(initialState)
      .getState()
      .toJS()
      .should.deep.equal(initialState);
  });
});
