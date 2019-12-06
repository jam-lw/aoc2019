const assert = require('assert');
const calculateFuelUsage = require('./calculateFuelUsage.js');

assert(calculateFuelUsage(14) === 2, '14');
assert(calculateFuelUsage(1969) === 966, '1969');
assert(calculateFuelUsage(100756) === 50346, '100756');

console.log('1b - All tests passed');
