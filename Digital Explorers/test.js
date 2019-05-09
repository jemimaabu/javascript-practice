var assert = require("assert");

function factorize(number) {
  var primes = [];

  for (var divisor = 2; number > 1; divisor ++) {
      for(; number%divisor === 0; number/=divisor) {
          primes.push(divisor);
      }
  }

  return primes
}

function assertPrimes(number, primes) {
  assert.deepEqual(factorize(number), primes)
}

describe('Factorize feature', function () {
  it('should work', function () {
    assertPrimes(1,[])
    assertPrimes(2,[2])
  });
});