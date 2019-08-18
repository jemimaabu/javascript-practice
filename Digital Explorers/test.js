var assert = require('assert');

function fizzBuzz(num) {
  return (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num;
}

describe('FizzBuzz', function () {
  it('should work', function () {
    assert.deepEqual(fizzBuzz(1),1);
    assert.deepEqual(fizzBuzz(2),2);
    assert.deepEqual(fizzBuzz(3),"Fizz");
    assert.deepEqual(fizzBuzz(4),4);
    assert.deepEqual(fizzBuzz(5),"Buzz");
    assert.deepEqual(fizzBuzz(6),"Fizz");
    assert.deepEqual(fizzBuzz(7),7);
    assert.deepEqual(fizzBuzz(8),8);
    assert.deepEqual(fizzBuzz(9),"Fizz");
    assert.deepEqual(fizzBuzz(10),"Buzz");
    assert.deepEqual(fizzBuzz(11),11);
    assert.deepEqual(fizzBuzz(12),"Fizz");
    assert.deepEqual(fizzBuzz(13),13);
    assert.deepEqual(fizzBuzz(14),14);
    assert.deepEqual(fizzBuzz(15),"FizzBuzz");
  });
});

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