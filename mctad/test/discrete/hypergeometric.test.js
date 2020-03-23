require('../../mctad');
var assert = require('chai').assert;

describe('hypergeometric', function() {
  it('can return undefined when parameters are not valid', function() {
    assert.isUndefined(mctad.hypergeometric(-10, 4, 3), 'N should be positive');
    assert.isUndefined(mctad.hypergeometric(10, -4, 3), 'K should be positive');
    assert.isUndefined(mctad.hypergeometric(10, 4, -3), 'n should be positive');
    assert.isUndefined(mctad.hypergeometric(10.5, 4, 3), 'N should be an Integer');
    assert.isUndefined(mctad.hypergeometric(10, 4.2, 3), 'K should be an Integer');
    assert.isUndefined(mctad.hypergeometric(10, 4, 3.1), 'n should be an Integer');
    assert.isUndefined(mctad.hypergeometric(10, 11, 1), 'K should be ≤ N');
    assert.isUndefined(mctad.hypergeometric(10, 4, 11), 'n should be ≤ N');
  });

  it('can generate stats, probability mass and cumulative distribution functions for p = 0.25', function() {
    assert.isObject(mctad.hypergeometric(9, 3, 4));
    assert.closeTo(mctad.hypergeometric(9, 3, 4).mean, 1.33333, mctad.ε);
    assert.isUndefined(mctad.hypergeometric(9, 3, 4).median);
    assert.deepEqual(mctad.hypergeometric(9, 3, 4).mode, [1]);
    assert.closeTo(mctad.hypergeometric(9, 3, 4).variance, 0.55556, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4).skewness, 0.06389, mctad.ε);
    assert.isUndefined(mctad.hypergeometric(9, 3, 4).entropy);
    assert.deepEqual(mctad.hypergeometric(9, 3, 4).domain, { min: 0, max: 3 });
    assert.closeTo(mctad.hypergeometric(9, 3, 4).range.min, 0, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4).range.max, 0.5, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[0].pmf, 0.11905, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[0].cdf, 0.11905, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[1].pmf, 0.47619, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[1].cdf, 0.59524, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[2].pmf, 0.35714, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[2].cdf, 0.95238, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[3].pmf, 0.04762, mctad.ε);
    assert.closeTo(mctad.hypergeometric(9, 3, 4)[3].cdf, 1.0, mctad.ε);
  });

});

// Check that `N`, `K`, and `n` are positive Integers, with K ≤ N, n ≤ K.
