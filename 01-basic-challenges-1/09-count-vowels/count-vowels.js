function countVowels(str) {
  let counter = 0;
  const cleanStr = str.toLowerCase();
  for (let i = 0; i < cleanStr.length; i++) {
    const char = cleanStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

module.exports = countVowels;
