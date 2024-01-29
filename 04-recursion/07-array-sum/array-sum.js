function arraySum(number) {
  let LENGTH = number.length;

  if (LENGTH === 0) {
    return 0;
  } else {
    return number[0] + arraySum(number.slice(1));
  }
}

module.exports = arraySum;
