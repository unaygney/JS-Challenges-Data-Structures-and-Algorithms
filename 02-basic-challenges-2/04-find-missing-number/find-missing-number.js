function findMissingNumber(numbers) {
  const LENGTH = numbers?.length;
  let missingNumber;
  let TOTAL = 0;

  if (numbers?.length === 0) {
    return 1;
  }

  if (!numbers) {
    return undefined;
  }

  for (let i = 0; i < LENGTH; i++) {
    TOTAL = numbers[i] + TOTAL;
    missingNumber = ((LENGTH + 1) * (LENGTH + 2)) / 2 - TOTAL;
  }
  return missingNumber;
}

module.exports = findMissingNumber;
