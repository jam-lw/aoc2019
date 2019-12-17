const fs = require('fs');
const intcodeComputer = require('./intcodeComputer.js');

const restoreProgram = programString => {
  const program = programString.split(',');
  program[1] = 12;
  program[2] = 2

  return program.join(',');
}

const programString = fs.readFileSync('./data', 'utf8').trim();
const restoredProgramString = restoreProgram(programString);
const finalState = intcodeComputer(restoredProgramString).split(',')[0];

console.log(finalState);
