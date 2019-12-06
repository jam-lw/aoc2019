const assert = require('assert');
const calculateFuelUsage = require('./calculateFuelUsage.js');

assert(calculateFuelUsage(12) === 2, '12');
assert(calculateFuelUsage(14) === 2, '14');
assert(calculateFuelUsage(1969) === 654, '1969');
assert(calculateFuelUsage(100756) === 33583, '100756');

console.log('1a - All tests passed');
