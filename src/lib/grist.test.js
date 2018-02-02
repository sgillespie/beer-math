import chai from 'chai';

import calculateGrist, { grainWeight, grainWeights, totalGristWeight } from './grist';

const should = chai.should();

describe('totalGristWeight', () => {
  it('is defined', () => {
    should.exist(totalGristWeight);
  });

  it('calculates total weight from one grain', () => {
    totalGristWeight(1, 6, 1, [
      {
        maxPpg: 1,
        proportion: 1,
      },
    ]).should.equal(6);
  });

  it('calculates total weight from multiple grains', () => {
    totalGristWeight(1, 6, 1, [
      {
        maxPpg: 1,
        proportion: 0.5,
      },
      {
        maxPpg: 3,
        proportion: 0.5,
      },
    ]).should.equal(3);
  });
});

describe('grainWeight', () => {
  it('calculates simple weight', () => {
    grainWeight(1, 1).should.equal(1);
    grainWeight(1, 0.5).should.equal(0.5);
    grainWeight(10, 0.7).should.equal(7);
    grainWeight(10, 0.65).should.equal(6.5);
  });
});

describe('grainWeights', () => {
  it('calculates weight from a single grain', () => {
    grainWeights(10, [{ proportion: 1 }])
      .should.deep.equal([{
        proportion: 1,
        weight: 10,
      }]);
  });

  it('calculates weight from multiple grains', () => {
    const grains = [
      { proportion: 0.7 },
      { proportion: 0.3 },
    ];

    grainWeights(10, grains)
      .should.deep.equal([
        {
          proportion: 0.7,
          weight: 7,
        },

        {
          proportion: 0.3,
          weight: 3,
        },
      ]);
  });
});

describe('calculateGrist', () => {
  it('calculates grist from single grain', () => {
    const grain = {
      maxPpg: 1,
      proportion: 1,
    };

    calculateGrist(1, 6, 1, [grain])
      .should.deep.equal({
        weight: 6,
        grains: [{
          maxPpg: 1,
          proportion: 1,
          weight: 6,
        }],
      });
  });

  it('calculates grist from multiple grains', () => {
    const grains = [
      {
        maxPpg: 1,
        proportion: 0.5,
      },

      {
        maxPpg: 3,
        proportion: 0.5,
      },
    ];

    calculateGrist(1, 6, 1, grains)
      .should.deep.equal({
        weight: 3,

        grains: [
          {
            maxPpg: 1,
            proportion: 0.5,
            weight: 1.5,
          },

          {
            maxPpg: 3,
            proportion: 0.5,
            weight: 1.5,
          },
        ],
      });
  });
});
