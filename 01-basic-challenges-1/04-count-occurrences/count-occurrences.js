function countOccurrences(string, char) {
  let splittedString = string.split("");
  let counter = 0;
  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i] === char) {
      counter += 1;
    }
  }

  return counter;
}

module.exports = countOccurrences;
