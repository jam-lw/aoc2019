const fs = require('fs');
const calculateFuelUsage = require('./calculateFuelUsage.js');

const totalFuelUsage = fs.readFileSync('./data', 'utf8')
  .split(/\r?\n/)
  .splice(0, 100) // Remove trailing empty line
  .reduce((sum, value) => sum + calculateFuelUsage(Number(value)), 0);

console.log(`totalFuelUsage: ${totalFuelUsage}`);
