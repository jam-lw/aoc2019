const assert = require('assert');
const intcodeComputer = require('./intcodeComputer.js');

assert(intcodeComputer('1,0,0,0,99') === '2,0,0,0,99');
assert(intcodeComputer('2,3,0,3,99') === '2,3,0,6,99');
assert(intcodeComputer('2,4,4,5,99,0') === '2,4,4,5,99,9801');
assert(intcodeComputer('1,1,1,4,99,5,6,0,99') === '30,1,1,4,2,5,6,0,99');

console.log('2a - All tests passed');
