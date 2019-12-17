const intcodeComputer = require('./intcodeComputer.js');

const restoreProgram = (programString, noun, verb) => {
  const program = programString.split(',');
  program[1] = noun;
  program[2] = verb;

  return program.join(',');
}

const findInputs = (programString, expectedOutput) => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const output = intcodeComputer(restoreProgram(programString, noun, verb)).split(',')[0];
      if (Number(output) === expectedOutput) {
        return 100 * noun + verb;
      }
    }
  }
}

module.exports = findInputs;
