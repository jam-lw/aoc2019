const intcodeComputer = programString => {
  const program = programString.split(',').map(value => Number(value));
  let step = 0;
  let opcode;
  let a;
  let b;
  let position;

  while (opcode !== 99) {
    opcode = program[step];
    a = program[program[step + 1]];
    b = program[program[step + 2]];
    position = program[step + 3];
    step = step + 4;

    switch (opcode) {
      case 1:
        program[position] = a + b;
        break;
      case 2:
        program[position] = a * b;
        break;
      case 99:
        break;
      default:
        throw new Error();
    }
  }

  return program.join(',');
};

module.exports = intcodeComputer;
