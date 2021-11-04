const { sum } = require('./sum-nums');

describe('Sum Nums Test', () => {
  it('sum arr test', () => {
    if (sum([1, 2, 3]) !== 6) {
      throw Error('does not work');
    }
  });
});