function fizzBuzzArray(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}

module.exports = fizzBuzzArray;
