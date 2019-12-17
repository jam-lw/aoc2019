const fs = require('fs');
const findInputs = require('./findInputs.js');

const programString = fs.readFileSync('./data', 'utf8').trim();
const result = findInputs(programString, 19690720);

console.log(result);
