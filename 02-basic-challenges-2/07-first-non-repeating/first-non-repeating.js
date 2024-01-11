function findFirstNonRepeatingCharacter(string) {
  let arr = {};
  for (const char of string) {
    arr[char] = (arr[char] || 0) + 1;
  }
  for (const char of string) {
    if (arr[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
