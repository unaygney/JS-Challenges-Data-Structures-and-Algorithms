function sumOfEvenSquares(numbers) {
  evenNumbers = numbers.filter((num) => num % 2 === 0);
  squareNumbers = evenNumbers.map((num) => num * num);
  total = squareNumbers.reduce((acc, cur) => acc + cur, 0);
  return total;
}

module.exports = sumOfEvenSquares;
