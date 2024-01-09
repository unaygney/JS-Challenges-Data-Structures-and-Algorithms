function findMissingLetter(StringArray) {
  if (StringArray.length === 0) {
    return " ";
  }

  //   const alpha = Array.from({ length: 26 }, (_, i) => 65 + i);
  //   const alphabet = alpha.map((element) => String.fromCharCode(element));
  const firstLetterCharCode = StringArray[0].charCodeAt(0);
  let expextedArray = [];

  for (let i = 0; i < StringArray.length + 1; i++) {
    expextedArray.push(String.fromCharCode(firstLetterCharCode + i));
  }
  const missingLetter = expextedArray.find((x) => !StringArray.includes(x));

  return missingLetter;
}

module.exports = findMissingLetter;
