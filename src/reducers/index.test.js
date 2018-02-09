import reducers from './';

describe('reducers', () => {
  it('has a global reducer', () => {
    reducers(undefined, {}).should.have.property('global');
  });
});
