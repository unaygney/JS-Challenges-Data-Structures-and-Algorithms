function analyzeCarMileage(cars) {
  let CARS_LENGTH = cars.length;
  let totalMileage = cars.reduce((acc, cars) => acc + cars.mileage, 0);
  let averageMileage = totalMileage / CARS_LENGTH;

  // Mileage Value min and max
  let highestMileage = Math.max(...cars.map((car) => car.mileage));
  let lowestMileage = Math.min(...cars.map((car) => car.mileage));

  // max and mix mileage car obj
  let highestMileageCar = cars.find((car) => car.mileage === highestMileage);
  let lowestMileageCar = cars.find((car) => car.mileage === lowestMileage);

  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
