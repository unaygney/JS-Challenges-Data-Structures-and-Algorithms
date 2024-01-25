function sumUpTo(num) {
  if (num <= 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  return num + sumUpTo(num - 1);
}

module.exports = sumUpTo;
