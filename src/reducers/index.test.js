import reducers from './';

describe('reducers', () => {
  it('has a global reducer', () => {
    reducers(undefined, {}).should.have.property('global');
  });

  it('has a recipe-grains reducer', () => {
    reducers(undefined, {}).should.have.property('recipeGrains');
  });
});
