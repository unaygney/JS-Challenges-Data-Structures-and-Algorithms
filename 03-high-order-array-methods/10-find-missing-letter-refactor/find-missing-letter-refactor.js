function findMissingLetter(str) {
  //string length
  let STRING_LENGTH = str.length;

  // string first letter value
  let start = str[0].charCodeAt(0);

  //expected array value
  let expectedTotal = Array.from(
    { length: STRING_LENGTH + 1 },
    (_, index) => start + index
  ).reduce((acc, curr) => acc + curr, start);

  let total = str.reduce((acc, curr) => acc + curr.charCodeAt(0), start);
  let missingLetter = String.fromCharCode(expectedTotal - total);

  return missingLetter;
}

module.exports = findMissingLetter;
