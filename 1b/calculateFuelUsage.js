const calculateFuelUsage = (mass, sum = 0) => {
  const fuelUsage = (Math.floor(mass / 3) - 2);

  if (fuelUsage <= 0) {
    return sum;
  }

  return calculateFuelUsage(fuelUsage, sum + fuelUsage);
}

module.exports = sum => calculateFuelUsage(sum);
